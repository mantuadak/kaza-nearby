// Business configuration - Easy to update
export const config = {
  brand: {
    name: 'KAZA Nearby',
    tagline: 'Trusted Home Services in Kolkata',
    website: 'www.kazanearby.com',
  },
  contact: {
    whatsapp: '8280000000',
    phone: '+91 9000000000',
    email: 'contact@kazanearby.com',
  },
  social: {
    facebook: 'https://facebook.com/kazanearby',
    instagram: 'https://instagram.com/kazanearby',
    twitter: 'https://twitter.com/kazanearby',
  },
  categories: {
    cleaning: {
      id: 'cleaning',
      name: 'Cleaning Services',
      description: 'Professional cleaning for bathrooms, kitchens, homes and more.',
      link: '/cleaning',
      services: [
        'Bathroom Cleaning',
        'Kitchen Cleaning',
        'Full Home Cleaning',
        'Sofa & Carpet Cleaning',
      ],
    },
    maid: {
      id: 'maid',
      name: 'Maid Services',
      description: 'Reliable monthly and part-time maid solutions for your home.',
      link: '/maid-service',
      badge: 'Most Requested',
      services: [
        'Monthly Maid',
        'Part-Time Maid',
        'Full-Time Maid',
        'Cooking',
        'Baby Care',
      ],
    },
    appliance: {
      id: 'appliance',
      name: 'Appliance Repair',
      description: 'Professional repair and maintenance for your home appliances.',
      link: '/appliance-repair',
      services: [
        'AC Service',
        'Refrigerator',
        'Washing Machine',
        'Geyser',
        'RO / Water Purifier',
      ],
    },
  },
  pricing: {
    'bathroom-cleaning': '₹499',
    'kitchen-cleaning': '₹849',
    'full-home-cleaning': '₹1,999',
    'ac-service': '₹499',
    'monthly-maid': '₹7,999/month',
  },
  areas: [
    'Salt Lake',
    'New Town',
    'Rajarhat',
    'Dum Dum',
    'Lake Town',
    'Garia',
    'Behala',
    'Tollygunge',
    'Howrah',
    'Madhyamgram',
    'Baguiati',
    'Kestopur',
  ],
  seo: {
    title: 'KAZA Nearby | Home Services in Kolkata',
    description: 'Book maid services, cleaning services and appliance repair in Kolkata. Get fast support from KAZA Nearby on WhatsApp.',
    keywords: 'home services kolkata, maid service kolkata, cleaning service kolkata, appliance repair kolkata',
  },
}

// WhatsApp message generator
export const getWhatsAppMessage = (category?: string): string => {
  const baseMessage = 'Hello KAZA Nearby, I need a home service.'
  if (!category) return baseMessage
  
  const categoryMessages: Record<string, string> = {
    cleaning: 'Hello KAZA Nearby, I want to book Cleaning Service.',
    maid: 'Hello KAZA Nearby, I want to book Maid Service.',
    appliance: 'Hello KAZA Nearby, I want Appliance Repair.',
  }
  
  return categoryMessages[category] || baseMessage
}

// WhatsApp link generator
export const getWhatsAppLink = (category?: string): string => {
  const message = encodeURIComponent(getWhatsAppMessage(category))
  return `https://wa.me/${config.contact.whatsapp}?text=${message}`
}

// Phone link generator
export const getPhoneLink = (): string => {
  return `tel:${config.contact.phone.replace(/\s/g, '')}`
}