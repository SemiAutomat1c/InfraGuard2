import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { EnvelopeIcon, ShieldCheckIcon, NoSymbolIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Spam Filtering',
    description: 'Advanced filtering systems to identify and block unwanted emails before they reach user inboxes.',
    icon: NoSymbolIcon,
  },
  {
    name: 'Phishing Protection',
    description: 'Detection and prevention of sophisticated phishing attempts targeting your organization.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Email Content Scanning',
    description: 'Thorough scanning of email content and attachments to identify malicious code and threats.',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: 'Secure Email Gateway',
    description: 'Comprehensive protection for all incoming and outgoing email communications.',
    icon: EnvelopeIcon,
  },
]

const benefits = [
  'Prevent email-based cyber attacks',
  'Protect sensitive information from data leaks',
  'Reduce risk of malware and ransomware infections',
  'Improve employee productivity by reducing spam',
  'Maintain compliance with data protection regulations',
  'Secure communication with clients and partners',
]

export default function EmailSecurity() {
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
            <div className="flex items-center gap-x-4 text-xs mb-4">
              <Link to="/" className="text-primary-700 hover:text-primary-600">
                Home
              </Link>
              <span className="text-gray-500">/</span>
              <Link to="/services" className="text-primary-700 hover:text-primary-600">
                Services
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-gray-500">Email Security</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Email Security</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Protect your organization from email-based threats with our comprehensive email security solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Overview section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Securing Your Communication</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Email remains one of the primary vectors for cyber attacks, with phishing, malware, and business email compromise schemes becoming increasingly sophisticated. Our Email Security services provide robust protection against these threats, safeguarding your organization's communication channels.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We implement advanced security measures to filter out malicious emails, prevent data leaks, and ensure that your email communication remains secure and reliable.
          </p>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Key Features</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our Email Security service includes a comprehensive set of features designed to protect your organization from email-based threats.
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
            Our Email Security services provide numerous advantages for businesses and organizations.
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
              Ready to secure your email communications?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Contact us today to discuss how our Email Security services can protect your organization from email-based threats.
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