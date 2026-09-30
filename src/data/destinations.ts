import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Sigiriya",
    image: "/Sigiriya.jpg",
    description: "Sigiriya, or Lion Rock, is an ancient rock fortress and palace complex built in the 5th century AD. The site is known for its frescoes, terraced gardens, and the massive lion paw entrance to the palace on the summit. Recognized as a UNESCO World Heritage Site, it's one of Sri Lanka's most iconic landmarks.",
    activities: [
      "Climb the rock fortress for panoramic views",
      "Explore the ancient water gardens",
      "View the colorful frescoes",
      "Visit the nearby Pidurangala Rock",
      "Explore the Sigiriya Museum",
      "Safari in Minneriya National Park to see elephants"
    ]
  },
  {
    id: "2",
    name: "Kandy",
    image: "/Kandy.jpg",
    description: "Kandy is a picturesque city nestled among hills in central Sri Lanka. As the last capital of the ancient kings' era, it maintains a rich cultural heritage. The city is home to the Temple of the Tooth Relic, one of Buddhism's most sacred sites, and its surroundings offer lush botanical gardens and scenic landscapes.",
    activities: [
      "Visit the sacred Temple of the Tooth Relic",
      "Explore the Royal Botanical Gardens at Peradeniya",
      "Watch traditional Kandyan dance performances",
      "Tour the Kandy Lake and walkways",
      "Shop for traditional crafts and gemstones",
      "Visit nearby tea plantations"
    ]
  },
  {
    id: "3",
    name: "Ella",
    image: "/ella.jpg",
    description: "Ella is a charming town nestled in the misty highlands of Sri Lanka's Hill Country. Famous for its stunning natural landscapes, including waterfalls, tea plantations, and mountain peaks, it has become a favorite destination for hikers and nature lovers. The area is also known for its iconic Nine Arch Bridge, a colonial-era railway bridge surrounded by lush jungle.",
    activities: [
      "Hike to Little Adam's Peak for sunrise views",
      "Visit the impressive Nine Arch Bridge",
      "Trek to Ella Rock for panoramic vistas",
      "Tour tea plantations and factories",
      "Cool off at Ravana Falls",
      "Enjoy the laid-back atmosphere of Ella town"
    ]
  },
  {
    id: "4",
    name: "Yala National Park",
    image: "/yala.jpg",
    description: "Yala National Park is Sri Lanka's most visited wildlife reserve and the second-largest national park in the country. Located in the southeast region, it's renowned for having one of the highest leopard densities in the world. The park features diverse ecosystems, from monsoon forests to grasslands and lagoons, supporting a variety of wildlife including elephants, sloth bears, and numerous bird species.",
    activities: [
      "Safari drives to spot leopards and other wildlife",
      "Bird watching with over 200 species",
      "Photography at scenic lakes and waterholes",
      "Visit ancient ruins within the park",
      "Coastal area exploration",
      "Camping at designated sites"
    ]
  },
  {
    id: "5",
    name: "Mirissa",
    image: "/mirissa.jpg",
    description: "Mirissa is a picturesque beach town on Sri Lanka's southern coast, known for its crescent-shaped beach lined with palm trees. It's a popular destination for relaxation, water activities, and whale watching. The laid-back atmosphere, stunning sunsets, and fresh seafood have made it a favorite among travelers seeking a coastal paradise.",
    activities: [
      "Whale and dolphin watching (November to April)",
      "Surfing at beginner-friendly breaks",
      "Snorkeling in clear waters",
      "Relaxing on the beautiful crescent beach",
      "Fresh seafood dining on the beach",
      "Sunset viewing from Parrot Rock"
    ]
  },
  
];

export const getDestinationById = (id: string): Destination | undefined => {
  return destinations.find(d => d.id === id);
};