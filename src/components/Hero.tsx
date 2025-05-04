import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
      <div className="absolute w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-30 -top-20 -left-20" />
      <div className="absolute w-96 h-96 bg-teal-200 rounded-full filter blur-3xl opacity-30 top-40 right-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <div className="flex items-center mb-5 animate-fadeIn">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
                <Sparkles className="w-4 h-4 mr-1" />
                小規模企業のオンラインプレゼンスを向上
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-5 animate-fadeInUp">
              <span className="bg-gradient-to-r from-purple-700 to-teal-500 bg-clip-text text-transparent">未来志向</span>の<br />ウェブデザインで<br />ビジネスを加速
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fadeInUp animation-delay-100">
              個人事業主や小規模企業のためのウェブサイトを制作。飲食業、SNS運用など、新しい時代の産業に特化したデザインで、デジタル空間での存在感を高めます。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-200">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full px-6 py-3 font-medium hover:shadow-lg transition-all flex items-center justify-center"
              >
                プロジェクトを始める
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              
              <a 
                href="#portfolio" 
                className="bg-white text-purple-700 border border-purple-200 rounded-full px-6 py-3 font-medium hover:bg-purple-50 transition-all flex items-center justify-center"
              >
                制作実績を見る
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fadeInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-teal-300 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white p-3 rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <img 
                  src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="ウェブデザインのモックアップ" 
                  className="rounded-lg w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-500 to-teal-400 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                <div className="transform -rotate-12">100%<br/>カスタム</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;