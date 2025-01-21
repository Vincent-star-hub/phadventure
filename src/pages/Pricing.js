import React from "react";
import { Check, ArrowRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Adventure",
      price: "14,999",
      duration: "3 Days",
      description:
        "Perfect for first-time visitors seeking essential experiences",
      features: [
        "2 Guided Tours (Siargao & Palawan)",
        "3-Star Beachfront Accommodation",
        "Airport Transfers",
        "Daily Filipino Breakfast",
        "Basic Travel Insurance",
        "Local SIM Card",
        "24/7 Customer Support",
      ],
      color: "bg-gradient-to-br from-cyan-500 to-blue-500",
    },
    {
      name: "Explorer Package",
      price: "29,999",
      duration: "5 Days",
      description: "Our most popular choice for thrill-seekers and adventurers",
      features: [
        "4 Premium Guided Tours",
        "4-Star Resort Accommodation",
        "Private Airport Transfers",
        "All-Inclusive Meals",
        "Premium Travel Insurance",
        "Dedicated Tour Guide",
        "Professional Adventure Gear",
        "Island Hopping Experience",
        "Sunset Dinner Cruise",
      ],
      highlighted: true,
      color: "bg-gradient-to-br from-blue-600 to-indigo-600",
    },
    {
      name: "Ultimate Experience",
      price: "49,999",
      duration: "7 Days",
      description:
        "Luxury adventure with exclusive experiences and premium service",
      features: [
        "6 VIP Guided Tours",
        "5-Star Luxury Resort",
        "Private Helicopter Transfers",
        "Gourmet Dining Experience",
        "Comprehensive Insurance",
        "Personal Concierge",
        "Premium Adventure Equipment",
        "Private Island Experience",
        "Professional Photography",
        "Spa Treatment Package",
      ],
      color: "bg-gradient-to-br from-indigo-600 to-purple-600",
    },
  ];

  return (
    <div className="relative overflow-hidden py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Adventure Package
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Embark on an unforgettable journey through the Philippines with our
            carefully crafted packages
          </p>
          <p className="text-sm text-gray-500 mt-4">
            *Prices and details shown are for sample purposes only. This is a
            portfolio website and not an actual booking platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                plan.highlighted
                  ? "ring-4 ring-blue-400 shadow-2xl"
                  : "shadow-xl hover:shadow-2xl"
              }`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 ${plan.color} opacity-10`} />
              </div>

              <div className="relative bg-white p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">₱{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.duration}</span>
                  </div>
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      plan.highlighted
                        ? "bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    Book Now <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 mt-0.5 ${
                          plan.highlighted ? "text-blue-500" : "text-green-500"
                        }`}
                      />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">
            Can't find the right package? Let's create a personalized adventure
            tailored just for you.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <a href="/adventures">Create Your Package</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
