import React from "react";
import {
  FaCut,
  FaSpa,
  FaPaintBrush,
  FaCrown,
} from "react-icons/fa"; // react-icons install if not done

const services = [
  {
    id: 1,
    title: "Hair Styling",
    desc: "Get trendy cuts, luxury treatments & professional styling for every occasion.",
    icon: <FaCut />,
  },
  {
    id: 2,
    title: "Spa & Wellness",
    desc: "Relax with our premium spa & massage therapies for mind & body rejuvenation.",
    icon: <FaSpa />,
  },
  {
    id: 3,
    title: "Makeup & Beauty",
    desc: "From bridal to casual, explore luxury makeup services by top professionals.",
    icon: <FaPaintBrush />,
  },
  {
    id: 4,
    title: "Premium Grooming",
    desc: "Exclusive grooming experiences with world-class products & experts.",
    icon: <FaCrown />,
  },
];

const ServicesHighlights = () => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold luxury-heading-gradient">
          Our Premium Services
        </h2>
        <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          At <span className="font-semibold text-yellow-400">Aayuzo</span>, we
          ensure world-class beauty & grooming experiences with trusted experts
          and luxury products.
        </p>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-yellow-500/30 hover:scale-105 transition duration-300"
            >
              {/* Icon */}
              <div className="text-4xl text-yellow-400 mb-4 flex justify-center">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlights;
