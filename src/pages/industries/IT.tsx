import { motion } from 'framer-motion'
import { 
  ServerIcon, 
  ShieldCheckIcon, 
  LockClosedIcon, 
  CameraIcon,
  CloudIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import CTASection from '../../components/CTASection'

const services = [
  {
    name: 'Cybersecurity Solutions',
    description: 'Advanced protection against digital threats, data breaches, and cyber attacks.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Network Security',
    description: 'Securing your IT infrastructure and preventing unauthorized network access.',
    icon: ServerIcon,
  },
  {
    name: 'Data Center Security',
    description: 'Physical and digital protection for your critical data center infrastructure.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Cloud Security',
    description: 'Security solutions for cloud-based systems and applications.',
    icon: CloudIcon,
  },
  {
    name: 'Access Control Systems',
    description: 'Advanced solutions to manage physical access to IT facilities and server rooms.',
    icon: LockClosedIcon,
  },
  {
    name: 'Video Surveillance',
    description: 'Strategic camera placement with monitoring for IT facilities and equipment.',
    icon: CameraIcon,
  },
]

const benefits = [
  'Protect sensitive customer and business data',
  'Prevent unauthorized access to IT systems',
  'Maintain business continuity during security incidents',
  'Comply with data protection regulations',
  'Safeguard intellectual property and proprietary technology',
  'Build customer trust through robust security measures',
]

export default function IT() {
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
              <Link to="/industries" className="text-primary-700 hover:text-primary-600">
                Industries
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-gray-500">IT-Enabled Businesses</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">IT-Enabled Business Security</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive security solutions designed specifically for technology companies and IT-driven businesses.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Overview section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Protecting Your Digital Assets</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            IT-enabled businesses face unique security challenges in today's digital landscape. From protecting sensitive data to securing physical infrastructure, our specialized security solutions help safeguard your technology assets and maintain business continuity.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We understand the complex requirements of technology companies and provide integrated security that combines cybersecurity expertise with physical protection measures.
          </p>
        </div>
      </div>

      {/* Services section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our IT Security Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer specialized security solutions tailored to the unique needs of technology companies and IT-enabled businesses.
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
            Our IT security services provide numerous advantages for technology companies and digital businesses.
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
        title="Ready to enhance your IT security?"
        description="Contact us today to discuss your technology security needs and get a customized solution."
        primaryButtonText="Request a Quote"
        secondaryButtonText="Learn About Our Services"
        secondaryButtonLink="/services"
      />
    </div>
  )
} 