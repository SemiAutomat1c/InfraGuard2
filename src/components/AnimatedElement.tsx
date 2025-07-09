import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, fadeDown, fadeLeft, fadeRight, scaleUp, fadeIn } from '../utils/animations';

type AnimationType = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scaleUp' | 'fadeIn';

interface AnimatedElementProps {
  children: ReactNode;
  type?: AnimationType;
  className?: string;
  delay?: number;
  duration?: number;
  as?: React.ElementType;
}

const getAnimationVariant = (type: AnimationType) => {
  switch (type) {
    case 'fadeUp':
      return fadeUp;
    case 'fadeDown':
      return fadeDown;
    case 'fadeLeft':
      return fadeLeft;
    case 'fadeRight':
      return fadeRight;
    case 'scaleUp':
      return scaleUp;
    case 'fadeIn':
    default:
      return fadeIn;
  }
};

const AnimatedElement = ({
  children,
  type = 'fadeUp',
  className = '',
  delay = 0,
  duration,
  as = 'div'
}: AnimatedElementProps) => {
  const MotionComponent = motion[as as keyof typeof motion];
  
  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={getAnimationVariant(type)}
      transition={{ 
        delay, 
        ...(duration ? { duration } : {})
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedElement; 