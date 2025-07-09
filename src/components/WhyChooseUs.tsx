import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, ClockIcon, UserGroupIcon, CogIcon } from '@heroicons/react/24/outline';
import AnimatedElement from './AnimatedElement';

const reasons = [
  {
    title: 'Experienced Team',
    description: 'Our security professionals have decades of combined experience in both physical and cyber security.',
    icon: UserGroupIcon,
    color: 'bg-primary-100 text-primary-700',
  },
  {
    title: '24/7 Monitoring',
    description: 'Round-the-clock surveillance and monitoring services to ensure your assets are always protected.',
    icon: ClockIcon,
    color: 'bg-secondary-100 text-secondary-700',
  },
  {
    title: 'Comprehensive Solutions',
    description: 'Integrated security solutions that address both physical and digital vulnerabilities.',
    icon: ShieldCheckIcon,
    color: 'bg-accent-100 text-accent-700',
  },
  {
    title: 'Customized Approach',
    description: 'Tailored security strategies designed specifically for your business needs and challenges.',
    icon: CogIcon,
    color: 'bg-primary-100 text-primary-700',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedElement type="fadeUp" className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose InfraGuard
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-primary-600"></div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We deliver exceptional security services that protect your business around the clock
          </p>
        </AnimatedElement>
        
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="relative flex flex-col rounded-2xl bg-white p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`rounded-full ${reason.color} p-3 w-12 h-12 flex items-center justify-center mb-6`}>
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-16 h-16 transform translate-x-8 -translate-y-8 rotate-45 ${reason.color.split(' ')[0]}`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 