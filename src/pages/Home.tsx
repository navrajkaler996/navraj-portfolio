import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import NavrajHome from "../assets/navraj.jpeg";

const Home: React.FC = () => {
  const ref1 = useRef(null);

  //useEffect for Typed
  useEffect(() => {
    const typed = new Typed(ref1.current, {
      strings: ["React.js", "Node.js", "MongoDB", "Next.js", "Sass/Less"],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="home"
      className="text-[#fff] absolute left-[5%] top-[25%] w-[100%]">
      <h1
        id="home__welcome"
        className="text-[5.5rem] text-color-home-welcome tracking-[5px] font-titan-one">
        <span className="one">W</span>
        <span className="two">E</span>
        <span className="three">L</span>
        <span className="four">C</span>
        <span className="five">O</span>
        <span className="six">M</span>
        <span className="seven">E</span>
      </h1>
      <div id="home__info-container">
        <p
          id="home__info-1"
          className="font-cuprum text-[2.5rem] tracking-[3px]">
          My name is navraj singh kaler
        </p>
        <p
          id="home__info-2"
          className="font-cuprum text-[2.5rem] tracking-[3px]">
          I am a full-stack web developer
        </p>
        <p
          id="home__info-3"
          className="font-cuprum text-[2.5rem] tracking-[3px]">
          {" "}
          I work with&nbsp;
          <span ref={ref1}></span>
        </p>
      </div>
      {/* <img
        id="home__image"
        src={NavrajHome}
        width="300px"
        className="absolute top-[10%] right-[15%]"
      /> */}
    </div>
  );
};

export default Home;
