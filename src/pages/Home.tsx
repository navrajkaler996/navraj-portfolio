import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion, useAnimation, useInView } from "framer-motion";

const Home: React.FC = () => {
  const ref1 = useRef(null);
  const homeRef = useRef(null);

  const isInView = useInView(homeRef, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView]);

  //useEffect for Typed
  useEffect(() => {
    const typed = new Typed(ref1.current, {
      strings: [
        "React.js",
        "Node.js",
        "Tailwind",
        "Sass/Less",
        "PostgreSQL",
        "MongoDB",
      ],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.3 }}
      ref={homeRef}
      id="home"
      className="text-[#fff] w-[100%]">
      <h1
        id="home__welcome"
        className="sm:text-[5.5rem] text-[3.5rem] sm:text-left text-center text-color-home-welcome tracking-[5px] font-titan-one">
        <span className="one">W</span>
        <span className="two">E</span>
        <span className="three">L</span>
        <span className="four">C</span>
        <span className="five">O</span>
        <span className="six">M</span>
        <span className="seven">E</span>
      </h1>
      <div id="home__info-container" className="sm:mt-0 mt-[3rem]">
        <p
          // id="home__info-1"
          className="font-cuprum sm:text-[2.5rem] text-[1.5rem] sm:text-left text-center tracking-[3px] sm:mb-0 mb-[1rem]">
          My name is navraj singh kaler
        </p>
        <p
          // id="home__info-2"
          className="font-cuprum sm:text-[2.5rem] text-[1.5rem] sm:text-left text-center  tracking-[3px] sm:mb-0 mb-[1rem]">
          I am a full-stack web developer
        </p>
        <p
          // id="home__info-3"
          className="font-cuprum sm:text-[2.5rem] text-[1.5rem] sm:text-left text-center  tracking-[3px] sm:mb-0 mb-[1rem]">
          {" "}
          I work with&nbsp;
          <span className="blue-background" ref={ref1}></span>
        </p>
      </div>
    </motion.div>
  );
};

export default Home;
