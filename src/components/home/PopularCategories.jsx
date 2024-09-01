import React from "react";
import SectionHeader from "../sectionheader/SectionHeader";
import { Link } from "react-router-dom";

const PopularCategories = () => {
  const currentItems = [
    {
      id: 1,
      title: "Organic Hair Oil",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur explicabo repellat placeat inventore voluptates cumque pariatur. Accusamus, magni magnam.",
      banner: "/images/hair-oil.jpg",
    },
    {
      id: 2,
      title: "Organic Hair Oil",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur explicabo repellat placeat inventore voluptates cumque pariatur. Accusamus, magni magnam.",
      banner: "/images/hair-oil2.jpg",
    },
    {
      id: 3,
      title: "Organic Hair Oil",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur explicabo repellat placeat inventore voluptates cumque pariatur. Accusamus, magni magnam.",
      banner: "/images/hair-oil3.jpg",
    },
    {
      id: 4,
      title: "Organic Hair Oil",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur explicabo repellat placeat inventore voluptates cumque pariatur. Accusamus, magni magnam.",
      banner: "/images/hair-oil4.jpg",
    },
  ];
  return (
    <div className="px-5 pt-[30px] md:pt-[100px] max-w-screen-xl mx-auto">
      <SectionHeader
        title="Popular Categories"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur explicabo repellat placeat inventore voluptates cumque pariatur. Accusamus, magni magnam."
      />
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="w-full flex flex-col shadow-md rounded-md p-3 border-2 border-white hover:border-2 hover:border-[#44b84e] transition-all duration-500"
          >
            <img
              src={item.banner}
              alt={item.title}
              className="w-full h-full md:w-[300px] md:h-[250px]"
            />
            <h1 className="text-xl font-bold mt-3">{item.title}</h1>
            <p className="text-sm text-gray-500">
              {item.description.slice(0, 80)}...
            </p>
            <div>
              <Link to={`/items/${item.id}`}>
                <button className="hover:bg-[#71c778] text-white px-5 py-2 mt-5 shadow-lg bg-[#44b84e] border-2 border-[#44b84e] hover:border-[#71c778] hover:text-white hover:border-2 hover:rounded-md  transition-all duration-500">
                  Shop Now
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
