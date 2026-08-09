import React from 'react'
import { config, getWhatsAppLink } from '../config'

export const Categories: React.FC = () => {
  return (
    <section id="services" className="py-12 md:py-16 bg-kaza-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-kaza-dark mb-3">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our trusted home services. Fast WhatsApp booking and transparent pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cleaning Card */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-kaza-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-kaza-dark mb-2">
              {config.categories.cleaning.name}
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              {config.categories.cleaning.description}
            </p>
            <div className="space-y-2 mb-6">
              {config.categories.cleaning.services.slice(0, 3).map((service) => (
                <p key={service} className="text-gray-700 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-kaza-orange rounded-full"></span>
                  {service}
                </p>
              ))}
            </div>
            <a
              href={getWhatsAppLink('cleaning')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-kaza-orange text-kaza-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition text-center block"
            >
              Book Now
            </a>
          </div>

          {/* Maid Card - Featured */}
          <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-8 hover:shadow-xl transition-shadow md:scale-105">
            <div className="inline-block bg-kaza-green text-kaza-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
              {config.categories.maid.badge}
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-kaza-green rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-kaza-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-kaza-dark mb-2">
              {config.categories.maid.name}
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              {config.categories.maid.description}
            </p>
            <div className="space-y-2 mb-6">
              {config.categories.maid.services.slice(0, 3).map((service) => (
                <p key={service} className="text-gray-700 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-kaza-green rounded-full"></span>
                  {service}
                </p>
              ))}
            </div>
            <a
              href={getWhatsAppLink('maid')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-kaza-green text-kaza-white py-3 rounded-lg font-semibold hover:bg-green-700 transition text-center block"
            >
              Book Now
            </a>
          </div>

          {/* Appliance Repair Card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-kaza-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.14 12.94c.4-1.08.4-2.8 0-3.88l2.85-2.22c.56-.4.67-1.2.3-1.8l-2.7-4.68c-.37-.6-1.23-.66-1.85-.12l-3.36 2.6c-.7-.53-1.49-.99-2.36-1.3l-.5-4.28C14.25 1.14 13.5.5 12.65.5h-5.3C6.5.5 5.75 1.14 5.57 2.02l-.5 4.28c-.87.31-1.66.77-2.36 1.3L1.35 5.4c-.62-.54-1.48-.48-1.85.12L-3.2 10.2c-.37.6-.26 1.4.3 1.8l2.85 2.22c-.4 1.08-.4 2.8 0 3.88l-2.85 2.22c-.56.4-.67 1.2-.3 1.8l2.7 4.68c.37.6 1.23.66 1.85.12l3.36-2.6c.7.53 1.49.99 2.36 1.3l.5 4.28c.18.88.93 1.52 1.78 1.52h5.3c.85 0 1.6-.64 1.78-1.52l.5-4.28c.87-.31 1.66-.77 2.36-1.3l3.36 2.6c.62.54 1.48.48 1.85-.12l2.7-4.68c.37-.6.26-1.4-.3-1.8l-2.85-2.22zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-kaza-dark mb-2">
              {config.categories.appliance.name}
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              {config.categories.appliance.description}
            </p>
            <div className="space-y-2 mb-6">
              {config.categories.appliance.services.slice(0, 3).map((service) => (
                <p key={service} className="text-gray-700 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  {service}
                </p>
              ))}
            </div>
            <a
              href={getWhatsAppLink('appliance')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 text-kaza-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center block"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}