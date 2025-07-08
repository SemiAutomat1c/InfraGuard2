import { Fragment, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  BuildingOfficeIcon,
  ServerIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const services = [
  {
    name: 'Physical Security',
    description: 'Professional on-site security personnel and systems',
    href: '/services#physical',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Construction Security',
    description: 'Specialized protection for construction sites',
    href: '/services#physical',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Cyber Security',
    description: 'Advanced digital infrastructure protection',
    href: '/services#cyber',
    icon: ServerIcon,
  },
  {
    name: 'Access Control',
    description: 'Smart access management solutions',
    href: '/services#physical',
    icon: LockClosedIcon,
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

  return (
    <header className={classNames(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-transparent'
    )}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">InfraGuard</span>
            <motion.div
              className={classNames(
                "text-2xl font-bold transition-colors duration-300",
                isScrolled ? "text-primary-800" : "text-white"
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              InfraGuard
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
          >
            Home
          </Link>
          <Link
            to="/about"
            className={classNames(
              location.pathname === '/about'
                ? isScrolled ? 'text-primary-800' : 'text-white font-bold'
                : isScrolled ? 'text-gray-700 hover:text-primary-700' : 'text-white hover:text-gray-200',
              'text-sm font-semibold leading-6 transition-colors duration-300'
            )}
          >
            About
          </Link>

          <Popover className="relative">
            <Popover.Button className={classNames(
              "flex items-center gap-x-1 text-sm font-semibold leading-6 outline-none transition-colors duration-300",
              isScrolled ? "text-gray-700 hover:text-primary-700" : "text-white hover:text-gray-200"
            )}>
              Services
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
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-200">
                <div className="p-4">
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-gray-200">
                        <item.icon className="h-6 w-6 text-primary-700 group-hover:text-primary-800" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link to={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            to="/contact"
            className={classNames(
              location.pathname === '/contact'
                ? isScrolled ? 'text-primary-800' : 'text-white font-bold'
                : isScrolled ? 'text-gray-700 hover:text-primary-700' : 'text-white hover:text-gray-200',
              'text-sm font-semibold leading-6 transition-colors duration-300'
            )}
          >
            Contact
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/contact"
            className={classNames(
              "rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
              isScrolled 
                ? "bg-primary-800 text-white hover:bg-primary-700 focus-visible:outline-primary-800" 
                : "bg-white text-primary-800 hover:bg-gray-100 focus-visible:outline-white"
            )}
          >
            Get Started
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">InfraGuard</span>
              <div className="text-2xl font-bold text-primary-800">InfraGuard</div>
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
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {services.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/contact"
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-primary-800 text-white hover:bg-primary-700 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
} 