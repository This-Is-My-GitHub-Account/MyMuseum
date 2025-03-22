export interface Museum {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  location: {
    city: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  pricing: {
    adult: number;
    child: number;
    senior: number;
  };
  openingHours: {
    [key: string]: {
      open: string;
      close: string;
    };
  };
  rating: number;
  reviews: Review[];
  category: string[];
  popularity: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  bookings: Booking[];
  favorites: string[];
}

export interface Booking {
  id: string;
  museumId: string;
  date: string;
  tickets: {
    adult: number;
    child: number;
    senior: number;
  };
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  specialRequirements?: string;
}