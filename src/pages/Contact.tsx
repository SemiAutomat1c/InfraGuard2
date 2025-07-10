import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, BuildingOfficeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import SectionDivider from '../components/SectionDivider'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedElement from '../components/AnimatedElement'

const offices = [
  {
    name: 'Sydney Headquarters',
    address: '123 Security Street, Sydney NSW 2000',
    phone: '+61 2 1234 5678',
    email: 'sydney@infraguard.com',
    hours: 'Mon-Fri: 9AM-5PM',
    image: '/images/contact/sydney-office.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1582559934353-2e47140e9d71?q=80&w=2069'
  },
  {
    name: 'Melbourne Office',
    address: '456 Protection Road, Melbourne VIC 3000',
    phone: '+61 3 9876 5432',
    email: 'melbourne@infraguard.com',
    hours: 'Mon-Fri: 9AM-5PM',
    image: '/images/contact/melbourne-office.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1567449303078-57ad995bd3fc?q=80&w=2070'
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="bg-tech-pattern">
      {/* Hero section */}
      <div className="relative isolate bg-gradient-to-b from-primary-100/20 pt-16">
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
                <span className="text-gray-500">Contact</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Contact Us</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Get in touch with us to discuss your security needs. We're here to help protect your business.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact-form" className="inline-flex items-center rounded-md bg-primary-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600">
                  Send a Message
                </a>
                <a href="#locations" className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm hover:bg-gray-50 border border-primary-200">
                  Our Locations
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
                src="/images/contact/contact-hero.jpg" 
                alt="InfraGuard Contact Center" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069';
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

      {/* Contact form and info section */}
      <div id="contact-form">
        <AnimatedSection className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-2">
              {/* Contact form */}
              <AnimatedElement type="fadeUp">
                <div className="lg:pr-8">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let's secure your business</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-10 bg-white rounded-xl shadow-lg p-8">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label htmlFor="fullName" className="block text-sm font-semibold leading-6 text-gray-900">
                          Full Name
                        </label>
                        <div className="mt-2.5">
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
                      <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                          Company
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="company"
                            id="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-700 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                          Email
                        </label>
                        <div className="mt-2.5">
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
                          Phone (optional)
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-700 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                          Message
                        </label>
                        <div className="mt-2.5">
                          <textarea
                            name="message"
                            id="message"
                            rows={4}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-700 sm:text-sm sm:leading-6"
                            placeholder="Tell us about your security needs..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <button
                        type="submit"
                        className="block w-full rounded-md bg-primary-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </AnimatedElement>

              {/* Contact information */}
              <AnimatedElement type="fadeUp" delay={0.2}>
                <div className="max-w-xl lg:max-w-lg">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Have questions about our services? Want to discuss your security needs? We're here to help.
                  </p>
                  
                  <div className="mt-10 bg-white rounded-xl shadow-lg p-8">
                    <dl className="space-y-6 text-base leading-7 text-gray-600">
                      <div className="flex gap-x-4">
                        <dt className="flex-none">
                          <span className="sr-only">Email</span>
                          <EnvelopeIcon className="h-7 w-6 text-primary-600" aria-hidden="true" />
                        </dt>
                        <dd>
                          <a className="hover:text-primary-700" href="mailto:info@infraguard.com">
                            info@infraguard.com
                          </a>
                        </dd>
                      </div>
                      <div className="flex gap-x-4">
                        <dt className="flex-none">
                          <span className="sr-only">Phone</span>
                          <PhoneIcon className="h-7 w-6 text-primary-600" aria-hidden="true" />
                        </dt>
                        <dd>
                          <a className="hover:text-primary-700" href="tel:+61-2-1234-5678">
                            +61 2 1234 5678
                          </a>
                        </dd>
                      </div>
                      <div className="flex gap-x-4">
                        <dt className="flex-none">
                          <span className="sr-only">Address</span>
                          <MapPinIcon className="h-7 w-6 text-primary-600" aria-hidden="true" />
                        </dt>
                        <dd>123 Security Street<br />Sydney, NSW 2000<br />Australia</dd>
                      </div>
                      <div className="flex gap-x-4">
                        <dt className="flex-none">
                          <span className="sr-only">Hours</span>
                          <ClockIcon className="h-7 w-6 text-primary-600" aria-hidden="true" />
                        </dt>
                        <dd>
                          <p>Monday-Friday: 9AM - 5PM</p>
                          <p>24/7 Emergency Support Available</p>
                        </dd>
                      </div>
                    </dl>
                    
                    {/* Social Media Links */}
                    <div className="mt-10 border-t border-gray-200 pt-8">
                      <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
                      <div className="mt-4 flex space-x-6">
                        <a href="#" className="text-gray-500 hover:text-primary-700">
                          <span className="sr-only">Facebook</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-primary-700">
                          <span className="sr-only">Instagram</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-primary-700">
                          <span className="sr-only">Twitter</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-primary-700">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Add section divider */}
      <div className="relative">
        <SectionDivider type="angle" color="text-primary-50" />
      </div>

      {/* Locations section */}
      <div id="locations">
        <AnimatedSection className="bg-primary-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedElement type="fadeUp" className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Locations</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                Visit us at one of our offices across Australia. Our team is ready to assist you with all your security needs.
              </p>
            </AnimatedElement>
            
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {offices.map((office, index) => (
                <AnimatedElement 
                  key={index} 
                  type="fadeUp" 
                  delay={index * 0.2}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={office.image} 
                      alt={office.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = office.fallbackImage;
                      }}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900">{office.name}</h3>
                    <dl className="mt-6 space-y-4 text-sm leading-6">
                      <div className="flex gap-x-3">
                        <dt>
                          <BuildingOfficeIcon className="h-5 w-5 text-primary-600" aria-hidden="true" />
                        </dt>
                        <dd>{office.address}</dd>
                      </div>
                      <div className="flex gap-x-3">
                        <dt>
                          <PhoneIcon className="h-5 w-5 text-primary-600" aria-hidden="true" />
                        </dt>
                        <dd>
                          <a href={`tel:${office.phone}`} className="hover:text-primary-700">
                            {office.phone}
                          </a>
                        </dd>
                      </div>
                      <div className="flex gap-x-3">
                        <dt>
                          <EnvelopeIcon className="h-5 w-5 text-primary-600" aria-hidden="true" />
                        </dt>
                        <dd>
                          <a href={`mailto:${office.email}`} className="hover:text-primary-700">
                            {office.email}
                          </a>
                        </dd>
                      </div>
                      <div className="flex gap-x-3">
                        <dt>
                          <ClockIcon className="h-5 w-5 text-primary-600" aria-hidden="true" />
                        </dt>
                        <dd>{office.hours}</dd>
                      </div>
                    </dl>
                    <div className="mt-8">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(office.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md bg-primary-700 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Add section divider */}
      <div className="relative">
        <SectionDivider type="wave" color="text-white" />
      </div>

      {/* Map section */}
      <AnimatedSection className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedElement type="fadeUp" className="mx-auto max-w-2xl lg:mx-0 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Find Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our headquarters is conveniently located in the heart of Sydney's business district.
            </p>
          </AnimatedElement>
          
          <AnimatedElement type="fadeUp" delay={0.2}>
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <iframe
                title="InfraGuard Headquarters"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26543.33371257487!2d151.1925372!3d-33.8688197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632ccc0!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1696423593675!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </AnimatedElement>
          
          <AnimatedElement type="fadeUp" delay={0.3} className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full">
              <ShieldCheckIcon className="h-5 w-5 text-primary-700" />
              <span className="text-sm font-medium text-primary-700">24/7 Emergency Response Available</span>
            </div>
          </AnimatedElement>
        </div>
      </AnimatedSection>
    </div>
  )
} 