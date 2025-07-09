import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import AnimatedElement from './AnimatedElement';
import { fadeUp } from '../utils/animations';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  darkBackground?: boolean;
}

/**
 * Reusable CTA section component that can be used across all pages
 */
export default function CTASection({
  title = "Ready to enhance your security?",
  description = "Contact us today to discuss how we can help protect your business with our comprehensive security solutions.",
  primaryButtonText = "Contact Us",
  primaryButtonLink = "/contact",
  secondaryButtonText = "View Our Services",
  secondaryButtonLink = "/services",
  darkBackground = false
}: CTASectionProps) {
  return (
    <div className={`w-full ${darkBackground ? 'bg-circuit' : 'bg-tech-light'}`}>
      <div className={`mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 ${darkBackground ? 'relative' : ''}`}>
        {darkBackground && <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/90"></div>}
        <AnimatedElement
          type="fadeUp"
          className={`mx-auto max-w-2xl text-center relative z-10 ${!darkBackground ? 'glass-effect rounded-xl p-8' : ''}`}
        >
          <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${darkBackground ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h2>
          <p className={`mx-auto mt-6 max-w-xl text-lg leading-8 ${darkBackground ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <AnimatedButton
              to={primaryButtonLink}
              variant={darkBackground ? 'secondary' : 'primary'}
            >
              {primaryButtonText}
            </AnimatedButton>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              <Link 
                to={secondaryButtonLink} 
                className={`text-sm font-semibold leading-6 ${darkBackground ? 'text-white' : 'text-gray-700'} hover:translate-x-1 transition-transform duration-300 inline-flex items-center`}
              >
                {secondaryButtonText} <span aria-hidden="true" className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
} 