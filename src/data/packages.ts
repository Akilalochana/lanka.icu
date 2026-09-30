import { Package } from '../types';

export const packages: Package[] = [
  {
    id: "1",
    title: "7 Nights 8 Days Tour",
    duration: 7,
    price: 140, // Example price
    image:
      "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Explore the highlights of Sri Lanka in 7 nights and 8 days, from ancient cities to stunning beaches.",
    highlights: [
      "Visit Dambulla Cave Temple",
      "Climb Sigiriya Rock Fortress",
      "Explore Kandy and the Temple of the Tooth",
      "Experience the beauty of Nuwara Eliya",
      "Enjoy beach time in Bentota",
    ],
    includes: [
      "All transportation in air-conditioned vehicle",
      "English-speaking guide",
      "Daily breakfast",
    ],
    excludes: [
      "International flights",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional activities not listed in itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Colombo",
        description:
          "Welcome to Sri Lanka! Airport pickup and transfer to hotel.",
        activities: ["Airport pickup", "Hotel check-in"],
      },
      {
        day: 2,
        title: "Dambulla",
        description: "Visit the Dambulla Cave Temple.",
        activities: ["Dambulla Cave Temple visit"],
      },
      {
        day: 3,
        title: "Sigiriya",
        description: "Climb Sigiriya Rock Fortress.",
        activities: ["Sigiriya Rock Fortress climb"],
      },
      {
        day: 4,
        title: "Kandy",
        description: "Visit the Temple of the Tooth Relic.",
        activities: ["Temple of the Tooth visit"],
      },
      {
        day: 5,
        title: "Nuwara Eliya",
        description: "Explore tea plantations.",
        activities: ["Tea plantation visit"],
      },
      {
        day: 6,
        title: "Ella",
        description: "Enjoy scenic views and hikes.",
        activities: ["Hiking in Ella"],
      },
      {
        day: 7,
        title: "Yala",
        description: "Afternoon safari in Yala National Park.",
        activities: ["Yala National Park safari"],
      },
      {
        day: 8,
        title: "Bentota",
        description: "Relax on the beautiful beaches.",
        activities: ["Beach time"],
      },
      {
        day: 9,
        title: "Departure",
        description: "Transfer back to Colombo for departure.",
        activities: ["Transfer to Colombo airport"],
      },
    ],
  },
  {
    id: "2",
    title: "14 Nights 15 Days Tour",
    duration: 14,
    price: 140, // Example price
    image:
      "https://images.pexels.com/photos/5364949/pexels-photo-5364949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A comprehensive tour of Sri Lanka covering all must-see highlights.",
    highlights: [
      "Explore Negombo and Wilpattu National Park",
      "Climb Sigiriya Rock Fortress",
      "Visit Kandy and experience local culture",
      "Enjoy the scenic beauty of Nuwara Eliya",
      "Relax on the beaches of Bentota",
    ],
    includes: [
      "All transportation including scenic train rides",
      "English-speaking guide throughout",
      "Daily breakfast and select lunches and dinners",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Alcoholic beverages",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Negombo",
        description:
          "Welcome to Sri Lanka! Airport pickup and transfer to hotel.",
        activities: ["Airport pickup", "Hotel check-in"],
      },
      {
        day: 2,
        title: "Wilpattu",
        description: "Afternoon safari in Wilpattu National Park.",
        activities: ["Wilpattu safari"],
      },
      {
        day: 3,
        title: "Sigiriya",
        description: "Climb Sigiriya Rock Fortress.",
        activities: ["Sigiriya Rock Fortress climb"],
      },
      {
        day: 4,
        title: "Kandy",
        description: "Visit the Temple of the Tooth.",
        activities: ["Temple of the Tooth visit"],
      },
      {
        day: 5,
        title: "Nuwara Eliya",
        description: "Explore tea plantations.",
        activities: ["Tea plantation visit"],
      },
      {
        day: 6,
        title: "Ella",
        description: "Enjoy scenic views and hikes.",
        activities: ["Hiking in Ella"],
      },
      {
        day: 7,
        title: "Yala",
        description: "Afternoon safari in Yala National Park.",
        activities: ["Yala National Park safari"],
      },
      {
        day: 8,
        title: "Matara",
        description: "Relax on the beaches.",
        activities: ["Beach time"],
      },
      {
        day: 9,
        title: "Bentota",
        description: "Enjoy water sports and relaxation.",
        activities: ["Water sports"],
      },
      {
        day: 10,
        title: "Departure",
        description: "Transfer back to Colombo for departure.",
        activities: ["Transfer to Colombo airport"],
      },
    ],
  },
  {
    id: "3",
    title: "17 Nights 18 Days Tour",
    duration: 17,
    price: 140, // Example price
    image:
      "https://images.pexels.com/photos/4186560/pexels-photo-4186560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "An immersive journey through Sri Lanka's culture and landscapes.",
    highlights: [
      "Explore Wilpattu and Anuradhapura",
      "Climb Sigiriya Rock Fortress",
      "Visit Trincomalee and Polonnaruwa",
      "Experience Kandy's cultural heritage",
      " Relax on the beaches of Mirissa and Bentota",
    ],
    includes: [
      "All transportation in air-conditioned vehicle",
      "English-speaking guide",
      "Daily breakfast and select meals",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities not listed in itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Colombo",
        description:
          "Welcome to Sri Lanka! Airport pickup and transfer to hotel.",
        activities: ["Airport pickup", "Hotel check-in"],
      },
      {
        day: 2,
        title: "Wilpattu",
        description: "Afternoon safari in Wilpattu National Park.",
        activities: ["Wilpattu safari"],
      },
      {
        day: 3,
        title: "Anuradhapura",
        description: "Explore the ancient city.",
        activities: ["Visit ancient ruins"],
      },
      {
        day: 4,
        title: "Sigiriya",
        description: "Climb Sigiriya Rock Fortress.",
        activities: ["Sigiriya Rock Fortress climb"],
      },
      {
        day: 5,
        title: "Trincomalee",
        description: "Relax on the beaches.",
        activities: ["Beach time"],
      },
      {
        day: 6,
        title: "Polonnaruwa",
        description: "Visit the ancient city.",
        activities: ["Explore Polonnaruwa"],
      },
      {
        day: 7,
        title: "Kandy",
        description: "Visit the Temple of the Tooth.",
        activities: ["Temple of the Tooth visit"],
      },
      {
        day: 8,
        title: "Nuwara Eliya",
        description: "Explore tea plantations.",
        activities: ["Tea plantation visit"],
      },
      {
        day: 9,
        title: "Ella",
        description: "Enjoy scenic views and hikes.",
        activities: ["Hiking in Ella"],
      },
      {
        day: 10,
        title: "Yala",
        description: "Afternoon safari in Yala National Park.",
        activities: ["Yala National Park safari"],
      },
      {
        day: 11,
        title: "Mirissa",
        description: "Relax on the beaches.",
        activities: ["Beach time"],
      },
      {
        day: 12,
        title: "Bentota",
        description: "Enjoy water sports and relaxation.",
        activities: ["Water sports"],
      },
      {
        day: 13,
        title: "Departure",
        description: "Transfer back to Colombo for departure.",
        activities: ["Transfer to Colombo airport"],
      },
    ],
  },
  {
    id: "4",
    title: "19 Nights 20 Days Tour",
    duration: 19,
    price: 140, // Example price
    image:
      "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A comprehensive exploration of Sri Lanka's diverse landscapes and cultures.",
    highlights: [
      "Visit Wilpattu and Anuradhapura",
      "Climb Sigiriya Rock Fortress",
      "Explore Trincomalee and Nilaveli",
      "Relax in Pasikuda",
      "Experience Kandy's cultural heritage",
    ],
    includes: [
      "All transportation in air-conditioned vehicle",
      "English-speaking guide",
      "Daily breakfast and select meals",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities not listed in itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Colombo",
        description:
          "Welcome to Sri Lanka! Airport pickup and transfer to hotel.",
        activities: ["Airport pickup", "Hotel check-in"],
      },
      {
        day: 2,
        title: "Wilpattu",
        description: "Afternoon safari in Wilpattu National Park.",
        activities: ["Wilpattu safari"],
      },
      {
        day: 3,
        title: "Anuradhapura",
        description: "Explore the ancient city.",
        activities: ["Visit ancient ruins"],
      },
      {
        day: 4,
        title: "Dambulla",
        description: "Visit the Dambulla Cave Temple.",
        activities: ["Dambulla Cave Temple visit"],
      },
      {
        day: 5,
        title: "Sigiriya",
        description: "Climb Sigiriya Rock Fortress.",
        activities: ["Sigiriya Rock Fortress climb"],
      },
      {
        day: 6,
        title: "Polonnaruwa",
        description: "Visit the ancient city.",
        activities: ["Explore Polonnaruwa"],
      },
      {
        day: 7,
        title: "Trincomalee",
        description: "Relax on the beaches.",
        activities: ["Beach time"],
      },
      {
        day: 8,
        title: "Nilaveli",
        description: "Enjoy the pristine beaches.",
        activities: ["Beach activities"],
      },
      {
        day: 9,
        title: "Pasikuda",
        description: "Relax and enjoy the beach.",
        activities: ["Beach time"],
      },
      {
        day: 10,
        title: "Kandy",
        description: "Visit the Temple of the Tooth.",
        activities: ["Temple of the Tooth visit"],
      },
      {
        day: 11,
        title: "Nuwara Eliya",
        description: "Explore tea plantations.",
        activities: ["Tea plantation visit"],
      },
      {
        day: 12,
        title: "Ella",
        description: "Enjoy scenic views and hikes.",
        activities: ["Hiking in Ella"],
      },
      {
        day: 13,
        title: "Yala",
        description: "Afternoon safari in Yala National Park.",
        activities: ["Yala National Park safari"],
      },
      {
        day: 14,
        title: "Mirissa",
        description: "Relax on the beaches.",
        activities: ["Beach time"],
      },
      {
        day: 15,
        title: "Bentota",
        description: "Enjoy water sports and relaxation.",
        activities: ["Water sports"],
      },
      {
        day: 16,
        title: "Departure",
        description: "Transfer back to Colombo for departure.",
        activities: ["Transfer to Colombo airport"],
      },
    ],
  },
  {
    id: "5",
    title: "22 Nights 23 Days Tour",
    duration: 22,
    price: 140, // Example price
    image:
      "https://images.pexels.com/photos/4186560/pexels-photo-4186560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "An extensive journey through Sri Lanka, covering all major attractions and hidden gems.",
    highlights: [
      "Explore Wilpattu and Anuradhapura",
      "Visit Jaffna and experience local culture",
      "Climb Sigiriya Rock Fortress",
      "Relax in Trincomalee and Pasikuda",
      "Experience Kandy's cultural heritage",
    ],
    includes: [
      "All transportation in air-conditioned vehicle",
      "English-speaking guide",
      "Daily breakfast and select meals",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities not listed in itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Colombo",
        description:
          "Welcome to Sri Lanka! Airport pickup and transfer to hotel.",
        activities: ["Airport pickup", "Hotel check-in"],
      },
      {
        day: 2,
        title: "Wilpattu",
        description: "Afternoon safari in Wilpattu National Park.",
        activities: ["Wilpattu safari"],
      },
      {
        day: 3,
        title: "Anuradhapura",
        description: "Explore the ancient city.",
        activities: ["Visit ancient ruins"],
      },
      {
        day: 4,
        title: "Jaffna",
        description: "Experience the unique culture of Jaffna.",
        activities: ["Visit local temples", "Explore Jaffna Fort"],
      },
      {
        day: 5,
        title: "Jaffna",
        description: "Continue exploring Jaffna.",
        activities: ["Island excursion", "Local food tasting"],
      },
      {
        day: 6,
        title: "Sigiriya",
        description: "Climb Sigiriya Rock Fortress.",
        activities: ["Sigiriya Rock Fortress climb"],
      },
      {
        day: 7,
        title: "Polonnaruwa",
        description: "Visit the ancient city.",
        activities: ["Explore Polonnaruwa"],
      },
      {
        day: 8,
        title: "Trincomalee",
        description: "Relax on the beaches.",
        activities: ["Beach time"],
      },
      {
        day: 9,
        title: "Nilaveli",
        description: "Enjoy the pristine beaches.",
        activities: ["Beach activities"],
      },
      {
        day: 10,
        title: "Pasikuda",
        description: "Relax and enjoy the beach.",
        activities: ["Beach time"],
      },
      {
        day: 11,
        title: "Kandy",
        description: "Visit the Temple of the Tooth.",
        activities: ["Temple of the Tooth visit"],
      },
      {
        day: 12,
        title: "Nuwara Eliya",
        description: "Explore tea plantations.",
        activities: ["Tea plantation visit"],
      },
      {
        day: 13,
        title: "Ella",
        description: "Enjoy scenic views and hikes.",
        activities: ["Hiking in Ella"],
      },
      {
        day: 14,
        title: "Yala",
        description: "Afternoon safari in Yala National Park.",
        activities: ["Yala National Park safari"],
      },
      {
        day: 15,
        title: "Udawalawe",
        description: "Visit Udawalawe National Park.",
        activities: ["Safari in Udawalawe"],
      },
      {
        day: 16,
        title: "Mirissa",
        description: "Relax on the beaches.",
        activities: ["Beach time"],
      },
      {
        day: 17,
        title: "Bentota",
        description: "Enjoy water sports and relaxation.",
        activities: ["Water sports"],
      },
      {
        day: 18,
        title: "Bentota",
        description: "Continue enjoying the beach.",
        activities: ["Beach time"],
      },
      {
        day: 19,
        title: "Departure",
        description: "Transfer back to Colombo for departure.",
        activities: ["Transfer to Colombo airport"],
      },
    ],
  },
];

export const getPackageById = (id: string): Package | undefined => {
  return packages.find((p) => p.id === id);
};
