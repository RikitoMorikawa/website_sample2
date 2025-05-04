import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: '田中 美咲',
    business: 'アーティザンベーカリーオーナー',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'WebCraftのおかげでオンラインでの存在感が大きく向上しました。私たちの職人的なブランドを完璧に理解し、それを見事にウェブサイトで表現してくれました。サイトオープン後、オンライン注文が70%も増加しています！',
    rating: 5
  },
  {
    id: 2,
    name: '山田 健一',
    business: 'SNSコンサルタント',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'デジタルマーケティングの専門家として、ウェブサイトに対する要求は非常に高かったのですが、WebCraftはそれを見事に満たしてくれました。モダンで独特なデザインで、競合他社との差別化に成功しています。',
    rating: 5
  },
  {
    id: 3,
    name: '佐藤 優子',
    business: 'ヨガスタジオオーナー',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: '私のスタジオの雰囲気を反映しつつ、簡単に予約ができるウェブサイトが必要でした。WebCraftは、美しくシンプルなサイトを作ってくれました。制作プロセスも、まるでヨガのように心地よいものでした！',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-purple-700 to-teal-500 bg-clip-text text-transparent">お客様の声</span>
          </h2>
          <p className="text-lg text-gray-700">
            私たちが支援させていただいた事業者様からいただいた声をご紹介します。
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-purple-100">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-purple-100 animate-fadeIn">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                    <div className="flex items-center justify-center bg-yellow-400 text-white p-2 rounded-full">
                      <Star className="fill-current w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-bold text-gray-900">{currentTestimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{currentTestimonial.business}</p>
                </div>
              </div>
              
              <div className="md:w-2/3 animate-fadeIn">
                <div className="flex mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg italic mb-4 relative">
                  <span className="absolute -top-4 -left-2 text-6xl text-purple-200">"</span>
                  <p className="relative z-10">{currentTestimonial.quote}</p>
                </blockquote>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={goToPrevious}
              className="bg-white text-purple-700 rounded-full p-3 shadow-md hover:bg-purple-50 transition-colors"
              aria-label="前のお客様の声を見る"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-purple-700 scale-125' : 'bg-purple-200'
                  }`}
                  aria-label={`お客様の声 ${index + 1}に移動`}
                />
              ))}
            </div>
            
            <button 
              onClick={goToNext}
              className="bg-white text-purple-700 rounded-full p-3 shadow-md hover:bg-purple-50 transition-colors"
              aria-label="次のお客様の声を見る"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;