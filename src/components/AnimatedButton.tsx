import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { buttonHover } from '../utils/animations';

interface AnimatedButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const AnimatedButton = ({
  children,
  to,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
}: AnimatedButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm',
    secondary: 'bg-white text-primary-700 hover:bg-gray-50 border border-primary-300',
    outline: 'bg-transparent text-primary-700 hover:bg-primary-50 border border-primary-300',
  };
  
  const buttonClass = `${baseClasses} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  if (to) {
    return (
      <motion.div
        initial="initial"
        whileHover="hover"
        variants={buttonHover}
      >
        <Link
          to={to}
          className={buttonClass}
          onClick={onClick}
        >
          {children}
        </Link>
      </motion.div>
    );
  }
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
      initial="initial"
      whileHover={disabled ? undefined : "hover"}
      variants={buttonHover}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton; 