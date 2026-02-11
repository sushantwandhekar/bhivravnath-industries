import Hero from '../components/Hero'
import Stats from '../components/Stats'
import ServiceCard from '../components/ServiceCard'
import Testimonials from '../components/Testimonials'
import Link from 'next/link'
import { Factory, DoorOpen, ShieldCheck, ArrowRight } from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: Factory,
      title: 'Industrial Shades',
      description: 'Heavy-duty industrial shading solutions for warehouses, factories, and commercial spaces with superior weather resistance.'
    },
    {
      icon: DoorOpen,
      title: 'Rolling Shutters',
      description: 'Automated and manual rolling shutters for enhanced security and convenience in commercial and industrial establishments.'
    },
    {
      icon: ShieldCheck,
      title: 'Safety Doors',
      description: 'High-security safety doors manufactured with premium materials ensuring maximum protection for homes and businesses.'
    }
  ]

  return (
    <>
      <Hero />
      <Stats />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-steel-900 mb-4">
              Our Specialized Services
            </h2>
            <p className="text-lg md:text-xl text-steel-600 mb-8">
              Comprehensive fabrication solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>View All Services</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-900 to-steel-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Why Choose Bhivravnath Industries?
            </h2>
            <p className="text-xl text-steel-200">
              Industry leadership backed by decades of excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'ISO Certified', description: 'Quality management systems' },
              { title: 'Expert Team', description: 'Skilled engineers and technicians' },
              { title: 'On-Time Delivery', description: 'Project completion guarantee' },
              { title: 'Competitive Pricing', description: 'Best value for quality work' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors duration-300">
                  <h3 className="text-2xl font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-steel-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-10">
            Get a free consultation and quote from our expert team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919860249305"
              className="bg-white text-primary-600 hover:bg-steel-100 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Call +91 9860249305
            </a>
            <Link
              href="/contact"
              className="bg-steel-900 text-white hover:bg-steel-800 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
