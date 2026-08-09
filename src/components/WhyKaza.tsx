import React from 'react'
import { CheckCircle } from 'lucide-react'

export const WhyKaza: React.FC = () => {
  const reasons = [
    {
      icon: 'verified',
      title: 'Verified Professionals',
      description: 'All our service providers are background checked and verified for your safety.',
    },
    {
      icon: 'price',
      title: 'Transparent Pricing',
      description: 'No hidden charges. Know exactly what you\'ll pay before booking.',
    },
    {
      icon: 'whatsapp',
      title: 'WhatsApp Booking',
      description: 'Book instantly on WhatsApp. No app download needed. Get instant confirmation.',
    },
    {
      icon: 'support',
      title: '24/7 Support',
      description: 'Our customer support team is always available to help you.',
    },
    {
      icon: 'flexible',
      title: 'Flexible Scheduling',
      description: 'Choose your preferred time slots. Reschedule anytime without penalties.',
    },
    {
      icon: 'local',
      title: 'Local Experts',
      description: 'We know Kolkata. Fast service coverage across all major areas.',
    },
  ]

  return (
    <section id="why-kaza" className="py-12 md:py-16 bg-kaza-light">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-kaza-dark mb-3">
            Why Choose KAZA?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We make home services simple, reliable, and affordable for every household in Kolkata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-kaza-orange text-kaza-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-kaza-dark mb-1">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}