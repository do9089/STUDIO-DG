import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowRight, Zap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://loremflickr.com/1600/900/cyberpunk,studio"
            alt="Studio Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-primary font-bold tracking-widest text-sm mb-4 animate-pulse">
            DESIGN x VIDEO x AI
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-tight">
            EXPANDING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              CREATIVITY
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            전통적인 디자인 감각과 생성형 AI의 결합.<br className="hidden md:block" />
            압도적인 속도와 효율로 상상을 현실로 구현합니다.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary text-black font-bold text-lg hover:bg-white transition-colors duration-300 w-full md:w-auto"
            >
              협업 제안하기
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-white/20 text-white font-medium text-lg hover:border-primary hover:text-primary transition-colors duration-300 w-full md:w-auto"
            >
              서비스 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Selected Works</h2>
            <p className="text-gray-400">Design, Video & AI Experiments</p>
          </div>
        </div>

        {/* Masonry Layout using Tailwind Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {PROJECTS.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="block group relative rounded-lg overflow-hidden bg-surface break-inside-avoid"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-xs font-bold tracking-wider mb-1">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <div className="flex items-center text-gray-300 text-sm mt-2">
                  <span>View Project</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* AI Efficiency Banner */}
      <section className="py-20 bg-surface border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <div className="inline-flex items-center space-x-2 text-primary mb-4">
                <Zap size={20} fill="currentColor" />
                <span className="font-bold tracking-wide">AI POWERED WORKFLOW</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                더 빠르게, <br />
                더 놀랍게.
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                AI 기술을 활용하여 단순 반복 작업 시간을 70% 단축하고, 
                창의적인 디렉팅과 퀄리티 향상에 집중합니다. 
                스타트업의 속도에 맞춘 최적의 결과물을 약속합니다.
              </p>
              <Link to="/about" className="text-white border-b border-primary pb-1 hover:text-primary transition-colors">
                더 자세히 알아보기
              </Link>
            </div>
            <div className="md:w-1/2 relative">
               <div className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/50 relative group">
                  <img 
                    src="https://loremflickr.com/800/450/technology,ai" 
                    alt="AI Workflow" 
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white/80">Workflow Visualization</span>
                  </div>
               </div>
               {/* Floating Badge */}
               <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-lg shadow-xl hidden md:block">
                  <p className="text-3xl font-bold">3x</p>
                  <p className="text-xs uppercase tracking-wider">Faster Delivery</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;