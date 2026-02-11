import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mr. Mahesh Bora',
      review: 'Reliable workmanship and long-lasting fabrication quality.',
      rating: 5
    },
    {
      name: 'Mr. Jay Sancheti',
      review: 'Excellent finishing and on-time delivery.',
      rating: 5
    },
    {
      name: 'Mr. Abhishek Zawre',
      review: 'Highly professional team with strong technical knowledge.',
      rating: 5
    },
    {
      name: 'Mr. Nikhil Fulsunder',
      review: 'Trustworthy fabrication partner for industrial projects.',
      rating: 5
    },
    {
      name: 'Mr. Tejas Raut',
      review: 'Outstanding service and robust fabrication solutions.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-steel-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-steel-300">
            Trusted by businesses and homeowners across Maharashtra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-steel-800 rounded-xl p-8 relative hover:bg-steel-700 transition-colors duration-300 border border-steel-700"
            >
              <Quote className="text-primary-400 opacity-20 absolute top-6 right-6" size={48} />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              
              <p className="text-steel-200 text-lg mb-6 leading-relaxed relative z-10">
                "{testimonial.review}"
              </p>
              
              <div className="border-t border-steel-600 pt-4">
                <p className="text-white font-semibold text-lg">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional testimonials for mobile scroll */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {testimonials.slice(3).map((testimonial, index) => (
            <div
              key={index + 3}
              className="bg-steel-800 rounded-xl p-8 relative hover:bg-steel-700 transition-colors duration-300 border border-steel-700"
            >
              <Quote className="text-primary-400 opacity-20 absolute top-6 right-6" size={48} />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              
              <p className="text-steel-200 text-lg mb-6 leading-relaxed relative z-10">
                "{testimonial.review}"
              </p>
              
              <div className="border-t border-steel-600 pt-4">
                <p className="text-white font-semibold text-lg">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
