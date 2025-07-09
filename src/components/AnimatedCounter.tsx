import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

type AnimatedCounterProps = {
  value: string;
  duration?: number;
  className?: string;
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  duration = 2000,
  className = ''
}) => {
  const [count, setCount] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    // Handle non-numeric values like "100+"
    const numericPart = value.match(/\d+/)?.[0] || "0";
    const suffix = value.replace(numericPart, "");
    const endValue = parseInt(numericPart, 10);
    
    let startTime: number;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * endValue);
      
      setCount(`${currentCount}${suffix}`);
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [value, duration, isInView]);
  
  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
};

export default AnimatedCounter; 