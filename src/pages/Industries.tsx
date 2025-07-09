import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const industries = [
  {
    name: 'Construction & Real Estate',
    description: 'Protecting construction sites, properties, and development projects from theft and vandalism.',
    href: '/industries/construction',
  },
  {
    name: 'Logistics & Warehousing',
    description: 'Securing storage facilities and managing access control for distribution centers.',
    href: '/industries/logistics',
  },
  {
    name: 'Industrial Zones',
    description: 'Comprehensive security for manufacturing plants and industrial facilities.',
    href: '/industries/industrial',
  },
  {
    name: 'Financial Services',
    description: 'Advanced cybersecurity and physical protection for financial institutions.',
    href: '/industries/financial',
  },
  {
    name: 'Local Government Units (LGUs)',
    description: 'Security solutions for government facilities and public infrastructure.',
    href: '/industries/government',
  },
  {
    name: 'IT-Enabled Businesses',
    description: 'Specialized cybersecurity and physical protection for technology companies.',
    href: '/industries/it',
  },
]

export default function Industries() {
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Industries We Serve</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We serve a wide range of clients with tailored security solutions designed to address the unique challenges 
              and requirements of each industry sector.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Industries list section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We serve a wide range of clients including:</h2>
          <div className="mt-10">
            <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {industries.map((industry) => (
                <motion.li 
                  key={industry.name}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-700 text-white text-xl">•</span>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">{industry.name}</h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">{industry.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Industry cards section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 bg-white lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Industry-Specific Security Solutions</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our specialized security solutions designed for the unique needs of each industry.
          </p>
        </div>
        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <motion.div
                key={industry.name}
                className="rounded-2xl bg-gray-50 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={industry.href} className="block h-full">
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">{industry.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{industry.description}</p>
                  <div className="mt-6 flex items-center gap-x-2">
                    <span className="text-sm font-semibold leading-6 text-primary-700">Learn more</span>
                    <span aria-hidden="true" className="text-primary-700">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to secure your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Contact us today to discuss how we can help protect your business with our comprehensive security solutions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-primary-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
            >
              REQUEST A QUOTE
            </Link>
            <Link to="/services" className="text-sm font-semibold leading-6 text-gray-700">
              View Our Services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 