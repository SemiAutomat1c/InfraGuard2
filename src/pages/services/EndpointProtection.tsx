import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ComputerDesktopIcon, DevicePhoneMobileIcon, ShieldCheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Advanced Threat Detection',
    description: 'Sophisticated technology to identify and block malware, ransomware, and other malicious software.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Device Management',
    description: 'Centralized control over all endpoints with policy enforcement and security monitoring.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Mobile Device Protection',
    description: 'Security solutions for smartphones and tablets to protect sensitive data on mobile devices.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Real-time Updates',
    description: 'Continuous updates to protection mechanisms to defend against the latest security threats.',
    icon: ArrowPathIcon,
  },
]

const benefits = [
  'Protect all devices accessing your network',
  'Prevent data breaches through endpoint vulnerabilities',
  'Block malware and ransomware attacks',
  'Secure remote and hybrid work environments',
  'Maintain visibility across all endpoints',
  'Respond quickly to security incidents',
]

export default function EndpointProtection() {
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
              <span className="text-gray-500">Endpoint Protection</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Endpoint Protection</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Secure all devices connecting to your network with comprehensive endpoint security solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Overview section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comprehensive Device Security</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our Endpoint Protection services secure all devices that connect to your network, including computers, laptops, tablets, and smartphones. With the rise of remote work and bring-your-own-device policies, endpoint security has become a critical component of any comprehensive cybersecurity strategy.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We implement advanced solutions that protect against malware, ransomware, and other cyber threats while providing centralized management and visibility across your entire device ecosystem.
          </p>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Key Features</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our Endpoint Protection service includes a comprehensive set of features designed to secure all devices in your organization.
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
            Our Endpoint Protection services provide numerous advantages for businesses and organizations.
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
              Ready to secure all your devices?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Contact us today to discuss how our Endpoint Protection services can safeguard your organization's devices.
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