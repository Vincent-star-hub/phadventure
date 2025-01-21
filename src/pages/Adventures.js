import React, { useState } from "react";
import {
  MapPin,
  Star,
  Clock,
  Users,
  Thermometer,
  ArrowRight,
  Heart,
  Search,
  Calendar,
  CreditCard,
  X,
  CheckCircle,
} from "lucide-react";
import islandhopping from "../images/islandhopping.jpg";
import mountpulag from "../images/mountpulag.jpg";
import surfing from "../images/surfing.jpg";
import choco from "../images/chocolatehills.jpg";
import undergroundriver from "../images/undergroundriver.jpg";
import kawasan from "../images/kawasan.jpg";
import scubadiving from "../images/scuba.jpg";

// BookingModal Component
const BookingModal = ({ isOpen, onClose, adventure }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  // Payment form state
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [email, setEmail] = useState("");

  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  // Validation functions
  const validateCardNumber = (num) => /^\d{16}$/.test(num.replace(/\s/g, ""));
  const validateExpiry = (exp) => /^\d{2}\/\d{2}$/.test(exp);
  const validateCVC = (cvc) => /^\d{3,4}$/.test(cvc);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateName = (name) => name.trim().length >= 2;

  // Check if all fields are valid
  const isFormValid = () => {
    return (
      validateCardNumber(cardNumber) &&
      validateExpiry(expiry) &&
      validateCVC(cvc) &&
      validateEmail(email) &&
      validateName(nameOnCard)
    );
  };

  if (!isOpen) return null;

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleConfirm = () => {
    if (!isFormValid()) {
      alert("Please fill in all payment details correctly");
      return;
    }
    setShowSuccess(true);
  };

  const resetAndClose = () => {
    setStep(1);
    setSelectedDate("");
    setSelectedTime("");
    setCardNumber("");
    setExpiry("");
    setCvc("");
    setNameOnCard("");
    setEmail("");
    onClose();
  };

  const processingFee = 100;
  const total =
    (parseFloat(adventure?.price?.replace("₱", "")) || 0) + processingFee;

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  // Format expiry date
  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  // Success Modal
  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-md p-8 relative text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">Thank you for your purchase</p>

          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
            <h3 className="font-semibold mb-2">Booking Details</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>Adventure: {adventure?.title}</p>
              <p>Date: {new Date(selectedDate).toLocaleDateString()}</p>
              <p>Time: {selectedTime}</p>
              <p>Location: {adventure?.location}</p>
              <p>Duration: {adventure?.duration}</p>
              <p>Total Paid: ₱{total}</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            A confirmation email has been sent to {email}
          </p>

          <button
            onClick={resetAndClose}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={resetAndClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-4">
          {step === 1 ? "Select Date & Time" : "Confirm Booking"}
        </h2>

        {step === 1 ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Select Date
              </label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Select Time
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={resetAndClose}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleNext}
                disabled={!selectedDate || !selectedTime}
                className={`px-4 py-2 rounded-lg text-white ${
                  !selectedDate || !selectedTime
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <h3 className="font-semibold">{adventure?.title}</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p>Date: {new Date(selectedDate).toLocaleDateString()}</p>
                <p>Time: {selectedTime}</p>
                <p>Location: {adventure?.location}</p>
                <p>Duration: {adventure?.duration}</p>
                <p className="font-semibold text-blue-600">
                  Total: {adventure?.price}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <CreditCard className="w-4 h-4 mr-2" />
                Your payment information is secure and encrypted
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Card Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) =>
                      setCardNumber(formatCardNumber(e.target.value))
                    }
                    className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Expiry Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      CVC <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      onChange={(e) =>
                        setCvc(e.target.value.replace(/\D/g, ""))
                      }
                      maxLength="4"
                      className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Name on Card <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={nameOnCard}
                    onChange={(e) => setNameOnCard(e.target.value)}
                    className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div className="flex justify-between text-sm mb-2">
                  <span>Subtotal</span>
                  <span>{adventure?.price}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Processing Fee</span>
                  <span>₱{processingFee}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₱{total}</span>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  onClick={handleBack}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={!isFormValid()}
                  className={`px-4 py-2 rounded-lg ${
                    isFormValid()
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-400 text-gray-200 cursor-not-allowed"
                  }`}
                >
                  Complete Booking
                </button>
              </div>

              {!isFormValid() && (
                <p className="text-red-500 text-sm text-center mt-2">
                  Please fill in all required fields correctly to complete your
                  booking
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Adventures Component
const Adventures = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedAdventure, setSelectedAdventure] = useState(null);

  const adventures = [
    {
      title: "Island Hopping Expedition",
      location: "El Nido, Palawan",
      duration: "8 hours",
      groupSize: "2-12 people",
      difficulty: "Easy",
      price: "₱2,500",
      image: islandhopping,
      description:
        "Explore the stunning limestone islands and hidden lagoons of El Nido. Includes snorkeling, beach visits, and lunch.",
      category: "water",
      rating: 4.9,
      reviews: 89,
      includedActivities: [
        "Snorkeling",
        "Beach Hopping",
        "Lunch",
        "Photography",
      ],
    },
    {
      title: "Mount Pulag Summit Trek",
      location: "Benguet",
      duration: "2 days",
      groupSize: "4-8 people",
      difficulty: "Challenging",
      price: "₱4,500",
      image: mountpulag,
      description:
        "Climb through the mossy forest and witness the famous sea of clouds at Luzon's highest peak.",
      category: "mountain",
      rating: 4.8,
      reviews: 156,
      includedActivities: ["Camping", "Guide", "Meals", "Permits"],
    },
    {
      title: "Surfing Adventure",
      location: "Cloud 9, Siargao",
      duration: "4 hours",
      groupSize: "1-6 people",
      difficulty: "Moderate",
      price: "₱2,500",
      image: surfing,
      description:
        "Catch waves at one of Asia's best surfing spots. Includes equipment and instructor.",
      category: "water",
      rating: 4.7,
      reviews: 128,
      includedActivities: ["Equipment", "Instructor", "Safety Briefing"],
    },
    {
      title: "Chocolate Hills ATV Adventure",
      location: "Bohol",
      duration: "3 hours",
      groupSize: "2-8 people",
      difficulty: "Easy",
      price: "₱2,000",
      image: choco,
      description:
        "Explore the famous Chocolate Hills on an exciting ATV ride through scenic trails.",
      category: "land",
      rating: 4.6,
      reviews: 102,
      includedActivities: ["ATV Rental", "Guide", "Safety Gear"],
    },
    {
      title: "Underground River Cruise",
      location: "Puerto Princesa, Palawan",
      duration: "4 hours",
      groupSize: "2-20 people",
      difficulty: "Easy",
      price: "₱2,500",
      image: undergroundriver,
      description:
        "Discover the natural wonder of Puerto Princesa's Underground River, one of the New 7 Wonders of Nature. Enjoy a serene boat tour through stunning limestone caves.",
      category: "water",
      rating: 4.8,
      reviews: 132,
      includedActivities: ["Boat Tour", "Guide", "Life Vest", "Lunch"],
    },
    {
      title: "Kawasan Canyoneering Adventure",
      location: "Badian, Cebu",
      duration: "5 hours",
      groupSize: "2-10 people",
      difficulty: "Moderate",
      price: "₱1,500",
      image: kawasan,
      description:
        "Dive into an adrenaline-pumping experience as you navigate through turquoise waters, jump off cliffs, and trek through the lush canyon trails of Kawasan Falls.",
      category: "water",
      rating: 4.9,
      reviews: 210,
      includedActivities: ["Cliff Jumping", "Swimming", "Lunch", "Guide"],
    },
    {
      title: "Scuba Diving Adventure",
      location: "Tubbataha Reef, Palawan",
      duration: "Full Day",
      groupSize: "1-5 people",
      difficulty: "Advanced",
      price: "₱4,500",
      image: scubadiving,
      description:
        "Dive into one of the most biodiverse marine sanctuaries in the world. Explore vibrant coral reefs, exotic marine life, and underwater wonders.",
      category: "water",
      rating: 5.0,
      reviews: 110,
      includedActivities: ["Diving Gear", "Instructor", "Snacks", "Boat Ride"],
    },
  ];

  const filteredAdventures = adventures.filter((adventure) => {
    const matchesFilter =
      selectedFilter === "all" || adventure.category === selectedFilter;
    const matchesSearch =
      adventure.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      adventure.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleBookNow = (adventure) => {
    setSelectedAdventure(adventure);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Philippine Adventures</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover extraordinary experiences across our 7,641 islands - from
            pristine beaches to majestic mountains, each adventure crafted to
            create lasting memories
          </p>
          <p className="text-sm text-gray-500 mt-4">
            *Prices and details shown are for sample purposes only. This is a
            portfolio website and not an actual booking platform.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search adventures..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedFilter("all")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedFilter === "all"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedFilter("water")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedFilter === "water"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  Water
                </button>
                <button
                  onClick={() => setSelectedFilter("mountain")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedFilter === "mountain"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  Mountain
                </button>
                <button
                  onClick={() => setSelectedFilter("land")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedFilter === "land"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  Land
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Adventures Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAdventures.map((adventure) => (
            <div
              key={adventure.title}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">
                      {adventure.rating}
                    </span>
                    <span className="text-sm text-gray-600">
                      ({adventure.reviews})
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                    {adventure.title}
                  </h2>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <Heart className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  {adventure.location}
                </div>

                <p className="text-gray-600 mb-6">{adventure.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{adventure.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{adventure.groupSize}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Thermometer className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{adventure.difficulty}</span>
                  </div>
                  <div className="text-blue-600 font-semibold text-lg">
                    From {adventure.price}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Included:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {adventure.includedActivities.map((activity) => (
                      <span
                        key={activity}
                        className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleBookNow(adventure)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Modal */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          adventure={selectedAdventure}
        />
      </div>
    </div>
  );
};

export default Adventures;
