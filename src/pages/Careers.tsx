import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { 
  BriefcaseIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon, 
  ClockIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline'
import SectionDivider from '../components/SectionDivider'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedElement from '../components/AnimatedElement'
import CTASection from '../components/CTASection'

const openPositions = [
  {
    title: 'Security Officer',
    location: 'Sydney, NSW',
    type: 'Full-time',
    description: 'We are seeking professional security officers to protect our clients\' premises, assets, and personnel.',
    category: 'guard',
    image: '/images/careers/security-officer.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1577962146641-43da4175dcbe?q=80&w=2070'
  },
  {
    title: 'Cybersecurity Specialist',
    location: 'Melbourne, VIC',
    type: 'Full-time',
    description: 'Join our team to implement and maintain security measures that protect digital infrastructure and data.',
    category: 'it',
    image: '/images/careers/cybersecurity-specialist.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070'
  },
  {
    title: 'Security Supervisor',
    location: 'Brisbane, QLD',
    type: 'Full-time',
    description: 'Lead a team of security professionals ensuring the highest standards of security services for our clients.',
    category: 'guard',
    image: '/images/careers/security-supervisor.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069'
  },
  {
    title: 'Access Control Technician',
    location: 'Perth, WA',
    type: 'Full-time',
    description: 'Install, maintain, and troubleshoot access control systems for various client facilities.',
    category: 'it',
    image: '/images/careers/access-control-tech.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1622037022824-0c71d749ba6a?q=80&w=2070'
  },
]

const benefits = [
  {
    title: 'Competitive Compensation',
    description: 'Salary packages that recognize your skills and experience',
    icon: CurrencyDollarIcon
  },
  {
    title: 'Career Growth',
    description: 'Clear pathways for advancement and professional development',
    icon: AcademicCapIcon
  },
  {
    title: 'Supportive Culture',
    description: 'Work with a team that values collaboration and mutual respect',
    icon: UserGroupIcon
  },
  {
    title: 'Cutting-Edge Technology',
    description: 'Access to the latest security technologies and solutions',
    icon: SparklesIcon
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible scheduling options to accommodate your lifestyle',
    icon: ClockIcon
  },
  {
    title: 'Industry Experience',
    description: 'Gain valuable experience across diverse security environments',
    icon: BriefcaseIcon
  },
]

export default function Careers() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null as File | null,
    category: 'guard', // Default to guard
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Application submitted:', formData)
    alert('Thank you for your application! We will review it and get back to you soon.')
  }

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
                <span className="text-gray-500">Careers</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Join Our Team</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Build a rewarding career in the security industry with InfraGuard. We're looking for talented individuals
                who are passionate about protecting people, assets, and information.
              </p>
              
              <div className="mt-10">
                <a 
                  href="#open-positions" 
                  className="inline-flex items-center rounded-md bg-primary-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600"
                >
                  View Open Positions
                </a>
              </div>
            </motion.div>
            
            <motion.div
              className="rounded-xl overflow-hidden shadow-xl hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="/images/careers/team-hero.jpg" 
                alt="InfraGuard Security Team" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070';
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

      {/* Why join us section */}
      <AnimatedSection className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <AnimatedElement type="fadeUp">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Join InfraGuard?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At InfraGuard, we value our team members and provide an environment where you can grow professionally
                while making a meaningful impact. We invest in our people through training, mentorship, and advancement
                opportunities.
              </p>
              
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <AnimatedElement 
                    key={index}
                    type="fadeUp"
                    delay={index * 0.1}
                    className="flex items-start"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </AnimatedElement>
            
            <motion.div
              className="lg:pl-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[3/2] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/careers/team-culture.jpg"
                  alt="Team members at InfraGuard"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070';
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Add section divider */}
      <div className="relative">
        <SectionDivider type="curve" color="text-primary-50" />
      </div>

      {/* Open positions section */}
      <div id="open-positions">
        <AnimatedSection className="bg-primary-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedElement type="fadeUp" className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Open Positions</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Explore our current job openings and find the right opportunity for your skills and career goals.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <button 
                  onClick={() => setFormData(prev => ({ ...prev, category: 'all' }))}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${formData.category === 'all' ? 'bg-primary-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  All Positions
                </button>
                <button 
                  onClick={() => setFormData(prev => ({ ...prev, category: 'guard' }))}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${formData.category === 'guard' ? 'bg-primary-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  Security Guards
                </button>
                <button 
                  onClick={() => setFormData(prev => ({ ...prev, category: 'it' }))}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${formData.category === 'it' ? 'bg-primary-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  IT Roles
                </button>
              </div>
            </AnimatedElement>
            
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
              {openPositions
                .filter(position => formData.category === 'all' || position.category === formData.category)
                .map((position, index) => (
                  <motion.div
                    key={index}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={position.image} 
                        alt={position.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = position.fallbackImage;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-white">{position.title}</h3>
                        <div className="flex items-center gap-x-4 mt-1">
                          <span className="text-sm text-white/90">{position.location}</span>
                          <span className="text-sm text-white/90">•</span>
                          <span className="text-sm text-white/90">{position.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${position.category === 'guard' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                          {position.category === 'guard' ? 'Security' : 'IT'}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{position.description}</p>
                      
                      <button
                        onClick={() => {
                          setFormData(prev => ({ ...prev, position: position.title }));
                          document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center text-sm font-semibold leading-6 text-primary-700 hover:text-primary-600"
                      >
                        Apply now <span aria-hidden="true" className="ml-1">→</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Add section divider */}
      <div className="relative">
        <SectionDivider type="angle" color="text-white" />
      </div>

      {/* Application form */}
      <div id="application-form">
        <AnimatedSection className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimatedElement type="fadeUp">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Apply Now</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Submit your application for a career with InfraGuard. We're looking for both security guards and IT professionals.
                </p>
                
                <div className="mt-10 aspect-video overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/careers/apply-now.jpg"
                    alt="Join our team at InfraGuard"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070';
                    }}
                  />
                </div>
                
                <div className="mt-10 p-6 bg-primary-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900">Why work with us?</h3>
                  <p className="mt-2 text-gray-600">
                    At InfraGuard, we believe in fostering a culture of excellence, innovation, and mutual respect. 
                    Join our team and be part of a company that values your contributions and supports your growth.
                  </p>
                </div>
              </AnimatedElement>
              
              <AnimatedElement type="fadeUp" delay={0.2}>
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold leading-6 text-gray-900">
                        Full Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-700 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                          Email
                        </label>
                        <div className="mt-2">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-700 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                          Phone
                        </label>
                        <div className="mt-2">
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-700 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="position" className="block text-sm font-semibold leading-6 text-gray-900">
                        Position
                      </label>
                      <div className="mt-2">
                        <select
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          required
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-700 sm:text-sm sm:leading-6"
                        >
                          <option value="">Select a position</option>
                          {openPositions.map((position, index) => (
                            <option key={index} value={position.title}>
                              {position.title}
                            </option>
                          ))}
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="experience" className="block text-sm font-semibold leading-6 text-gray-900">
                        Experience
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="experience"
                          name="experience"
                          rows={4}
                          required
                          value={formData.experience}
                          onChange={handleChange}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-700 sm:text-sm sm:leading-6"
                          placeholder="Briefly describe your relevant experience..."
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="resume" className="block text-sm font-semibold leading-6 text-gray-900">
                        Resume
                      </label>
                      <div className="mt-2">
                        <input
                          type="file"
                          name="resume"
                          id="resume"
                          required
                          onChange={handleFileChange}
                          className="block w-full text-sm text-gray-900 file:mr-4 file:rounded-md file:border-0 file:bg-primary-700 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-600"
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-500">PDF, DOC, or DOCX up to 5MB</p>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="block w-full rounded-md bg-primary-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
                      >
                        Submit Application
                      </button>
                    </div>
                  </div>
                </form>
              </AnimatedElement>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Add section divider */}
      <div className="relative">
        <SectionDivider type="wave" color="text-primary-50" />
      </div>

      {/* CTA section */}
      <CTASection 
        title="Ready to grow your career?"
        description="Join our team of security professionals and make a difference."
        primaryButtonText="Apply Now"
        secondaryButtonText="Learn More"
      />
    </div>
  )
} 