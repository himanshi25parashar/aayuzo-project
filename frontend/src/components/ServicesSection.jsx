import React from "react";
import { FaHome, FaStoreAlt } from "react-icons/fa"; // icons for home & salon

const ServicesSection = () => {
  return (
    <section className="relative w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
          Our Premium Services
        </h2>
        <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Aayuzo offers you the flexibility to enjoy premium beauty & grooming
          services either at home or at your favorite salon.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Home Services */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-yellow-500/40 rounded-xl p-8 shadow-lg hover:scale-105 transition transform duration-300">
            <FaHome className="text-yellow-400 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-yellow-300 mb-3">
              Home Services
            </h3>
            <p className="text-gray-300">
              Get salon-like treatments at the comfort of your home. Book
              professional beauticians to your doorstep with Aayuzo.
            </p>
          </div>

          {/* Salon Services */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-yellow-500/40 rounded-xl p-8 shadow-lg hover:scale-105 transition transform duration-300">
            <FaStoreAlt className="text-yellow-400 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-yellow-300 mb-3">
              Salon Services
            </h3>
            <p className="text-gray-300">
              Explore and book premium salons near you. Experience luxury
              grooming services by top experts at Aayuzo partner salons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
