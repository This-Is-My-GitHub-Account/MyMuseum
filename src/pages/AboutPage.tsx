import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About MyMuseum</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connecting art and culture enthusiasts with the world's finest museums through seamless digital experiences.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At MyMuseum, we believe that art and culture should be accessible to everyone. Our mission is to bridge the gap between museums and visitors by providing a seamless, digital platform for discovering and booking museum experiences worldwide.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">2020</h3>
            <p className="text-gray-600">
              Founded with a vision to revolutionize museum accessibility in the digital age.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">2022</h3>
            <p className="text-gray-600">
              Expanded our network to include over 100 museums across multiple countries.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">2024</h3>
            <p className="text-gray-600">
              Launched innovative features to enhance the museum visiting experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Mail className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600">info@MyMuseum.com</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <Phone className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <MapPin className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-600">123 Art Street, NY 10001</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">How do I book tickets?</h3>
            <p className="text-gray-600">
              Simply browse our museum listings, select your desired museum, choose your preferred date and time, and complete the booking process online.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Can I cancel my booking?</h3>
            <p className="text-gray-600">
              Yes, you can cancel your booking up to 24 hours before your scheduled visit for a full refund.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Are there group discounts?</h3>
            <p className="text-gray-600">
              Yes, we offer special rates for groups of 10 or more. Please contact our support team for more information.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section>
        <div className="bg-blue-600 rounded-lg shadow-md p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">
            Subscribe to our newsletter for the latest updates on museum events and exhibitions.
          </p>
          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}