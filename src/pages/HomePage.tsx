import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import { museums } from '../data/museums';

export default function HomePage() {
  const featuredMuseums = museums.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1544723495-432537d12f6c?auto=format&fit=crop&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Art & Culture
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the world's finest museums with seamless online booking
          </p>
          <Link
            to="/museums"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Museums
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Featured Museums Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Museums</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMuseums.map((museum) => (
              <div
                key={museum.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={museum.image}
                    alt={museum.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{museum.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{museum.name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{museum.location.city}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{museum.shortDescription}</p>
                  <Link
                    to={`/museums/${museum.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/museums"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Museums
              <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}