import React from 'react';
import { MessagesSquare, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'ヒアリング',
    description: '詳細なヒアリングを通じて、ビジネスの目標、ターゲット層、プロジェクトの要件を把握します。',
    icon: <MessagesSquare className="w-8 h-8 text-purple-700" />,
    color: 'bg-purple-100'
  },
  {
    id: 2,
    title: 'デザイン',
    description: 'お客様のブランドアイデンティティを反映した魅力的なデザインを作成し、ご要望に応じて調整します。',
    icon: <PenTool className="w-8 h-8 text-teal-600" />,
    color: 'bg-teal-100'
  },
  {
    id: 3,
    title: '開発',
    description: '承認されたデザインを、クリーンなコードと最適なパフォーマンスを備えた実用的なウェブサイトへと変換します。',
    icon: <Code className="w-8 h-8 text-orange-500" />,
    color: 'bg-orange-100'
  },
  {
    id: 4,
    title: '公開',
    description: '徹底的なテストの後、ウェブサイトを公開し、運用方法についてのトレーニングを提供します。',
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    color: 'bg-blue-100'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-purple-700 to-teal-500 bg-clip-text text-transparent">制作の流れ</span>
          </h2>
          <p className="text-lg text-gray-700">
            お客様に最高の結果をお届けするため、私たちは効率的かつ透明性のある制作プロセスを確立しています。
          </p>
        </div>
        
        <div className="relative">
          {/* 接続線 */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />
          
          <div className="space-y-16 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} animate-fadeIn`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    <span className="bg-gradient-to-r from-purple-700 to-teal-500 bg-clip-text text-transparent">
                      {step.id}.
                    </span> {step.title}
                  </h3>
                  <p className="text-gray-700 text-lg">{step.description}</p>
                </div>
                
                <div className="flex items-center justify-center my-6 md:my-0 relative z-10">
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center shadow-md`}>
                    {step.icon}
                  </div>
                </div>
                
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-white text-purple-700 border border-purple-200 rounded-full px-6 py-3 font-medium hover:bg-purple-50 transition-all shadow-sm"
          >
            プロジェクトを始める
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;