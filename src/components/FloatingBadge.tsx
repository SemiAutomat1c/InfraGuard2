import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

type FloatingBadgeProps = {
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
};

const FloatingBadge: React.FC<FloatingBadgeProps> = ({
  text = 'Certified Security',
  icon,
  className = '',
  delay = 0
}) => {
  const floatingVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut" as const,
        delay
      }
    }
  };

  const rotateVariants = {
    rotate: {
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut" as const,
        delay: delay + 0.5
      }
    }
  };

  return (
    <motion.div
      className={`absolute z-10 ${className}`}
      variants={floatingVariants}
      initial="initial"
      animate="float"
    >
      <motion.div
        className="bg-white shadow-lg rounded-lg px-4 py-2 flex items-center space-x-2 border border-primary-100"
        variants={rotateVariants}
        initial="initial"
        animate="rotate"
        whileHover={{ scale: 1.05 }}
      >
        {icon || <ShieldCheckIcon className="h-5 w-5 text-primary-600" />}
        <span className="text-sm font-medium text-gray-800">{text}</span>
      </motion.div>
    </motion.div>
  );
};

export default FloatingBadge; 