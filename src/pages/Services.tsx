import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ShieldCheckIcon,
  BuildingOfficeIcon,
  KeyIcon,
  ClockIcon,
  ServerIcon,
  LockClosedIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  DocumentMagnifyingGlassIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const physicalServices = [
  {
    name: 'Infrastructure Guarding',
    description:
      'On-site personnel securing industrial and critical infrastructure, ensuring protection from theft, trespassing, and damage.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Construction Site Security',
    description:
      'Dedicated guarding solutions for active and inactive construction projects to deter unauthorized access and material loss.',
    icon: ShieldCheckIcon,
  },
  {
    name: '24/7 On-Site Security',
    description: 'Uniformed security officers for round-the-clock protection of your premises.',
    icon: ClockIcon,
  },
  {
    name: 'Access Control',
    description: 'Guard-managed checkpoints, visitor tracking, and entry/exit logging.',
    icon: KeyIcon,
  },
  {
    name: 'Security Risk Assessment',
    description: 'Site-specific evaluation and planning to design effective security coverage.',
    icon: DocumentMagnifyingGlassIcon,
  },
]

const cyberServices = [
  {
    name: 'Network Security',
    description: "Protect your company's internal systems from unauthorized access and cyberattacks.",
    icon: ServerIcon,
  },
  {
    name: 'Firewall & Intrusion Prevention',
    description: 'Set up and manage defenses that detect and block malicious activity.',
    icon: LockClosedIcon,
  },
  {
    name: 'Endpoint Protection',
    description: 'Safeguard employee devices against malware, ransomware, and phishing.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Email Security',
    description: 'Stop spam, spoofing, and phishing attempts before they hit your inbox.',
    icon: EnvelopeIcon,
  },
  {
    name: 'Cybersecurity Consulting',
    description: 'Custom cyber defense strategies tailored to your business operations.',
    icon: UserGroupIcon,
  },
]

export default function Services() {
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Services</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From physical guards to digital defenses — we provide comprehensive security solutions to protect your
              assets, infrastructure, and data.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Physical Security section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Physical Security Solutions</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Professional security personnel and solutions to protect your physical assets and infrastructure.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {physicalServices.map((service) => (
              <motion.div
                key={service.name}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-700">
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Cyber Security section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cybersecurity Solutions</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Advanced digital protection to safeguard your systems, data, and online operations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {cyberServices.map((service) => (
              <motion.div
                key={service.name}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-700">
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Industries section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Industries We Serve</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide security solutions for a wide range of industries, each with their unique security requirements.
          </p>
        </div>
        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-2xl bg-gray-100 p-8">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Construction & Real Estate</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Protecting construction sites, properties, and development projects from theft and vandalism.
              </p>
            </li>
            <li className="rounded-2xl bg-gray-100 p-8">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Logistics & Warehousing</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Securing storage facilities and managing access control for distribution centers.
              </p>
            </li>
            <li className="rounded-2xl bg-gray-100 p-8">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Industrial Zones</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Comprehensive security for manufacturing plants and industrial facilities.
              </p>
            </li>
            <li className="rounded-2xl bg-gray-100 p-8">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Financial Services</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Advanced cybersecurity and physical protection for financial institutions.
              </p>
            </li>
            <li className="rounded-2xl bg-gray-100 p-8">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Retail & Commercial</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Security solutions for retail stores, shopping centers, and commercial properties.
              </p>
            </li>
            <li className="rounded-2xl bg-gray-100 p-8">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Healthcare</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Specialized security for hospitals, clinics, and healthcare facilities.
              </p>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to enhance your security?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Contact us today to discuss how we can help protect your business with our comprehensive security solutions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-primary-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
            >
              Contact Us
            </Link>
            <Link to="/about" className="text-sm font-semibold leading-6 text-gray-700">
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 