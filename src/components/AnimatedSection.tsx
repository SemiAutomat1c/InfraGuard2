import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { revealSection } from '../utils/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={revealSection}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection; 