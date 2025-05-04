import React from 'react';
import { Laptop, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Laptop className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                WebCraft
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              個人事業主や小規模企業のデジタルプレゼンスを高める、魅力的なウェブサイトを制作しています。
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map(platform => (
                <a 
                  key={platform}
                  href={`#${platform}`} 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={platform}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">サービス</h3>
            <ul className="space-y-2">
              {[
                'ウェブデザイン',
                'ウェブ開発',
                'ECサイト構築',
                'SNS運用戦略',
                'モバイルアプリ',
                'ホスティング・保守'
              ].map(service => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">会社情報</h3>
            <ul className="space-y-2">
              {[
                ['会社概要', 'about'],
                ['制作実績', 'portfolio'],
                ['制作の流れ', 'process'],
                ['お客様の声', 'testimonials'],
                ['ブログ', 'blog'],
                ['採用情報', 'careers']
              ].map(([label, id]) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-gray-400 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">お問い合わせ</h3>
            <ul className="space-y-2 text-gray-400">
              <li>〒123-4567</li>
              <li>東京都渋谷区○○1-2-3</li>
              <li>info@webcraft.jp</li>
              <li>03-1234-5678</li>
            </ul>
            <a 
              href="#contact" 
              className="inline-flex items-center mt-4 bg-purple-700 hover:bg-purple-800 text-white rounded-lg px-4 py-2 font-medium transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} WebCraft. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center text-sm">
            個人事業主や小規模企業のために<Heart className="w-4 h-4 mx-1 text-red-500" />を込めて制作しています
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;