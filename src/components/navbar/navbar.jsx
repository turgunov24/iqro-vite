//hooks
import React, { useState } from "react";
//icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";
//additional
import "./navbar.css";
import logoImage from "../../assets/iqro.jpg";
import { navLinks } from "./../../data/nav-links/nav-links";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);
  //navbar-background-change
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      setScrollPosition(true);
    } else {
      setScrollPosition(false);
    }
  });
  //scroll-sections
  const scrollSection = ({ px }) => {
    window.scrollTo({
      top: px,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={
        scrollPosition
          ? "fixed w-full px-12 py-3 flex items-center justify-between z-30 bg-scroll shadow-lg duration-300 sm:px-16 md:px-20 md:py-5"
          : "fixed w-full px-10 py-3 flex items-center justify-between z-30 bg-scroll duration-300 sm:px-14 md:px-16 md:py-5"
      }
    >
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="w-max flex gap-2 items-center justify-between hover:cursor-pointer"
      >
        <img src={logoImage} className="w-10 h-10 rounded-full" />
        <h5 className="">Iqro kids</h5>
      </div>
      <ul
        className={
          toggle
            ? "absolute w-full top-full left-0 flex flex-col duration-200 opacity-100 overflow-hidden bg-scroll z-0 py-3 border-t-1 border-grey md:relative md:flex-row md:w-max md:opacity-100 gap-4 md:top-0 md:p-0 md:border-none"
            : "absolute w-full top-full hidden overflow-hidden bg-scroll z-0 py-3 md:relative md:flex md:flex-row md:w-max md:opacity-100 gap-4 md:top-0 md:p-0 md:border-none"
        }
      >
        {navLinks.map((link) => (
          <li
            onClick={() => {
              scrollSection({
                px: link.px,
              });
              setToggle(false);
            }}
            key={link.name}
            className="text-center text-sm py-2 hover:text-white"
          >
            {link.name}
          </li>
        ))}
      </ul>
      <button
        onClick={() => setToggle(!toggle)}
        className="text-white text-xl md:hidden"
      >
        <HiOutlineMenuAlt3 />
      </button>
    </header>
  );
}

export default Navbar;
