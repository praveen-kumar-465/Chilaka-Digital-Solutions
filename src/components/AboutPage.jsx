  import React from 'react';
import { ArrowRight, Award, Users, Lightbulb, Target } from 'lucide-react';

const AboutPage = () => {
  const scrollToSection = (href) => {
    if (href.startsWith('/')) {
      window.location.href = href;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-green-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Learn more about our journey, our team, and what drives us to create 
            exceptional digital experiences for businesses worldwide.
          </p>
        </div>
      </div>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main About Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Side */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-8 shadow-lg">
                <img
                  src="https://res.cloudinary.com/dm94ctges/image/upload/v1758088729/WhatsApp_Image_2025-09-16_at_17.36.38_c509b081_wsjy9v.jpg"
                  alt="Founder of Chilaka Digital Solutions"
                  className="w-full max-h-[600px] object-contain rounded-xl shadow-lg mx-auto"
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
                  onClick={() => { window.location.href = 'tel:+918919170320'; }}
                  className="group bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2 justify-center"
                >
                  Let's Talk Custom Solutions
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button 
                  onClick={() => scrollToSection('/services')}
                  className="group border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2 justify-center"
                >
                  View Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our <span className="text-green-600">Values</span>
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                The principles that guide everything we do and every solution we create.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Stats */}
          <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Industries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;