import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import Header from "./layouts/Header";

import About from "./pages/About";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./layouts/Footer";

function App() {
  const [active, setActive] = useState("home");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const isHomeInView = useInView(homeRef, {});
  const isAboutInView = useInView(aboutRef, {});
  const isSkillsInView = useInView(skillsRef, {});
  const isExperienceInView = useInView(experienceRef, {});
  const isContactInView = useInView(contactRef, {});

  useEffect(() => {
    if (isHomeInView) setActive("home");
    if (isAboutInView) setActive("about");
    if (isSkillsInView) setActive("skills");
    if (isExperienceInView) setActive("experience");
    if (isContactInView) setActive("contact");

    console.log(isHomeInView);
    console.log(isExperienceInView);
  }, [
    isHomeInView,
    isAboutInView,
    isSkillsInView,
    isExperienceInView,
    isContactInView,
  ]);

  const navClickHandler = (id: string) => {
    const targetElement = document.getElementById(`${id}__holder`);
    setActive(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with ID ${id}_holder not found.`);
    }
  };

  return (
    <div
      id="app"
      className="flex justify-center items-centern bg-radial-gradient">
      <div className="dark">
        {/* <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div> */}
        <div id="stars"></div>

        <Header active={active} clickHandler={navClickHandler} />
        <div
          id="home__holder"
          className="h-[100vh] pt-[10rem] lg:pl-[5rem] md:pl-[5rem]"
          ref={homeRef}>
          <Home />
        </div>
        <div id="about__holder" className="sm:px-[4rem] px-[1rem]">
          <span ref={aboutRef}></span>
          <About />
        </div>

        <div id="skills__holder" className="mt-[6rem]  sm:px-[4rem] px-[1rem]">
          <span ref={skillsRef}></span>
          <Skills />
        </div>
        <div
          id="experience__holder"
          className="mt-[6rem]  sm:px-[4rem] px-[1rem]">
          <Experience />
          <span ref={experienceRef}></span>
        </div>

        <div id="contact__holder" className="mt-[6rem]  sm:px-[4rem] px-[1rem]">
          <Contact />
          <span ref={contactRef}></span>
        </div>
        <Footer />
        <div id="stars"></div>
      </div>

      {/* <div id="about__holder">
        <About  />
      </div>
      <div id="skills__holder">
        <Skills  />
      </div>
      <div id="experience__holder">
        <Experience  />
      </div>

      <div id="contact__holder">
        <Contact  />
      </div> */}
      {/* <div
        id="next-button"
        className="absolute top-[80%] right-[5%]"
        onClick={() => changeView()}>
        <i className="arrow right"></i>
        <span className="absolute text-white top-[30%] right-[10%] text-[1.4rem] uppercase font-cuprum tracking-[1px]">
          {next}
        </span>
      </div> */}
    </div>
  );
}

export default App;
