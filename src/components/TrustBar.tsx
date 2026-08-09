import React from 'react'

export const TrustBar: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-kaza-dark text-kaza-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-kaza-orange mb-2">5000+</div>
            <p className="text-gray-300 text-sm md:text-base">Happy Customers</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-kaza-orange mb-2">1000+</div>
            <p className="text-gray-300 text-sm md:text-base">Monthly Bookings</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-kaza-orange mb-2">24/7</div>
            <p className="text-gray-300 text-sm md:text-base">WhatsApp Support</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-kaza-orange mb-2">4.8/5</div>
            <p className="text-gray-300 text-sm md:text-base">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}