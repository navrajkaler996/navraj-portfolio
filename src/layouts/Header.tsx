import React, { useEffect, useState } from "react";
import scrollIntoView from "scroll-into-view";
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
  const [showMenu, setShowMenu] = useState(false);

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

  // useEffect(() => {
  //   const activeNavLink = document.getElementById(activeLink);

  //   activeNavLink?.classList.add("active-link");
  // }, []);

  const navigate = (id: string) => {
    setActiveLink(id);
    const element = document.getElementById(`${id}__holder`);
    const activeNavLink = document.getElementById(activeLink);

    activeNavLink?.classList.remove("active-link");
    const newActiveNavLink = document.getElementById(id);

    if (element) {
      newActiveNavLink?.classList.add("active-link");
      scrollIntoView(element, {
        time: 2000,
      });
    }

    setActiveLink(id);
  };

  return (
    <>
      {/* <div
        id="hamburger"
        className="sm:hidden block fixed top-[1rem] right-[2rem] w-[5rem] h-[5rem] rounded-[50%] blue-background">
        <div
          className="flex flex-col justify-center items-center h-[100%]"
          onClick={() => setShowMenu(!showMenu)}>
          <div className="w-[60%] h-[1px] bg-black my-[5px]"></div>

          <div className="w-[60%] h-[1px] bg-black my-[5px]"></div>
          <div className="w-[60%] h-[1px] bg-black my-[5px]"></div>
        </div>
        {showMenu && (
          <div className="absolute top-[6rem] right-[0rem] w-[15rem] h-[20rem] blue-background-2 z-[1200]"></div>
        )}
      </div> */}
      <div
        id="header"
        className="fixed w-[100vw] h-[4rem] mx-auto mt-[2rem] z-[1000] ">
        <ul
          id="nav-links"
          className="h-[inherit] grid grid-cols-5 uppercase font-cuprum tracking-[2px] sm:text-[1rem] text-[.6em] text-[#7b7b7b]">
          <li
            id="home"
            onClick={(e) => navigate(e.currentTarget.id)}
            className="nav-link hover:cursor-pointer text-white transition-all text-center z-10 leading-[4rem]">
            Home
          </li>

          <li
            id="about"
            onClick={(e) => navigate(e.currentTarget.id)}
            className="nav-link hover:cursor-pointer hover:text-white  transition-all text-center z-10 leading-[4rem]">
            About
          </li>
          <li
            id="skills"
            onClick={(e) => navigate(e.currentTarget.id)}
            className="nav-link hover:cursor-pointer hover:text-white  transition-all text-center z-10 leading-[4rem]">
            Skills
          </li>
          <li
            id="experience"
            onClick={(e) => navigate(e.currentTarget.id)}
            className="nav-link hover:cursor-pointer hover:text-white  transition-all text-center z-10 leading-[4rem]">
            Experience
          </li>
          <li
            id="contact"
            onClick={(e) => navigate(e.currentTarget.id)}
            className="nav-link hover:cursor-pointer hover:text-white transition-all text-center z-10 leading-[4rem]">
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
