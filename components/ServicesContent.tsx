'use client'

import { Zap, Code, CheckCircle } from 'lucide-react'

export function ServicesContent() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'AI-Driven Productivity Tools',
            description: 'Enhance efficiency with smart, AI-powered solutions.',
            icon: <Zap className="w-12 h-12 text-purple-600" />
          },
          {
            title: 'Custom Software Development',
            description: 'Tailored software solutions with AI at their core.',
            icon: <Code className="w-12 h-12 text-purple-600" />
          },
          {
            title: 'AI Consultancy Services',
            description: 'Expert guidance on implementing AI in your business.',
            icon: <CheckCircle className="w-12 h-12 text-purple-600" />
          }
        ].map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            {service.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 