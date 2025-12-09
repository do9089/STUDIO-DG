import React from 'react';
import { SERVICES, ICON_MAP } from '../constants';
import { Check } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const Services: React.FC = () => {
  const efficiencyData = [
    { name: 'Concept Art', Traditional: 100, WithAI: 20 },
    { name: 'Storyboarding', Traditional: 100, WithAI: 30 },
    { name: 'Video Editing', Traditional: 100, WithAI: 60 },
    { name: 'Asset Creation', Traditional: 100, WithAI: 15 },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-6">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Services & Pricing</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          영상, 디자인, 그리고 AI 솔루션까지. <br />
          비즈니스 목표 달성을 위한 최적의 크리에이티브 패키지를 제안합니다.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {SERVICES.map((service) => (
          <div key={service.id} className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300 flex flex-col">
            <div className="mb-6 p-4 bg-background rounded-full w-fit">
              {ICON_MAP[service.icon]}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
            <div className="mb-8">
              <span className="text-sm text-gray-500 block mb-1">Starts from</span>
              <span className="text-2xl font-bold text-primary">{service.priceRange}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-300">
                  <Check size={16} className="text-secondary mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors border border-white/10">
              상담 요청하기
            </button>
          </div>
        ))}
      </div>

      {/* Efficiency Chart */}
      <div className="bg-surface rounded-3xl p-8 md:p-12 border border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-3xl font-bold text-white mb-4">Why AI Workflow?</h3>
            <p className="text-gray-400">
              전통적인 방식 대비 압도적인 시간 단축 효과를 경험하세요.
              단순 작업 시간을 줄여 더 중요한 크리에이티브 결정에 투자합니다.
            </p>
          </div>
          <div className="w-full md:w-2/3 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={efficiencyData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
                <XAxis type="number" stroke="#666" hide />
                <YAxis dataKey="name" type="category" stroke="#999" width={100} tick={{fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#333', color: '#FFF' }} 
                  cursor={{fill: 'transparent'}}
                />
                <Legend verticalAlign="top" height={36}/>
                <Bar dataKey="Traditional" fill="#333" name="Traditional Time Cost (%)" radius={[0, 4, 4, 0]} barSize={20} />
                <Bar dataKey="WithAI" fill="#FF3333" name="With AI Workflow (%)" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-xs text-gray-600 mt-4">* 자체 프로젝트 수행 데이터 기반 (단위: % 시간 소요)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;