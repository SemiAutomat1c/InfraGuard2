import { Fragment, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const physicalSecurityServices = [
  {
    name: 'Infrastructure Guarding',
    href: '/services/infrastructure-guarding',
  },
  {
    name: 'Construction Site Security',
    href: '/services/construction-site-security',
  },
  {
    name: 'Access Control',
    href: '/services/access-control',
  },
  {
    name: '24/7 On-Site Security',
    href: '/services/24-7-on-site-security',
  },
  {
    name: 'Security Risk Assessment',
    href: '/services/security-risk-assessment',
  },
]

const cyberSecurityServices = [
  {
    name: 'Network Security',
    href: '/services/network-security',
  },
  {
    name: 'Firewall & Intrusion Prevention',
    href: '/services/firewall-intrusion-prevention',
  },
  {
    name: 'Endpoint Protection',
    href: '/services/endpoint-protection',
  },
  {
    name: 'Email Security',
    href: '/services/email-security',
  },
  {
    name: 'Vulnerability Assessment',
    href: '/services/vulnerability-assessment',
  },
  {
    name: 'Cybersecurity Consulting',
    href: '/services/cybersecurity-consulting',
  },
]

const industries = [
  {
    name: 'Construction & Real Estate',
    description: 'Protecting construction sites, properties, and development projects.',
    href: '/industries/construction',
  },
  {
    name: 'Logistics & Warehousing',
    description: 'Securing storage facilities and distribution centers.',
    href: '/industries/logistics',
  },
  {
    name: 'Industrial Zones',
    description: 'Comprehensive security for manufacturing plants and industrial facilities.',
    href: '/industries/industrial',
  },
  {
    name: 'Financial Services',
    description: 'Advanced cybersecurity and physical protection for financial institutions.',
    href: '/industries/financial',
  },
  {
    name: 'Local Government Units (LGUs)',
    description: 'Security solutions for government facilities and public infrastructure.',
    href: '/industries/government',
  },
  {
    name: 'IT-Enabled Businesses',
    description: 'Specialized cybersecurity and physical protection for technology companies.',
    href: '/industries/it',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Helper function for navigation
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // If we're already on the same page, prevent default and manually scroll to top
    if (location.pathname === path) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    // For mobile menu, close it after navigation
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className={classNames(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-primary-900'
    )}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link 
            to="/" 
            className="-m-1.5 p-1.5"
            onClick={(e) => handleNavigation(e, '/')}
          >
            <span className="sr-only">InfraGuard</span>
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className={classNames(
                "text-2xl font-bold leading-none transition-colors duration-300",
                isScrolled ? "text-primary-800" : "text-white"
              )}>
                InfraGuard
              </span>
              <span className={classNames(
                "text-xs font-medium transition-colors duration-300",
                isScrolled ? "text-gray-600" : "text-gray-300"
              )}>
                Technologies
              </span>
            </motion.div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={classNames(
              "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5",
              isScrolled ? "text-gray-700" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className={classNames(
              location.pathname === '/'
                ? isScrolled ? 'text-primary-800' : 'text-white font-bold'
                : isScrolled ? 'text-gray-700 hover:text-primary-700' : 'text-white hover:text-gray-200',
              'text-sm font-semibold leading-6 transition-colors duration-300'
            )}
            onClick={(e) => handleNavigation(e, '/')}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={classNames(
              location.pathname === '/about'
                ? isScrolled ? 'text-primary-800' : 'text-white font-bold'
                : isScrolled ? 'text-gray-700 hover:text-primary-700' : 'text-white hover:text-gray-200',
              'text-sm font-semibold leading-6 transition-colors duration-300'
            )}
            onClick={(e) => handleNavigation(e, '/about')}
          >
            ABOUT US
          </Link>

          <Popover className="relative">
            <Popover.Button className={classNames(
              "flex items-center gap-x-1 text-sm font-semibold leading-6 outline-none transition-colors duration-300",
              location.pathname.includes('/services')
                ? isScrolled ? 'text-primary-800' : 'text-white font-bold'
                : isScrolled ? "text-gray-700 hover:text-primary-700" : "text-white hover:text-gray-200"
            )}>
              SERVICES
              <ChevronDownIcon className={classNames(
                "h-5 w-5 flex-none",
                isScrolled ? "text-gray-500" : "text-gray-300"
              )} aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="flex">
                  <div className="w-1/2 p-4 border-r border-gray-200">
                    <h3 className="text-base font-semibold text-primary-800 pb-2 mb-3 border-b border-primary-100">
                      Physical Security Solutions
                    </h3>
                    <div className="space-y-3">
                      {physicalSecurityServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block text-sm text-gray-700 hover:text-primary-700"
                          onClick={(e) => handleNavigation(e, service.href)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="w-1/2 p-4">
                    <h3 className="text-base font-semibold text-primary-800 pb-2 mb-3 border-b border-primary-100">
                      Cybersecurity Solutions
                    </h3>
                    <div className="space-y-3">
                      {cyberSecurityServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block text-sm text-gray-700 hover:text-primary-700"
                          onClick={(e) => handleNavigation(e, service.href)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                  <Link
                    to="/services"
                    className="flex items-center text-sm font-medium text-primary-700 hover:text-primary-800"
                    onClick={(e) => handleNavigation(e, '/services')}
                  >
                    View all services <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className={classNames(
              "flex items-center gap-x-1 text-sm font-semibold leading-6 outline-none transition-colors duration-300",
              location.pathname.includes('/industries')
                ? isScrolled ? 'text-primary-800' : 'text-white font-bold'
                : isScrolled ? "text-gray-700 hover:text-primary-700" : "text-white hover:text-gray-200"
            )}>
              INDUSTRIES
              <ChevronDownIcon className={classNames(
                "h-5 w-5 flex-none",
                isScrolled ? "text-gray-500" : "text-gray-300"
              )} aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {industries.map((item) => (
                      <div
                        key={item.name}
                        className="group"
                      >
                        <Link 
                          to={item.href} 
                          className="font-medium text-gray-900 block"
                          onClick={(e) => handleNavigation(e, item.href)}
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                  <Link
                    to="/industries"
                    className="flex items-center text-sm font-medium text-primary-700 hover:text-primary-800"
                    onClick={(e) => handleNavigation(e, '/industries')}
                  >
                    View all industries <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            to="/careers"
            className={classNames(
              location.pathname === '/careers'
                ? isScrolled ? 'text-primary-800' : 'text-white font-bold'
                : isScrolled ? 'text-gray-700 hover:text-primary-700' : 'text-white hover:text-gray-200',
              'text-sm font-semibold leading-6 transition-colors duration-300'
            )}
            onClick={(e) => handleNavigation(e, '/careers')}
          >
            CAREERS
          </Link>

          <Link
            to="/contact"
            className={classNames(
              location.pathname === '/contact'
                ? isScrolled ? 'text-primary-800' : 'text-white font-bold'
                : isScrolled ? 'text-gray-700 hover:text-primary-700' : 'text-white hover:text-gray-200',
              'text-sm font-semibold leading-6 transition-colors duration-300'
            )}
            onClick={(e) => handleNavigation(e, '/contact')}
          >
            CONTACT US
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/contact"
            className="rounded-md bg-primary-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
            onClick={(e) => handleNavigation(e, '/contact')}
          >
            REQUEST A QUOTE
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">InfraGuard</span>
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-none text-primary-800">InfraGuard</span>
                <span className="text-xs font-medium text-gray-600">Technologies</span>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={(e) => handleNavigation(e, '/')}
                >
                  HOME
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={(e) => handleNavigation(e, '/about')}
                >
                  ABOUT US
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        SERVICES
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        <div className="py-2">
                          <h4 className="px-6 text-sm font-semibold text-gray-900">Physical Security Solutions</h4>
                          {physicalSecurityServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="block rounded-lg py-2 pl-9 pr-3 text-sm leading-7 text-gray-700 hover:bg-gray-50"
                              onClick={(e) => handleNavigation(e, service.href)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                        <div className="py-2">
                          <h4 className="px-6 text-sm font-semibold text-gray-900">Cybersecurity Solutions</h4>
                          {cyberSecurityServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="block rounded-lg py-2 pl-9 pr-3 text-sm leading-7 text-gray-700 hover:bg-gray-50"
                              onClick={(e) => handleNavigation(e, service.href)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        INDUSTRIES
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {industries.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={(e) => handleNavigation(e, item.href)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/careers"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={(e) => handleNavigation(e, '/careers')}
                >
                  CAREERS
                </Link>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={(e) => handleNavigation(e, '/contact')}
                >
                  CONTACT US
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/contact"
                  className="block rounded-md bg-primary-800 px-3 py-2.5 text-base font-semibold text-white hover:bg-primary-700 text-center"
                  onClick={(e) => handleNavigation(e, '/contact')}
                >
                  REQUEST A QUOTE
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
} 