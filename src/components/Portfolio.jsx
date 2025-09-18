import React, { useState } from 'react';
import { ExternalLink, ZoomIn } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI-Powered Restaurant Campaign",
      category: "AI CGI Video",
      description: "Revolutionary food advertising using AI-generated visuals that increased engagement by 300%",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["AI", "Food", "Video", "CGI"]
    },
    {
      id: 2,
      title: "Tech Startup Branding",
      category: "Branding",
      description: "Complete brand identity for a fintech startup, including logo, website, and marketing materials",
      image: "https://images.unsplash.com/photo-1615540127498-12c3049eded0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VGVjaCUyMFN0YXJ0dXAlMjBCcmFuZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      tags: ["Branding", "Logo", "Fintech", "Startup"]
    },
    {
      id: 3,
      title: "E-commerce Growth Campaign",
      category: "Digital Marketing",
      description: "Multi-channel marketing strategy that drove 250% increase in online sales within 6 months",
      image: "https://images.unsplash.com/photo-1747535798072-0ea2b75d433d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEUlMjBjb21tZXJjZSUyMEdyb3d0aCUyMENhbXBhaWdufGVufDB8fDB8fHww",
      tags: ["E-commerce", "Growth", "ROI", "Multi-channel"]
    },
    {
      id: 4,
      title: "Luxury Hotel Website",
      category: "Web Development",
      description: "Elegant, responsive website with booking system and virtual tour functionality",
      image: "https://images.unsplash.com/photo-1733761002935-244f889465b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fEx1eHVyeSUyMEhvdGVsJTIwV2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["Luxury", "Hospitality", "Booking", "Responsive"]
    },
    {
      id: 5,
      title: "AI Birthday Video Series",
      category: "AI Video",
      description: "Personalized AI-generated birthday videos for a social media platform's premium users",
      image: "https://images.unsplash.com/photo-1568720978116-55c74f784fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fEFJJTIwQmlydGhkYXklMjBWaWRlbyUyMFNlcmllc3xlbnwwfHwwfHx8MA%3D%3D",
      tags: ["AI", "Personal", "Celebration", "Social Media"]
    },
    {
      id: 6,
      title: "Fashion Brand Identity",
      category: "Branding",
      description: "Modern brand identity for sustainable fashion brand targeting Gen-Z consumers",
      image: "https://images.unsplash.com/photo-1564518160120-94178fcdf5d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb24lMjBicmFuZGluZyUyMGlkZW50aXR5fGVufDB8fDB8fHww",
      tags: ["Fashion", "Sustainable", "Gen-Z", "Modern"]
    }
  ];

  const categories = ["All", "AI CGI Video", "Branding", "Digital Marketing", "Web Development", "AI Video"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-green-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that showcase our expertise 
            in creating impactful digital solutions for diverse industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 ${
                activeCategory === category
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 hover:scale-110">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button removed */}
      </div>

      {/* Modal for project details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-auto" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-green-600 font-medium mb-4">{selectedProject.category}</p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;