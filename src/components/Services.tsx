import React from 'react';
import { Palette, Globe, Megaphone, Server, Smartphone, ShoppingBag } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'ウェブデザイン',
    description: 'ユーザーを魅了し、ブランドアイデンティティを反映した美しく機能的なウェブサイトを制作します。',
    icon: <Palette className="w-10 h-10 text-purple-700" />,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 2,
    title: 'ウェブ開発',
    description: 'スムーズな機能性と優れたパフォーマンスを備えたカスタムコーディングのウェブサイトを制作します。',
    icon: <Globe className="w-10 h-10 text-teal-600" />,
    color: 'from-teal-500 to-teal-600'
  },
  {
    id: 3,
    title: 'SNS戦略',
    description: 'コミュニティを構築し、エンゲージメントを高める効果的なSNSキャンペーンを展開します。',
    icon: <Megaphone className="w-10 h-10 text-orange-500" />,
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 4,
    title: 'ECソリューション',
    description: '顧客にとって商品の購入が簡単で楽しい体験となるオンラインショップを構築します。',
    icon: <ShoppingBag className="w-10 h-10 text-blue-600" />,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 5,
    title: 'モバイルアプリ',
    description: 'ウェブサイトと連携する使いやすいモバイルアプリケーションを開発します。',
    icon: <Smartphone className="w-10 h-10 text-violet-600" />,
    color: 'from-violet-500 to-violet-600'
  },
  {
    id: 6,
    title: 'ホスティング・保守',
    description: 'サイトを安定して運用するための信頼性の高いホスティングソリューションと定期的なメンテナンスを提供します。',
    icon: <Server className="w-10 h-10 text-emerald-600" />,
    color: 'from-emerald-500 to-emerald-600'
  }
];

const ServiceCard: React.FC<{ service: Service, index: number }> = ({ service, index }) => {
  return (
    <div 
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100 hover:border-purple-100 group animate-fadeIn"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            あなたのビジネスに<span className="bg-gradient-to-r from-purple-700 to-teal-500 bg-clip-text text-transparent">最適な</span>サービス
          </h2>
          <p className="text-lg text-gray-700">
            飲食業やSNS運用など、様々な業種の個人事業主や小規模企業向けのデジタルソリューションを提供しています。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-white text-purple-700 border border-purple-200 rounded-full px-6 py-3 font-medium hover:bg-purple-50 transition-all shadow-sm"
          >
            プロジェクトについて相談する
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;