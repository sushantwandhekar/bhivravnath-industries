import { Award, Users, Briefcase } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      icon: Award,
      number: '30+',
      label: 'Years Experience',
      description: 'Industry-leading expertise'
    },
    {
      icon: Users,
      number: '3000+',
      label: 'Happy Customers',
      description: 'Across Maharashtra'
    },
    {
      icon: Briefcase,
      number: '750+',
      label: 'Projects Completed',
      description: 'On-time delivery guaranteed'
    }
  ]

  return (
    <section className="py-16 bg-steel-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <Icon className="text-primary-600" size={32} />
                </div>
                <div className="text-5xl font-heading font-bold text-steel-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-steel-700 mb-2">
                  {stat.label}
                </div>
                <div className="text-steel-600">
                  {stat.description}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
