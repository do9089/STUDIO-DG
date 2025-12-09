export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  fullDescription?: string;
  tools: string[];
  year: string;
  beforeImage?: string;
  afterImage?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  features: string[];
  icon: 'video' | 'design' | 'ai';
}

export interface Experience {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Design' | 'Video' | 'AI';
}