import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Settings, Heart, Calendar } from 'lucide-react';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <nav className="space-y-2">
              <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 rounded-md bg-gray-100">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </button>
              <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100">
                <Calendar className="h-5 w-5" />
                <span>Bookings</span>
              </button>
              <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100">
                <Heart className="h-5 w-5" />
                <span>Favorites</span>
              </button>
              <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          {/* Profile Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={user.name}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Recent Bookings</h3>
            {user.bookings.length > 0 ? (
              <div className="space-y-4">
                {user.bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">Booking #{booking.id}</h4>
                        <p className="text-gray-600">Date: {booking.date}</p>
                        <p className="text-gray-600">
                          Total: ${booking.totalPrice}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          booking.status === 'confirmed'
                            ? 'bg-green-100 text-green-800'
                            : booking.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No bookings yet.</p>
            )}
          </div>

          {/* Favorite Museums */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Favorite Museums</h3>
            {user.favorites.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {user.favorites.map((museumId) => (
                  <div
                    key={museumId}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold">Museum Name</h4>
                    <p className="text-gray-600">Added to favorites</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No favorite museums yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}