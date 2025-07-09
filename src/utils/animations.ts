import type { Variants, Easing, EasingDefinition } from 'framer-motion';

// Animation durations
export const durations = {
  fast: 0.3,
  medium: 0.5,
  slow: 0.8,
};

// Animation easings
export const easings: Record<string, EasingDefinition> = {
  smooth: [0.4, 0, 0.2, 1], // Smooth easing (Material Design standard)
  easeOut: [0, 0, 0.2, 1],  // Deceleration curve
  easeIn: [0.4, 0, 1, 1],   // Acceleration curve
  bounce: [0.175, 0.885, 0.32, 1.275], // Bounce effect
};

// Staggered children delay
export const staggerChildren = (delay = 0.1) => ({
  staggerChildren: delay,
});

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: durations.medium,
      ease: "easeOut",
    }
  },
};

// Fade up animation (fade in while moving up)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: durations.medium,
      ease: "easeOut",
    }
  },
};

// Fade down animation (fade in while moving down)
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: durations.medium,
      ease: "easeOut",
    }
  },
};

// Fade left animation (fade in while moving from left)
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: durations.medium,
      ease: "easeOut",
    }
  },
};

// Fade right animation (fade in while moving from right)
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: durations.medium,
      ease: "easeOut",
    }
  },
};

// Scale animation (grow from center)
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: durations.medium,
      ease: "easeOut",
    }
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export const hoverLift = {
  y: -5,
  transition: { duration: 0.3 },
};

// Card hover effect
export const cardHover = {
  initial: { 
    scale: 1,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    }
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    }
  },
};

// Button hover effect
export const buttonHover = {
  initial: {
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    }
  },
};

// Page transition variants
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: durations.medium,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: durations.fast,
      ease: "easeIn",
    }
  },
};

// Container for staggered children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Staggered item animation
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.medium,
      ease: "easeOut",
    },
  },
};

// Section reveal animation
export const revealSection: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
}; 