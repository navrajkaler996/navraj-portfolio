import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AboutType {
  leave: string;
}

const About: React.FC<AboutType> = ({ leave }) => {
  const aboutRef = useRef(null);

  const isInView = useInView(aboutRef, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.2 }}
      id="about"
      className=" w-[100%] text-white"
      ref={aboutRef}>
      <p className="font-cuprum text-[2rem] uppercase text-center mb-[6rem]">
        About me
      </p>
      <div className="grid lg:grid-cols-2 lg:grid-rows-1 md:grid-rows-2 md:grid-cols-1 md:gap-y-[4rem] w-[100%] text-white ">
        <div className=" font-cuprum tracking-[3px] uppercase">
          <p className="font-cuprum text-[2rem] ">
            I WRITE CODE THAT IS: readable
          </p>
          <p className="blue-background text-[1.5rem] my-[1rem] px-[0.5rem] w-[fit-content]">
            readable
          </p>
          <p className="blue-background text-[1.5rem] my-[1rem] px-[0.5rem] w-[fit-content]">
            maintainable
          </p>
          <p className="blue-background text-[1.5rem] my-[1rem] px-[0.5rem] w-[fit-content]">
            effecient
          </p>
          <p className="font-cuprum text-[2rem] ">build apps that are:</p>
          <p className="blue-background text-[1.5rem] my-[1rem] px-[0.5rem] w-[fit-content]">
            scalable
          </p>
          <p className="blue-background text-[1.5rem] my-[1rem] px-[0.5rem] w-[fit-content]">
            performing
          </p>
          <p className="blue-background text-[1.5rem] my-[1rem] px-[0.5rem] w-[fit-content]">
            optimized
          </p>
          <p className="blue-background text-[1.5rem] my-[1rem] px-[0.5rem] w-[fit-content]">
            responsive
          </p>
        </div>

        <div className="font-cuprum text-white text-[1.2em] lg:mt-0 mt-[3rem] ">
          <p className="mb-2">
            Hey there! My name is Navraj Singh Kaler and I am a full-stack web
            developer.
          </p>
          <p className="mb-2">
            I have a bachelor's degree in Computer science and a post-graduate
            diploma in web development. I have over three years of experience in
            web development. I started my career as a frontend developer using
            React.js. I have used different libraries and frameworks with React
            in this time such as Redux, TailwindCSS, styled-components, and
            more.
          </p>
          <p className="mb-2">
            {" "}
            I started my career as a frontend developer using React.js. I have
            used different libraries and frameworks with React in this time such
            as Redux, TailwindCSS, styled-components, and more.
          </p>
          <p>
            I have primarly used Node.js in backend development with frameworks
            such as Express.js and Fastify. I have used SQL dataases such as
            POSTgresql and NoSQL databases such as MongoDD.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
