import React from 'react';
import { Check, Heart, Star, Trophy } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Food',
      description: 'Every dish is crafted with love and attention to detail',
    },
    {
      icon: Star,
      title: 'Quality Ingredients',
      description: 'We source only the freshest, premium ingredients',
    },
    {
      icon: Trophy,
      title: 'Award Winning',
      description: 'Recognized for excellence in catering services',
    },
  ];

  const features = [
    'Customizable menus for any dietary requirement',
    'Professional and experienced chef team',
    'Full-service event planning support',
    'Flexible packages to fit any budget',
    'On-time delivery and setup',
    'Exceptional customer service',
  ];

  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <div className="relative py-32 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Story
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              A legacy of culinary excellence and unforgettable experiences since 2011
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-6 px-4 py-2 bg-amber-100 rounded-full">
              <span className="text-amber-700 text-sm font-medium tracking-wide">SINCE 2011</span>
            </div>
            <h2 className="text-5xl font-bold text-neutral-900 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              A Passion for Perfection
            </h2>
            <div className="space-y-6 text-neutral-600 text-base leading-relaxed">
              <p>
                Founded in 2011, Fat Full Catering began with a singular vision: to craft memorable dining
                experiences that unite people through the art of exceptional cuisine. From our humble beginnings,
                we've evolved into one of the region's most distinguished catering services.
              </p>
              <p>
                Our dedicated team of culinary artisans and event specialists brings meticulous attention to
                detail to every celebration. We believe exceptional catering transcends mere sustenance—it's
                about orchestrating unforgettable moments that resonate for years to come.
              </p>
              <p>
                Today, with over 500 successful events, from intimate gatherings to grand corporate galas, we
                remain steadfast in our commitment to uncompromising quality, innovative menus, and
                service that exceeds expectations.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-200 via-amber-300 to-orange-300 rounded-3xl shadow-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-neutral-900 rounded-3xl opacity-10"></div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-neutral-900 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Core Values
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              The principles that define our approach to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-neutral-50 p-10 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-neutral-200 hover:border-amber-300 text-center">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 flex-items-center justify-center">
             <img
    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698921ff1383d42bf491dbc7/dba3148d5_FatFullCateringLogo.png"
    alt="Fat Full Catering Logo"
className="h-[420px] lg:h-[500px] w-[800px] "/>         
 </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl font-bold text-neutral-900 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              The Fat Full Catering Difference
            </h2>
            <p className="text-neutral-600 text-base mb-10 leading-relaxed">
              We transcend traditional catering to deliver truly exceptional experiences. Discover what distinguishes us:
            </p>
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-full p-1.5 mt-0.5 group-hover:scale-110 transition-transform">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-neutral-700 text-base leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}