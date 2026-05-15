export interface Product {
  id: string
  name: string
  description: string
  category: 'Core AI' | 'SDK' | 'System' | 'Tool'
  version: string
  downloadUrl: string
  downloadsCount: number
  icon: string
  gradient: string
  createdAt: string
}

export interface BookingInquiry {
  id: string
  fullName: string
  email: string
  serviceType: string
  message: string
  status: 'pending' | 'reviewed' | 'scheduled'
  createdAt: string
}

export interface Service {
  id: string
  title: string
  description: string
  priceRange?: string
}
