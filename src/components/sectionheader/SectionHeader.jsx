import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#44b84e] uppercase">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-12 h-1 bg-[#44b84e]"></div>
          <div className="w-2 h-1 bg-[#44b84e]"></div>
          <div className="w-12 h-1 bg-[#44b84e]"></div>
        </div>
      </div>
      <p className="text-gray-500 text-sm md:w-2/4 mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
