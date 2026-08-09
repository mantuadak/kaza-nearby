import React from 'react'
import { Star } from 'lucide-react'

export const Reviews: React.FC = () => {
  const reviews = [
    {
      name: 'Priya Sharma',
      location: 'Salt Lake',
      rating: 5,
      text: 'Best cleaning service in Kolkata! Very professional and punctual. Highly recommended.',
      service: 'Cleaning Service',
    },
    {
      name: 'Rajesh Kumar',
      location: 'New Town',
      rating: 5,
      text: 'Found our regular maid through KAZA. Very reliable and trustworthy. Great support team!',
      service: 'Maid Service',
    },
    {
      name: 'Anita Patel',
      location: 'Rajarhat',
      rating: 5,
      text: 'AC service was excellent. Technician knew exactly what to do. Fixed it quickly and efficiently.',
      service: 'Appliance Repair',
    },
    {
      name: 'Vikram Singh',
      location: 'Lake Town',
      rating: 5,
      text: 'WhatsApp booking is so convenient. No hassle, transparent pricing. Will use again!',
      service: 'Cleaning Service',
    },
    {
      name: 'Deepika Das',
      location: 'Tollygunge',
      rating: 5,
      text: 'Amazing service! The team was professional and completed the work in time. Very satisfied.',
      service: 'Full Home Cleaning',
    },
    {
      name: 'Arun Verma',
      location: 'Howrah',
      rating: 5,
      text: 'Customer support is exceptional. They resolved my issue immediately. Five stars!',
      service: 'Maid Service',
    },
  ]

  return (
    <section id="reviews" className="py-12 md:py-16 bg-kaza-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-kaza-dark mb-3">
            Customer Reviews
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy customers who trust KAZA for their home services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-kaza-light rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-kaza-dark">{review.name}</h3>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
                <span className="text-xs bg-kaza-orange text-kaza-white px-2 py-1 rounded">
                  {review.service}
                </span>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            <span className="text-2xl font-bold text-kaza-orange">4.8/5</span> rating on Google
          </p>
          <p className="text-sm text-gray-500">Based on 500+ verified customer reviews</p>
        </div>
      </div>
    </section>
  )
}