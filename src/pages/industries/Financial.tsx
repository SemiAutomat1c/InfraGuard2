import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  ServerIcon, 
  DocumentTextIcon,
  ShieldExclamationIcon 
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import CTASection from '../../components/CTASection'

const services = [
  {
    name: 'Physical Security Personnel',
    description: 'Trained security officers for banks, credit unions, and financial institutions.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Access Control Systems',
    description: 'Advanced solutions to manage access to sensitive areas and secure vaults.',
    icon: LockClosedIcon,
  },
  {
    name: 'Cybersecurity Solutions',
    description: 'Protection against digital threats, data breaches, and financial fraud.',
    icon: ServerIcon,
  },
  {
    name: 'Risk Assessment',
    description: 'Comprehensive evaluation of security vulnerabilities specific to financial institutions.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Fraud Prevention',
    description: 'Systems and protocols to detect and prevent financial fraud attempts.',
    icon: ShieldExclamationIcon,
  },
]

const benefits = [
  'Protect financial assets and sensitive customer data',
  'Maintain compliance with financial regulations',
  'Prevent unauthorized access to secure areas',
  'Detect and respond to security incidents quickly',
  'Build customer trust through visible security measures',
  'Reduce risk of financial losses due to security breaches',
]

export default function Financial() {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <div className="relative pt-16">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                <span className="text-gray-500">Financial Services</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Financial Services Security</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Comprehensive security solutions designed specifically for banks, credit unions, and financial institutions.
              </p>
            </motion.div>

            <motion.div
              className="relative isolate overflow-hidden rounded-xl shadow-xl hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary-100/20 to-black/50 z-10"></div>
              <img 
                src="/images/industries/financial.jpg" 
                alt="Financial Services Security"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070';
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Overview section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Protecting Financial Institutions</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Financial institutions face unique security challenges, from physical protection of assets to cybersecurity threats. Our specialized security solutions combine advanced technology with trained personnel to create a comprehensive security framework.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We understand the regulatory requirements and high standards expected in the financial sector, and our solutions are designed to meet and exceed these expectations.
          </p>
        </div>
      </div>

      {/* Services section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Financial Security Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer specialized security solutions tailored to the unique needs of financial institutions.
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
            Our financial services security solutions provide numerous advantages for banks and financial institutions.
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
        title="Ready to enhance your financial institution's security?"
        description="Contact us today to discuss your financial security needs and get a customized solution."
        primaryButtonText="Request a Quote"
        secondaryButtonText="Learn About Our Services"
        secondaryButtonLink="/services"
      />
    </div>
  )
} 