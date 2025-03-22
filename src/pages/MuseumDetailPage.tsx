import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Clock, Calendar, Users } from 'lucide-react';
import { museums } from '../data/museums';

export default function MuseumDetailPage() {
  const { id } = useParams();
  const museum = museums.find((m) => m.id === id);

  if (!museum) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Museum not found</h1>
        <Link to="/museums" className="text-blue-600 hover:text-blue-700">
          Back to Museums
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
        <img
          src={museum.image}
          alt={museum.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{museum.name}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{museum.location.city}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 mr-1" />
              <span>{museum.rating} ({museum.reviews.length} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-gray-600">{museum.description}</p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(museum.openingHours).map(([day, hours]) => (
                <div key={day} className="flex justify-between items-center">
                  <span className="capitalize">{day}</span>
                  <span className="text-gray-600">
                    {hours.open} - {hours.close}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            <div className="space-y-6">
              {museum.reviews.map((review) => (
                <div key={review.id} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2">{review.userName}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1">{review.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Booking Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
            <h3 className="text-xl font-bold mb-4">Book Your Visit</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span>Adult</span>
                <span className="font-semibold">${museum.pricing.adult}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Child</span>
                <span className="font-semibold">${museum.pricing.child}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Senior</span>
                <span className="font-semibold">${museum.pricing.senior}</span>
              </div>
            </div>
            <Link
              to={`/booking/${museum.id}`}
              className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}