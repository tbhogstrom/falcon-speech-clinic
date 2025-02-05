import React from 'react';
import WaveformBackground from '../components/WaveformBackground';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative">
      <WaveformBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sky-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with our team
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-sky-900 mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-sky-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2 text-sky-600" />
                  (503) 555-0123
                </p>
                <p className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-2 text-sky-600" />
                  info@falconspeech.com
                </p>
                <p className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-sky-600" />
                  Portland, Oregon
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-900 mb-6">Office Hours</h2>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 8am - 6pm</p>
                <p>Saturday: 9am - 2pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 