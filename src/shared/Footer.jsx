import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const myMenu = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Products",
      path: "/products",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];
  return (
    <>
      <section className="py-6 md:py-[50px] lg:py-[80px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex flex-col items-center">
            <img src="/images/logo-black.png" alt="" className="mb-6 w-72" />
            <ul className="flex flex-wrap justify-center items-center gap-3 md:gap-12">
              {myMenu.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="font-bold text-black hover:text-[#44b84e] transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 mt-8">
              © 2024 All Rights Reserved by AM ANTOR
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
