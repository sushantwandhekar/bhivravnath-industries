import Link from 'next/link'
import { Phone, MessageSquare } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-steel-900 via-steel-800 to-primary-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block bg-primary-600/20 backdrop-blur-sm border border-primary-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-primary-300 font-semibold">Since 1995 • ISO Certified</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            30+ Years of Trusted
            <span className="block text-primary-400 mt-2">Industrial Fabrication Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-steel-200 mb-10 leading-relaxed">
            Premium fabrication solutions for industrial, commercial, and residential needs across Maharashtra
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+919860249305"
              className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Phone size={22} />
              <span>Call Now</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center space-x-2 bg-white text-steel-900 hover:bg-steel-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <MessageSquare size={22} />
              <span>Get a Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
