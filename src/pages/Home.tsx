import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShieldCheckIcon, LockClosedIcon, BuildingOfficeIcon, ServerIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import CTASection from '../components/CTASection'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedElement from '../components/AnimatedElement'
import { staggerContainer, staggerItem, cardHover } from '../utils/animations'

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
    link: '/services/infrastructure-guarding',
  },
  {
    name: 'Construction Site Security',
    description: 'Specialized security solutions for active and inactive construction projects.',
    icon: ShieldCheckIcon,
    link: '/services/construction-site-security',
  },
  {
    name: 'Network Security',
    description: 'Comprehensive protection for your digital infrastructure and data.',
    icon: ServerIcon,
    link: '/services/network-security',
  },
  {
    name: 'Access Control',
    description: 'Advanced systems for managing and monitoring facility access.',
    icon: LockClosedIcon,
    link: '/services/access-control',
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
    image: "/images/testimonials/sarah-chen.jpg"
  },
  {
    text: "The combination of physical and cyber security services from InfraGuard has significantly enhanced our security posture. Their team's expertise is unmatched.",
    author: "Michael Roberts",
    role: "CEO, Construction Solutions",
    image: "/images/testimonials/michael-roberts.jpg"
  },
  {
    text: "We've seen a dramatic reduction in security incidents since implementing InfraGuard's solutions. Their comprehensive approach addresses all our concerns.",
    author: "Jennifer Patel",
    role: "Security Director, Global Logistics",
    image: "/images/testimonials/jennifer-lee.jpg"
  },
  {
    text: "The peace of mind that comes with knowing our facilities are protected 24/7 is invaluable. InfraGuard delivers on their promises consistently.",
    author: "David Wilson",
    role: "Facility Manager, Nordex Manufacturing",
    image: "/images/testimonials/david-wilson.jpg"
  },
  {
    text: "InfraGuard's cybersecurity team detected and prevented a potential breach that could have cost us millions. Their proactive approach is worth every penny.",
    author: "Maria Garcia",
    role: "CTO, Financial Services Inc.",
    image: "/images/testimonials/maria-garcia.jpg"
  },
  {
    text: "The seamless integration between physical security personnel and digital systems gives us complete visibility and control over our security operations.",
    author: "Thomas Brown",
    role: "Operations VP, Tech Innovations",
    image: "/images/testimonials/thomas-brown.jpg"
  }
]

const stats = [
  { name: 'Years of Experience', value: '10+' },
  { name: 'Satisfied Clients', value: '100+' },
  { name: 'Security Personnel', value: '50+' },
  { name: 'Success Rate', value: '99.9%' },
]

const partners = [
  {
    name: 'Qantas',
    logo: '/images/partners/qantas.svg',
  },
  {
    name: 'Nordex',
    logo: '/images/partners/nordex.svg',
  },
  {
    name: 'Nokia',
    logo: '/images/partners/nokia.svg',
  },
  {
    name: 'CID Group',
    logo: '/images/partners/cid.svg',
  },
  {
    name: 'Verizon',
    logo: '/images/partners/verizon.svg',
  },
  {
    name: 'SAP',
    logo: '/images/partners/sap.svg',
  },
  {
    name: 'Bosch',
    logo: '/images/partners/bosch.svg',
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Auto-advance testimonials carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialSlide((prev) => (prev + 1) % 6); // 6 slides total
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => (prev + 1) % 6);
  };
  
  const prevTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => (prev - 1 + 6) % 6);
  };

  return (
    <div className="bg-tech-pattern">
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
      <AnimatedSection className="bg-gradient-tech mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 rounded-xl shadow-lg my-12">
        <AnimatedElement type="fadeUp">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-primary-700">Latest Updates</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stay informed with InfraGuard
            </p>
          </div>
        </AnimatedElement>
        
        <motion.div 
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {latestNews.map((item, index) => (
            <motion.article
              key={item.title}
              className="flex flex-col items-start card-shadow bg-white rounded-xl overflow-hidden"
              variants={staggerItem}
              whileHover="hover"
              initial="initial"
              animate="initial"
              custom={index}
            >
              <motion.div variants={cardHover} className="h-full w-full">
                <div className="relative w-full">
                  <img
                    src={item.image}
                    alt=""
                    className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                </div>
                <div className="p-6 w-full">
                  <div className="flex items-center gap-x-4 text-xs">
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
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatedSection>

      {/* Features section */}
      <AnimatedSection className="bg-circuit py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/90"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedElement type="fadeUp" className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-gray-300">Comprehensive Security</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to secure your business
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We provide end-to-end security solutions that safeguard businesses in both the physical and digital worlds.
            </p>
          </AnimatedElement>
          
          <motion.div 
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  className="flex flex-col glass-effect rounded-lg p-6 hover:bg-primary-800/50 transition-all cursor-pointer"
                  variants={staggerItem}
                  whileHover={{ y: -5 }}
                  custom={index}
                >
                  <Link to={feature.link} className="flex flex-col h-full">
                    <dt className="flex items-center justify-center text-base font-semibold leading-7 text-white">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-700">
                        <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </div>
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-center">
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.name}</h3>
                      <p className="flex-auto text-gray-200 mb-4">{feature.description}</p>
                      <p className="mt-auto">
                        <span className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
                          Learn more <span aria-hidden="true">→</span>
                        </span>
                      </p>
                    </dd>
                  </Link>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Testimonials section */}
      <AnimatedSection className="bg-tech-light mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 my-12 rounded-xl">
        <AnimatedElement type="fadeUp">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by leading businesses
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hear from our clients about how InfraGuard has transformed their security operations.
            </p>
          </div>
        </AnimatedElement>
        
        <div className="relative mt-16">
          {/* Arrow Controls - Left */}
          <button
            onClick={prevTestimonialSlide}
            className="absolute -left-12 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary-700/30 p-3 text-white hover:bg-primary-700/50 hidden lg:block"
            aria-label="Previous testimonial slide"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          {/* Testimonial slides */}
          <div className="overflow-hidden pb-16">
            {[0, 1, 2, 3, 4, 5].map((slideIndex) => (
              <div 
                key={slideIndex}
                className={`transition-all duration-700 ease-in-out ${
                  currentTestimonialSlide === slideIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
                  {/* Left column: Image */}
                  <div className="flex items-center justify-center">
                    <motion.div
                      className="rounded-2xl overflow-hidden shadow-lg w-full"
                      initial={{ opacity: 0, x: -20 }}
                      animate={currentTestimonialSlide === slideIndex ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="relative h-80">
                        <div className="absolute inset-0 bg-primary-700/10 flex items-center justify-center">
                          <span className="text-xl font-semibold text-primary-700">
                            {slideIndex % 2 === 0 ? 'Security services' : 'Security solutions'}
                          </span>
                        </div>
                        <img 
                          src={slideIndex % 3 === 0 ? "/images/security-team.jpg" : 
                               slideIndex % 3 === 1 ? "/images/cyber-security.jpg" : 
                               "/images/security-monitoring.jpg"} 
                          alt={slideIndex % 2 === 0 ? "Security services" : "Security solutions"}
                          className="h-full w-full object-cover opacity-90"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Security';
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Right column: Testimonial */}
                  <div className="flex items-center">
                    <motion.figure
                      className="glass-effect rounded-2xl p-8 w-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={currentTestimonialSlide === slideIndex ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <blockquote className="text-gray-900">
                        <p className="text-lg">{`"${testimonials[slideIndex].text}"`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                          <img 
                            src={testimonials[slideIndex].image} 
                            alt={testimonials[slideIndex].author}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = 'https://via.placeholder.com/150';
                            }}
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{testimonials[slideIndex].author}</div>
                          <div className="text-gray-600">{testimonials[slideIndex].role}</div>
                        </div>
                      </figcaption>
                    </motion.figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Arrow Controls - Right */}
          <button
            onClick={nextTestimonialSlide}
            className="absolute -right-12 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary-700/30 p-3 text-white hover:bg-primary-700/50 hidden lg:block"
            aria-label="Next testimonial slide"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          {/* Mobile Arrow Controls (visible only on small screens) */}
          <div className="flex justify-between lg:hidden absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 px-2">
            <button
              onClick={prevTestimonialSlide}
              className="rounded-full bg-primary-700/30 p-2 text-white hover:bg-primary-700/50"
              aria-label="Previous testimonial slide"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonialSlide}
              className="rounded-full bg-primary-700/30 p-2 text-white hover:bg-primary-700/50"
              aria-label="Next testimonial slide"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
          
          {/* Carousel Controls */}
          <div className="absolute -bottom-10 left-0 right-0 z-20 flex justify-center space-x-2">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialSlide(index)}
                className={`h-2 w-8 rounded-full ${
                  currentTestimonialSlide === index ? 'bg-primary-700' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Stats */}
      <AnimatedSection className="bg-gradient-blue mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8 rounded-xl shadow-lg">
        <div className="mx-auto max-w-2xl lg:max-w-none py-12">
          <AnimatedElement type="fadeUp" className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by businesses across Australia
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our track record speaks for itself with successful deployments and satisfied clients.
            </p>
          </AnimatedElement>
          
          <motion.dl 
            className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                className="flex flex-col glass-effect p-8"
                variants={staggerItem}
                custom={index}
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </AnimatedSection>

      {/* Partners section */}
      <AnimatedSection className="bg-dots py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <AnimatedElement type="fadeUp" className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Partners
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 bg-primary-600"></div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We collaborate with industry leaders to deliver the best security solutions
              </p>
            </AnimatedElement>
            
            <AnimatedElement type="fadeUp" delay={0.2} className="relative mt-16 glass-effect rounded-xl p-4">
              {/* Gradient masks for smooth edges */}
              <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white to-transparent z-10"></div>
              
              {/* Marquee container */}
              <div className="overflow-hidden relative w-full">
                <div className="flex animate-marquee items-center space-x-16 py-8">
                  {[...partners, ...partners, ...partners].map((partner, index) => (
                    <div
                      key={index}
                      className="flex h-24 w-40 flex-shrink-0 items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA section */}
      <CTASection 
        title="Ready to secure your business?"
        description="Contact us now to discuss your security needs and get a customized solution for your business."
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
      />
    </div>
  )
} 