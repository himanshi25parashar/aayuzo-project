import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/SalonSection.css";

const salons = [
  {
    id: 1,
    name: "Elite Glow Salon",
    location: "Connaught Place, Delhi",
    image: require("../assets/slone/salon1.jpg"),
  },
  {
    id: 2,
    name: "Royal Touch Spa",
    location: "Bandra, Mumbai",
    image: require("../assets/slone/salon2.jpg"),
  },
  {
    id: 3,
    name: "Luxury Lounge",
    location: "Koramangala, Bangalore",
    image: require("../assets/slone/salon3.jpg"),
  },
];

const SalonSection = () => {
  return (
    // ✅ Added luxury-section wrapper
    <section className="luxury-section salon-section relative w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="luxury-heading text-3xl sm:text-4xl md:text-5xl font-semibold">
          Discover Premium Salons
        </h2>
        <div className="luxury-divider"></div>

        <p className="luxury-sub mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Explore our curated selection of luxury salons featuring expert stylists,
          serene ambiance, and exceptional beauty experiences — crafted to bring
          elegance and confidence to every visit.
        </p>

        {/* Desktop Grid View (only for large screens) */}
        <div className="hidden lg:grid mt-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {salons.map((salon) => (
            <div
              key={salon.id}
              className="salon-card group relative overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src={salon.image}
                alt={salon.name}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-0 right-0 px-5 text-center z-10">
                <h3 className="salon-title text-2xl font-semibold mb-2">
                  {salon.name}
                </h3>
                <p className="salon-location text-sm text-gray-300">
                  {salon.location}
                </p>
                <button className="mt-4 px-6 py-2 luxury-btn font-semibold rounded-full transition-all">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button - Desktop */}
        <div className="hidden lg:block mt-14">
          <button className="luxury-explore-btn">Explore All Salons →</button>
        </div>

        {/* Mobile + Tablet Slider View */}
        <div className="block lg:hidden mt-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="salonSwiper"
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
            }}
          >
            {salons.map((salon) => (
              <SwiperSlide key={salon.id}>
                <div className="salon-card relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={salon.image}
                    alt={salon.name}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-0 right-0 px-5 text-center text-white">
                    <h3 className="salon-title text-xl font-semibold mb-2">
                      {salon.name}
                    </h3>
                    <p className="text-sm text-gray-300">{salon.location}</p>
                    <button className="mt-3 px-5 py-2 luxury-btn font-semibold rounded-full text-sm">
                      Explore →
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Explore All Button as Final Slide */}
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center h-72 bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-lg">
                <h3 className="text-lg text-gray-300 mb-4">
                  Explore More Options
                </h3>
                <button className="luxury-explore-btn">
                  Explore All Salons →
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SalonSection;
