import Link from 'next/link'
import { Phone, MapPin, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-steel-900 text-steel-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Bhivravnath <span className="text-primary-400">Industries</span>
            </h3>
            <p className="text-steel-300 leading-relaxed">
              30+ years of excellence in industrial fabrication. Your trusted partner for quality and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+919860249305" className="hover:text-primary-400 transition-colors block">
                    +91 9860249305
                  </a>
                  <a href="tel:+919960118339" className="hover:text-primary-400 transition-colors block">
                    +91 9960118339
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  Plot No. M-55, MIDC Nagapur,<br />
                  In front of Vakhar Mahamandal,<br />
                  Ahilyanagar – 414111
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
            <ul className="space-y-2">
              <li>Monday - Saturday</li>
              <li className="text-white font-semibold">9:00 AM - 7:00 PM</li>
              <li className="mt-4">Sunday</li>
              <li className="text-steel-400">Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-steel-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-steel-400 text-center md:text-left">
              © 2026 Bhivravnath Industries. All rights reserved.
            </p>
            <p className="text-steel-400 text-center md:text-right">
              Managed by <span className="text-white font-semibold">Mr. Shivaji Wandhekar</span> & <span className="text-white font-semibold">Er. Mayur Wandhekar</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
