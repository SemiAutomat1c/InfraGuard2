import { motion } from 'framer-motion';

interface FloatingBadgeProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function FloatingBadge({ text, className = '', delay = 0 }: FloatingBadgeProps) {
  return (
    <motion.div
      className={`absolute z-20 ${className} cursor-pointer`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1,
        y: [0, -10, 0],
        x: [-5, 5, -5]
      }}
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
      transition={{ 
        opacity: { duration: 0.8, delay },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay
        },
        x: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay
        }
      }}
    >
      <motion.div 
        className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-shadow duration-300"
        whileHover={{
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
          backgroundColor: "rgba(255, 255, 255, 0.95)"
        }}
      >
        <div className="h-2 w-2 rounded-full bg-primary-600 animate-pulse"></div>
        <span className="text-sm font-medium text-primary-800">{text}</span>
      </motion.div>
    </motion.div>
  );
} 