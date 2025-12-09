import { Project, Service, Experience, Skill } from './types';
import { Video, Palette, Bot, Zap, Film, Layers } from 'lucide-react';
import React from 'react';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Neon Genesis Branding',
    category: 'Brand Design',
    thumbnail: 'https://loremflickr.com/800/600/abstract,neon',
    description: 'Cyberpunk inspired brand identity for a tech startup.',
    fullDescription: 'A complete rebranding project for a fintech startup aiming to target Gen Z. utilized generative AI to create unique abstract textures that were then refined in Photoshop.',
    tools: ['Photoshop', 'Midjourney', 'Illustrator'],
    year: '2023'
  },
  {
    id: 'p2',
    title: 'Future City Commercial',
    category: 'Video Production',
    thumbnail: 'https://loremflickr.com/800/1000/city,night',
    description: '30s TV spot featuring AI-generated backgrounds.',
    fullDescription: 'Directed and edited a commercial where the actors were filmed on green screen and composited into an AI-generated futuristic city environment.',
    tools: ['After Effects', 'Premiere Pro', 'RunwayML'],
    year: '2024'
  },
  {
    id: 'p3',
    title: 'AI Fashion Week Editorial',
    category: 'AI Art',
    thumbnail: 'https://loremflickr.com/800/800/fashion,futuristic',
    description: 'Experimental fashion editorial using Stable Diffusion.',
    fullDescription: 'An exploration of non-existent fabrics and forms. This project challenged the boundaries of digital fashion.',
    tools: ['Stable Diffusion', 'ControlNet'],
    year: '2023'
  },
  {
    id: 'p4',
    title: 'Eco-Tech Dashboard UI',
    category: 'UI/UX',
    thumbnail: 'https://loremflickr.com/800/500/interface,screen',
    description: 'Data visualization dashboard for renewable energy.',
    fullDescription: 'Designed a complex dashboard for monitoring solar panel efficiency. AI was used to generate mock data patterns for user testing.',
    tools: ['Figma', 'ChatGPT'],
    year: '2024'
  },
  {
    id: 'p5',
    title: 'Holographic Music Video',
    category: 'Motion Graphics',
    thumbnail: 'https://loremflickr.com/800/1200/hologram,music',
    description: 'Lyric video with kinetic typography and holographic effects.',
    fullDescription: 'Produced a lyric video for an indie electronic artist. The holographic effects were achieved using custom shaders.',
    tools: ['Cinema 4D', 'After Effects'],
    year: '2023'
  },
  {
    id: 'p6',
    title: 'Product Launch 3D',
    category: '3D Design',
    thumbnail: 'https://loremflickr.com/800/600/product,minimal',
    description: 'Photorealistic 3D product rendering.',
    fullDescription: 'High-fidelity renders for a new smartwatch launch. Lighting setups were assisted by AI lighting tools.',
    tools: ['Blender', 'Photoshop'],
    year: '2024'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Video Editing & Motion',
    description: 'High-impact video editing with dynamic motion graphics.',
    priceRange: '₩1,500,000 ~',
    features: ['Cut Editing', 'Color Grading', '2D/3D Motion Graphics', 'Sound Design'],
    icon: 'video'
  },
  {
    id: 's2',
    title: 'Brand & Graphic Design',
    description: 'Visual identity design that speaks your brand\'s language.',
    priceRange: '₩2,000,000 ~',
    features: ['Logo Design', 'Brand Guidelines', 'Marketing Assets', 'UI/UX Design'],
    icon: 'design'
  },
  {
    id: 's3',
    title: 'AI Content Generation',
    description: 'Leveraging AI for rapid concepting and asset creation.',
    priceRange: '₩1,000,000 ~',
    features: ['AI Image Generation', 'Video Upscaling', 'Custom Model Training', 'Prompt Engineering'],
    icon: 'ai'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Adobe Suite', level: 95, category: 'Design' },
  { name: 'Figma', level: 90, category: 'Design' },
  { name: 'After Effects', level: 92, category: 'Video' },
  { name: 'Premiere Pro', level: 95, category: 'Video' },
  { name: 'Cinema 4D', level: 80, category: 'Video' },
  { name: 'Midjourney/Stable Diffusion', level: 95, category: 'AI' },
  { name: 'Runway Gen-2', level: 85, category: 'AI' },
  { name: 'Python (Basic)', level: 60, category: 'AI' },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'e1',
    year: '2023 - Present',
    role: 'Freelance Creative Director',
    company: 'Studio DK',
    description: 'Leading creative projects for fintech and fashion startups using AI-integrated workflows.'
  },
  {
    id: 'e2',
    year: '2020 - 2023',
    role: 'Senior Motion Designer',
    company: 'Pixel Wave Media',
    description: 'Directed motion graphic projects for broadcast television and digital advertising.'
  },
  {
    id: 'e3',
    year: '2018 - 2020',
    role: 'Visual Designer',
    company: 'Future Tech Inc.',
    description: 'Responsible for internal branding and UI assets for mobile applications.'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  video: <Video className="w-10 h-10 text-primary" />,
  design: <Palette className="w-10 h-10 text-secondary" />,
  ai: <Bot className="w-10 h-10 text-white" />,
};
