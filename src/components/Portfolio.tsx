import React, { useState } from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: '職人パン工房のウェブサイト',
    category: '飲食',
    image: 'https://images.pexels.com/photos/1995010/pexels-photo-1995010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['ウェブデザイン', 'ECサイト']
  },
  {
    id: 2,
    title: 'SNS運用管理アプリ',
    category: 'SNS',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['ウェブアプリ', 'UI/UX']
  },
  {
    id: 3,
    title: 'ヨガスタジオプラットフォーム',
    category: '健康・美容',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['ウェブデザイン', '予約システム']
  },
  {
    id: 4,
    title: 'ブティックファッションストア',
    category: 'ファッション',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['ECサイト', 'ウェブデザイン']
  },
  {
    id: 5,
    title: '地域密着型カフェチェーン',
    category: '飲食',
    image: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['ウェブデザイン', 'モバイルアプリ']
  },
  {
    id: 6,
    title: 'フリーランスフォトグラファー',
    category: 'クリエイティブ',
    image: 'https://images.pexels.com/photos/3178744/pexels-photo-3178744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['ポートフォリオ', 'ウェブデザイン']
  }
];

const filterCategories = ['すべて', '飲食', 'SNS', '健康・美容', 'ファッション', 'クリエイティブ'];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('すべて');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeFilter === 'すべて' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-purple-700 to-teal-500 bg-clip-text text-transparent">制作実績</span>
          </h2>
          <p className="text-lg text-gray-700">
            様々な業種の個人事業主や小規模企業様のために制作したウェブサイトをご紹介します。
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {filterCategories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category 
                  ? 'bg-purple-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl shadow-md animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/50 to-transparent p-6 flex flex-col justify-end transform transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="text-purple-200 text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full px-6 py-3 font-medium hover:shadow-lg transition-all"
          >
            お問い合わせはこちら
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;