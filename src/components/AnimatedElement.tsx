import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface AnimatedElementProps {
  children: ReactNode;
  type?: 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scale' | 'bounce';
  className?: string;
  delay?: number;
  duration?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  type = 'fadeUp',
  className = '',
  delay = 0,
  duration = 0.5
}) => {
  const getAnimationProps = () => {
    switch (type) {
      case 'fadeUp':
        return {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration, delay }
        };
      case 'fadeIn':
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration, delay }
        };
      case 'fadeLeft':
        return {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration, delay }
        };
      case 'fadeRight':
        return {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration, delay }
        };
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.8 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration, delay }
        };
      case 'bounce':
        return {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { 
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay 
          }
        };
      default:
        return {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration, delay }
        };
    }
  };

  return (
    <motion.div
      className={className}
      viewport={{ once: true, margin: '-50px' }}
      {...getAnimationProps()}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement; 