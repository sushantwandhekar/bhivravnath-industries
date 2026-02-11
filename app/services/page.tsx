import ServiceCard from '@/components/ServiceCard'
import { Factory, DoorOpen, ShieldCheck, Grid3x3, ShoppingCart, Wrench } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Bhivravnath Industries',
  description: 'Comprehensive fabrication services: Industrial Shades, Rolling Shutters, Safety Doors, Window Grills, Food Carts, and custom fabrication solutions in Ahilyanagar.',
}

export default function Services() {
  const services = [
    {
      icon: Factory,
      title: 'Industrial Shades',
      description: 'Heavy-duty industrial shading solutions designed for warehouses, factories, and commercial spaces. Our shades offer superior weather resistance, UV protection, and long-lasting durability. Custom designs available to match your specific requirements and site conditions.'
    },
    {
      icon: DoorOpen,
      title: 'Rolling Shutters',
      description: 'Premium quality automated and manual rolling shutters manufactured with high-grade materials. Perfect for shops, warehouses, and industrial facilities. Available in various sizes and finishes with advanced locking mechanisms for enhanced security and smooth operation.'
    },
    {
      icon: ShieldCheck,
      title: 'Safety Doors',
      description: 'High-security safety doors engineered for maximum protection. Manufactured using premium steel with advanced locking systems, fire-resistant options, and elegant designs suitable for residential and commercial applications. Customizable to meet specific security requirements.'
    },
    {
      icon: Grid3x3,
      title: 'Window Grills',
      description: 'Aesthetically designed window grills that combine security with visual appeal. Available in modern and traditional patterns, fabricated from high-quality materials with rust-resistant coatings. Custom sizing and designs to complement your architectural style.'
    },
    {
      icon: ShoppingCart,
      title: 'Customized Food Carts',
      description: 'Fully customized food carts designed for mobile food businesses. Featuring stainless steel construction, ample storage, and efficient layouts. Includes options for branding, lighting, and equipment integration tailored to your menu and operational needs.'
    },
    {
      icon: Wrench,
      title: 'All Types of Fabrication Work',
      description: 'Comprehensive fabrication services for diverse industrial, commercial, and residential needs. From structural steel fabrication to custom metalwork, our experienced team delivers precision engineering and quality craftsmanship for projects of any scale.'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-steel-900 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-steel-200">
              Comprehensive fabrication solutions backed by 30+ years of expertise
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-16">Our Work Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultation', description: 'Understanding your requirements' },
                { step: '02', title: 'Design', description: 'Creating custom solutions' },
                { step: '03', title: 'Fabrication', description: 'Precision manufacturing' },
                { step: '04', title: 'Installation', description: 'Professional setup & support' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-heading font-bold text-primary-600 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-steel-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-steel-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Need a Custom Fabrication Solution?
          </h2>
          <p className="text-xl text-primary-100 mb-10">
            Our team is ready to discuss your project requirements
          </p>
          <a
            href="tel:+919860249305"
            className="bg-white text-primary-600 hover:bg-steel-100 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-block"
          >
            Call +91 9860249305
          </a>
        </div>
      </section>
    </div>
  )
}
