import React from 'react';
import { Users, Award, Target, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-teal-300 rounded-2xl transform -rotate-3 opacity-20"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-100">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="チームで協力して作業する様子" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-purple-700 to-teal-500 bg-clip-text text-transparent">WebCraft</span>について
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              私たちは、個人事業主や小規模企業がオンラインで強力な存在感を確立できるよう支援する、情熱的なデザイナーと開発者のチームです。新興産業の独自のニーズに焦点を当て、見栄えの良いだけでなく、実際のビジネス成果を生み出すウェブサイトを制作しています。
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              2020年の設立以来、飲食サービス、SNS運用、その他の起業家向けセクターで数多くの小規模企業様のお手伝いをさせていただき、それぞれのブランドアイデンティティを反映したカスタムウェブサイトで、デジタル空間での差別化を実現してきました。
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="mr-4 bg-purple-100 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">顧客中心主義</h3>
                  <p className="text-gray-600">お客様の成功が私たちの目標</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-teal-100 p-3 rounded-xl">
                  <Award className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">品質へのこだわり</h3>
                  <p className="text-gray-600">細部まで丁寧に作り込み</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-orange-100 p-3 rounded-xl">
                  <Target className="w-6 h-6 text-orange-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">成果重視</h3>
                  <p className="text-gray-600">ビジネスの成長を追求</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-blue-100 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">納期厳守</h3>
                  <p className="text-gray-600">時間を大切にします</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;