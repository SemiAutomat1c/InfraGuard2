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
  UserGroupIcon,
  ShieldExclamationIcon
} from '@heroicons/react/24/outline'
import CTASection from '../components/CTASection'

const physicalServices = [
  {
    name: 'Infrastructure Guarding',
    description:
      'On-site personnel securing industrial and critical infrastructure, ensuring protection from theft, trespassing, and damage.',
    icon: BuildingOfficeIcon,
    href: '/services/infrastructure-guarding'
  },
  {
    name: 'Construction Site Security',
    description:
      'Dedicated guarding solutions for active and inactive construction projects to deter unauthorized access and material loss.',
    icon: ShieldCheckIcon,
    href: '/services/construction-site-security'
  },
  {
    name: '24/7 On-Site Security',
    description: 'Uniformed security officers for round-the-clock protection of your premises.',
    icon: ClockIcon,
    href: '/services#physical'
  },
  {
    name: 'Access Control',
    description: 'Guard-managed checkpoints, visitor tracking, and entry/exit logging.',
    icon: KeyIcon,
    href: '/services/access-control'
  },
  {
    name: 'Security Risk Assessment',
    description: 'Site-specific evaluation and planning to design effective security coverage.',
    icon: DocumentMagnifyingGlassIcon,
    href: '/services#physical'
  },
]

const cyberServices = [
  {
    name: 'Network Security',
    description: "Protect your company's internal systems from unauthorized access and cyberattacks.",
    icon: ServerIcon,
    href: '/services/network-security'
  },
  {
    name: 'Firewall & Intrusion Prevention',
    description: 'Set up and manage defenses that detect and block malicious activity.',
    icon: LockClosedIcon,
    href: '/services#cyber'
  },
  {
    name: 'Endpoint Protection',
    description: 'Safeguard employee devices against malware, ransomware, and phishing.',
    icon: DevicePhoneMobileIcon,
    href: '/services#cyber'
  },
  {
    name: 'Email Security',
    description: 'Stop spam, spoofing, and phishing attempts before they hit your inbox.',
    icon: EnvelopeIcon,
    href: '/services#cyber'
  },
  {
    name: 'Vulnerability Assessment',
    description: 'Identify weak points in your IT infrastructure and recommend solutions.',
    icon: ShieldExclamationIcon,
    href: '/services#cyber'
  },
  {
    name: 'Cybersecurity Consulting',
    description: 'Custom cyber defense strategies tailored to your business operations.',
    icon: UserGroupIcon,
    href: '/services#cyber'
  },
]

const industries = [
  { name: 'Construction & Real Estate', href: '/industries/construction' },
  { name: 'Logistics & Warehousing', href: '/industries/logistics' },
  { name: 'Industrial Zones', href: '/industries/industrial' },
  { name: 'Financial Services', href: '/industries/financial' },
  { name: 'Local Government Units (LGUs)', href: '/industries/government' },
  { name: 'IT-Enabled Businesses', href: '/industries/it' },
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
      <div id="physical" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="flex items-center gap-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-700">
              <ShieldCheckIcon className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Physical Security Solutions</h2>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Professional security personnel and solutions to protect your physical assets and infrastructure.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <ol className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {physicalServices.map((service, index) => (
              <motion.li
                key={service.name}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 flex items-center gap-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-700">
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="flex-1">
                    <span className="text-primary-700 font-bold mr-2">{index + 1}.</span>
                    {service.name}
                  </span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 pl-14">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <Link to={service.href} className="text-sm font-semibold leading-6 text-primary-700 hover:text-primary-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto my-24 max-w-7xl px-6">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Cyber Security section */}
      <div id="cyber" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="flex items-center gap-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-700">
              <ServerIcon className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cybersecurity Solutions</h2>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Advanced digital protection to safeguard your systems, data, and online operations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <ol className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {cyberServices.map((service, index) => (
              <motion.li
                key={service.name}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 flex items-center gap-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-700">
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="flex-1">
                    <span className="text-primary-700 font-bold mr-2">{index + 1}.</span>
                    {service.name}
                  </span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 pl-14">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <Link to={service.href} className="text-sm font-semibold leading-6 text-primary-700 hover:text-primary-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </motion.li>
            ))}
          </ol>
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
            {industries.map((industry) => (
              <li key={industry.name} className="rounded-2xl bg-gray-100 p-8 hover:bg-gray-200 transition-colors duration-300">
                <Link to={industry.href} className="block h-full">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">{industry.name}</h3>
                  <div className="mt-4 flex items-center gap-x-2">
                    <span className="text-sm font-semibold leading-6 text-primary-700">Learn more</span>
                    <span aria-hidden="true" className="text-primary-700">→</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* CTA section */}
      <CTASection 
        primaryButtonText="REQUEST A QUOTE"
        secondaryButtonText="View Industries"
        secondaryButtonLink="/industries"
      />
    </div>
  )
} 