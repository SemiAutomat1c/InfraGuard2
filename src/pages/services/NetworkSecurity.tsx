import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ServerIcon, ShieldCheckIcon, LockClosedIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Network Monitoring',
    description: '24/7 monitoring of your network for suspicious activities and potential threats.',
    icon: ServerIcon,
  },
  {
    name: 'Threat Detection',
    description: 'Advanced systems to identify and respond to security threats in real-time.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Security Maintenance',
    description: 'Regular updates and maintenance to keep your security systems effective against new threats.',
    icon: WrenchScrewdriverIcon,
  },
]

export default function NetworkSecurity() {
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
              <Link to="/services" className="text-primary-700 hover:text-primary-600">
                Services
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-gray-500">Network Security</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Network Security</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive protection for your digital infrastructure and data, safeguarding your business
              against cyber threats and unauthorized access.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Protecting Your Digital Assets
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              In today's digital landscape, cybersecurity threats are constantly evolving. Our network security
              services provide robust protection for your digital infrastructure, ensuring your business data
              remains secure from unauthorized access, malware, and other cyber threats.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We implement comprehensive security measures, including advanced firewalls, intrusion detection
              systems, and regular security assessments to identify and address vulnerabilities before they can
              be exploited.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="rounded-md bg-primary-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
              >
                Get a Security Assessment
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="aspect-[3/2] overflow-hidden rounded-lg bg-gray-100">
              <img
                src="/images/placeholder.html"
                alt="Network security monitoring"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="mx-auto mt-32 max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Key Features</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our network security service includes advanced features to protect your digital assets from evolving threats.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-700">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>

        {/* CTA section */}
        <div className="mx-auto mt-32 max-w-7xl">
          <div className="relative isolate overflow-hidden bg-primary-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to secure your network?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Contact us today to discuss how our network security services can protect your digital assets from cyber threats.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-800 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </Link>
              <Link to="/services" className="text-sm font-semibold leading-6 text-white">
                View All Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 