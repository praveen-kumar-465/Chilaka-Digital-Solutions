import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Videos = () => {
  const featuredVideos = [
    {
      title: "AI CGI Restaurant Commercial",
      description: "Revolutionary food advertising that showcases how AI can transform traditional marketing approaches.",
      thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2:30",
      category: "AI CGI"
    },
    {
      title: "Brand Story: Tech Startup Journey",
      description: "Complete brand storytelling video that helped a startup raise $2M in Series A funding.",
      thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3:45",
      category: "Branding"
    },
    {
      title: "AI Birthday Video Showcase",
      description: "Personalized celebration videos that create unforgettable moments for special occasions.",
      thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "1:15",
      category: "AI Personal"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-green-600">Videos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Watch our latest video productions that demonstrate the power of AI-driven content 
            and storytelling in modern digital marketing.
          </p>
        </div>

        {/* Main Featured Video */}
        <div className="mb-12">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto group">
            <div className="aspect-video relative">
              <img
                src={featuredVideos[0].thumbnail}
                alt={featuredVideos[0].title}
                className="w-full h-full object-cover"
              />
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group-hover:scale-110 transition-transform duration-300">
                  <div className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-6 transition-all duration-300">
                    <Play className="w-12 h-12 text-white ml-1" fill="currentColor" />
                  </div>
                </button>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                  {featuredVideos[0].duration}
                </span>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featuredVideos[0].category}
                </span>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{featuredVideos[0].title}</h3>
                <p className="text-gray-200 opacity-90">{featuredVideos[0].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredVideos.slice(1).map((video, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105"
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-4 transition-all duration-200 hover:scale-110">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </button>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-2 py-1 rounded-full text-sm">
                    {video.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 transition-colors duration-200">
                  {video.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Videos Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50M+</div>
              <div className="text-gray-600 dark:text-gray-400">Total Views</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
              <div className="text-gray-600 dark:text-gray-400">Average Turnaround</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Create Your Video Masterpiece?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
              From AI-powered commercials to personalized celebration videos, 
              let's bring your vision to life with cutting-edge technology.
            </p>
            <button className="group bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2 mx-auto">
              Start Your Video Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;