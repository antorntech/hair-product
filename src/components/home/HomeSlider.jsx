import React from "react";

const HomeSlider = () => {
  return (
    <div className="px-5 py-2 bg-[url('/images/slider-bg.jpg')] bg-no-repeat bg-cover h-screen">
      <div className="max-w-screen-xl mx-auto h-full flex justify-center items-center">
        <div className="w-full md:w-[1/2] hidden md:block"></div>
        <div className="w-full md:w-[1/2]">
          <p className="text-sm text-white">New Natural Aromatheraphy</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white py-2">
            Natural Hair Oil
          </h1>
          <p className="text-white text-md">
            An Energizing Massage oil package that functions as a massage oil
            with olive oil as the basic ingredient with a distinctive fragrance
            from several essential oil mixtures.
          </p>
          <button className="bg-[#71c778] text-white px-5 py-2 mt-5 shadow-lg border-2 border-[#71c778] hover:bg-[#44b84e] hover:text-white hover:border-2 hover:border-[#44b84e] transition-all duration-500">
            Shop Now
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
