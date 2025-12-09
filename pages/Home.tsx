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
            src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop"
            alt="Abstract Dark Neon Fluid"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
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
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            전통적인 디자인 감각과 생성형 AI의 결합.<br className="hidden md:block" />
            압도적인 속도와 효율로 상상을 현실로 구현합니다.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary text-white md:text-black font-bold text-lg hover:bg-white transition-colors duration-300 w-full md:w-auto rounded-none skew-x-[-10deg] hover:skew-x-0 transform"
            >
              <span className="block skew-x-[10deg] hover:skew-x-0">협업 제안하기</span>
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-white/20 text-white font-medium text-lg hover:border-primary hover:text-primary transition-colors duration-300 w-full md:w-auto rounded-none skew-x-[-10deg] hover:skew-x-0 transform"
            >
              <span className="block skew-x-[10deg] hover:skew-x-0">서비스 보기</span>
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
              className="block group relative rounded-lg overflow-hidden bg-surface break-inside-avoid shadow-lg hover:shadow-primary/20 transition-all duration-500"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
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
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
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
               <div className="aspect-video rounded-xl overflow-hidden border border-white/10 relative group shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop" 
                    alt="AI Workflow Tech" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full">
                       <span className="text-xl font-bold text-white tracking-widest">NEXT GEN STUDIO</span>
                    </div>
                  </div>
               </div>
               {/* Floating Badge */}
               <div className="absolute -bottom-6 -left-6 bg-secondary text-black p-6 shadow-xl hidden md:block border-l-4 border-primary">
                  <p className="text-3xl font-black">3x</p>
                  <p className="text-xs uppercase tracking-wider font-bold">Faster Delivery</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;