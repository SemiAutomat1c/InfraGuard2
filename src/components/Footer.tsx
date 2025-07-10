import { Link, useLocation } from 'react-router-dom'
import { useCallback } from 'react'

const navigation = {
  solutions: [
    { name: 'Physical Security', href: '/services#physical' },
    { name: 'Construction Security', href: '/services#physical' },
    { name: 'Cyber Security', href: '/services#cyber' },
    { name: 'Access Control', href: '/services#physical' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.531A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  const location = useLocation()
  
  // Helper function for navigation
  const handleNavigation = useCallback((e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // If we're already on the same page, prevent default and manually scroll to top
    if (location.pathname === path.split('#')[0]) {
      // If there's a hash, scroll to that element
      if (path.includes('#')) {
        e.preventDefault()
        const hash = path.split('#')[1]
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // Otherwise scroll to top
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }, [location.pathname])

  return (
    <footer className="bg-primary-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link 
              to="/" 
              className="flex flex-col"
              onClick={(e) => handleNavigation(e, '/')}
            >
              <span className="text-2xl font-bold leading-none text-white">
                InfraGuard
              </span>
              <span className="text-xs font-medium text-gray-300">
                Technologies
              </span>
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Providing comprehensive security solutions to protect your assets, infrastructure, and data.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link 
                        to={item.href} 
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                        onClick={(e) => handleNavigation(e, item.href)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        to={item.href} 
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                        onClick={(e) => handleNavigation(e, item.href)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link 
                        to={item.href} 
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                        onClick={(e) => handleNavigation(e, item.href)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="tel:1800123456" className="text-sm leading-6 text-gray-300 hover:text-white">
                      1800 123 456
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@infraguard.com" className="text-sm leading-6 text-gray-300 hover:text-white">
                      info@infraguard.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} InfraGuard Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 