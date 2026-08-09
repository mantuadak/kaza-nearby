import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How do I book a service on KAZA?',
      answer: 'Simply click "Book on WhatsApp" button, describe your service needs, and our team will confirm your booking within minutes. No app download required!',
    },
    {
      question: 'Are your service providers verified?',
      answer: 'Yes! All our professionals are background checked, verified, and trained. Your safety and security are our top priority.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'You can cancel or reschedule your booking free of charge up to 2 hours before the scheduled time. After that, a cancellation fee may apply.',
    },
    {
      question: 'Do you cover all areas of Kolkata?',
      answer: 'We cover all major areas of Kolkata including Salt Lake, New Town, Rajarhat, Howrah, and surrounding neighborhoods. Check availability while booking.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, UPI, credit cards, and debit cards. You can also pay via WhatsApp Pay or Google Pay for convenience.',
    },
    {
      question: 'Can I request a specific service provider?',
      answer: 'Yes! If you\'ve had a great experience with a provider, you can request them for your next booking. Subject to their availability.',
    },
    {
      question: 'Do you provide any warranty on services?',
      answer: 'Yes, we stand behind our work. If you\'re not satisfied, we offer a re-service guarantee within 24 hours at no extra cost.',
    },
    {
      question: 'How is pricing calculated?',
      answer: 'Pricing is transparent and based on service type, duration, and area. You\'ll get an exact quote before confirming your booking.',
    },
  ]

  return (
    <section id="faq" className="py-12 md:py-16 bg-kaza-light">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-kaza-dark mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about our services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-kaza-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <h3 className="text-lg font-semibold text-kaza-dark text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-kaza-orange flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-kaza-orange rounded-lg p-8 text-center text-kaza-white">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="mb-4">Our support team is available 24/7 to help you.</p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-kaza-white text-kaza-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}