export interface Package {
  id: string;
  title: string;
  duration: number; // in days
  price: number;
  image: string;
  description: string;
  highlights: string[];
  includes: string[];
  excludes: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  activities: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
  avatar?: string;
  package?: string;
}

export interface TestimonialFormData {
  name: string;
  email: string;
  location: string;
  rating: number;
  comment: string;
  package?: string;
}

export interface Blog {
  id: string;
  title: string;
  category: 'jungle' | 'temple' | 'waterfall';
  image: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
}