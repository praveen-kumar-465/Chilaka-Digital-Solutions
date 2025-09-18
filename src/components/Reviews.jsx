import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Reviews = () => {
  const testimonials = [
    {
      name: "Srinivas Rao",
      role: "Mobile Shop Owner",
      company: "Sri Sai Mobiles",
      rating: 5,
      review:
        "They made a simple ad video for my shop. People in my town recognized it and my sales improved.",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Jyothi Reddy",
      role: "Beauty Parlour Owner",
      company: "Jyothi Beauty Care",
      rating: 5,
      review:
        "They designed small reels and posts for my parlour. I got many new bookings from Instagram and WhatsApp.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Lakshmi Prasad",
      role: "Bakery Owner",
      company: "Fresh Bakes",
      rating: 5,
      review:
        "With their creative posters and ads, my bakery got more orders for cakes and snacks. Very satisfied.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Divya Sree",
      role: "Clothing Store Owner",
      company: "Divya Trends",
      rating: 5,
      review:
        "The videos and posters they created helped me get many new customers for my clothing shop.",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Ravi Teja",
      role: "Restaurant Owner",
      company: "Annapurna Restaurant",
      rating: 5,
      review:
        "Their short ads on social media brought in many new customers to my restaurant.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Kiran Kumar",
      role: "E-commerce Seller",
      company: "Smart Deals Online",
      rating: 5,
      review:
        "They helped me with product ads and campaigns. My online sales improved a lot in a short time.",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  ];
  

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Services */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Boost Your Brand with{" "}
            <span className="text-green-600">Creative Digital Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            We provide end-to-end digital services to help your business grow,
            stand out, and connect with customers effectively.
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-8">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5" /> Hyper Realistic AI CGI Video Ads
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5" /> Graphics Design & Branding
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5" /> Digital Marketing & SEO
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5" /> Content Creation & Drafting
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5" /> Web Design & Development
            </li>
          </ul>
          <button onClick={() => { window.location.href = '/services'; }} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Right Column - Reviews Carousel */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <Quote className="w-6 h-6 text-green-600 opacity-70" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Trusted by Our Clients
            </h3>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            className="pb-10"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="p-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic leading-relaxed">
                    "{testimonial.review}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                      <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
