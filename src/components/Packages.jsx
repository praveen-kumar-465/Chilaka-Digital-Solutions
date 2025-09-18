import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

const Packages = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    {
      title: "Starter Package",
      description: "Perfect for small businesses looking to establish their digital presence",
      features: ["Logo Design", "Basic Website", "Social Media Setup", "1 Month Support"],
      price: "₹25,000",
      popular: false
    },
    {
      title: "Professional Package",
      description: "Comprehensive solution for growing businesses",
      features: ["Complete Branding", "Professional Website", "AI Video Ads", "Digital Marketing", "3 Months Support"],
      price: "₹75,000",
      popular: true
    },
    {
      title: "Enterprise Package",
      description: "Full-scale digital transformation for established businesses",
      features: ["Premium Branding", "Advanced Website", "AI CGI Campaigns", "Full Marketing Suite", "6 Months Support", "WhatsApp Marketing"],
      price: "₹1,50,000",
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-green-600">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package that fits your business needs. From startups to enterprises, 
            we have solutions that drive growth and success.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {highlights.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 ${
                pkg.popular ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" fill="currentColor" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {pkg.description}
                  </p>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">One-time payment</p>
                </div>

                <ul className="mb-8 space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
                  pkg.popular
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                }`}>
                  Choose Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need Something Custom?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Every business is unique. Let's create a tailored solution that perfectly fits your requirements and budget.
            </p>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="group bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2 mx-auto"
            >
              View Package Details
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;