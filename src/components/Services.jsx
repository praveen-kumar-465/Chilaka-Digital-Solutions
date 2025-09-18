import React from 'react';
import { 
  Zap, 
  Palette, 
  TrendingUp, 
  FileText, 
  Gift, 
  MessageCircle, 
  Globe, 
  Layers 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "AI, CGI & Product & Political Ads",
      description: "Revolutionary AI-powered CGI advertisements that capture attention and drive conversions with stunning visuals.",
      features: ["3D Animation", "AI Integration", "Brand Storytelling"]
    },
    {
      icon: Palette,
      title: "Graphics Design & Branding",
      description: "Complete brand identity solutions from logo design to comprehensive brand guidelines that make you stand out.",
      features: ["Logo Design", "Brand Guidelines", "Print Materials"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies across all digital channels to maximize your ROI and business growth.",
      features: ["SEO/SEM", "Social Media", "Analytics"]
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "Engaging content that tells your story, connects with your audience, and drives meaningful engagement.",
      features: ["Copywriting", "Video Content", "Social Posts"]
    },
    {
      icon: Gift,
      title: "AI Birthday/Anniversary Videos",
      description: "Personalized AI-generated celebration videos that create memorable moments for your special occasions.",
      features: ["Custom Scripts", "AI Voices", "Personal Touch"]
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Marketing",
      description: "Direct customer engagement through WhatsApp marketing campaigns that build relationships and drive sales.",
      features: ["Automated Messages", "Customer Support", "Campaign Analytics"]
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Modern, responsive websites that not only look amazing but also convert visitors into customers.",
      features: ["Responsive Design", "E-commerce", "Performance Optimization"]
    },
    {
      icon: Layers,
      title: "Logo Design",
      description: "Distinctive logo designs that represent your brand identity and leave a lasting impression on your audience.",
      features: ["Multiple Concepts", "Vector Files", "Brand Variations"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 mt-10">
            Our <span className="text-green-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to elevate your brand, 
            engage your audience, and drive sustainable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            // Different border colors for variety
            const borderColors = [
              'border-t-4 border-green-400',
              'border-t-4 border-emerald-400',
              'border-t-4 border-lime-400',
              'border-t-4 border-teal-400'
            ];
            const borderColor = borderColors[index % borderColors.length];
            
            return (
              <div
                key={index}
                className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${borderColor}`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Don't See What You're Looking For?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We specialize in custom solutions. Let's discuss how we can help bring your unique vision to life.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105">
              Let's Talk Custom Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;