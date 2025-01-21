import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Clock,
  MapPin,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";
import adventureimg from "../images/adventure.jpg";
import surfing2 from "../images/surfing2.jpg";
import scuba from "../images/scuba.jpg";
import canyoneerining from "../images/kawasan.jpg";
import hiddengems from "../images/hiddengems.jpg";
import filipino from "../images/filipino.jpg";
import man from "../images/man.jpg";
import woman from "../images/woman.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: adventureimg,
      title: "Discover Adventure in Paradise",
      subtitle:
        "Experience the thrill of world-class adventures across the Philippine islands",
    },
    {
      image: filipino,
      title: "Experience Filipino Hospitality",
      subtitle:
        "Let our warm and friendly guides show you the beauty of our islands",
    },
    {
      image: hiddengems,
      title: "Explore Hidden Gems",
      subtitle:
        "Uncover secret beaches, caves, and waterfalls across 7,641 islands",
    },
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      text: "The surfing experience in Siargao was incredible! Great instructors and perfect waves.",
      rating: 5,
      image: woman,
    },
    {
      name: "John Dela Cruz",
      text: "Canyoneering in Cebu was the highlight of our trip. Very professional guides!",
      rating: 5,
      image: man,
    },
    {
      name: "Sarah Lee",
      text: "Amazing scuba diving experience in Palawan. Saw so many beautiful marine life!",
      rating: 5,
      image: woman,
    },
  ];

  const adventures = [
    {
      title: "Surfing in Siargao",
      description:
        "Catch world-class waves in the surfing capital of the Philippines",
      price: "₱2,500",
      image: surfing2,
      duration: "4 hours",
      location: "Cloud 9, Siargao",
      difficulty: "Beginner-Friendly",
    },
    {
      title: "Scuba Diving in Palawan",
      description: "Explore vibrant coral reefs and diverse marine life",
      price: "₱4,500",
      image: scuba,
      duration: "6 hours",
      location: "Tubbataha Reef",
      difficulty: "Intermediate",
    },
    {
      title: "Canyoneering in Cebu",
      description: "Adventure through stunning canyons and waterfalls",
      price: "₱1,500",
      image: canyoneerining,
      duration: "5 hours",
      location: "Kawasan Falls",
      difficulty: "Moderate",
    },
  ];

  const features = [
    {
      title: "Expertly Curated Adventures",
      description:
        "Each adventure is carefully designed to provide the perfect balance of excitement and safety.",
    },
    {
      title: "Professional Local Guides",
      description:
        "Experience the islands with knowledgeable guides who know every hidden gem.",
    },
    {
      title: "Flexible Scheduling",
      description:
        "Choose from various time slots that best fit your travel plans.",
    },
    {
      title: "All Equipment Included",
      description:
        "We provide high-quality gear and equipment for all activities.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <div className="overflow-hidden">
      {/* Enhanced Hero Section with Slider */}
      <div className="relative h-screen">
        <div className="absolute inset-0 w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                  <div className="text-white max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 transform transition-transform duration-700 translate-y-0">
                      {slide.title}
                    </h1>
                    <p className="text-xl mb-8 transform transition-transform duration-700 translate-y-0">
                      {slide.subtitle}
                    </p>
                    <Link to="/adventures">
                      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
                        Start Your Journey <ArrowRight size={20} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300"
        >
          <ChevronRight className="text-white" size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Why Choose Us Section (New) */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-center mb-12">
            Experience the Philippines like never before
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Popular Adventures */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Popular Adventures
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Choose from our most sought-after experiences
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {adventures.map((adventure, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={adventure.image}
                    alt={adventure.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4" /> {adventure.duration}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                      {adventure.title}
                    </h3>
                    <span className="text-blue-600 font-semibold">
                      From {adventure.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{adventure.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {adventure.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {adventure.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/adventures">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
                View All Adventures <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Testimonials */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            What Adventurers Say
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Read about experiences from our happy customers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section (New) */}
      <div className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in exploring the breathtaking beauty of the Philippines.
            Your next unforgettable experience awaits!
          </p>
          <Link to="/pricing">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
              Start Planning <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
