import { Award, Users, Target, Heart } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Bhivravnath Industries',
  description: 'Learn about Bhivravnath Industries - 30+ years of fabrication excellence led by Mr. Shivaji Wandhekar and Er. Mayur Wandhekar. Serving 3000+ customers with premium fabrication solutions.',
}

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-steel-900 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              About Bhivravnath Industries
            </h1>
            <p className="text-xl text-steel-200">
              Three decades of engineering excellence and trusted fabrication solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center">Our Legacy</h2>
            <div className="prose prose-lg max-w-none text-steel-700 leading-relaxed space-y-6">
              <p className="text-xl">
                Established in 1995, <strong className="text-steel-900">Bhivravnath Industries</strong> has grown from a small fabrication workshop to one of Maharashtra's most trusted industrial fabrication companies. With over 30 years of dedicated service, we have successfully completed more than 750 projects and earned the loyalty of 3000+ satisfied customers.
              </p>
              
              <p className="text-lg">
                Our journey began with a simple mission: to deliver uncompromising quality and reliability in every fabrication project. Under the visionary leadership of <strong className="text-steel-900">Mr. Shivaji Wandhekar</strong> and <strong className="text-steel-900">Er. Mayur Wandhekar</strong>, we have consistently exceeded client expectations through technical expertise, innovative solutions, and unwavering commitment to excellence.
              </p>

              <p className="text-lg">
                Located strategically at MIDC Nagapur in Ahilyanagar, our state-of-the-art facility is equipped with modern machinery and operated by a team of highly skilled engineers and technicians. We specialize in comprehensive fabrication services including industrial shades, rolling shutters, safety doors, window grills, customized food carts, and all types of custom fabrication work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-16">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-primary-600" size={48} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-steel-900 mb-2">
                Mr. Shivaji Wandhekar
              </h3>
              <p className="text-primary-600 font-semibold mb-4">Founder & Managing Director</p>
              <p className="text-steel-600 leading-relaxed">
                With over 30 years of industry experience, Mr. Wandhekar's vision and dedication have been the cornerstone of our success and growth.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-primary-600" size={48} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-steel-900 mb-2">
                Er. Mayur Wandhekar
              </h3>
              <p className="text-primary-600 font-semibold mb-4">Technical Director</p>
              <p className="text-steel-600 leading-relaxed">
                Er. Mayur brings engineering excellence and innovative solutions, ensuring every project meets the highest technical standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Quality First',
                description: 'Uncompromising standards in every fabrication project'
              },
              {
                icon: Heart,
                title: 'Customer Focus',
                description: 'Building lasting relationships through exceptional service'
              },
              {
                icon: Award,
                title: 'Technical Excellence',
                description: 'Leveraging expertise and modern technology'
              },
              {
                icon: Users,
                title: 'Integrity',
                description: 'Transparent operations and honest communication'
              }
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                    <Icon className="text-primary-600" size={36} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-steel-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-steel-600">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-steel-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Partner With Experience
          </h2>
          <p className="text-xl text-steel-200 mb-10 max-w-2xl mx-auto">
            Join 3000+ satisfied customers who trust Bhivravnath Industries for their fabrication needs
          </p>
          <a
            href="tel:+919860249305"
            className="bg-white text-primary-600 hover:bg-steel-100 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  )
}
