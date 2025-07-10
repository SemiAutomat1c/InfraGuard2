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
import SectionDivider from '../components/SectionDivider'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedElement from '../components/AnimatedElement'
import ImageWithFallback from '../components/ImageWithFallback'

const physicalServices = [
  {
    name: 'Infrastructure Guarding',
    description:
      'On-site personnel securing industrial and critical infrastructure, ensuring protection from theft, trespassing, and damage.',
    icon: BuildingOfficeIcon,
    href: '/services/infrastructure-guarding',
    image: '/images/services/infrastructure-guarding.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1577962146641-43da4175dcbe?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Construction Site Security',
    description:
      'Dedicated guarding solutions for active and inactive construction projects to deter unauthorized access and material loss.',
    icon: ShieldCheckIcon,
    href: '/services/construction-site-security',
    image: '/images/services/construction-security.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: '24/7 On-Site Security',
    description: 'Uniformed security officers for round-the-clock protection of your premises.',
    icon: ClockIcon,
    href: '/services#physical',
    image: '/images/services/onsite-security.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Access Control',
    description: 'Guard-managed checkpoints, visitor tracking, and entry/exit logging.',
    icon: KeyIcon,
    href: '/services/access-control',
    image: '/images/services/access-control.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1622037022824-0c71d749ba6a?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Security Risk Assessment',
    description: 'Site-specific evaluation and planning to design effective security coverage.',
    icon: DocumentMagnifyingGlassIcon,
    href: '/services#physical',
    image: '/images/services/risk-assessment.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  },
]

const cyberServices = [
  {
    name: 'Network Security',
    description: "Protect your company's internal systems from unauthorized access and cyberattacks.",
    icon: ServerIcon,
    href: '/services/network-security',
    image: '/images/services/network-security.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Firewall & Intrusion Prevention',
    description: 'Set up and manage defenses that detect and block malicious activity.',
    icon: LockClosedIcon,
    href: '/services#cyber',
    image: '/images/services/firewall.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Endpoint Protection',
    description: 'Safeguard employee devices against malware, ransomware, and phishing.',
    icon: DevicePhoneMobileIcon,
    href: '/services#cyber',
    image: '/images/services/endpoint-protection.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Email Security',
    description: 'Stop spam, spoofing, and phishing attempts before they hit your inbox.',
    icon: EnvelopeIcon,
    href: '/services#cyber',
    image: '/images/services/email-security.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Vulnerability Assessment',
    description: 'Identify weak points in your IT infrastructure and recommend solutions.',
    icon: ShieldExclamationIcon,
    href: '/services#cyber',
    image: '/images/services/vulnerability.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Cybersecurity Consulting',
    description: 'Custom cyber defense strategies tailored to your business operations.',
    icon: UserGroupIcon,
    href: '/services#cyber',
    image: '/images/services/consulting.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80'
  },
]

const industries = [
  { name: 'Construction & Real Estate', href: '/industries/construction', icon: BuildingOfficeIcon },
  { name: 'Logistics & Warehousing', href: '/industries/logistics', icon: ClockIcon },
  { name: 'Industrial Zones', href: '/industries/industrial', icon: BuildingOfficeIcon },
  { name: 'Financial Services', href: '/industries/financial', icon: ShieldCheckIcon },
  { name: 'Local Government Units (LGUs)', href: '/industries/government', icon: UserGroupIcon },
  { name: 'IT-Enabled Businesses', href: '/industries/it', icon: ServerIcon },
]

export default function Services() {
  return (
    <div className="bg-tech-pattern">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20 pt-16">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                <span className="text-gray-500">Services</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Services</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                From physical guards to digital defenses — we provide comprehensive security solutions to protect your
                assets, infrastructure, and data.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#physical" className="inline-flex items-center rounded-md bg-primary-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600">
                  Physical Security
                </a>
                <a href="#cyber" className="inline-flex items-center rounded-md bg-secondary-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary-600">
                  Cyber Security
                </a>
                <a href="#industries" className="inline-flex items-center rounded-md bg-accent-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent-600">
                  Industries We Serve
                </a>
              </div>
            </motion.div>
            
            <motion.div
              className="rounded-xl overflow-hidden shadow-xl hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImageWithFallback
                src="/images/services-hero.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
                alt="InfraGuard Security Services"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Add wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider type="wave" color="text-white" />
        </div>
      </div>

      {/* Physical Security section */}
      <div id="physical">
        <AnimatedSection className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedElement type="fadeUp">
              <div className="flex items-center gap-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-700">
                  <ShieldCheckIcon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Physical Security Solutions</h2>
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl">
                Professional security personnel and solutions to protect your physical assets and infrastructure.
              </p>
            </AnimatedElement>
            
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {physicalServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Service card with image */}
                  {(index === 1 || index === 2 || index === 4) ? (
                    <div className="h-48 overflow-hidden">
                      <ImageWithFallback
                        src={service.image}
                        fallbackSrc={service.fallbackImage}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      </div>
                    </div>
                  ) : (
                    /* Service card with gradient background for left side cards */
                    <div className="h-48 overflow-hidden bg-gradient-to-r from-primary-100 to-primary-50 flex items-center justify-start p-6">
                      <div>
                        <h3 className="text-xl font-bold text-primary-900 mb-2">{service.name}</h3>
                        <div className="w-16 h-1 bg-primary-700 rounded-full"></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                        <service.icon className="h-6 w-6 text-primary-700" aria-hidden="true" />
                      </div>
                      <span className="text-primary-700 font-bold">{index + 1}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <Link 
                      to={service.href} 
                      className="text-sm font-semibold leading-6 text-primary-700 hover:text-primary-600 flex items-center"
                    >
                      Learn more <span aria-hidden="true" className="ml-1">→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Add section divider */}
      <div className="relative">
        <SectionDivider type="curve" color="text-primary-50" />
      </div>

      {/* Cyber Security section */}
      <div id="cyber">
        <AnimatedSection className="bg-primary-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedElement type="fadeUp">
              <div className="flex items-center gap-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-700">
                  <ServerIcon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cybersecurity Solutions</h2>
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl">
                Advanced digital protection to safeguard your systems, data, and online operations.
              </p>
            </AnimatedElement>
            
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {cyberServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Service card with image or gradient based on index */}
                  {(index % 2 === 0) ? (
                    <div className="h-48 overflow-hidden bg-gradient-to-r from-secondary-100 to-secondary-50 flex items-center justify-start p-6">
                      <div>
                        <h3 className="text-xl font-bold text-secondary-900 mb-2">{service.name}</h3>
                        <div className="w-16 h-1 bg-secondary-700 rounded-full"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-48 overflow-hidden">
                      <ImageWithFallback
                        src={service.image}
                        fallbackSrc={service.fallbackImage}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                        <service.icon className="h-6 w-6 text-primary-700" aria-hidden="true" />
                      </div>
                      <span className="text-primary-700 font-bold">{index + 1}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <Link 
                      to={service.href} 
                      className="text-sm font-semibold leading-6 text-primary-700 hover:text-primary-600 flex items-center"
                    >
                      Learn more <span aria-hidden="true" className="ml-1">→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Add section divider */}
      <div className="relative">
        <SectionDivider type="triangle" color="text-white" />
      </div>

      {/* Industries section */}
      <div id="industries">
        <AnimatedSection className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedElement type="fadeUp" className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Industries We Serve</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 mx-auto max-w-3xl">
                We provide security solutions for a wide range of industries, each with their unique security requirements.
              </p>
            </AnimatedElement>
            
            <motion.div
              className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {industries.map((industry) => (
                <motion.div
                  key={industry.name}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link 
                    to={industry.href} 
                    className="block h-full bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-700">
                        <industry.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{industry.name}</h3>
                    </div>
                    <div className="mt-4 flex items-center text-primary-700">
                      <span className="text-sm font-semibold">Learn more</span>
                      <span aria-hidden="true" className="ml-2">→</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>

      {/* Add section divider */}
      <div className="relative">
        <SectionDivider type="wave" color="text-primary-50" />
      </div>

      {/* CTA section */}
      <CTASection 
        title="Ready to secure your business?"
        description="Contact us now to discuss your security needs and get a customized solution tailored to your industry."
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
      />
    </div>
  )
} 