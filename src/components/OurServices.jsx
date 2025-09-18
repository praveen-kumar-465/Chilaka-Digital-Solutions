import React, { useState } from "react";
import {
  Zap,
  Palette,
  TrendingUp,
  FileText,
  Gift,
  MessageCircle,
  Globe,
  Layers,
  X,
} from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx0zDw0UQxWG1x5PergzKo1HTVNlofXe-PY8MwWzzE5Iqu1inLn1S1c3h9RJOFNQ2Mo/exec";

const services = [
  {
    icon: Zap,
    title: "AI, CGI & Product & Political Video Ads",
    description:
      "Revolutionary AI-powered CGI advertisements that capture attention and drive conversions with stunning visuals.",
    features: ["3D Animation", "AI Integration", "Brand Storytelling"],
  },
  {
    icon: Palette,
    title: "Graphics Design & Branding",
    description:
      "Complete brand identity solutions from logo design to comprehensive brand guidelines that make you stand out.",
    features: ["Logo Design", "Brand Guidelines", "Print Materials"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies across all digital channels to maximize your ROI and business growth.",
    features: ["SEO/SEM", "Social Media", "Analytics"],
  },
  {
    icon: FileText,
    title: "Content Creation",
    description:
      "Engaging content that tells your story, connects with your audience, and drives meaningful engagement.",
    features: ["Copywriting", "Video Content", "Social Posts"],
  },
  {
    icon: Gift,
    title: "AI Birthday/Anniversary Videos",
    description:
      "Personalized AI-generated celebration videos that create memorable moments for your special occasions.",
    features: ["Custom Scripts", "AI Voices", "Personal Touch"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Marketing",
    description:
      "Direct customer engagement through WhatsApp marketing campaigns that build relationships and drive sales.",
    features: ["Automated Messages", "Customer Support", "Campaign Analytics"],
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description:
      "Modern, responsive websites that not only look amazing but also convert visitors into customers.",
    features: ["Responsive Design", "E-commerce", "Performance Optimization"],
  },
  {
    icon: Layers,
    title: "Logo Design",
    description:
      "Distinctive logo designs that represent your brand identity and leave a lasting impression on your audience.",
    features: ["Multiple Concepts", "Vector Files", "Brand Variations"],
  },
];

const OurServices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setFormData({
      name: "",
      phone: "",
      service: serviceTitle,
      message: "",
    });
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        mode: "no-cors",
      });
  
      // Reset form fields
      setFormData({ name: "", phone: "", service: "", message: "" });
  
      // Show success and close modal
      setIsSubmitted(true);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 mt-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
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
            const borderColors = [
              "border-t-4 border-green-400",
              "border-t-4 border-emerald-400",
              "border-t-4 border-lime-400",
              "border-t-4 border-teal-400",
            ];
            const borderColor = borderColors[index % borderColors.length];

            return (
              <div
                key={index}
                onClick={() => openModal(service.title)}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer ${borderColor}`}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-1 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(service.title);
                  }}
                  className="w-full mt-4 inline-flex justify-center items-center px-4 py-2.5 text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                >
                  Book Now
                </button>
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
              We specialize in custom solutions. Let's discuss how we can help
              bring your unique vision to life.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105">
              Let's Talk Custom Solutions
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="fixed inset-0 bg-gray-500 opacity-75 dark:bg-gray-900 dark:opacity-80"></div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-all sm:max-w-lg w-full z-10">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Book Service
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="px-6 py-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-3 py-2 border rounded-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                    className="w-full px-3 py-2 border rounded-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Service
                  </label>
                  <input
                    type="text"
                    name="service"
                    value={selectedService}
                    readOnly
                    className="w-full px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-gray-300 cursor-not-allowed"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any additional details or requirements"
                    className="w-full px-3 py-2 border rounded-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 border rounded-md text-sm font-medium bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Request"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="px-6 py-8 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                  <svg
                    className="h-6 w-6 text-green-600 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Thank you!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Your request has been submitted. We'll get back to you soon.
                </p>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default OurServices;
