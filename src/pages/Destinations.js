import React, { useState, useMemo } from "react";
import {
  MapPin,
  Cloud,
  Sun,
  Umbrella,
  Star,
  ArrowRight,
  Heart,
  Search,
  Loader,
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

const RegionFilter = ({ selectedRegion, onRegionChange }) => {
  const regions = [
    { id: "all", label: "All" },
    { id: "luzon", label: "Luzon" },
    { id: "visayas", label: "Visayas" },
    { id: "mindanao", label: "Mindanao" },
  ];

  return (
    <div className="flex gap-2">
      {regions.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onRegionChange(id)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedRegion === id
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

const SearchBar = ({ value, onChange }) => (
  <div className="relative flex-1">
    <Search
      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      size={20}
    />
    <input
      type="text"
      placeholder="Search destinations..."
      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Search destinations"
    />
  </div>
);

const DestinationImage = ({ src, alt, rating }) => (
  <div className="md:w-1/2 relative group overflow-hidden aspect-video md:aspect-auto">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
    />
    {rating && (
      <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="font-medium">{rating}</span>
        </div>
      </div>
    )}
  </div>
);

const InfoCard = ({ icon: Icon, title, value }) => (
  <div className="flex items-center text-gray-600">
    <Icon className="w-5 h-5 mr-2 flex-shrink-0" />
    <div>
      <span className="font-medium block">{title}</span>
      <span className="text-sm">{value}</span>
    </div>
  </div>
);

const DestinationTabs = ({ destination }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabContent = {
    overview: (
      <div className="space-y-4">
        <p className="text-gray-600">{destination.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <InfoCard
            icon={Sun}
            title="Best Time to Visit"
            value={destination.bestTime}
          />
          <InfoCard icon={Cloud} title="Weather" value={destination.weather} />
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Highlights
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {destination.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ),
    activities: (
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
    ),
    tips: (
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
    ),
  };

  return (
    <div className="w-full">
      <div className="flex space-x-4 border-b mb-4">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 font-medium transition-colors capitalize ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="py-4">{tabContent[activeTab]}</div>
    </div>
  );
};

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteStates, setFavoriteStates] = useState({});
  const [isLoading, setIsLoading] = useState({});

  const destinations = [
    {
      id: 1,
      name: "Palawan",
      image: palawan,
      region: "luzon",
      description:
        "Known for its pristine beaches, hidden lagoons, and the Underground River. Experience world-class island hopping, diving spots, and limestone cliffs.",
      highlights: [
        "Scuba Diving at Tubbataha Reef",
        "Exploring the Underground River",
        "Island Hopping in El Nido",
        "Kayaking in Lagoons",
        "Snorkeling with Marine Life",
        "Hiking to Taraw Cliff",
        "Stand-Up Paddleboarding",
        "Visiting Hot Springs in Coron",
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
      id: 2,
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
        "Island Hopping",
        "Snorkeling",
        "Stand-Up Paddleboarding",
        "Jet Skiing",
        "Helmet Diving",
        "Zorb Riding",
        "Fire Dancing Shows",
        "Spa and Wellness Retreats",
        "Parasailing",
        "Kiteboarding",
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
      id: 3,
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
      activities: [
        "Trekking to the Rice Terraces",
        "Cultural Immersion in Tribal Villages",
        "Photography of Scenic Landscapes",
        "Camping near the Terraces",
        "Visiting Local Artisan Workshops",
        "Exploring the Batad Village",
        "Visiting the Banaue Museum",
        "Traditional Weaving and Craftmaking",
      ],

      localFood: ["Pinikpikan", "Rice Wine", "Local Coffee"],
      averageTemperature: "16-20°C",
      travelTips: [
        "Hire a local guide for treks",
        "Bring warm clothes",
        "Respect local customs",
      ],
    },
    {
      id: 4,
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
      activities: [
        "Surfing at Cloud 9",
        "Island Hopping to Naked Island and Guyam Island",
        "Stand-Up Paddleboarding in Sugba Lagoon",
        "Diving in nearby coral reefs",
        "Exploring Magpupungko Rock Pools",
        "Caving at Tayangban Cave",
        "Visiting the Palm Tree Forest",
        "Sunset Watching at the Boulevard",
      ],

      localFood: ["Kinilaw", "Seafood Pizza", "Coconut Ice Cream"],
      averageTemperature: "27-31°C",
      travelTips: [
        "Rent a motorbike for easier island exploration",
        "Learn to surf with local instructors",
        "Avoid visiting during typhoon season",
      ],
    },
    {
      id: 5,
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
      activities: [
        "Biking through Rolling Hills and Countryside",
        "Photography of Dramatic Landscapes",
        "Cultural Tours in Ivatan Villages",
        "Hiking to Marlboro Hills",
        "Visiting Sabtang Island",
        "Exploring the Basco Lighthouse",
        "Swimming at Valugan Boulder Beach",
        "Learning about Ivatan Weaving",
      ],

      localFood: ["Uvud Balls", "Dibang (Flying Fish)", "Lunis"],
      averageTemperature: "20-28°C",
      travelTips: [
        "Pack light jackets for windy days",
        "Rent a bike to explore the islands",
        "Respect the Ivatan culture and traditions",
      ],
    },
    {
      id: 6,
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
      activities: [
        "Diving at Sunken Cemetery",
        "Trekking to Hibok-Hibok Volcano",
        "Snorkeling at White Island",
        "Relaxing at Ardent Hot Springs",
        "Visiting Mantigue Island",
        "Exploring Katibawasan Falls",
        "Island Hopping",
        "Mountain Biking",
      ],
      localFood: ["Pastel", "Kipling", "Lanzones"],
      averageTemperature: "25-31°C",
      travelTips: [
        "Visit during the Lanzones Festival in October",
        "Rent a scooter to explore the island",
        "Bring waterproof gear for snorkeling",
      ],
    },
    {
      id: 7,
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
      activities: [
        "Hiking to Kiltepan Viewpoint",
        "Exploring Sumaguing Cave",
        "Cultural Immersion in Local Villages",
        "Photography at Bomod-ok Falls",
        "Visiting the Hanging Coffins",
        "Caving and Spelunking",
        "Trekking to Echo Valley",
        "Sunrise Watching",
      ],
      localFood: ["Pinikpikan", "Etag", "Sagada Coffee"],
      averageTemperature: "15-20°C",
      travelTips: [
        "Bring warm clothing for cool evenings",
        "Hire a guide for caving and treks",
        "Plan your trip during weekdays to avoid crowds",
      ],
    },
    {
      id: 8,
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
      activities: [
        "Trekking to Mt. Apo",
        "Beach Hopping in Samal Island",
        "Wildlife Tours in Crocodile Park",
        "Shopping at Aldevinco Shopping Center",
        "Exploring Eden Nature Park",
        "Snorkeling in Samal Island",
        "Visiting People’s Park",
        "Tasting Durian at the Night Market",
      ],
      localFood: ["Durian Candy", "Grilled Tuna", "Mangosteen Products"],
      averageTemperature: "27-33°C",
      travelTips: [
        "Visit Samal Island for a day trip",
        "Plan a hike to Mt. Apo with a guide",
        "Try durian if you're feeling adventurous",
      ],
    },
    {
      id: 9,
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
        "Canyoneering at Kawasan Falls",
        "Whale Shark Watching in Oslob",
        "Hiking Osmeña Peak",
        "Snorkeling at Pescador Island",
        "Island Hopping in Moalboal",
        "Visiting Temple of Leah",
        "Exploring Magellan's Cross",
        "Visiting Historical Landmarks",
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

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesRegion =
        selectedRegion === "all" || destination.region === selectedRegion;
      const matchesSearch = destination.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [destinations, selectedRegion, searchQuery]);

  const toggleFavorite = (destinationId) => {
    setFavoriteStates((prev) => ({
      ...prev,
      [destinationId]: !prev[destinationId],
    }));
  };

  const handleExplore = async (destinationId) => {
    setIsLoading((prev) => ({
      ...prev,
      [destinationId]: true,
    }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(`Exploring destination: ${destinationId}`);
    } catch (error) {
      console.error("Error exploring destination:", error);
    } finally {
      setIsLoading((prev) => ({
        ...prev,
        [destinationId]: false,
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-32">
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10" />
        </div>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Discover Philippines</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the incredible diversity of 7,641 islands - from pristine
            beaches to ancient rice terraces, each destination tells a unique
            story.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            *Prices and details shown are for sample purposes only. This is a
            portfolio website and not an actual booking platform.
          </p>
        </section>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12 bg-white rounded-xl shadow-md">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              <RegionFilter
                selectedRegion={selectedRegion}
                onRegionChange={setSelectedRegion}
              />
            </div>
          </div>
        </div>

        {/* Destinations List */}
        <div className="space-y-12">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="md:flex">
                <DestinationImage
                  src={destination.image}
                  alt={destination.name}
                  rating={destination.rating}
                />

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
                    <button
                      onClick={() => toggleFavorite(destination.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-100"
                      aria-label={
                        favoriteStates[destination.id]
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
                    >
                      <Heart
                        className={`w-6 h-6 ${
                          favoriteStates[destination.id]
                            ? "fill-red-500 text-red-500"
                            : ""
                        }`}
                      />
                    </button>
                  </div>

                  <DestinationTabs destination={destination} />

                  <button
                    className={`w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      isLoading[destination.id]
                        ? "opacity-75 cursor-not-allowed"
                        : "hover:bg-blue-700"
                    }`}
                    onClick={() => handleExplore(destination.id)}
                    disabled={isLoading[destination.id]}
                  >
                    {isLoading[destination.id] ? (
                      <Loader className="w-5 h-5 animate-spin mr-2" />
                    ) : (
                      <>
                        Explore Destination
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
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
