import React from "react";
import { Award, Heart, Shield, Users, ArrowRight } from "lucide-react";
import video from "../images/PHadventure.mp4";
import man from "../images/man.jpg";
import woman from "../images/woman.jpg";

const About = () => {
  const stats = [
    {
      label: "Years Experience",
      value: "10+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Happy Travelers",
      value: "50k+",
      color: "from-green-500 to-teal-500",
    },
    {
      label: "Destinations",
      value: "100+",
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Local Guides",
      value: "50+",
      color: "from-orange-500 to-red-500",
    },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Passion for Adventure",
      description:
        "We're dedicated to creating unforgettable experiences that inspire and excite our travelers.",
      color: "hover:border-red-500/50",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Safety First",
      description:
        "Your safety is our top priority. We maintain the highest standards of safety in all our adventures.",
      color: "hover:border-blue-500/50",
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Local Expertise",
      description:
        "Our experienced local guides provide authentic insights and ensure the best possible experience.",
      color: "hover:border-green-500/50",
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Quality Service",
      description:
        "We're committed to delivering exceptional service and attention to detail in every adventure.",
      color: "hover:border-purple-500/50",
    },
  ];

  const team = [
    {
      name: "Maria Santos",
      position: "Chief Adventure Officer",
      bio: "Leading adventures across the Philippines for over 15 years with passion and expertise.",
      image: woman,
    },
    {
      name: "Juan Dela Cruz",
      position: "Head of Operations",
      bio: "Ensuring smooth and safe adventures through meticulous planning and coordination.",
      image: man,
    },
    {
      name: "Ana Reyes",
      position: "Lead Tour Guide",
      bio: "Sharing the beauty and culture of the Philippines with travelers from around the world.",
      image: woman,
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-32">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6  bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
            About PH Adventures
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crafting unforgettable Philippine adventures since 2014. We're
            passionate about sharing the beauty and culture of our islands with
            the world.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative p-6 text-center rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="md:flex items-center gap-16">
            {/* Video Container */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 blur transition-all duration-300" />
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  className="relative rounded-xl shadow-lg w-full transform transition-transform duration-300 group-hover:scale-[1.02]"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded by a group of passionate adventurers, PH Adventures
                  began with a simple mission: to share the incredible beauty
                  and diverse experiences of the Philippines with travelers from
                  around the world.
                </p>
                <p>
                  Over the years, we've grown from a small local tour operator
                  to a leading adventure tourism company, but our core values
                  remain the same - providing authentic, sustainable, and
                  unforgettable experiences while supporting local communities.
                </p>
                <p>
                  Today, we're proud to have helped thousands of travelers
                  discover the magic of the Philippines, from its pristine
                  beaches to its towering mountains, and everything in between.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className={`group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent ${value.color}`}
              >
                <div className="inline-block p-4 bg-gray-50 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative mb-6 inline-block">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-30 blur transition-all duration-300" />
                  <img
                    src={member.image}
                    className="w-48 h-48 rounded-full object-cover relative transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
