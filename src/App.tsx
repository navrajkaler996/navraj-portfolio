import { useEffect, useRef, useState } from "react";
import Header from "./layouts/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { useInView } from "framer-motion";

const VIEW = ["home", "about", "skills", "experience", "contact"];

function App() {
  const [active, setActive] = useState("home");
  const [navClicked, setNavClicked] = useState(false);
  // const [next, setNext] = useState(VIEW[0]);
  // const [viewIndex, setViewIndex] = useState(0);

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
    navClicked,
  ]);

  const navClickHandler = (id: string) => {
    const targetElement = document.getElementById(`${id}__holder`);
    setActive(id);
    setNavClicked(true);
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
          className="h-[100vh] pt-[10rem] pl-[5rem]"
          ref={homeRef}>
          <Home active={active} />
        </div>
        <div id="about__holder" className="px-[4rem]">
          <About leave={active} />
          <span ref={aboutRef}></span>
        </div>
        <div id="skills__holder" className="mt-[6rem]  px-[4rem]">
          <Skills leave={active} />
          <span ref={skillsRef}></span>
        </div>
        <div id="experience__holder" className="mt-[6rem]  px-[4rem]">
          <Experience leave={active} />
          <span ref={experienceRef}></span>
        </div>

        <div id="contact__holder" className="mt-[6rem]  px-[4rem]">
          <Contact leave={active} />
          <span ref={contactRef}></span>
        </div>
        <div id="stars"></div>
      </div>
      {/* <div id="about__holder">
        <About leave={active} />
      </div>
      <div id="skills__holder">
        <Skills leave={active} />
      </div>
      <div id="experience__holder">
        <Experience leave={active} />
      </div>

      <div id="contact__holder">
        <Contact leave={active} />
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
