import React from 'react';
import { Link } from 'react-router-dom';
import { Bird, MessageSquare, Brain, Sparkles } from 'lucide-react';
import WaveformBackground from '../components/WaveformBackground';

export default function Home() {
  return (
    <div className="relative">
      <WaveformBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"
              alt="Falcon in nest"
              className="rounded-lg shadow-xl"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-sky-900 mb-4">
            Empowering Every Voice
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Specialized speech therapy services for children and adolescents in Portland, Oregon
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/screening"
              className="bg-sky-600 text-white px-8 py-3 rounded-full hover:bg-sky-700 transition"
            >
              Free Screening
            </Link>
            <Link
              to="/contact"
              className="bg-yellow-500 text-sky-900 px-8 py-3 rounded-full hover:bg-yellow-400 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <MessageSquare className="h-12 w-12 text-sky-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Speech & Language</h3>
            <p className="text-gray-600">
              Comprehensive evaluation and therapy for speech sound disorders and language development.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Brain className="h-12 w-12 text-sky-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Early Intervention</h3>
            <p className="text-gray-600">
              Early support for children showing signs of communication difficulties.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Sparkles className="h-12 w-12 text-sky-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AAC Services</h3>
            <p className="text-gray-600">
              Augmentative and alternative communication solutions for diverse needs.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-sky-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-sky-900 mb-8">
            Why Choose Falcon Speech Therapy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-600">
                Our certified speech-language pathologists have extensive experience working with children of all ages.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
              <p className="text-gray-600">
                We develop individualized treatment plans tailored to each child's unique needs and goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}