export interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  business: string;
  image: string;
  quote: string;
  rating: number;
}