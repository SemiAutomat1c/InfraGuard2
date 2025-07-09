import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShieldCheckIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Trained Security Personnel',
    description: 'Our guards are professionally trained and certified to handle various security situations.',
    icon: UserGroupIcon,
  },
  {
    name: '24/7 Coverage',
    description: 'Round-the-clock protection with scheduled patrols and constant monitoring.',
    icon: ClockIcon,
  },
  {
    name: 'Customized Security Plans',
    description: 'Security solutions tailored to your specific infrastructure requirements.',
    icon: ShieldCheckIcon,
  },
]

export default function InfrastructureGuarding() {
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
              <span className="text-gray-500">Infrastructure Guarding</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Infrastructure Guarding</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professional on-site security personnel protecting your physical assets 24/7, ensuring your infrastructure
              remains safe from unauthorized access, theft, and damage.
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
              Protecting Your Most Valuable Assets
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our infrastructure guarding service provides comprehensive physical security for your facilities,
              equipment, and personnel. We understand that each site has unique security requirements, which is
              why we develop customized security plans tailored to your specific needs.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With our professional security personnel on-site, you can have peace of mind knowing that your
              infrastructure is protected against unauthorized access, theft, vandalism, and other security threats.
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
                alt="Security guard at infrastructure site"
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
              Our infrastructure guarding service includes a range of features designed to provide comprehensive security.
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
              Ready to secure your infrastructure?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Contact us today to discuss how our infrastructure guarding services can protect your valuable assets.
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