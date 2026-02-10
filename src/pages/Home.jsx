import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '../components/ui/button';
import { ChefHat, Users, Award, Sparkles, Calendar, Heart } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Catering',
      description: 'Exquisite cuisine and impeccable service to make your special day truly unforgettable',
    },
    {
      icon: Users,
      title: 'Corporate Events',
      description: 'Refined dining experiences that elevate your professional gatherings and impress clients',
    },
    {
      icon: Sparkles,
      title: 'Private Celebrations',
      description: 'Bespoke menus tailored to your unique vision and dietary preferences',
    },
    {
      icon: Calendar,
      title: 'Seamless Planning',
      description: 'Expert coordination and flawless execution from consultation to final service',
    },
  ];

  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-amber-600/20 border border-amber-500/30 rounded-full">
            <span className="text-amber-400 text-sm font-medium tracking-wide">PREMIUM CATERING SERVICES</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Culinary Excellence
            <span className="block text-amber-500 mt-2">Delivered</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your celebration into an extraordinary experience with our masterfully crafted cuisine and impeccable service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-7 text-base rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                Request Quote
              </Button>
            </Link>
            <Link to={createPageUrl('Gallery')}>
              <Button size="lg" className="bg-white text-neutral-900 hover:bg-neutral-100 px-10 py-7 text-base rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Our Expertise
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Comprehensive catering solutions tailored to elevate every occasion
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-neutral-200 hover:border-amber-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {service.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-3 text-amber-500" style={{ fontFamily: 'var(--font-heading)' }}>500+</div>
              <div className="text-neutral-400 text-sm uppercase tracking-wider">Events Catered</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-3 text-amber-500" style={{ fontFamily: 'var(--font-heading)' }}>15+</div>
              <div className="text-neutral-400 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-3 text-amber-500" style={{ fontFamily: 'var(--font-heading)' }}>98%</div>
              <div className="text-neutral-400 text-sm uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-3 text-amber-500" style={{ fontFamily: 'var(--font-heading)' }}>50+</div>
              <div className="text-neutral-400 text-sm uppercase tracking-wider">Menu Options</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <div className="relative bg-gradient-to-br from-amber-600 via-amber-700 to-orange-600 rounded-3xl p-16 md:p-20 text-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555244162-803834f70033?w=1200')] bg-cover bg-center opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Let's Create Something Extraordinary
            </h2>
            <p className="text-xl mb-10 text-amber-100 max-w-2xl mx-auto">
              Schedule a complimentary consultation to discuss your vision and receive a personalized quote
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-white text-amber-700 hover:bg-neutral-100 px-12 py-7 text-base rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}