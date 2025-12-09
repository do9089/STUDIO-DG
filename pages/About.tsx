import React from 'react';
import { EXPERIENCE, SKILLS } from '../constants';
import { Download } from 'lucide-react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-6">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-start gap-12 mb-24">
        <div className="w-full md:w-1/3">
          <div className="sticky top-24">
            <div className="aspect-[3/4] rounded-sm overflow-hidden mb-6 border border-white/10 relative group">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                alt="Kim Dogyun Profile"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
              <div className="absolute bottom-4 left-4 border-l-2 border-primary pl-3">
                 <p className="text-xs text-white uppercase tracking-widest font-bold">Creative Director</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Kim Dogyun</h2>
            <p className="text-primary font-medium mb-6">Visual Artist & AI Specialist</p>
            <button className="flex items-center justify-center w-full py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors">
              <Download size={18} className="mr-2" />
              Download Resume
            </button>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="mb-16">
            <h3 className="text-xl text-secondary font-bold mb-4 uppercase tracking-widest">About Me</h3>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              디지털의 경계에서 <br />
              새로운 가능성을 탐구합니다.
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              안녕하세요, 김도균입니다. 저는 5년 차 영상 디자이너이자 AI 크리에이터입니다.
              단순히 예쁜 그림을 만드는 것을 넘어, 최신 기술을 활용해 클라이언트의 비즈니스 문제를 
              가장 효율적이고 임팩트 있게 해결하는 것에 집중합니다.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              최근에는 생성형 AI 도구(Midjourney, Stable Diffusion, Runway)를 워크플로우에 
              적극 도입하여, 기존 방식으로는 불가능했던 속도와 스타일을 구현하고 있습니다.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-xl text-primary font-bold mb-8 uppercase tracking-widest">Experience</h3>
            <div className="space-y-12 border-l border-white/10 pl-8 ml-3">
              {EXPERIENCE.map((exp) => (
                <div key={exp.id} className="relative group">
                  <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-background border-2 border-gray-600 group-hover:border-primary transition-colors" />
                  <span className="text-sm text-gray-500 mb-1 block font-mono">{exp.year}</span>
                  <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h4>
                  <p className="text-secondary font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-400 font-light">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Chart */}
          <div>
            <h3 className="text-xl text-primary font-bold mb-8 uppercase tracking-widest">Skillset</h3>
            <div className="h-96 w-full bg-surface/50 rounded-sm p-4 border border-white/5 backdrop-blur-sm">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart 
                        cx="50%" 
                        cy="50%" 
                        innerRadius="10%" 
                        outerRadius="80%" 
                        barSize={20} 
                        data={SKILLS.map((s, index) => ({
                            name: s.name, 
                            uv: s.level, 
                            fill: index % 2 === 0 ? '#FF3333' : '#E5E5E5'
                        }))}
                    >
                        <RadialBar
                            label={{ position: 'insideStart', fill: '#000', fontWeight: 'bold' }}
                            background
                            dataKey="uv"
                        />
                        <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{right: 0, fontFamily: 'sans-serif', color: '#fff'}} />
                        <Tooltip contentStyle={{backgroundColor: '#0F0F0F', border: '1px solid #333', color: '#fff'}} />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;