export const museums = [
  {
    id: '1',
    name: 'The Metropolitan Museum of Art',
    description:
      'The Metropolitan Museum of Art presents over 5,000 years of art from around the world for everyone to experience and enjoy. Since its founding in 1870, The Met has always aspired to be more than a treasury of rare and beautiful objects.',
    shortDescription: "One of the world's largest and finest art museums.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg',
    images: [
      'https://images.unsplash.com/photo-1582036583990-d8bed72baa66?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1605726138024-77a8963dc149?auto=format&fit=crop&q=80',
    ],
    location: {
      city: 'New York',
      address: '1000 Fifth Avenue, NY 10028',
      coordinates: {
        lat: 40.7794,
        lng: -73.9632,
      },
    },
    pricing: {
      adult: 25,
      child: 0,
      senior: 17,
    },
    openingHours: {
      monday: { open: '10:00', close: '17:30' },
      tuesday: { open: '10:00', close: '17:30' },
      wednesday: { open: '10:00', close: '17:30' },
      thursday: { open: '10:00', close: '17:30' },
      friday: { open: '10:00', close: '21:00' },
      saturday: { open: '10:00', close: '21:00' },
      sunday: { open: '10:00', close: '17:30' },
    },
    rating: 4.8,
    reviews: [
      {
        id: '1',
        userId: '1',
        userName: 'John Smith',
        rating: 5,
        comment:
          'An incredible collection of art from around the world. Could spend days here!',
        date: '2024-02-15',
      },
    ],
    category: ['Art', 'History', 'Culture'],
    popularity: 98,
  },
  {
    id: '2',
    name: 'Louvre Museum',
    description:
      "The Louvre Museum in Paris is the world's largest art museum and a historic monument, housing approximately 38,000 objects from prehistory to the 21st century.",
    shortDescription: "The world's largest art museum located in Paris.",
    image:
      'https://images.unsplash.com/photo-1549122728-f519709caa9c?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1549122728-f519709caa9c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1562763120-5d55a0a3566b?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80',
    ],
    location: {
      city: 'Paris',
      address: 'Rue de Rivoli, 75001 Paris, France',
      coordinates: {
        lat: 48.8606,
        lng: 2.3376,
      },
    },
    pricing: {
      adult: 17,
      child: 0,
      senior: 17,
    },
    openingHours: {
      monday: { open: '09:00', close: '18:00' },
      wednesday: { open: '09:00', close: '21:45' },
      thursday: { open: '09:00', close: '18:00' },
      friday: { open: '09:00', close: '21:45' },
      saturday: { open: '09:00', close: '18:00' },
      sunday: { open: '09:00', close: '18:00' },
    },
    rating: 4.7,
    reviews: [
      {
        id: '2',
        userId: '2',
        userName: 'Marie Dupont',
        rating: 5,
        comment: 'A must-visit in Paris. The art collections are unparalleled.',
        date: '2024-03-10',
      },
    ],
    category: ['Art', 'History'],
    popularity: 99,
  },
  {
    id: '3',
    name: 'The British Museum',
    description:
      'Located in London, The British Museum is dedicated to human history, art, and culture, boasting a vast collection of world art and artifacts.',
    shortDescription:
      'A comprehensive collection of art and antiquities from around the globe.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/5a/British_Museum_Great_Court%2C_London%2C_UK_-_Diliff.jpg',
    images: [
      'https://images.unsplash.com/photo-1592194996308-7d7d4f860d4a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580568471664-4e9a1e4d6346?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571607387540-0a1a0f9c1cde?auto=format&fit=crop&q=80',
    ],
    location: {
      city: 'London',
      address: 'Great Russell St, London WC1B 3DG, UK',
      coordinates: {
        lat: 51.5194,
        lng: -0.127,
      },
    },
    pricing: {
      adult: 0,
      child: 0,
      senior: 0,
    },
    openingHours: {
      monday: { open: '10:00', close: '17:30' },
      tuesday: { open: '10:00', close: '17:30' },
      wednesday: { open: '10:00', close: '17:30' },
      thursday: { open: '10:00', close: '17:30' },
      friday: { open: '10:00', close: '20:30' },
      saturday: { open: '10:00', close: '17:30' },
      sunday: { open: '10:00', close: '17:30' },
    },
    rating: 4.7,
    reviews: [
      {
        id: '2',
        userId: '2',
        userName: 'Marie Dupont',
        rating: 5,
        comment: 'A must-visit in Paris. The art collections are unparalleled.',
        date: '2024-03-10',
      },
    ],
    category: ['Art', 'History'],
    popularity: 99,
  },
  {
    id: '4',
    name: 'Vatican Museums',
    description:
      'The Vatican Museums showcase a vast collection of art and historical artifacts collected by the Roman Catholic Church over centuries, including renowned classical sculptures and significant Renaissance masterpieces.',
    shortDescription:
      'A treasure trove of art and history within Vatican City.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/f0/VaticanMuseumStaircase.jpg',
    images: [
      'https://images.unsplash.com/photo-1587502536263-1c1c3b9a1f7f?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1579885881113-0a1a0f9c1cde?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1592194996308-7d7d4f860d4a?auto=format&fit=crop&q=80',
    ],
    location: {
      city: 'Vatican City',
      address: 'Viale Vaticano, 00165 Vatican City',
      coordinates: {
        lat: 41.9065,
        lng: 12.4536,
      },
    },
    pricing: {
      adult: 17,
      child: 8,
      senior: 15,
    },
    openingHours: {
      monday: { open: '09:00', close: '18:00' },
      tuesday: { open: '09:00', close: '18:00' },
      wednesday: { open: '09:00', close: '18:00' },
      thursday: { open: '09:00', close: '18:00' },
      friday: { open: '09:00', close: '18:00' },
      saturday: { open: '09:00', close: '18:00' },
      sunday: { open: '09:00', close: '14:00' },
    },
    rating: 4.7,
    reviews: [
      {
        id: '3',
        userId: '3',
        userName: 'Luca Rossi',
        rating: 5,
        comment:
          'An awe-inspiring collection of art and history. The Sistine Chapel is breathtaking.',
        date: '2024-04-20',
      },
    ],
    category: ['Art', 'History', 'Religion'],
    popularity: 97,
  },
  {
    id: '5',
    name: 'National Gallery',
    description:
      'The National Gallery in London houses a rich collection of over 2,000 Western European paintings from the Middle Ages to the 20th century.',
    shortDescription:
      'A vast collection of Western European paintings in London.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Galer%C3%ADa_Nacional%2C_Londres%2C_Inglaterra%2C_2014-08-07%2C_DD_036.JPG/1200px-Galer%C3%ADa_Nacional%2C_Londres%2C_Inglaterra%2C_2014-08-07%2C_DD_036.JPG?20140919110009',
    images: [
      'https://images.unsplash.com/photo-1571607387540-0a1a0f9c1cde?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580568471664-4e9a1e4d6346?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1592194996308-7d7d4f860d4a?auto=format&fit=crop&q=80',
    ],
    location: {
      city: 'London',
      address: 'Trafalgar Square, London WC2N 5DN, UK',
      coordinates: {
        lat: 51.5086,
        lng: -0.1283,
      },
    },
    pricing: {
      adult: 0,
      child: 0,
      senior: 0,
    },
    openingHours: {
      monday: { open: '10:00', close: '18:00' },
      tuesday: { open: '10:00', close: '18:00' },
      wednesday: { open: '10:00', close: '18:00' },
      thursday: { open: '10:00', close: '18:00' },
      friday: { open: '10:00', close: '21:00' },
      saturday: { open: '10:00', close: '18:00' },
      sunday: { open: '10:00', close: '18:00' },
    },
    rating: 4.6,
    reviews: [
      {
        id: '4',
        userId: '4',
        userName: 'Emily Johnson',
        rating: 5,
        comment:
          'A remarkable collection of paintings. A must-visit for art enthusiasts.',
        date: '2024-05-15',
      },
    ],
    category: ['Art'],
    popularity: 95,
  },
];
