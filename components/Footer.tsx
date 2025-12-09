import React from 'react';
import { Mail, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-white/5 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">DOGYUN.KIM</h3>
            <p className="text-gray-500 text-sm">
              Visual Director & AI Creative Specialist<br />
              Based in Seoul, Korea
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:contact@dogyun.kim" className="text-gray-400 hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} Kim Dogyun. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;