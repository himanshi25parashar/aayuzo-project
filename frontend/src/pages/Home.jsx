import React from "react";
import bannerImg from "../assets/banner5.jpg";
import "../styles/hero.css";
import SalonSection from "../components/SalonSection";
import UserReviews from "../components/UserReviews";
import FeaturedServices from "../components/FeaturedServices";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Hero Section */}
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <img src={bannerImg} alt="Luxury background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
                {/* Hero Content */}
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-24 sm:pt-28 md:pt-32 lg:pt-40">
                    {/* Left Content */}
                    <div className="text-center lg:text-left max-w-xl mt-4 lg:mt-0">
                        <h1 className="luxury-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                            Book Your Luxury Salon Experience
                        </h1>
                        <p className="luxury-sub mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
                            Discover & book premium beauty and grooming services near you
                        </p>
                        <div className="hero-underline mt-4 mx-auto lg:mx-0"></div>
                        {/* <button className="mt-6 px-6 py-3 rounded-lg text-black font-semibold luxury-btn">
                            Book Now
                        </button> */}
                    </div>

                    {/* Right Side Images */}
                    <div className="relative flex justify-center lg:justify-end w-full lg:w-1/2 mt-[7rem] lg:mt-0">
  {/* Large Image (Hair) */}
  <img
    src={require("../assets/hairstyle.jpg")}
    alt="Luxury Hairstyling"
    className="
      object-cover shadow-lg
      w-56 h-56 sm:w-[14rem] sm:h-[14rem] md:w-[14rem] md:h-[14rem] lg:w-[420px] lg:h-auto
      rounded-full lg:rounded-xl
      animate-float-left sm:animate-float-left md:animate-none lg:animate-none
      relative z-10
    "
  />

  {/* Small Image (Makeup) */}
  <img
    src={require("../assets/makeup.jpg")}
    alt="Premium Makeup"
    className="
      absolute 
      top-0 sm:top-4 md:top-6 lg:-bottom-6
      left-1/2 sm:left-[60%] md:left-[65%] lg:left-6  
      transform -translate-x-1/2 lg:translate-x-0
      w-40 h-40 sm:w-[10rem] sm:h-[10rem] md:w-[10rem] md:h-[10rem] lg:w-64 lg:h-auto
      object-cover shadow-2xl border-2 border-black
      rounded-full lg:rounded-xl
      animate-float-right sm:animate-float-right md:animate-float-right lg:animate-none
      z-20
    "
  />
</div>

                </div>
            </div>

            {/* Salon Section 👇 */}
             <FeaturedServices />
            <SalonSection />
            <WhyChooseUs />
            <UserReviews />
           
        </div>
    );
};

export default Home;
