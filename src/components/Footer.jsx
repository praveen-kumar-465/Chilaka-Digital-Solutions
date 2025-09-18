import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Videos', href: '#videos' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' }
  ];

  const services = [
    'AI CGI Video Ads',
    'Graphics Design & Branding',
    'Digital Marketing',
    'Web Design & Development',
    'WhatsApp Marketing',
    'Logo Design'
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                Chilaka <span className="text-green-400">Digital</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We Create, We Design, We Deliver. Transform your brand with cutting-edge AI technology and creative digital solutions.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/chilakapraveenkumar8?utm_source=qr&igsh=MTR3M2JndXJnanFwOQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.facebook.com/share/1GC86jbdNc/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://wa.me/918919170320" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-400 mb-2">Contact via WhatsApp</h4>
                <a 
                  href="https://wa.me/918919170320" 
                  className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  +91 8919170320
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-green-400 transition-colors duration-200 cursor-pointer hover:translate-x-1 transform inline-block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Magunta layout, srinagar colony,<br />
                  annamayya circle nellore<br />
                  524003 AP
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Call us:</p>
                  <a 
                    href="tel:+918919170320" 
                    className="text-white hover:text-green-400 transition-colors duration-200"
                  >
                    +91 8919170320
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Email us:</p>
                  <a 
                    href="mailto:chilakapraveenkumar@gmail.com" 
                    className="text-white hover:text-green-400 transition-colors duration-200 whitespace-nowrap inline-block"
                  >
                    chilakapraveenkumar@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
            {/* Left: Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              2024 Chilaka Digital Solutions. All rights reserved.
            </div>

            {/* Center: Designed & Developed by Koderspark (entire block clickable) */}
            <a
              href="https://koderspark.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Designed & Developed by Koderspark"
              className="flex flex-col items-center justify-center group focus:outline-none"
            >
              <img
                src="https://res.cloudinary.com/dm94ctges/image/upload/v1753619889/logo_bzvwmg.jpg"
                alt="Koderspark logo"
                className="h-10 w-10 rounded-full object-cover mb-2 group-hover:opacity-90"
                loading="lazy"
              />
              <div className="text-sm font-semibold text-white">
                Designed & Developed by{' '}
                <span className="text-green-400 group-hover:text-green-300 transition-colors duration-200 underline-offset-4 group-hover:underline">
                  Koder Spark Pvt Ltd
                </span>
              </div>
            </a>
            {/* /* hello */ }

            {/* Right: Links + Up button */}
            <div className="flex items-center justify-center md:justify-end gap-6">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-all duration-200 hover:scale-105"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;