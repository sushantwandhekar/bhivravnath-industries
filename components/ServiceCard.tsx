import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-steel-100">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-6">
        <Icon className="text-primary-600" size={32} />
      </div>
      <h3 className="text-2xl font-heading font-bold text-steel-900 mb-4">
        {title}
      </h3>
      <p className="text-steel-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
