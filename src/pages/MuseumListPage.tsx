import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Filter } from 'lucide-react';
import { museums } from '../data/museums';
import type { Museum } from '../types';

export default function MuseumListPage() {
  const [sortBy, setSortBy] = useState<'name' | 'rating' | 'popularity'>('popularity');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  const allCategories = Array.from(
    new Set(museums.flatMap((museum) => museum.category))
  );

  const filteredMuseums = museums
    .filter((museum) => {
      if (selectedCategories.length === 0) return true;
      return museum.category.some((cat) => selectedCategories.includes(cat));
    })
    .filter(
      (museum) =>
        museum.pricing.adult >= priceRange[0] && museum.pricing.adult <= priceRange[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return b.popularity - a.popularity;
        default:
          return 0;
      }
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 mr-2" />
              <h2 className="text-lg font-semibold">Filters</h2>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Sort by</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="w-full p-2 border rounded-md"
              >
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="name">Name</option>
              </select>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Categories</h3>
              <div className="space-y-2">
                {allCategories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedCategories([...selectedCategories, category]);
                        } else {
                          setSelectedCategories(
                            selectedCategories.filter((cat) => cat !== category)
                          );
                        }
                      }}
                      className="mr-2"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Museum Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMuseums.map((museum) => (
              <MuseumCard key={museum.id} museum={museum} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MuseumCard({ museum }: { museum: Museum }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
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
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">
            From ${museum.pricing.adult}
          </span>
          <Link
            to={`/museums/${museum.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}