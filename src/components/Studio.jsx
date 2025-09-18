import React from 'react';
import { Play, Image, Palette } from 'lucide-react';

const Studio = () => {
  const showcaseItems = [
    {
      title: "AI Video Samples",
      description: "Cutting-edge AI-generated CGI videos that captivate and convert. Our AI video production leverages the latest in machine learning and computer graphics to create stunning visual narratives that tell your brand story in ways never before possible.",
      icon: Play,
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["3D Animation", "AI Voice Generation", "Custom Scripting", "Brand Integration"]
    },
    {
      title: "Branding Showcase",
      description: "Complete brand identity solutions that tell your story and connect with your audience. From conceptual design to final implementation, we create cohesive brand experiences that resonate across all touchpoints and drive meaningful engagement.",
      icon: Palette,
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Digital Assets"]
    },
    {
      title: "Marketing Examples",
      description: "Data-driven campaigns that deliver measurable results and maximize ROI. Our comprehensive marketing approach combines creative excellence with analytical precision to ensure every campaign not only looks great but performs exceptionally.",
      icon: Image,
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Campaign Strategy", "Performance Analytics", "Multi-Channel Approach", "ROI Optimization"]
    }
  ];

  return (
    <section id="studio" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-green-600">Studio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Step inside our creative studio and explore the work that defines us. 
            From AI-powered visuals to comprehensive branding solutions.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* Item Image */}
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="flex items-center">
                    <item.icon className="w-6 h-6 text-white mr-2" />
                    <span className="text-white font-medium">{item.title}</span>
                  </div>
                </div>
              </div>

              {/* Item Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Start Project Button */}
                <a 
                  href="tel:+918919170320"
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
              Let's collaborate and bring your vision to life with our cutting-edge creative solutions.
            </p>
            <a 
              href="tel:+918919170320"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;