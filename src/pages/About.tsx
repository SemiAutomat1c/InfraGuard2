import { motion } from 'framer-motion'
import { ShieldCheckIcon, UserGroupIcon, ChartBarIcon, BuildingOfficeIcon, GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import SectionDivider from '../components/SectionDivider'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedElement from '../components/AnimatedElement'

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

const timeline = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'InfraGuard was established with a focus on providing physical security services to local businesses.'
  },
  {
    year: '2014',
    title: 'Expansion into Cybersecurity',
    description: 'Recognizing the growing digital threats, we expanded our services to include cybersecurity solutions.'
  },
  {
    year: '2018',
    title: 'National Recognition',
    description: 'InfraGuard received industry recognition for our integrated security approach and excellence in service.'
  },
  {
    year: '2022',
    title: 'International Operations',
    description: 'We began expanding our operations beyond Australia to serve clients across the Asia-Pacific region.'
  },
]

export default function About() {
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
                <span className="text-gray-500">About</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About InfraGuard</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We provide end-to-end security solutions that safeguard businesses in both the physical and digital worlds.
                Our team includes professionally trained guards and IT security specialists focused on delivering proactive,
                responsive protection.
              </p>
            </motion.div>
            
            <motion.div
              className="rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="/images/about-hero.jpg" 
                alt="InfraGuard Security Team" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070';
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

      {/* Mission & Vision section */}
      <AnimatedSection className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-gradient-tech rounded-xl shadow-lg p-8">
              <AnimatedElement type="fadeUp">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary-700 flex items-center justify-center">
                    <ShieldCheckIcon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg leading-8 text-gray-600">
                  To provide integrated security services that protect people, property, and digital infrastructure. We aim to
                  become the most trusted name in full-spectrum security across Australia and beyond.
                </p>
              </AnimatedElement>
            </div>
            
            {/* Vision */}
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-xl shadow-lg p-8 text-white">
              <AnimatedElement type="fadeUp" delay={0.2}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                    <GlobeAsiaAustraliaIcon className="h-6 w-6 text-primary-700" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
                </div>
                <p className="text-lg leading-8">
                  To become the most trusted name in full-spectrum security across Australia and beyond.
                </p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Add section divider */}
      <div className="relative">
        <SectionDivider type="curve" color="text-primary-50" />
      </div>

      {/* Company Timeline */}
      <AnimatedSection className="bg-primary-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedElement type="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Journey</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              From our humble beginnings to becoming a leading security provider, we've continuously evolved to meet the changing security landscape.
            </p>
          </AnimatedElement>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            
            {/* Timeline events */}
            <div className="relative">
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.year}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <span className="text-primary-700 font-bold text-xl">{item.year}</span>
                      <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-700 border-4 border-white"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Add section divider */}
      <div className="relative">
        <SectionDivider type="angle" color="text-white" />
      </div>

      {/* Values section */}
      <AnimatedSection className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedElement type="fadeUp" className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our core values guide everything we do, from how we treat our employees to how we serve our clients.
            </p>
          </AnimatedElement>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Top color bar */}
                <div className="h-2 bg-primary-700"></div>
                
                <div className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary-700" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.name}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Add section divider */}
      <div className="relative">
        <SectionDivider type="zigzag" color="text-primary-50" />
      </div>

      {/* Team section with image */}
      <AnimatedSection className="bg-primary-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement type="fadeUp">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our diverse team brings together expertise from security, technology, and business backgrounds to deliver comprehensive security solutions.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                    <ShieldCheckIcon className="h-4 w-4 text-primary-700" />
                  </div>
                  <span>Professionally trained security personnel</span>
                </li>
                <li className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                    <ShieldCheckIcon className="h-4 w-4 text-primary-700" />
                  </div>
                  <span>Certified cybersecurity experts</span>
                </li>
                <li className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                    <ShieldCheckIcon className="h-4 w-4 text-primary-700" />
                  </div>
                  <span>Experienced security consultants</span>
                </li>
                <li className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                    <ShieldCheckIcon className="h-4 w-4 text-primary-700" />
                  </div>
                  <span>Dedicated customer support team</span>
                </li>
              </ul>
            </AnimatedElement>
            
            <motion.div
              className="rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/images/team.jpg" 
                alt="InfraGuard Team" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070';
                }}
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Add section divider */}
      <div className="relative">
        <SectionDivider type="wave" color="text-white" />
      </div>

      {/* CTA section */}
      <CTASection 
        title="Ready to work with us?"
        description="Contact our team today to discuss how we can help secure your business."
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
      />
    </div>
  )
} 