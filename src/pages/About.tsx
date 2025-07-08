import { motion } from 'framer-motion'
import { ShieldCheckIcon, UserGroupIcon, ChartBarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: 'Years of Experience', value: '10+' },
  { id: 2, name: 'Trained Personnel', value: '100+' },
  { id: 3, name: 'Satisfied Clients', value: '500+' },
  { id: 4, name: 'Locations Secured', value: '1000+' },
]

const values = [
  {
    name: 'Professional Excellence',
    description: 'Our team consists of highly trained security professionals committed to delivering the highest standards of service.',
    icon: UserGroupIcon,
  },
  {
    name: 'Reliability',
    description: 'We provide consistent, dependable security services that our clients can count on 24/7.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Innovation',
    description: 'We stay ahead of security threats by implementing the latest technologies and best practices.',
    icon: ChartBarIcon,
  },
  {
    name: 'Integrity',
    description: 'We operate with complete transparency and maintain the highest ethical standards in all our operations.',
    icon: BuildingOfficeIcon,
  },
]

export default function About() {
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About InfraGuard</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide end-to-end security solutions that safeguard businesses in both the physical and digital worlds.
              Our team includes professionally trained guards and IT security specialists focused on delivering proactive,
              responsive protection.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            To provide integrated security services that protect people, property, and digital infrastructure. We aim to
            become the most trusted name in full-spectrum security across Australia and beyond.
          </p>
        </div>
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our core values guide everything we do, from how we treat our employees to how we serve our clients.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {values.map((value) => (
            <motion.div
              key={value.name}
              className="relative pl-9"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <dt className="inline font-semibold text-gray-900">
                <value.icon className="absolute left-1 top-1 h-5 w-5 text-primary-700" aria-hidden="true" />
                {value.name}
              </dt>{' '}
              <dd className="inline">{value.description}</dd>
            </motion.div>
          ))}
        </dl>
      </div>

      {/* Why Choose Us section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We stand out in the security industry through our commitment to excellence and comprehensive approach to
            security solutions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <motion.dl
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">Comprehensive Solutions</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  We offer both physical and cybersecurity solutions under one roof, providing seamless integration and
                  complete protection for your business.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">24/7 Availability</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Our security operations center is staffed around the clock, ensuring immediate response to any security
                  concerns or incidents.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">Industry Compliance</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  We maintain strict compliance with local and international security standards, ensuring the highest level
                  of service quality.
                </p>
              </dd>
            </div>
          </motion.dl>
        </div>
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
            <a
              href="/contact"
              className="rounded-md bg-primary-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
            >
              Contact Us
            </a>
            <a href="/services" className="text-sm font-semibold leading-6 text-gray-700">
              View Our Services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 