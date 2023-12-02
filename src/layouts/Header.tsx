import React, { useEffect, useState } from "react";
//border-[#3c3b3b]
const headerScroll = {
  "margin-top": 0,
};

interface HeaderType {
  active: string;
  clickHandler: Function;
}

const Header: React.FC<HeaderType> = ({ active, clickHandler }) => {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    window.onscroll = () => {
      let element = document.getElementById("header");
      let navLink = document.getElementById("nav-links");
      if (window.scrollY !== 0) {
        if (element) {
          element.style.marginTop = "-2px";
          element.style.background =
            "linear-gradient(to bottom, #0D1E31, #000)";
          element.style.color = "#fff";
          element.style.transition = "margin 0.5s, background 0.5s, color .5s";

          if (navLink) navLink.style.color = "#fff";
        }
      } else {
        if (element) {
          element.style.marginTop = "2rem";
          element.style.background = "transparent";

          element.style.transition = "margin 0.5s, background 0.5s, color .5s";

          if (navLink) navLink.style.color = "#7b7b7b";
        }
      }
    };
  }, [window.scroll]);

  useEffect(() => {
    if (activeLink !== active) {
      const element = document.getElementById(activeLink);
      if (element) element?.classList.remove("active-link");
    }

    if (active) {
      const element = document.getElementById(active);

      if (element) element?.classList.add("active-link");
    }

    if (activeLink !== active) setActiveLink(active);
  }, [active]);

  return (
    <div
      id="header"
      className="fixed w-[100vw] h-[4rem] mx-auto mt-[2rem] z-[1000] ">
      <ul
        id="nav-links"
        className=" h-[inherit] grid grid-cols-5 uppercase font-cuprum tracking-[2px] text-[#7b7b7b]">
        <li
          id="home"
          onClick={(e) => clickHandler(e.currentTarget.id)}
          className="nav-link hover:cursor-pointer text-white transition-all text-center z-10 leading-[4rem]">
          Home
        </li>

        <li
          id="about"
          onClick={(e) => clickHandler(e.currentTarget.id)}
          className="nav-link hover:cursor-pointer hover:text-white  transition-all text-center z-10 leading-[4rem]">
          About
        </li>
        <li
          id="skills"
          onClick={(e) => clickHandler(e.currentTarget.id)}
          className="nav-link hover:cursor-pointer hover:text-white  transition-all text-center z-10 leading-[4rem]">
          Skills
        </li>
        <li
          id="experience"
          onClick={(e) => clickHandler(e.currentTarget.id)}
          className="nav-link hover:cursor-pointer hover:text-white  transition-all text-center z-10 leading-[4rem]">
          Experience
        </li>
        <li
          id="contact"
          onClick={(e) => clickHandler(e.currentTarget.id)}
          className="nav-link hover:cursor-pointer hover:text-white transition-all text-center z-10 leading-[4rem]">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Header;
