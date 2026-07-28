export type HotelRoom = {
  name: string;
  description: string;
  occupancy: string;
  bed: string;
  size: string;
  price: string;
  amenities: string[];
  image: string;
};

export type HotelData = {
  slug: string;
  name: string;
  location: string;
  address: string;
  rating: number;
  shortDescription: string;
  overview: [string, string];
  coordinates: { lat: number; lng: number };
  rooms: HotelRoom[];
  amenities: string[];
  nearby: { name: string; distance: string; time: string; type: string }[];
  reviews: { name: string; location: string; rating: number; review: string }[];
  faqs: { question: string; answer: string }[];
  banquetCapacity: string;
  seoDescription: string;
};

const commonRooms = (slug: string): HotelRoom[] => [
  {
    name: "Deluxe Room",
    description: "A calm, well-planned room for effortless business trips and city stays.",
    occupancy: "2 Guests",
    bed: "Queen Bed",
    size: "240 sq. ft.",
    price: "Best rate on enquiry",
    amenities: ["WiFi", "Air conditioning", "Breakfast options"],
    image: `/images/hotels/${slug}/rooms/deluxe.webp`,
  },
  {
    name: "Executive Room",
    description: "Extra space and considered comforts for longer, more productive visits.",
    occupancy: "3 Guests",
    bed: "King Bed",
    size: "310 sq. ft.",
    price: "Best rate on enquiry",
    amenities: ["Work desk", "Room service", "Premium toiletries"],
    image: `/images/hotels/${slug}/rooms/executive.webp`,
  },
  {
    name: "Premium Suite",
    description: "An elevated private retreat with generous space for rest and conversation.",
    occupancy: "4 Guests",
    bed: "King Bed",
    size: "420 sq. ft.",
    price: "Best rate on enquiry",
    amenities: ["Living area", "Breakfast", "Priority service"],
    image: `/images/hotels/${slug}/rooms/suite.webp`,
  },
];

const amenities = [
  "Free WiFi", "Parking", "Restaurant", "Air Conditioning", "24×7 Reception",
  "Laundry", "Conference Hall", "Banquet", "Room Service", "Housekeeping",
  "Power Backup", "Lift", "Modern Bathrooms", "Daily Cleaning",
];

const nearby = [
  { name: "Bhopal Railway Station", distance: "4.2 km", time: "15 min", type: "rail" },
  { name: "Raja Bhoj Airport", distance: "14 km", time: "30 min", type: "airport" },
  { name: "ISBT Habibganj", distance: "5 km", time: "16 min", type: "bus" },
  { name: "Upper Lake", distance: "8 km", time: "22 min", type: "attraction" },
  { name: "DB City Mall", distance: "3 km", time: "10 min", type: "shopping" },
  { name: "MP Nagar", distance: "2.5 km", time: "9 min", type: "business" },
];

const reviews = [
  { name: "Aarav Mehta", location: "Mumbai", rating: 5, review: "A composed, comfortable stay. The team was attentive without ever feeling intrusive, and every detail felt reliably managed." },
  { name: "Neha Sharma", location: "Indore", rating: 5, review: "Clean rooms, a reassuring welcome and an excellent location. It was easy for our family to settle in from the moment we arrived." },
  { name: "Rohan Iyer", location: "Bengaluru", rating: 4, review: "Well suited to a business visit—quiet, convenient and supported by a professional team who responded quickly." },
];

const faqs = [
  { question: "What are the check-in and check-out times?", answer: "Standard check-in is from 2:00 PM and check-out is by 11:00 AM. Early arrival or late departure is subject to availability." },
  { question: "Is parking available at the hotel?", answer: "Yes, complimentary on-site parking is available for resident guests, subject to space." },
  { question: "What is the cancellation policy?", answer: "Cancellation terms vary by rate and booking channel. Our reservations team will confirm the applicable policy before payment." },
  { question: "Is complimentary WiFi included?", answer: "Yes, high-speed WiFi is available throughout guest rooms and common areas." },
  { question: "Is breakfast available?", answer: "Breakfast is available daily and may be included depending on the selected room plan." },
  { question: "Are pets allowed?", answer: "Pets are not currently accommodated, except registered service animals where applicable." },
];

const hotelSeeds = [
  {
    slug: "hotel-arch-manor",
    name: "Hotel Arch Manor",
    location: "MP Nagar, Bhopal",
    address: "MP Nagar, Bhopal, Madhya Pradesh 462011",
    shortDescription: "A refined business address where composed interiors, attentive service and city convenience meet.",
    overview: [
      "Hotel Arch Manor welcomes business travellers and families to a polished, reassuring stay in one of Bhopal’s best-connected districts. Rooms are shaped around quiet comfort, practical ease and the confidence of consistently attentive care.",
      "From productive mornings to unhurried evenings, the hotel brings together a central location, warm service and considered amenities—creating a dependable base for meetings, celebrations and discovering the city.",
    ] as [string, string],
    banquetCapacity: "Up to 500 guests",
  },
  {
    slug: "hotel-mohit-regency",
    name: "Hotel Mohit Regency",
    location: "Central Bhopal",
    address: "Central Bhopal, Madhya Pradesh 462016",
    shortDescription: "Contemporary comfort for productive visits, relaxed weekends and family occasions.",
    overview: [
      "Hotel Mohit Regency is a welcoming city hotel designed for travellers who value clarity, comfort and responsive service. Its contemporary rooms create an easy setting for both work and rest.",
      "Thoughtful facilities, a convenient Bhopal location and a warm team make each visit feel uncomplicated—whether you are here for a meeting, a family milestone or a short urban break.",
    ] as [string, string],
    banquetCapacity: "Up to 250 guests",
  },
  {
    slug: "hotel-kamla-regency",
    name: "Hotel Kamla Regency",
    location: "Bhopal City Centre",
    address: "Bhopal City Centre, Madhya Pradesh 462003",
    shortDescription: "Warm, dependable hospitality paired with convenient access and spaces designed for easy stays.",
    overview: [
      "Hotel Kamla Regency brings a sincere sense of welcome to the heart of Bhopal. Comfortable rooms, careful cleanliness and dependable service make it a natural choice for families and city travellers.",
      "The experience is intentionally straightforward: a strategic location, modern essentials and a team that takes personal responsibility for the details that matter throughout your stay.",
    ] as [string, string],
    banquetCapacity: "Up to 300 guests",
  },
  {
    slug: "hotel-divine-casa",
    name: "Hotel Divine Casa",
    location: "South Bhopal",
    address: "South Bhopal, Madhya Pradesh 462026",
    shortDescription: "An intimate city address where considered details create a quietly elevated sense of comfort.",
    overview: [
      "Hotel Divine Casa offers a more intimate expression of Annapurna hospitality. Calm interiors and attentive service create an inviting retreat for couples, families and independent travellers.",
      "Each stay balances privacy with genuine care, supported by modern conveniences, thoughtfully prepared rooms and easy connections to South Bhopal’s key destinations.",
    ] as [string, string],
    banquetCapacity: "Up to 150 guests",
  },
  {
    slug: "hotel-ct-palace",
    name: "Hotel CT Palace",
    location: "Commercial Bhopal",
    address: "Commercial Bhopal, Madhya Pradesh 462023",
    shortDescription: "Well-appointed accommodation for travellers seeking reliable service, comfort and convenience.",
    overview: [
      "Hotel CT Palace is shaped around the rhythm of a purposeful city visit. Business-ready rooms, responsive service and practical amenities provide a reassuring base from arrival to departure.",
      "Its accessible location and composed atmosphere also make it comfortable for family stays and social occasions, all supported by Annapurna’s consistent hospitality standards.",
    ] as [string, string],
    banquetCapacity: "Up to 350 guests",
  },
  {
    slug: "hotel-smriti-star",
    name: "Hotel Smriti Star",
    location: "Bhopal",
    address: "Bhopal, Madhya Pradesh 462011",
    shortDescription: "An inviting city stay offering modern comforts and a sincere, welcoming style of service.",
    overview: [
      "Hotel Smriti Star makes Bhopal stays feel refreshingly straightforward. Well-kept rooms, thoughtful conveniences and friendly assistance create the comfort guests need after a day in the city.",
      "For family visits, short business trips or weekend plans, the hotel offers a dependable location and a team committed to making every interaction feel warm and capable.",
    ] as [string, string],
    banquetCapacity: "Up to 200 guests",
  },
] as const;

export const hotelData: HotelData[] = hotelSeeds.map((hotel, index) => ({
  ...hotel,
  rating: index % 2 ? 4.7 : 4.8,
  coordinates: { lat: 23.2599 + index * 0.004, lng: 77.4126 + index * 0.003 },
  rooms: commonRooms(hotel.slug),
  amenities,
  nearby,
  reviews,
  faqs,
  seoDescription: `${hotel.name} in Bhopal offers comfortable rooms, modern amenities, warm hospitality, dining and event facilities for business and family stays.`,
}));

export const getHotel = (slug: string) => hotelData.find((hotel) => hotel.slug === slug);
