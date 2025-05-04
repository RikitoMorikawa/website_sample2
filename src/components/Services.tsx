import React from "react";
import { Palette, Globe, Server } from "lucide-react";
import { Service } from "../types";

const services: Service[] = [
  {
    id: 1,
    title: "ウェブデザイン",
    description: "ユーザーを魅了し、ブランドアイデンティティを反映した美しく機能的なウェブサイトを制作します。",
    icon: <Palette className="w-12 h-12 text-white drop-shadow-md" />,
    color: "from-purple-400 to-pink-500",
    highlights: ["UI/UXデザイン", "ブランディング", "レスポンシブ"],
  },
  {
    id: 2,
    title: "ウェブ開発",
    description: "スムーズな機能性と優れたパフォーマンスを備えたカスタムコーディングのウェブサイトを制作します。",
    icon: <Globe className="w-12 h-12 text-white drop-shadow-md" />,
    color: "from-blue-400 to-teal-500",
    highlights: ["フロントエンド", "バックエンド", "SEO対策"],
  },
  {
    id: 6,
    title: "ホスティング・保守",
    description: "サイトを安定して運用するための信頼性の高いホスティングソリューションと定期的なメンテナンスを提供します。",
    icon: <Server className="w-12 h-12 text-white drop-shadow-md" />,
    color: "from-teal-400 to-emerald-500",
    highlights: ["サーバー管理", "バックアップ", "セキュリティ"],
  },
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  return (
    <div
      className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all p-6 border border-gray-100 overflow-hidden group animate-fadeIn"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Background gradient blur effect */}
      <div
        className={`absolute -right-8 -top-8 w-40 h-40 rounded-full blur-3xl opacity-30 bg-gradient-to-r ${service.color} group-hover:opacity-40 transition-opacity`}
      ></div>

      {/* Icon container - Clear and solid */}
      <div
        className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
      >
        {service.icon}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>

      {/* Service highlights/tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {service.highlights.map((tag, i) => (
          <span key={i} className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${service.color} bg-opacity-10 text-gray-700`}>
            {tag}
          </span>
        ))}
      </div>

      {/* Hover effect line */}
      <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-300`}></div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-br from-purple-50 via-teal-50 to-emerald-50 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-20 bg-purple-300"></div>
        <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full blur-3xl opacity-20 bg-teal-300"></div>
        <div className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 bg-emerald-300"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 rounded-full text-sm font-medium mb-3">
            サービス
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            あなたのビジネスに<span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">最適な</span>ソリューション
          </h2>
          <p className="text-lg text-gray-700">飲食業やSNS運用など、様々な業種の個人事業主や小規模企業向けのデジタルソリューションを提供しています。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full px-8 py-4 font-medium hover:shadow-lg hover:translate-y-1 transition-all duration-300"
          >
            プロジェクトについて相談する
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
