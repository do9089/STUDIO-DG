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
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 border border-white/10 relative">
              <img
                src="https://loremflickr.com/800/1066/portrait,man,designer"
                alt="Kim Dogyun Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Kim Dogyun</h2>
            <p className="text-primary font-medium mb-6">Creative Director & AI Specialist</p>
            <button className="flex items-center justify-center w-full py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors">
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
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              안녕하세요, 김도균입니다. 저는 5년 차 영상 디자이너이자 AI 크리에이터입니다.
              단순히 예쁜 그림을 만드는 것을 넘어, 최신 기술을 활용해 클라이언트의 비즈니스 문제를 
              가장 효율적이고 임팩트 있게 해결하는 것에 집중합니다.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              최근에는 생성형 AI 도구(Midjourney, Stable Diffusion, Runway)를 워크플로우에 
              적극 도입하여, 기존 방식으로는 불가능했던 속도와 스타일을 구현하고 있습니다.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-xl text-primary font-bold mb-8 uppercase tracking-widest">Experience</h3>
            <div className="space-y-12 border-l border-white/10 pl-8 ml-3">
              {EXPERIENCE.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary" />
                  <span className="text-sm text-gray-500 mb-1 block">{exp.year}</span>
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <p className="text-secondary font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Chart */}
          <div>
            <h3 className="text-xl text-primary font-bold mb-8 uppercase tracking-widest">Skillset</h3>
            <div className="h-96 w-full bg-surface rounded-2xl p-4 border border-white/5">
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
                            label={{ position: 'insideStart', fill: '#000' }}
                            background
                            dataKey="uv"
                        />
                        <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{right: 0}} />
                        <Tooltip contentStyle={{backgroundColor: '#000', border: '1px solid #333'}} />
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