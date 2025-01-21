import React, { useState } from "react";
import {
  MapPin,
  Cloud,
  Sun,
  Umbrella,
  Star,
  ArrowRight,
  Heart,
  Search,
} from "lucide-react";
import palawan from "../images/palawan.jpg";
import boracay from "../images/boracay.jpg";
import banaue from "../images/banaue.jpg";
import siargao from "../images/siargao.jpg";
import camiguin from "../images/camiguin.jpg";
import sagada from "../images/sagada.jpg";
import davao from "../images/mt. apo.jpg";
import batanes from "../images/batanes.jpg";
import cebu from "../images/cordova.jpg";

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  const destinations = [
    {
      name: "Palawan",
      image: palawan,
      region: "luzon",
      description:
        "Known for its pristine beaches, hidden lagoons, and the Underground River. Experience world-class island hopping, diving spots, and limestone cliffs.",
      highlights: [
        "El Nido Island Hopping",
        "Underground River",
        "Coron Diving",
        "Honda Bay",
        "Tubbataha Reef",
      ],
      bestTime: "December to May",
      weather: "Tropical",
      rating: 4.9,
      activities: ["Diving", "Island Hopping", "Kayaking", "Snorkeling"],
      localFood: ["Fresh Seafood", "Tamilok", "Crocodile Sisig"],
      averageTemperature: "26-32°C",
      travelTips: [
        "Book island hopping tours in advance",
        "Bring reef-safe sunscreen",
        "Stay at least 3-4 days",
      ],
    },
    {
      name: "Boracay",
      image: boracay,
      region: "visayas",
      description:
        "Famous for its white sand beaches, crystal clear waters, and vibrant nightlife. Perfect for both relaxation and adventure.",
      highlights: [
        "White Beach",
        "Water Sports",
        "Sunset Sailing",
        "Puka Shell Beach",
        "Cliff Diving",
      ],
      bestTime: "November to April",
      weather: "Tropical",
      rating: 4.8,
      activities: [
        "Parasailing",
        "Kiteboarding",
        "Scuba Diving",
        "Beach Parties",
      ],
      localFood: ["Calamansi Muffins", "Talaba", "Chori Burger"],
      averageTemperature: "25-32°C",
      travelTips: [
        "Book during shoulder season for better rates",
        "Try water activities early morning",
        "Visit Puka Beach for fewer crowds",
      ],
    },
    {
      name: "Banaue",
      image: banaue,
      region: "luzon",
      description:
        "Home to the ancient rice terraces, often called the 'Eighth Wonder of the World'. Experience indigenous culture and breathtaking landscapes.",
      highlights: [
        "Rice Terraces",
        "Cultural Tours",
        "Hiking",
        "Local Workshops",
        "Tribal Villages",
      ],
      bestTime: "December to March",
      weather: "Cool Mountain Climate",
      rating: 4.7,
      activities: ["Trekking", "Photography", "Cultural Immersion", "Camping"],
      localFood: ["Pinikpikan", "Rice Wine", "Local Coffee"],
      averageTemperature: "16-20°C",
      travelTips: [
        "Hire a local guide for treks",
        "Bring warm clothes",
        "Respect local customs",
      ],
    },
    {
      name: "Siargao",
      image: siargao,
      region: "mindanao",
      description:
        "The surfing capital of the Philippines, offering world-class waves, picturesque islands, and a laid-back atmosphere for surfers and travelers alike.",
      highlights: [
        "Cloud 9 Surf Spot",
        "Sugba Lagoon",
        "Magpupungko Rock Pools",
        "Naked Island",
        "Guyam Island",
      ],
      bestTime: "August to November",
      weather: "Tropical",
      rating: 4.8,
      activities: ["Surfing", "Island Hopping", "Paddleboarding", "Diving"],
      localFood: ["Kinilaw", "Seafood Pizza", "Coconut Ice Cream"],
      averageTemperature: "27-31°C",
      travelTips: [
        "Rent a motorbike for easier island exploration",
        "Learn to surf with local instructors",
        "Avoid visiting during typhoon season",
      ],
    },
    {
      name: "Batanes",
      image: batanes,
      region: "luzon",
      description:
        "Known for its rolling hills, dramatic cliffs, and unique Ivatan culture, Batanes offers a serene and picturesque escape from city life.",
      highlights: [
        "Marlboro Hills",
        "Basco Lighthouse",
        "Valugan Boulder Beach",
        "Sabtang Island",
        "Vayang Rolling Hills",
      ],
      bestTime: "March to June",
      weather: "Cool and windy",
      rating: 4.9,
      activities: ["Biking", "Photography", "Cultural Tours", "Hiking"],
      localFood: ["Uvud Balls", "Dibang (Flying Fish)", "Lunis"],
      averageTemperature: "20-28°C",
      travelTips: [
        "Pack light jackets for windy days",
        "Rent a bike to explore the islands",
        "Respect the Ivatan culture and traditions",
      ],
    },
    {
      name: "Camiguin",
      image: camiguin,
      region: "mindanao",
      description:
        "Known as the 'Island Born of Fire,' Camiguin boasts a unique mix of volcanoes, hot springs, waterfalls, and pristine beaches.",
      highlights: [
        "White Island",
        "Mantigue Island",
        "Sunken Cemetery",
        "Katibawasan Falls",
        "Ardent Hot Springs",
      ],
      bestTime: "February to May",
      weather: "Tropical",
      rating: 4.7,
      activities: ["Diving", "Trekking", "Snorkeling", "Relaxing"],
      localFood: ["Pastel", "Kipling", "Lanzones"],
      averageTemperature: "25-31°C",
      travelTips: [
        "Visit during the Lanzones Festival in October",
        "Rent a scooter to explore the island",
        "Bring waterproof gear for snorkeling",
      ],
    },
    {
      name: "Sagada",
      image: sagada,
      region: "luzon",
      description:
        "A serene mountain town famous for its hanging coffins, caves, and breathtaking sunrises. Perfect for adventurers and nature lovers.",
      highlights: [
        "Hanging Coffins",
        "Sumaguing Cave",
        "Kiltepan Viewpoint",
        "Echo Valley",
        "Bomod-ok Falls",
      ],
      bestTime: "November to February",
      weather: "Cool Mountain Climate",
      rating: 4.8,
      activities: ["Hiking", "Caving", "Cultural Immersion", "Photography"],
      localFood: ["Pinikpikan", "Etag", "Sagada Coffee"],
      averageTemperature: "15-20°C",
      travelTips: [
        "Bring warm clothing for cool evenings",
        "Hire a guide for caving and treks",
        "Plan your trip during weekdays to avoid crowds",
      ],
    },
    {
      name: "Davao",
      image: davao,
      region: "mindanao",
      description:
        "A bustling city surrounded by nature, offering diverse experiences from hiking Mt. Apo to relaxing in Samal Island's beaches.",
      highlights: [
        "Mt. Apo",
        "Samal Island",
        "Eden Nature Park",
        "Crocodile Park",
        "People’s Park",
      ],
      bestTime: "November to May",
      weather: "Tropical",
      rating: 4.6,
      activities: ["Trekking", "Beach Hopping", "Wildlife Tours", "Shopping"],
      localFood: ["Durian Candy", "Grilled Tuna", "Mangosteen Products"],
      averageTemperature: "27-33°C",
      travelTips: [
        "Visit Samal Island for a day trip",
        "Plan a hike to Mt. Apo with a guide",
        "Try durian if you're feeling adventurous",
      ],
    },
    {
      name: "Cebu",
      image: cebu,
      region: "visayas",
      description:
        "Known as the 'Queen City of the South,' Cebu is a mix of historical landmarks, stunning beaches, and thrilling adventures.",
      highlights: [
        "Kawasan Falls",
        "Osmeña Peak",
        "Temple of Leah",
        "Magellan's Cross",
        "Whale Shark Watching in Oslob",
      ],
      bestTime: "November to May",
      weather: "Tropical",
      rating: 4.8,
      activities: [
        "Canyoneering",
        "Whale Shark Watching",
        "Hiking",
        "Snorkeling",
        "Island Hopping",
      ],
      localFood: ["Lechon", "Puso (Hanging Rice)", "Danggit", "Cebu Mangoes"],
      averageTemperature: "25-31°C",
      travelTips: [
        "Book canyoneering tours early in the morning for fewer crowds.",
        "Bring a waterproof bag for adventures.",
        "Try local food stalls for authentic flavors.",
      ],
    },
  ];

  const filteredDestinations = destinations.filter((destination) => {
    const matchesRegion =
      selectedRegion === "all" || destination.region === selectedRegion;
    const matchesSearch = destination.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const TabContent = ({ destination, tab }) => {
    switch (tab) {
      case "overview":
        return (
          <div className="space-y-4">
            <p className="text-gray-600">{destination.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-gray-600">
                <Sun className="w-5 h-5 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium block">Best Time to Visit</span>
                  <span className="text-sm">{destination.bestTime}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <Cloud className="w-5 h-5 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium block">Weather</span>
                  <span className="text-sm">{destination.weather}</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "activities":
        return (
          <div>
            <div className="grid grid-cols-2 gap-4">
              {destination.activities.map((activity) => (
                <div
                  key={activity}
                  className="flex items-center bg-gray-50 p-3 rounded-lg"
                >
                  <Umbrella className="w-5 h-5 mr-2 text-blue-500" />
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "tips":
        return (
          <div className="space-y-4">
            {destination.travelTips.map((tip, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                  <Star className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-gray-600">{tip}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Discover Philippines</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the incredible diversity of 7,641 islands - from pristine
            beaches to ancient rice terraces, each destination tells a unique
            story
          </p>
          <p className="text-sm text-gray-500 mt-4">
            *Prices and details shown are for sample purposes only. This is a
            portfolio website and not an actual booking platform.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedRegion("all")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedRegion === "all"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedRegion("luzon")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedRegion === "luzon"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  Luzon
                </button>
                <button
                  onClick={() => setSelectedRegion("visayas")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedRegion === "visayas"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  Visayas
                </button>
                <button
                  onClick={() => setSelectedRegion("mindanao")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedRegion === "mindanao"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  Mindanao
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations List */}
        <div className="space-y-12">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative group overflow-hidden ">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{destination.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">
                        {destination.name}
                      </h2>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="mr-4">Philippines</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Tabs */}
                  <div className="mb-6">
                    <div className="flex space-x-4 border-b">
                      {["overview", "activities", "tips"].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`py-2 px-4 font-medium transition-colors ${
                            activeTab === tab
                              ? "text-blue-600 border-b-2 border-blue-600"
                              : "text-gray-500 hover:text-gray-700"
                          }`}
                        >
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                      ))}
                    </div>
                    <div className="py-4">
                      <TabContent destination={destination} tab={activeTab} />
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium transition-all duration-300 transform  hover:bg-blue-700 flex items-center justify-center gap-2">
                    Explore Destination
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
