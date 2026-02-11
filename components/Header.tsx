'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-steel-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl md:text-3xl font-heading font-bold">
              <span className="text-white">Bhivravnath</span>
              <span className="text-primary-400"> Industries</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-steel-200 hover:text-primary-400 font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+919860249305"
              className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 px-6 py-2 rounded-lg transition-colors duration-300"
            >
              <Phone size={18} />
              <span className="font-semibold">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-steel-200 hover:text-primary-400 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+919860249305"
              className="flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 px-6 py-3 rounded-lg w-full"
            >
              <Phone size={18} />
              <span className="font-semibold">Call Now</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
