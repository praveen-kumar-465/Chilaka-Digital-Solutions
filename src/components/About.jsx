import React from 'react';
import { ArrowRight, Award, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge AI technology and creative solutions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners to achieve extraordinary results."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver nothing but the highest quality work that exceeds expectations."
    },
    {
      icon: Target,
      title: "Results",
      description: "Every project is measured by its impact on your business growth and success."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-8 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our team at work"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600">22+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600">1100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, We're <span className="text-green-600">Chilaka Digital Solutions</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              We're a team of creative innovators, technical experts, and strategic thinkers 
              passionate about transforming businesses through cutting-edge digital solutions.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between traditional marketing and AI-powered 
              innovation, we specialize in creating immersive digital experiences that not only 
              look stunning but deliver measurable results for our clients.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              From AI CGI video advertisements to comprehensive brand identity solutions, 
              we combine creativity with technology to help businesses of all sizes achieve 
              their digital transformation goals. Our team of skilled professionals brings 
              years of experience in design, development, and digital marketing.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              What sets us apart is our commitment to staying ahead of technological trends 
              while maintaining a personal touch in every project. We believe in building 
              long-term partnerships with our clients, understanding their unique challenges, 
              and crafting customized solutions that drive real business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="group bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2 justify-center"
              >
                Let's Work Together
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button 
                onClick={() => { window.location.href = '/contact'; }}
                className="group border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2 justify-center"
              >
                Book a Service
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;