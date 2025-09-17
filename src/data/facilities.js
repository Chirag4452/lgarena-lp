// Sample data for sports facilities
export const facilities = [
  {
    id: 1,
    name: "Basketball Courts",
    sport: "basketball",
    description: "Professional-grade indoor basketball courts with regulation dimensions and premium flooring.",
    features: [
      "6 indoor courts with professional hardwood flooring",
      "Regulation size: 94ft x 50ft courts",
      "Adjustable hoops (8ft to 10ft heights)",
      "LED lighting system with broadcast quality",
      "Climate-controlled environment",
      "Bleacher seating for 200 spectators",
      "Professional sound system for events",
      "Electronic scoreboard systems"
    ],
    operating_hours: "6:00 AM - 11:00 PM",
    pricing: {
      hourly: 45,
      daily: 300,
      monthly: 1200
    },
    image_url: "/assets/basketball.jpg",
    capacity: 12,
    amenities: ["Locker rooms", "Water fountains", "Equipment rental", "First aid station"],
    dimensions: "94ft x 50ft",
    equipment: ["Basketballs", "Scoreboards", "Shot clock", "Referee equipment"],
    surface: "Professional hardwood maple flooring"
  },
  {
    id: 2,
    name: "Tennis Complex",
    sport: "tennis", 
    description: "State-of-the-art tennis facilities featuring both indoor and outdoor courts.",
    features: [
      "8 outdoor hard courts with premium surfaces",
      "4 indoor courts with climate control",
      "Professional LED court lighting",
      "Tournament-grade net systems",
      "Practice wall for solo training",
      "Pro shop with equipment and apparel",
      "Ball machine rental available",
      "Video analysis system"
    ],
    operating_hours: "5:30 AM - 11:00 PM",
    pricing: {
      hourly: 35,
      daily: 250,
      monthly: 800
    },
    image_url: "/assets/tennis.jpg",
    capacity: 4,
    amenities: ["Locker rooms", "Coaching available", "Equipment rental", "Pro shop"],
    dimensions: "78ft x 36ft (regulation)",
    equipment: ["Tennis rackets", "Ball machines", "Practice cones", "Net tension meters"],
    surface: "Hard court acrylic surface (outdoor), Synthetic turf (indoor)"
  },
  {
    id: 3,
    name: "Swimming Pool Complex",
    sport: "swimming",
    description: "Olympic-sized swimming facility with separate pools for training and recreation.",
    features: [
      "50-meter Olympic swimming pool (8 lanes)",
      "25-meter training/warm-up pool",
      "Kids' splash zone and play area",
      "Diving boards (1m, 3m, 5m platforms)",
      "Electronic timing systems",
      "Spectator seating for 300",
      "Pool deck with lounge area",
      "Underwater cameras for technique analysis"
    ],
    operating_hours: "5:00 AM - 10:00 PM",
    pricing: {
      hourly: 15,
      daily: 80,
      monthly: 450
    },
    image_url: "/assets/swimming.jpg",
    capacity: 100,
    amenities: ["Certified lifeguards", "Swimming lessons", "Locker rooms", "Pool towel service"],
    dimensions: "50m x 25m (Olympic), 25m x 12m (Training)",
    equipment: ["Lane ropes", "Starting blocks", "Pool vacuums", "Safety equipment"],
    surface: "Competition-grade pool tiles with anti-slip deck"
  },
  {
    id: 4,
    name: "Soccer Fields",
    sport: "soccer",
    description: "Full-sized soccer fields with natural and artificial turf options.",
    features: [
      "2 FIFA-regulation natural grass fields",
      "1 premium artificial turf field",
      "Professional aluminum goal posts",
      "Stadium-grade LED lighting system",
      "Advanced drainage and irrigation systems",
      "Spectator stands for 500 people",
      "Electronic scoreboard",
      "Professional field maintenance equipment"
    ],
    operating_hours: "6:00 AM - 10:00 PM",
    pricing: {
      hourly: 80,
      daily: 500,
      monthly: 2000
    },
    image_url: "/assets/soccer.jpg",
    capacity: 22,
    amenities: ["Equipment storage", "Team changing rooms", "First aid station", "Coaching areas"],
    dimensions: "100-130 yards x 50-100 yards (FIFA regulation)",
    equipment: ["Soccer balls", "Goals", "Corner flags", "Training cones", "Referee equipment"],
    surface: "Natural grass (2 fields), Premium artificial turf (1 field)"
  },
  {
    id: 5,
    name: "Fitness Center",
    sport: "fitness",
    description: "Comprehensive fitness facility with modern equipment and group exercise spaces.",
    features: [
      "200+ pieces of cardio and strength equipment",
      "Free weights section with Olympic bars",
      "Group exercise studios with mirrors",
      "Functional training area with TRX systems",
      "Spinning studio with 30 bikes",
      "Personal training rooms",
      "Sauna and steam rooms",
      "Juice bar and nutrition center"
    ],
    operating_hours: "5:00 AM - 11:00 PM",
    pricing: {
      hourly: 25,
      daily: 35,
      monthly: 89
    },
    image_url: "/assets/fitness.jpg",
    capacity: 150,
    amenities: ["Personal trainers", "Group classes", "Nutrition counseling", "Towel service"],
    dimensions: "15,000 sq ft main floor, 8 studio rooms",
    equipment: ["Treadmills", "Ellipticals", "Weight machines", "Free weights", "Spin bikes", "TRX systems"],
    surface: "Rubber flooring, mirrored walls, climate controlled"
  },
  {
    id: 6,
    name: "Volleyball Courts",
    sport: "volleyball",
    description: "Indoor volleyball courts designed for both recreational and competitive play.",
    features: [
      "4 regulation indoor courts",
      "Professional Senoh net systems",
      "Maple hardwood flooring with proper markings",
      "Spectator seating for 200",
      "Official referee stands with scorekeeping",
      "Equipment storage and ball carts",
      "Video recording capabilities",
      "Warm-up and practice areas"
    ],
    operating_hours: "6:00 AM - 11:00 PM",
    pricing: {
      hourly: 40,
      daily: 280,
      monthly: 1000
    },
    image_url: "/assets/volleyball.jpg",
    capacity: 12,
    amenities: ["Equipment rental", "Coaching clinics", "Tournament hosting", "Referee services"],
    dimensions: "60ft x 30ft (regulation court)",
    equipment: ["Volleyballs", "Net systems", "Referee stands", "Line judges chairs", "Ball carts"],
    surface: "Maple hardwood with official court markings"
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
