import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  // Add the 'scrolled' class to the header when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      // Add the 'scrolled' class to the header when scrolling down
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        // Remove the 'scrolled' class when at the top
        setScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const user = localStorage.getItem("user");

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

  // signout function
  const signOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      {/* desktop menu */}

      <div
        className={`hidden w-full px-5 py-3 md:flex items-center gap-3 fixed left-0 right-0 ${
          scrolled
            ? "header-shadow z-40 bg-[#71c778] top-0 transition-bg duration-300 py-3 shadow-md"
            : ""
        }`}
      >
        <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center gap-3">
          <div>
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="flex items-center gap-5">
            {myMenu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-[16px] font-semibold transition duration-300"
                    : "text-white text-[16px] font-semibold hover:text-green-600 transition duration-300"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="w-full bg-[#71c778] px-5 block fixed md:hidden gap-3">
        <div className=" py-2 flex items-center justify-between shadow-sm">
          <div>
            <Link to="/" className="font-bold text-white text-[16px]">
              {/* <img src="logo-white.png" alt="logo" width={200} /> */}
              Hair-Product
            </Link>
          </div>
          <div>
            <i
              className={`fa-solid transition-all ease-out duration-500 ${
                menuOpen ? "fa-xmark" : "fa-bars"
              }  text-[30px] text-white`}
              onClick={() => setMenuOpen(!menuOpen)}
            ></i>
          </div>
        </div>
        <div
          className={`scale-up-ver-top z-50 absolute opacity-0 left-0 top-0 translate-y-[-100%] w-full flex flex-col gap-3 bg-[#71c778] p-5 transition-all ease-out duration-500 ${
            menuOpen ? "opacity-100" : "hidden"
          }`}
        >
          {myMenu.map((item) => (
            <Link
              key={item.path}
              onClick={() => setMenuOpen(!menuOpen)}
              to={item.path}
              className="text-[#ffffff] text-[18px] font-semibold hover:text-green-600 transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
