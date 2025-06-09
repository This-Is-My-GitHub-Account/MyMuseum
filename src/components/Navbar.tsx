import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Search, Menu, X, User, LogOut } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/museums?search=${searchQuery}`);
    setSearchQuery('');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">MyMuseum</span>
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link to="/museums" className="text-gray-700 hover:text-gray-900">
              Museums
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search museums..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-1 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </form>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center text-gray-700 hover:text-gray-900">
                  <User className="h-5 w-5 mr-1" />
                  Profile
                </Link>
                <button
                  onClick={() => logout()}
                  className="flex items-center text-gray-700 hover:text-gray-900"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Sign In
              </Link>
            )}
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/museums"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Museums
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About
            </Link>
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Profile
                </Link>
                <button
                  onClick={() => logout()}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}