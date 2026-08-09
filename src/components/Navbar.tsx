import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { config, getWhatsAppLink } from '../config'

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="sticky top-0 z-50 hidden md:block bg-kaza-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-kaza-orange to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-kaza-white font-bold text-lg">K</span>
              </div>
              <div>
                <h1 className="font-bold text-lg text-kaza-dark">KAZA</h1>
                <p className="text-xs text-gray-500">Nearby</p>
              </div>
            </Link>

            <div className="flex items-center gap-8">
              <div className="flex gap-6">
                <a href="#services" className="text-gray-700 hover:text-kaza-orange font-medium text-sm transition">
                  Services
                </a>
                <Link to="/maid-service" className="text-gray-700 hover:text-kaza-orange font-medium text-sm transition">
                  Maid Service
                </Link>
                <Link to="/cleaning" className="text-gray-700 hover:text-kaza-orange font-medium text-sm transition">
                  Cleaning
                </Link>
                <Link to="/appliance-repair" className="text-gray-700 hover:text-kaza-orange font-medium text-sm transition">
                  Appliance Repair
                </Link>
                <a href="#why-kaza" className="text-gray-700 hover:text-kaza-orange font-medium text-sm transition">
                  Why KAZA
                </a>
                <a href="#reviews" className="text-gray-700 hover:text-kaza-orange font-medium text-sm transition">
                  Reviews
                </a>
                <a href="#faq" className="text-gray-700 hover:text-kaza-orange font-medium text-sm transition">
                  FAQ
                </a>
              </div>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-kaza-green text-kaza-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-green-700 transition flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.946-2.504 2.432-2.504 4.9 0 1.079.27 2.142.791 3.141L2.747 15.l1.752-.282c.930.537 1.965.87 3.03.87 3.898 0 7.067-3.1 7.067-6.916 0-1.800-.775-3.503-2.139-4.778-1.364-1.274-3.165-1.978-5.087-1.978z"/>
                </svg>
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-kaza-white border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-kaza-orange to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-kaza-white font-bold">K</span>
            </div>
            <span className="font-bold text-kaza-dark">KAZA</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-kaza-green text-kaza-white p-2 rounded-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.946-2.504 2.432-2.504 4.9 0 1.079.27 2.142.791 3.141L2.747 15.l1.752-.282c.93.537 1.965.87 3.03.87 3.898 0 7.067-3.1 7.067-6.916 0-1.8-.775-3.503-2.139-4.778-1.364-1.274-3.165-1.978-5.087-1.978z"/>
              </svg>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-kaza-dark" />
              ) : (
                <Menu className="w-6 h-6 text-kaza-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-kaza-white border-t border-gray-100 px-4 py-4 space-y-3">
            <a href="#services" className="block text-gray-700 hover:text-kaza-orange font-medium py-2">
              Services
            </a>
            <Link to="/maid-service" className="block text-gray-700 hover:text-kaza-orange font-medium py-2">
              Maid Service
            </Link>
            <Link to="/cleaning" className="block text-gray-700 hover:text-kaza-orange font-medium py-2">
              Cleaning
            </Link>
            <Link to="/appliance-repair" className="block text-gray-700 hover:text-kaza-orange font-medium py-2">
              Appliance Repair
            </Link>
            <a href="#why-kaza" className="block text-gray-700 hover:text-kaza-orange font-medium py-2">
              Why KAZA
            </a>
            <a href="#reviews" className="block text-gray-700 hover:text-kaza-orange font-medium py-2">
              Reviews
            </a>
            <a href="#faq" className="block text-gray-700 hover:text-kaza-orange font-medium py-2">
              FAQ
            </a>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  )
}