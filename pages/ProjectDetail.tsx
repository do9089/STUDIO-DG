import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, ExternalLink, Calendar, PenTool } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found. <Link to="/" className="text-primary ml-2 underline">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-6">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Gallery
      </button>

      {/* Header */}
      <div className="mb-12">
        <span className="text-primary font-bold tracking-widest text-sm block mb-4">{project.category}</span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{project.title}</h1>
        <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Main Image */}
      <div className="w-full aspect-video rounded-xl overflow-hidden mb-12 border border-white/10">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold text-white mb-6">Overview</h3>
          <p className="text-gray-400 leading-relaxed mb-8">
            {project.fullDescription}
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-6">Process & Result</h3>
          <p className="text-gray-400 leading-relaxed mb-8">
            이 프로젝트의 핵심은 시간 효율성과 고품질 결과물의 양립이었습니다.
            기존 방식으로 2주가 소요될 작업을 AI 툴을 활용하여 4일 만에 컨셉을 확정하고,
            남은 기간 동안 디테일 퀄리티 업에 집중했습니다.
          </p>

           {/* Placeholder for Before/After if strictly required, simplified here as standard comparison */}
           <div className="bg-surface p-6 rounded-xl border border-white/5">
             <h4 className="text-white font-bold mb-4">Comparison</h4>
             <div className="grid grid-cols-2 gap-4">
               <div>
                  <div className="aspect-video bg-gray-800 rounded mb-2 overflow-hidden">
                    <img src={project.thumbnail} className="opacity-30 grayscale w-full h-full object-cover" alt="Draft" />
                  </div>
                  <p className="text-center text-xs text-gray-500">Initial Sketch (AI)</p>
               </div>
               <div>
                  <div className="aspect-video bg-gray-800 rounded mb-2 overflow-hidden">
                    <img src={project.thumbnail} className="w-full h-full object-cover" alt="Final" />
                  </div>
                  <p className="text-center text-xs text-primary">Final Output</p>
               </div>
             </div>
           </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-surface p-8 rounded-xl border border-white/5 sticky top-24">
            <h4 className="text-white font-bold mb-6 border-b border-white/10 pb-4">Project Info</h4>
            
            <div className="mb-6">
              <div className="flex items-center text-gray-400 mb-2">
                <Calendar size={16} className="mr-2" />
                <span className="text-sm">Year</span>
              </div>
              <p className="text-white font-medium">{project.year}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-center text-gray-400 mb-2">
                <PenTool size={16} className="mr-2" />
                <span className="text-sm">Tools Used</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-background rounded-full text-xs text-primary border border-primary/20">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full py-3 bg-white text-black font-bold rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
              <ExternalLink size={18} className="mr-2" />
              Visit Live Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;