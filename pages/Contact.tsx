import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'project',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('문의가 전송되었습니다. 확인 후 빠르게 연락드리겠습니다.');
    setFormData({ name: '', email: '', type: 'project', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Contact Info */}
        <div className="lg:w-1/3">
          <h1 className="text-5xl font-bold text-white mb-8">Let's Create<br />Together.</h1>
          <p className="text-gray-400 text-lg mb-12">
            새로운 프로젝트, 협업 제안, 혹은 단순한 커피챗도 환영합니다.
            AI 기술을 통해 당신의 비전을 현실로 만들어드립니다.
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <Mail className="text-primary mt-1 mr-4" />
              <div>
                <h4 className="text-white font-bold mb-1">Email</h4>
                <a href="mailto:contact@dogyun.kim" className="text-gray-400 hover:text-white transition-colors">contact@dogyun.kim</a>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="text-primary mt-1 mr-4" />
              <div>
                <h4 className="text-white font-bold mb-1">Phone</h4>
                <p className="text-gray-400">+82 10-1234-5678</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="text-primary mt-1 mr-4" />
              <div>
                <h4 className="text-white font-bold mb-1">Office</h4>
                <p className="text-gray-400">Seoul, South Korea</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-2/3 bg-surface p-8 md:p-12 rounded-3xl border border-white/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name / Company</label>
                <input
                  type="text"
                  required
                  className="w-full bg-background border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="홍길동 / 스타트업"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full bg-background border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Inquiry Type</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className={`p-4 rounded-lg border text-center transition-all ${
                    formData.type === 'project'
                      ? 'bg-primary/10 border-primary text-primary'
                      : 'bg-background border-white/10 text-gray-400 hover:border-white/30'
                  }`}
                  onClick={() => setFormData({...formData, type: 'project'})}
                >
                  프로젝트 의뢰
                </button>
                <button
                  type="button"
                  className={`p-4 rounded-lg border text-center transition-all ${
                    formData.type === 'hiring'
                      ? 'bg-secondary/10 border-secondary text-secondary'
                      : 'bg-background border-white/10 text-gray-400 hover:border-white/30'
                  }`}
                  onClick={() => setFormData({...formData, type: 'hiring'})}
                >
                  채용 제안
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                rows={6}
                required
                className="w-full bg-background border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="프로젝트 내용이나 제안 사항을 자유롭게 적어주세요."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              <Send size={20} className="mr-2" />
              메시지 전송하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;