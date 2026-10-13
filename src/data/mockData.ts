export interface SriLankaDestination {
  id: string;
  name: string;
  tagline: string;
  description: string;
  elevation: string;
  province: string;
  coordinates: string;
  iconType: 'train' | 'temple' | 'citadel' | 'tea' | 'fort' | 'safari';
  highlights: string[];
}

export interface SriLankaTour {
  id: string;
  title: string;
  duration: string;
  destinations: string;
  routeStops: string[];
  type: string;
  pace: string;
  description: string;
  highlights: string[];
  priceEstimate: string;
}

export const SRI_LANKA_DESTINATIONS: SriLankaDestination[] = [
  {
    id: 'ella',
    name: 'ELLA',
    tagline: 'Mountains, waterfalls, tea plantations and scenic train journeys',
    description: 'Famous for the iconic scenic mountain railway winding through lush green tea plantations, Nine Arches Demodara stone viaduct, Ravana Falls, Little Adam’s Peak, and rolling mountain gaps shrouded in morning mist.',
    elevation: '1,041 m',
    province: 'Uva Province',
    coordinates: '6.8667° N, 81.0466° E',
    iconType: 'train',
    highlights: ['Scenic Mountain Train through Tea Estates', 'Nine Arches Bridge & Demodara Viaduct', 'Little Adam’s Peak & Ravana Falls']
  },
  {
    id: 'kandy',
    name: 'KANDY',
    tagline: 'Culture, temples, mountains and beautiful surroundings',
    description: 'The sacred hill capital of Sri Lanka. Cradled around a tranquil lake, Kandy is home to the revered Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) and royal gardens.',
    elevation: '500 m',
    province: 'Central Province',
    coordinates: '7.2906° N, 80.6337° E',
    iconType: 'temple',
    highlights: ['Temple of the Sacred Tooth Relic', 'Peradeniya Royal Botanical Gardens', 'Kandy Lake & Cultural Kandyan Dance']
  },
  {
    id: 'sigiriya',
    name: 'SIGIRIYA',
    tagline: 'Ancient history, nature and the famous Sigiriya Rock',
    description: 'Rising 200 meters out of the jungle, King Kashyapa’s 5th-century Lion Rock fortress features ancient frescoes, the Mirror Wall, water gardens, and panoramic jungle vistas.',
    elevation: '370 m',
    province: 'Central Province',
    coordinates: '7.9570° N, 80.7603° E',
    iconType: 'citadel',
    highlights: ['Sigiriya Lion Rock Fortress Climb', 'Pidurangala Rock Sunrise Viewpoint', 'Dambulla Golden Cave Temple']
  },
  {
    id: 'nuwara-eliya',
    name: 'NUWARA ELIYA',
    tagline: 'Colonial hill cottages, cool weather & Ceylon tea estates',
    description: 'Known as "Little England", Nuwara Eliya sits at 1,868 meters elevation. It features charming British colonial architecture such as the Alpine Hotel, misty mountain hillsides, Lake Gregory, and world-renowned Ceylon tea estates.',
    elevation: '1,868 m',
    province: 'Central Province',
    coordinates: '6.9497° N, 80.7891° E',
    iconType: 'tea',
    highlights: ['Colonial Architecture & Alpine Cottages', 'World-Famous Ceylon Tea Factory Tours', 'Horton Plains & Lake Gregory']
  },
  {
    id: 'galle',
    name: 'GALLE',
    tagline: 'Historic fort, beaches and south coast charm',
    description: 'The UNESCO World Heritage 17th-century Galle Dutch Fort sits on the southern ocean. Walk ancient cobblestone bastions, colonial lighthouse walls, and nearby golden tropical beaches.',
    elevation: '12 m',
    province: 'Southern Province',
    coordinates: '6.0535° N, 80.2210° E',
    iconType: 'fort',
    highlights: ['UNESCO Galle Dutch Fort Bastions & Lighthouse', 'Boutique Cafes & Colonial Architecture', 'Nearby Unawatuna & Mirissa Surf Beaches']
  },
  {
    id: 'yala',
    name: 'YALA',
    tagline: 'Wildlife, leopards, elephants and untouched nature',
    description: 'Home to the highest density of wild leopards in the world. Embark on exhilarating 4x4 open-air safari adventures to spot leopards, wild elephants, sloth bears, and crocodiles.',
    elevation: '30 m',
    province: 'Southern Province',
    coordinates: '6.3683° N, 81.5273° E',
    iconType: 'safari',
    highlights: ['World-Class Leopard Spotting Safaris', 'Wild Asian Elephants & Sloth Bears', 'Untouched Indian Ocean Coastal Dunes']
  }
];

export const SRI_LANKA_TOURS: SriLankaTour[] = [
  {
    id: 'tour-classic-ceylon',
    title: 'The Classic Sri Lanka Discovery',
    duration: '8 Days / 7 Nights',
    destinations: 'Sigiriya • Kandy • Nuwara Eliya • Ella • Galle',
    routeStops: ['Sigiriya', 'Kandy', 'Nuwara Eliya', 'Ella', 'Galle'],
    type: 'Culture & Nature',
    pace: 'Immersive Island Traverse',
    description: 'Experience the complete heart of Sri Lanka. From the ancient lion citadel of Sigiriya to the cool tea country of Nuwara Eliya, the scenic Ella train, and the coastal Dutch fort of Galle.',
    highlights: ['Sigiriya Rock & Dambulla Caves', 'Temple of the Tooth in Kandy', 'Scenic Highland Train Ride to Ella', 'Galle Fort Sunset Walk'],
    priceEstimate: 'Customized based on travel style'
  },
  {
    id: 'tour-wild-and-coastal',
    title: 'Wild Safari & Southern Coast Tour',
    duration: '7 Days / 6 Nights',
    destinations: 'Yala • Mirissa • Weligama • Galle • Colombo',
    routeStops: ['Yala', 'Mirissa', 'Weligama', 'Galle', 'Colombo'],
    type: 'Wildlife & Beach',
    pace: 'Coastal & Wilderness Expedition',
    description: 'The ultimate adventure for wildlife and ocean lovers. Track wild leopards and elephants in Yala National Park, go blue whale watching in Mirissa, and relax on southern palm-fringed beaches.',
    highlights: ['Private 4x4 Leopard Safari in Yala', 'Whale Watching in Mirissa Bay', 'Stilt Fishermen of Weligama', 'Historic Galle Fort Ramparts'],
    priceEstimate: 'Customized based on travel style'
  },
  {
    id: 'tour-tea-and-trains',
    title: 'Highland Tea & Mountain Train Adventure',
    duration: '5 Days / 4 Nights',
    destinations: 'Kandy • Nuwara Eliya • Horton Plains • Ella',
    routeStops: ['Kandy', 'Nuwara Eliya', 'Horton Plains', 'Ella'],
    type: 'Highlands & Scenic Rail',
    pace: 'Alpine Mist & Rail Journey',
    description: 'A picturesque journey through misty mountains, cascading waterfalls, fresh tea gardens, and the world-renowned colonial hill country railway.',
    highlights: ['Iconic Mountain Steam & Scenic Train', 'Ceylon Orthodox Tea Estate Tour', 'World’s End Cliff at Horton Plains', 'Little Adam’s Peak Hiking'],
    priceEstimate: 'Customized based on travel style'
  },
  {
    id: 'tour-cultural-citadel',
    title: 'Sacred Heritage & Ancient Kingdoms',
    duration: '6 Days / 5 Nights',
    destinations: 'Colombo • Anuradhapura • Sigiriya • Kandy',
    routeStops: ['Colombo', 'Anuradhapura', 'Sigiriya', 'Kandy'],
    type: 'Ancient History & Heritage',
    pace: 'UNESCO Historical Triangle',
    description: 'Uncover 2,500 years of civilization across Sri Lanka’s UNESCO World Heritage Cultural Triangle, sacred stupas, ancient reservoirs, and mountain royal palaces.',
    highlights: ['Ancient City of Anuradhapura', 'Sigiriya Rock Citadel at Sunrise', 'Dambulla Golden Rock Temple', 'Sacred Tooth Relic Ceremony'],
    priceEstimate: 'Customized based on travel style'
  }
];

export const SERVICE_HIGHLIGHTS = [
  {
    title: 'Custom Tour Planning',
    desc: 'Tailor-made itineraries crafted for solo travelers, couples, families, and private groups.'
  },
  {
    title: 'Private Chauffeured Transport',
    desc: 'Comfortable, air-conditioned luxury vans, SUVs, and private English-speaking tour guides.'
  },
  {
    title: 'Complete Booking Service',
    desc: 'Scenic train tickets (Ella to Kandy reserved observation car), hotel reservations, and safari permits.'
  },
  {
    title: 'Cinematography & Drone Unit',
    desc: 'Professional drone cinematography and high-resolution photo documentation available with Unknown Studio.'
  }
];
