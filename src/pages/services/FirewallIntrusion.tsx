import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShieldCheckIcon, ServerIcon, ArrowPathIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Advanced Firewall Protection',
    description: 'Next-generation firewall solutions that monitor and control incoming and outgoing network traffic.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Intrusion Detection Systems',
    description: 'Sophisticated systems that identify suspicious activities and potential security breaches in real-time.',
    icon: ServerIcon,
  },
  {
    name: 'Continuous Monitoring',
    description: '24/7 surveillance of network traffic to detect and respond to potential threats immediately.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Secure Configuration',
    description: 'Expert setup and maintenance of security systems to ensure optimal protection against evolving threats.',
    icon: LockClosedIcon,
  },
]

const benefits = [
  'Prevent unauthorized network access',
  'Detect and block malicious activities in real-time',
  'Protect sensitive data from exfiltration',
  'Maintain business continuity during attack attempts',
  'Comply with industry security standards',
  'Receive detailed security incident reports',
]

export default function FirewallIntrusion() {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20 pt-16">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Firewall & Intrusion Prevention</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Protect your network from unauthorized access and malicious attacks with our advanced security solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Overview section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comprehensive Network Defense</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our Firewall & Intrusion Prevention services provide robust protection against a wide range of cyber threats. We implement advanced security measures to monitor network traffic, block unauthorized access attempts, and detect suspicious activities that could compromise your systems.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            With the increasing sophistication of cyber attacks, traditional security measures are no longer sufficient. Our solutions combine next-generation firewall technology with intrusion detection and prevention systems to create a comprehensive security perimeter around your digital assets.
          </p>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Key Features</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our Firewall & Intrusion Prevention service includes a comprehensive set of features designed to secure your network infrastructure.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <motion.div 
                  key={feature.name} 
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900 flex items-center gap-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-700">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 pl-14">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Benefits</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our Firewall & Intrusion Prevention services provide numerous advantages for businesses and organizations.
          </p>
        </div>
        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ul className="grid grid-cols-1 gap-x-8 gap-y-4 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-x-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-700 text-white">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* CTA section */}
      <div className="bg-primary-700">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to secure your network?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Contact us today to discuss how our Firewall & Intrusion Prevention services can protect your organization.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request a Quote
              </Link>
              <Link to="/services" className="text-sm font-semibold leading-6 text-white">
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 