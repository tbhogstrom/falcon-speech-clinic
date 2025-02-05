import React from 'react';
import WaveformBackground from '../components/WaveformBackground';

export default function About() {
  return (
    <div className="relative">
      <WaveformBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sky-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            Dedicated to helping children find their voice
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
              alt="Speech therapy session"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sky-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Falcon Speech Therapy, we believe every child deserves to be heard. Our mission is to provide exceptional speech and language therapy services that empower children to communicate effectively and confidently.
            </p>
            <p className="text-gray-600">
              Through evidence-based practices and individualized care, we help children develop the communication skills they need to thrive in school, at home, and in their communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 