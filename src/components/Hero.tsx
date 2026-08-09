import React from 'react'
import { getWhatsAppLink, getPhoneLink } from '../config'

export const Hero: React.FC = () => {
  return (
    <div className="pt-12 pb-12 md:pt-20 md:pb-16 bg-kaza-light">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-kaza-dark mb-4 leading-tight">
              Trusted Home Services in Kolkata
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Book professional cleaning, reliable maid services and appliance repair with fast WhatsApp support.
            </p>

            {/* Trust Points */}
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-kaza-green rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-kaza-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Verified Service Partners</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-kaza-green rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-kaza-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-kaza-green rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-kaza-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Fast WhatsApp Booking</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-kaza-green text-kaza-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.946-2.504 2.432-2.504 4.9 0 1.079.27 2.142.791 3.141L2.747 15.l1.752-.282c.93.537 1.965.87 3.03.87 3.898 0 7.067-3.1 7.067-6.916 0-1.8-.775-3.503-2.139-4.778-1.364-1.274-3.165-1.978-5.087-1.978z"/>
                </svg>
                Book on WhatsApp
              </a>
              <a
                href={`tel:${config.contact.phone.replace(/\s/g, '')}`}
                className="bg-kaza-dark text-kaza-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square bg-gradient-to-br from-kaza-orange/20 to-orange-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 mx-auto text-kaza-orange/40 mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                </svg>
                <p className="text-gray-500 font-medium">Professional Home Services Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { config } from '../config'