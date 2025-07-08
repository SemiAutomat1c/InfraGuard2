import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShieldCheckIcon, LockClosedIcon, BuildingOfficeIcon, ServerIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const heroSlides = [
  {
    title: "Complete Protection, Online and On-Site",
    description: "From physical guards to digital defenses — we secure your assets, infrastructure, and data with comprehensive security solutions tailored to your needs.",
    image: "/images/hero-bg.svg",
    ctaLink: "/contact"
  },
  {
    title: "Advanced Security Solutions for Modern Businesses",
    description: "Our integrated approach combines physical security personnel with cutting-edge technology to provide complete protection for your business.",
    image: "/images/hero-bg2.svg",
    ctaLink: "/services"
  },
  {
    title: "Protecting What Matters Most",
    description: "With over a decade of experience, we deliver reliable security services that safeguard your most valuable assets and give you peace of mind.",
    image: "/images/hero-bg3.svg",
    ctaLink: "/about"
  }
]

const features = [
  {
    name: 'Infrastructure Guarding',
    description: 'Professional on-site security personnel protecting your physical assets 24/7.',
    icon: BuildingOfficeIcon,
    link: '/services#physical',
  },
  {
    name: 'Construction Site Security',
    description: 'Specialized security solutions for active and inactive construction projects.',
    icon: ShieldCheckIcon,
    link: '/services#physical',
  },
  {
    name: 'Network Security',
    description: 'Comprehensive protection for your digital infrastructure and data.',
    icon: ServerIcon,
    link: '/services#cyber',
  },
  {
    name: 'Access Control',
    description: 'Advanced systems for managing and monitoring facility access.',
    icon: LockClosedIcon,
    link: '/services#physical',
  },
]

const latestNews = [
  {
    title: 'Enhanced Security Solutions',
    description: 'Introducing our latest integrated security systems for modern businesses.',
    image: '/images/news1.jpg',
    link: '/services',
  },
  {
    title: 'Industry Recognition',
    description: 'InfraGuard named top security provider in the region.',
    image: '/images/news2.jpg',
    link: '/about',
  },
  {
    title: 'Security Best Practices',
    description: 'Latest guidelines for protecting your business assets.',
    image: '/images/news3.jpg',
    link: '/services',
  },
]

const testimonials = [
  {
    text: "InfraGuard's integrated security approach has transformed how we protect our assets. Their professional team and cutting-edge solutions provide peace of mind.",
    author: "Sarah Chen",
    role: "Operations Director, TechCorp Industries",
  },
  {
    text: "The combination of physical and cyber security services from InfraGuard has significantly enhanced our security posture. Their team's expertise is unmatched.",
    author: "Michael Roberts",
    role: "CEO, Construction Solutions",
  },
]

const stats = [
  { name: 'Years of Experience', value: '10+' },
  { name: 'Satisfied Clients', value: '100+' },
  { name: 'Security Personnel', value: '50+' },
  { name: 'Success Rate', value: '99.9%' },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Carousel section */}
      <div className="relative isolate h-[100vh]">
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-800" />
              <img
                src={slide.image}
                alt=""
                className="h-full w-full object-cover opacity-20"
              />
            </div>
            <div className="relative mx-auto h-full max-w-7xl px-6 flex items-center">
              <motion.div
                className="mx-auto max-w-2xl lg:mx-0 pt-16"
                key={`slide-${index}-${currentSlide === index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  {slide.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  {slide.description}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to={slide.ctaLink}
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-800 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get Started
                  </Link>
                  <Link to="/services" className="text-sm font-semibold leading-6 text-white">
                    Learn More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-8 rounded-full ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Arrow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Latest News section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-primary-700">Latest Updates</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stay informed with InfraGuard
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {latestNews.map((item) => (
            <motion.article
              key={item.title}
              className="flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full">
                <img
                  src={item.image}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2024-03" className="text-gray-500">
                    March 2024
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link to={item.link}>
                      <span className="absolute inset-0" />
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Features section */}
      <div className="bg-primary-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-gray-300">Comprehensive Security</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to secure your business
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We provide end-to-end security solutions that safeguard businesses in both the physical and digital worlds.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-700">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link to={feature.link} className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by leading businesses
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from our clients about how InfraGuard has transformed their security operations.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={index}
              className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <blockquote className="text-gray-900">
                <p>{`"${testimonial.text}"`}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by businesses across Australia
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our track record speaks for itself with successful deployments and satisfied clients.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.name}
                className="flex flex-col bg-gray-100 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl">
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-primary-800 to-primary-600 opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to secure your business?
            <br />
            Start with InfraGuard today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Contact us now to discuss your security needs and get a customized solution for your business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-primary-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
            >
              Get Started
            </Link>
            <Link to="/services" className="text-sm font-semibold leading-6 text-gray-700">
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 