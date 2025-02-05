import React from 'react';
import WaveformBackground from '../components/WaveformBackground';
import { MessageSquare, Brain, Sparkles, Speech, Workflow, Users, GraduationCap, HeartHandshake } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Speech Sound Disorders",
      description: "Comprehensive evaluation and therapy for speech sound disorders.",
      icon: Speech
    },
    {
      title: "Language Development",
      description: "Building strong foundations for effective communication.",
      icon: MessageSquare
    },
    // ... add other services
  ];

  return (
    <div className="relative">
      <WaveformBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sky-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive speech therapy services for children of all ages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <Icon className="h-12 w-12 text-sky-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 