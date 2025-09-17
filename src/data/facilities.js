// Sample data for sports facilities
export const facilities = [
  {
    id: 1,
    name: "Basketball Courts",
    sport: "basketball",
    description: "Professional-grade indoor basketball courts with regulation dimensions and premium flooring.",
    features: [
      "6 indoor courts with professional hardwood flooring",
      "Adjustable hoops (8ft to 10ft)",
      "LED lighting system",
      "Air conditioning",
      "Bleacher seating for 200 spectators",
      "Sound system for events"
    ],
    operating_hours: "6:00 AM - 11:00 PM",
    pricing: {
      hourly: 45,
      daily: 300,
      monthly: 1200
    },
    image_url: "/assets/basketball.jpg",
    capacity: 12,
    amenities: ["Locker rooms", "Water fountains", "Equipment rental"]
  },
  {
    id: 2,
    name: "Tennis Complex",
    sport: "tennis", 
    description: "State-of-the-art tennis facilities featuring both indoor and outdoor courts.",
    features: [
      "8 outdoor hard courts",
      "4 indoor courts with climate control",
      "Professional court lighting",
      "Tournament-grade net systems",
      "Practice wall for solo training",
      "Pro shop and equipment rental"
    ],
    operating_hours: "5:30 AM - 11:00 PM",
    pricing: {
      hourly: 35,
      daily: 250,
      monthly: 800
    },
    image_url: "/assets/tennis.jpg",
    capacity: 4,
    amenities: ["Locker rooms", "Coaching available", "Equipment rental"]
  },
  {
    id: 3,
    name: "Swimming Pool Complex",
    sport: "swimming",
    description: "Olympic-sized swimming facility with separate pools for training and recreation.",
    features: [
      "50-meter Olympic swimming pool",
      "25-meter training pool",
      "Kids' splash zone",
      "Diving boards (1m, 3m, 5m)",
      "Lane timing systems",
      "Pool deck with seating"
    ],
    operating_hours: "5:00 AM - 10:00 PM",
    pricing: {
      hourly: 15,
      daily: 80,
      monthly: 450
    },
    image_url: "/assets/swimming.jpg",
    capacity: 100,
    amenities: ["Lifeguards on duty", "Swimming lessons", "Locker rooms"]
  },
  {
    id: 4,
    name: "Soccer Fields",
    sport: "soccer",
    description: "Full-sized soccer fields with natural and artificial turf options.",
    features: [
      "2 FIFA-regulation natural grass fields",
      "1 artificial turf field",
      "Professional goal posts",
      "Stadium lighting",
      "Drainage systems",
      "Spectator stands for 500"
    ],
    operating_hours: "6:00 AM - 10:00 PM",
    pricing: {
      hourly: 80,
      daily: 500,
      monthly: 2000
    },
    image_url: "/assets/soccer.jpg",
    capacity: 22,
    amenities: ["Equipment storage", "Team changing rooms", "First aid station"]
  },
  {
    id: 5,
    name: "Fitness Center",
    sport: "fitness",
    description: "Comprehensive fitness facility with modern equipment and group exercise spaces.",
    features: [
      "200+ pieces of cardio and strength equipment",
      "Free weights section",
      "Group exercise studios",
      "Functional training area",
      "Spinning studio",
      "Personal training rooms"
    ],
    operating_hours: "5:00 AM - 11:00 PM",
    pricing: {
      hourly: 25,
      daily: 35,
      monthly: 89
    },
    image_url: "/assets/fitness.jpg",
    capacity: 150,
    amenities: ["Personal trainers", "Group classes", "Nutrition counseling"]
  },
  {
    id: 6,
    name: "Volleyball Courts",
    sport: "volleyball",
    description: "Indoor volleyball courts designed for both recreational and competitive play.",
    features: [
      "4 regulation indoor courts",
      "Professional net systems",
      "Maple hardwood flooring",
      "Spectator seating",
      "Official referee stands",
      "Equipment storage"
    ],
    operating_hours: "6:00 AM - 11:00 PM",
    pricing: {
      hourly: 40,
      daily: 280,
      monthly: 1000
    },
    image_url: "/assets/volleyball.jpg",
    capacity: 12,
    amenities: ["Equipment rental", "Coaching clinics", "Tournament hosting"]
  }
];

// Contact and location information
export const contact_info = {
  name: "LG Arena Multi-Sport Complex",
  address: {
    street: "1234 Sports Drive",
    city: "Athletic City",
    state: "AC",
    zip: "12345",
    country: "USA"
  },
  phone: "(555) 123-SPORT",
  email: "info@lgarena.com",
  website: "www.lgarena.com",
  social_media: {
    facebook: "@LGArena",
    instagram: "@lg_arena",
    twitter: "@LGArenaComplex"
  },
  operating_hours: {
    weekdays: "5:00 AM - 11:00 PM",
    weekends: "6:00 AM - 10:00 PM",
    holidays: "8:00 AM - 8:00 PM"
  }
};
