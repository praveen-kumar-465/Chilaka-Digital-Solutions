import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('/')) {
      // Navigate to different page
      if (href === '/') {
        window.location.href = '/';
      } else {
        window.location.href = href;
      }
    } else {
      // Scroll to section on same page
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ${isScrolled ? 'py-2' : 'py-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="min-w-0 shrink">
            <a href="/" className="flex items-center gap-2 min-w-0">
              <img
                src="https://res.cloudinary.com/dm94ctges/image/upload/v1758129277/LOGO_xkgxlp.jpg"
                alt="Chilaka Digital Solutions logo"
                className="block self-center -translate-y-[4px] transform h-14 w-14 lg:h-16 lg:w-16 object-contain rounded-md flex-none"
                loading="lazy"
              />
              <h1 className="m-0 leading-none text-base sm:text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                CHILAKA <span className="text-green-600">DIGITAL SOLUTIONS</span>
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`transition-colors duration-200 font-medium ${
                  isActive(link.href)
                    ? 'text-green-600 dark:text-green-400 font-bold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right side items */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              <a 
                href="https://www.facebook.com/share/1GC86jbdNc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/chilakapraveenkumar8?utm_source=qr&igsh=MTR3M2JndXJnanFwOQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-pink-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/918919170320" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            
            <a 
              href="/services" 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Book a Service
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-400"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full text-left px-3 py-2 transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-green-600 dark:text-green-400 font-bold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <a 
                  href="/services" 
                  className="block w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors duration-200"
                >
                  Book a Service
                </a>
              </div>
              <div className="flex items-center justify-center space-x-4 px-3 py-2">
                <a 
                  href="https://www.facebook.com/share/1GC86jbdNc/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/chilakapraveenkumar8?utm_source=qr&igsh=MTR3M2JndXJnanFwOQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-pink-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/918919170320" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;