import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const About: React.FC = () => {
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
      <p className="font-cuprum text-[2rem] uppercase text-center sm:mb-[6rem] mb-[3rem]">
        About me
      </p>
      <div className="grid lg:grid-cols-2 lg:grid-rows-1 md:grid-rows-2 md:grid-cols-1 md:gap-y-[4rem] w-[100%] text-white ">
        <div className=" font-cuprum tracking-[3px] uppercase sm:text-left text-center">
          <p className="font-cuprum sm:text-[2rem] text-[1rem]">
            I WRITE CODE THAT IS:
          </p>
          <p className="blue-background sm:text-[1.5rem] text-[1rem] my-[1rem] px-[0.5rem] w-[fit-content] sm:mx-0 mx-auto">
            readable
          </p>
          <p className="blue-background sm:text-[1.5rem] text-[1rem]  my-[1rem] px-[0.5rem] w-[fit-content] sm:mx-0 mx-auto">
            maintainable
          </p>
          <p className="blue-background sm:text-[1.5rem] text-[1rem] my-[1rem] px-[0.5rem] w-[fit-content] sm:mx-0 mx-auto">
            effecient
          </p>
          <p className="font-cuprum sm:text-[2rem] text-[1rem sm:text-left text-center">
            build apps that are:
          </p>
          <p className="blue-background sm:text-[1.5rem] text-[1rem]  my-[1rem] px-[0.5rem] w-[fit-content] sm:mx-0 mx-auto">
            scalable
          </p>
          <p className="blue-background sm:text-[1.5rem] text-[1rem]  my-[1rem] px-[0.5rem] w-[fit-content] sm:mx-0 mx-auto">
            performing
          </p>
          <p className="blue-background sm:text-[1.5rem] text-[1rem]  my-[1rem] px-[0.5rem] w-[fit-content] sm:mx-0 mx-auto">
            optimized
          </p>
          <p className="blue-background sm:text-[1.5rem] text-[1rem]  my-[1rem] px-[0.5rem] w-[fit-content] sm:mx-0 mx-auto">
            responsive
          </p>
        </div>

        <div className="font-cuprum text-white sm:text-[1.2rem] text-[1rem] lg:mt-0 mt-[3rem] sm:text-left text-center">
          <p className="mb-2">
            Hello! I'm Navraj Singh Kaler, a full-stack web developer. I hold a
            bachelor's degree in Computer Science and a post-graduate diploma in
            web development. With over three years of experience in web
            development, I initially began my journey as a frontend developer,
            specializing in React.js.
          </p>
          <p className="mb-2">
            Throughout my career, I've worked extensively with various libraries
            and frameworks alongside React, including Redux, TailwindCSS,
            styled-components, and more. My proficiency extends to backend
            development, where I primarily use Node.js with frameworks like
            Express.js and Fastify.
          </p>
          <p className="mb-2">
            {" "}
            In database management, I have experience with both SQL databases
            like PostgreSQL and NoSQL databases such as MongoDB. My diverse
            skill set allows me to contribute effectively to both frontend and
            backend aspects of web development.
          </p>
          <p className="mb-2">
            love learning and always want to know more. Keeping up with the
            changing tech world is exciting for me. I'm keen to explore new
            things like DevOps, advanced data skills, and making mobile apps. I
            believe in always learning because tech is always moving forward. I
            want to stay updated and make sure I can adapt quickly in the
            fast-paced world of web development.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
