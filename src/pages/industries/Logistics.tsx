import { motion } from 'framer-motion'
import { ShieldCheckIcon, LockClosedIcon, CameraIcon, ClockIcon } from '@heroicons/react/24/outline'
import CTASection from '../../components/CTASection'

const services = [
  {
    name: 'Warehouse Security Personnel',
    description: 'Trained security officers to monitor access, conduct patrols, and respond to incidents.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Access Control & Monitoring',
    description: 'Advanced systems to manage entry/exit points and track personnel and vehicle movements.',
    icon: LockClosedIcon,
  },
  {
    name: 'CCTV Surveillance',
    description: 'Strategic camera placement with 24/7 monitoring to deter theft and document incidents.',
    icon: CameraIcon,
  },
  {
    name: '24/7 Security Operations',
    description: 'Round-the-clock security coverage to protect your logistics facilities and inventory.',
    icon: ClockIcon,
  },
]

const benefits = [
  'Prevent inventory theft and shrinkage',
  'Secure loading docks and shipping areas',
  'Monitor employee and visitor access',
  'Protect high-value goods and equipment',
  'Maintain chain of custody documentation',
  'Reduce insurance premiums through enhanced security',
]

export default function Logistics() {
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Logistics & Warehousing Security</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive security solutions designed to protect distribution centers, warehouses, and the entire supply chain.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Overview section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Protecting Your Supply Chain</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Logistics facilities and warehouses face unique security challenges, from inventory theft to unauthorized access. Our specialized security solutions help safeguard your goods, equipment, and facilities throughout the supply chain.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We understand the complex operational requirements of logistics businesses and design security protocols that enhance protection without disrupting workflow.
          </p>
        </div>
      </div>

      {/* Services section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Logistics Security Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer specialized security solutions tailored to the unique needs of warehouses and distribution centers.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {services.map((service) => (
                <motion.div 
                  key={service.name} 
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900 flex items-center gap-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-700">
                      <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 pl-14">
                    <p className="flex-auto">{service.description}</p>
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Benefits of Our Security Solutions</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our logistics and warehousing security services provide numerous advantages for distribution centers and supply chain operations.
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
      <CTASection 
        title="Ready to secure your logistics facilities?"
        description="Contact us today to discuss your warehousing and supply chain security needs."
        primaryButtonText="Request a Quote"
        secondaryButtonText="Learn About Our Services"
        secondaryButtonLink="/services"
      />
    </div>
  )
} 