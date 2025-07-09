import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  BuildingOfficeIcon, 
  TruckIcon, 
  CubeIcon, 
  BanknotesIcon, 
  BuildingLibraryIcon, 
  ComputerDesktopIcon 
} from '@heroicons/react/24/outline'
import CTASection from '../components/CTASection'
import SectionDivider from '../components/SectionDivider'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedElement from '../components/AnimatedElement'

const industries = [
  {
    name: 'Construction & Real Estate',
    description: 'Protecting construction sites, properties, and development projects from theft and vandalism.',
    href: '/industries/construction',
    icon: BuildingOfficeIcon,
    image: '/images/industries/construction.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070',
    features: [
      'Site access control systems',
      'Video surveillance for remote monitoring',
      'Asset tracking and protection',
      'Guard services for active and inactive sites'
    ]
  },
  {
    name: 'Logistics & Warehousing',
    description: 'Securing storage facilities and managing access control for distribution centers.',
    href: '/industries/logistics',
    icon: TruckIcon,
    image: '/images/industries/logistics.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070',
    features: [
      'Warehouse security systems',
      'Cargo and inventory protection',
      'Loading dock security',
      'Transport route security planning'
    ]
  },
  {
    name: 'Industrial Zones',
    description: 'Comprehensive security for manufacturing plants and industrial facilities.',
    href: '/industries/industrial',
    icon: CubeIcon,
    image: '/images/industries/industrial.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2070',
    features: [
      'Perimeter security solutions',
      'Employee access management',
      'Industrial espionage prevention',
      'Emergency response planning'
    ]
  },
  {
    name: 'Financial Services',
    description: 'Advanced cybersecurity and physical protection for financial institutions.',
    href: '/industries/financial',
    icon: BanknotesIcon,
    image: '/images/industries/financial.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070',
    features: [
      'Bank branch security',
      'ATM protection systems',
      'Fraud prevention',
      'Secure data handling protocols'
    ]
  },
  {
    name: 'Local Government Units (LGUs)',
    description: 'Security solutions for government facilities and public infrastructure.',
    href: '/industries/government',
    icon: BuildingLibraryIcon,
    image: '/images/industries/government.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=2070',
    features: [
      'Public building security',
      'Critical infrastructure protection',
      'Event security management',
      'Citizen safety programs'
    ]
  },
  {
    name: 'IT-Enabled Businesses',
    description: 'Specialized cybersecurity and physical protection for technology companies.',
    href: '/industries/it',
    icon: ComputerDesktopIcon,
    image: '/images/industries/it.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=2076',
    features: [
      'Data center security',
      'Network protection systems',
      'Intellectual property safeguards',
      'Hybrid physical-cyber security solutions'
    ]
  },
]

export default function Industries() {
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
                <span className="text-gray-500">Industries</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Industries We Serve</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We serve a wide range of clients with tailored security solutions designed to address the unique challenges 
                and requirements of each industry sector.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                {industries.map((industry, index) => (
                  <a 
                    key={index}
                    href={industry.href} 
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 border border-gray-200"
                  >
                    <industry.icon className="h-4 w-4 text-primary-700" />
                    <span>{industry.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="rounded-xl overflow-hidden shadow-xl hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="/images/industries/industries-hero.jpg" 
                alt="InfraGuard Industry Solutions" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070';
                }}
              />
            </motion.div>
          </div>
        </div>
        
        {/* Add wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider type="wave" color="text-white" />
        </div>
      </div>

      {/* Industries overview section */}
      <AnimatedSection className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedElement type="fadeUp" className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tailored Security for Every Industry</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At InfraGuard, we understand that different industries face unique security challenges. 
              Our specialized solutions are designed to address the specific needs of each sector.
            </p>
          </AnimatedElement>
          
          <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-3">
            {industries.slice(0, 3).map((industry, index) => (
              <AnimatedElement 
                key={industry.name} 
                type="fadeUp" 
                delay={index * 0.1}
                className="flex flex-col"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-700 mb-6">
                  <industry.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                <p className="mt-3 text-base text-gray-600">{industry.description}</p>
                <div className="mt-6 flex-grow">
                  <ul className="space-y-3">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary-700"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link 
                    to={industry.href} 
                    className="text-sm font-semibold leading-6 text-primary-700 hover:text-primary-600 flex items-center"
                  >
                    Learn more <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Add section divider */}
      <div className="relative">
        <SectionDivider type="curve" color="text-primary-50" />
      </div>

      {/* Featured industries section */}
      <AnimatedSection className="bg-primary-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedElement type="fadeUp" className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Industries</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our specialized security solutions for these key industry sectors.
            </p>
          </AnimatedElement>
          
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {industries.slice(3).map((industry, index) => (
              <AnimatedElement 
                key={industry.name}
                type="fadeUp"
                delay={index * 0.1}
              >
                <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = industry.fallbackImage;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                          <industry.icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{industry.description}</p>
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {industry.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary-700"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link 
                      to={industry.href} 
                      className="inline-flex items-center rounded-md bg-primary-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600"
                    >
                      View Solutions
                    </Link>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Add section divider */}
      <div className="relative">
        <SectionDivider type="triangle" color="text-white" />
      </div>

      {/* Industry approach section */}
      <AnimatedSection className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 items-center">
            <AnimatedElement type="fadeUp">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Industry Approach</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We take a consultative approach to understanding your industry's unique security challenges. Our team works closely with you to develop tailored solutions that address your specific needs.
              </p>
              
              <div className="mt-10 space-y-8">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <span className="font-semibold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Industry Assessment</h3>
                  <p className="mt-2 text-gray-600">We analyze your industry's specific security challenges and regulatory requirements.</p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <span className="font-semibold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Solution Design</h3>
                  <p className="mt-2 text-gray-600">Our experts design comprehensive security solutions tailored to your industry needs.</p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <span className="font-semibold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Implementation</h3>
                  <p className="mt-2 text-gray-600">We deploy security measures with minimal disruption to your operations.</p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <span className="font-semibold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Ongoing Support</h3>
                  <p className="mt-2 text-gray-600">Our team provides continuous monitoring, maintenance, and updates to ensure your security remains effective.</p>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement type="fadeUp" delay={0.2}>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/images/industries/approach.jpg" 
                  alt="InfraGuard Industry Approach" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070';
                  }}
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </AnimatedSection>

      {/* Add section divider */}
      <div className="relative">
        <SectionDivider type="wave" color="text-primary-50" />
      </div>

      {/* CTA section */}
      <CTASection 
        title="Ready to secure your industry?"
        description="Contact us today to discuss your industry-specific security needs."
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
      />
    </div>
  )
} 