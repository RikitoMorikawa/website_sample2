import React, { useState, useEffect } from 'react';
import { Menu, X, Laptop } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <Laptop className="h-8 w-8 text-purple-700" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-700 to-teal-500 bg-clip-text text-transparent">
              WebCraft
            </span>
          </a>
          
          <nav className="hidden md:flex space-x-8">
            {[
              ['サービス', 'services'],
              ['制作実績', 'portfolio'],
              ['制作の流れ', 'process'],
              ['会社概要', 'about'],
              ['お問い合わせ', 'contact']
            ].map(([label, id]) => (
              <a 
                key={id} 
                href={`#${id}`}
                className="text-gray-700 hover:text-purple-700 transition-colors font-medium"
              >
                {label}
              </a>
            ))}
            <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full px-5 py-2 font-medium hover:shadow-lg transition-all">
              お見積り
            </button>
          </nav>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* モバイルメニュー */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {[
                ['サービス', 'services'],
                ['制作実績', 'portfolio'],
                ['制作の流れ', 'process'],
                ['会社概要', 'about'],
                ['お問い合わせ', 'contact']
              ].map(([label, id]) => (
                <a 
                  key={id} 
                  href={`#${id}`}
                  className="text-gray-700 hover:text-purple-700 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              ))}
              <button 
                className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full px-5 py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                お見積り
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;