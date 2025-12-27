export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  icon: string;
  bgColor: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  link: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}

