import React from 'react';
import WaveformBackground from '../components/WaveformBackground';

export default function Blog() {
  return (
    <div className="relative">
      <WaveformBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sky-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Insights and updates from our speech therapy experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add blog post cards here */}
        </div>
      </div>
    </div>
  );
} 