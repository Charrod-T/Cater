import React, { useState } from 'react';
import { Button } from '../components/ui/button';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'parties', name: 'Parties' },
  ];

  // Placeholder gallery items
  const galleryItems = [
    { id: 1, category: 'weddings', color: 'from-rose-200 to-pink-300' },
    { id: 2, category: 'corporate', color: 'from-blue-200 to-indigo-300' },
    { id: 3, category: 'parties', color: 'from-purple-200 to-pink-300' },
    { id: 4, category: 'weddings', color: 'from-amber-200 to-orange-300' },
    { id: 5, category: 'corporate', color: 'from-green-200 to-emerald-300' },
    { id: 6, category: 'parties', color: 'from-yellow-200 to-orange-300' },
    { id: 7, category: 'weddings', color: 'from-red-200 to-rose-300' },
    { id: 8, category: 'corporate', color: 'from-cyan-200 to-blue-300' },
    { id: 9, category: 'parties', color: 'from-violet-200 to-purple-300' },
    { id: 10, category: 'weddings', color: 'from-fuchsia-200 to-pink-300' },
    { id: 11, category: 'corporate', color: 'from-teal-200 to-cyan-300' },
    { id: 12, category: 'parties', color: 'from-orange-200 to-amber-300' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <div className="relative py-32 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Portfolio
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of our meticulously crafted events and culinary artistry
            </p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              className={
                activeCategory === category.id
                  ? 'bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6 shadow-lg'
                  : 'border-2 border-neutral-300 text-neutral-700 hover:border-amber-600 hover:text-amber-700 rounded-full px-6'
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-xl capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.category.replace('_', ' ')} Event
                </p>
                <div className="h-1 w-12 bg-amber-500 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-20 text-center bg-white rounded-2xl p-8 border border-neutral-200">
          <p className="text-neutral-500 italic text-sm">
            Portfolio images are placeholders. Add your stunning event photography to showcase your exceptional work.
          </p>
        </div>
      </div>
    </div>
  );
}