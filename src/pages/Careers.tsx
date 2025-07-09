import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const openPositions = [
  {
    title: 'Security Officer',
    location: 'Sydney, NSW',
    type: 'Full-time',
    description: 'We are seeking professional security officers to protect our clients\' premises, assets, and personnel.',
    category: 'guard',
  },
  {
    title: 'Cybersecurity Specialist',
    location: 'Melbourne, VIC',
    type: 'Full-time',
    description: 'Join our team to implement and maintain security measures that protect digital infrastructure and data.',
    category: 'it',
  },
  {
    title: 'Security Supervisor',
    location: 'Brisbane, QLD',
    type: 'Full-time',
    description: 'Lead a team of security professionals ensuring the highest standards of security services for our clients.',
    category: 'guard',
  },
  {
    title: 'Access Control Technician',
    location: 'Perth, WA',
    type: 'Full-time',
    description: 'Install, maintain, and troubleshoot access control systems for various client facilities.',
    category: 'it',
  },
]

const benefits = [
  'Competitive salary and benefits package',
  'Career advancement opportunities',
  'Ongoing professional development and training',
  'Supportive team environment',
  'Work with leading security technologies',
  'Flexible scheduling options',
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
          </motion.div>
        </div>
      </div>

      {/* Why join us section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Join InfraGuard?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At InfraGuard, we value our team members and provide an environment where you can grow professionally
              while making a meaningful impact. We invest in our people through training, mentorship, and advancement
              opportunities.
            </p>
            <div className="mt-10">
              <h3 className="text-lg font-semibold leading-8 text-gray-900">Benefits</h3>
              <ul className="mt-4 space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-primary-700">•</span>
                    <span className="ml-2 text-base text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
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
                alt="Team members at InfraGuard"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Open positions section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 bg-white lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Open Positions</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our current job openings and find the right opportunity for your skills and career goals.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button 
              onClick={() => setFormData(prev => ({ ...prev, category: 'all' }))}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${formData.category === 'all' ? 'bg-primary-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All Positions
            </button>
            <button 
              onClick={() => setFormData(prev => ({ ...prev, category: 'guard' }))}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${formData.category === 'guard' ? 'bg-primary-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Security Guards
            </button>
            <button 
              onClick={() => setFormData(prev => ({ ...prev, category: 'it' }))}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${formData.category === 'it' ? 'bg-primary-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              IT Roles
            </button>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
            {openPositions
              .filter(position => formData.category === 'all' || position.category === formData.category)
              .map((position, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col rounded-2xl border border-gray-200 p-8 hover:border-primary-700 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold leading-7 text-gray-900">{position.title}</h3>
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${position.category === 'guard' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                      {position.category === 'guard' ? 'Security' : 'IT'}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-x-4">
                    <span className="text-sm text-gray-500">{position.location}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{position.type}</span>
                  </div>
                  <p className="mt-4 text-base leading-7 text-gray-600">{position.description}</p>
                  <div className="mt-6">
                    <button
                      onClick={() => setFormData(prev => ({ ...prev, position: position.title }))}
                      className="text-sm font-semibold leading-6 text-primary-700 hover:text-primary-600"
                    >
                      Apply now <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* Application form */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Apply Now</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Submit your application for a career with InfraGuard. We're looking for both security guards and IT professionals.
            </p>
            <form onSubmit={handleSubmit} className="mt-10">
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
                
                <div>
                  <label htmlFor="position" className="block text-sm font-semibold leading-6 text-gray-900">
                    Position
                  </label>
                  <div className="mt-2">
                    <select
                      name="position"
                      id="position"
                      required
                      value={formData.position}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-700 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select a position</option>
                      {openPositions
                        .filter(position => formData.category === 'all' || position.category === formData.category)
                        .map((position, index) => (
                          <option key={index} value={position.title}>
                            {position.title} - {position.location}
                          </option>
                        ))}
                      <option value="other">Other (specify in experience)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-semibold leading-6 text-gray-900">
                    Category
                  </label>
                  <div className="mt-2">
                    <select
                      name="category"
                      id="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-700 sm:text-sm sm:leading-6"
                    >
                      <option value="guard">Security Guard</option>
                      <option value="it">IT Professional</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold leading-6 text-gray-900">
                    Relevant Experience
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="experience"
                      id="experience"
                      rows={4}
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-700 sm:text-sm sm:leading-6"
                      placeholder="Please describe your relevant experience, skills, and qualifications..."
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="resume" className="block text-sm font-semibold leading-6 text-gray-900">
                    Upload Resume/CV
                  </label>
                  <div className="mt-2">
                    <input
                      type="file"
                      name="resume"
                      id="resume"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                    />
                    <p className="mt-1 text-xs text-gray-500">PDF, DOC, or DOCX up to 5MB</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-primary-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-primary-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Don't see the right position?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            We're always looking for talented individuals. Send us your resume and we'll keep it on file for future opportunities.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-800 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 