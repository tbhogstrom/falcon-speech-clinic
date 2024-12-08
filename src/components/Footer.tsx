import React from 'react';
import { Bird, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sky-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Bird className="h-6 w-6" />
              <span className="font-bold text-lg">Falcon Speech Therapy</span>
            </div>
            <p className="mt-2 text-sky-200">
              Empowering voices, building futures.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sky-200">
              <p className="flex items-center"><Phone className="h-4 w-4 mr-2" /> (503) 555-0123</p>
              <p className="flex items-center"><Mail className="h-4 w-4 mr-2" /> info@falconspeech.com</p>
              <p className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Portland, Oregon</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sky-200">
              <li>Speech Sound Disorders</li>
              <li>Language Development</li>
              <li>Early Intervention</li>
              <li>Stuttering Therapy</li>
              <li>AAC Services</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-sky-200">
              <li>Monday - Friday: 8am - 6pm</li>
              <li>Saturday: 9am - 2pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-sky-700 text-center text-sky-200">
          <p>&copy; {new Date().getFullYear()} Falcon Speech Therapy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}