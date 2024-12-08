import React from 'react';
import { Link } from 'react-router-dom';
import { Bird } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-sky-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Bird className="h-8 w-8" />
            <span className="font-bold text-xl">Falcon Speech Therapy</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/services" className="hover:text-sky-200 transition">Services</Link>
            <Link to="/about" className="hover:text-sky-200 transition">About</Link>
            <Link to="/resources" className="hover:text-sky-200 transition">Resources</Link>
            <Link to="/contact" className="hover:text-sky-200 transition">Contact</Link>
            <Link to="/screening" className="bg-yellow-500 text-sky-900 px-4 py-2 rounded-full hover:bg-yellow-400 transition">
              Free Screening
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}