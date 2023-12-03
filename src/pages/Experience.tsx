import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const EXPERIENCE = [
  {
    company: "infosys",
    description:
      "After finishing my 4-month training at Infosys Educational Center in Mysore, I started working there as a MERN stack web developer. In my initial role, I focused on React.js development and took part in creating a web application for a mortgage company. Working on the front end for six months, I used technologies like React.js, Redux, Redux Saga, and styled-components. Later, I expanded my skills to server-side development. Even though my main focus was on frontend development, I gained positive exposure to Java microservices and MySQL databases during this transition.",
  },
  {
    company: "bacancy",
    description:
      "I joined Bacancy Technology as a software developer, where I played the role of a full-stack developer. My responsibilities included working with technologies such as React, Redux, Sass, Node.js, Express, and MySQL. I effectively communicated with clients on a daily basis, managing multiple projects simultaneously.",
  },
  {
    company: "telus_international",
    description:
      "I joined Telus International as a Senior Application Developer, leading the inception of a web application using React, Redux, Tailwind CSS, Express, and PostgreSQL. Collaborating with multiple development teams, our primary focus was on designing an admin dashboard supporting users with distinct roles and integrating multiple databases. Over the course of nearly 10 months, we successfully completed two phases of the project.",
  },
];

const Experience: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState("infosys");
  const experienceRef = useRef(null);

  const isInView = useInView(experienceRef, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView]);

  useEffect(() => {
    const element = document.getElementById(activeExperience);
    element?.classList?.add("blue-background");
    element?.classList?.add("active-experience");
  }, []);

  const changeHandler = (id: string) => {
    const activeElement = document.getElementById(activeExperience);

    activeElement?.classList.remove("blue-background");
    activeElement?.classList.remove("active-experience");

    const toBeActiveElement = document.getElementById(id);

    toBeActiveElement?.classList?.add("blue-background");
    toBeActiveElement?.classList?.add("active-experience");
    setActiveExperience(id);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.2 }}
      ref={experienceRef}
      id="experience"
      className="text-[#fff]  w-[100%] font-cuprum">
      <p className="font-cuprum text-[2rem] uppercase text-center sm:mb-[6rem] mb-[3rem]">
        My experience
      </p>
      <div className="flex flex-col justify-around items-center capitalize tracking-[2px] ">
        <div className="sm:w-[100%] w-[60%] flex sm:flex-row flex-col justify-between sm:text-[1rem] text-[.8rem] gap-6">
          <div
            id="infosys"
            onClick={(e) => changeHandler(e.currentTarget.id)}
            className="border-b py-3 px-3  hover:cursor-pointer transition-all blue-background sm:text-left text-center">
            <p>System engineer </p>
            <p>Aug 2019 - Sep 2021</p>
            <p>Infosys, India</p>
          </div>
          <div
            id="bacancy"
            onClick={(e) => changeHandler(e.currentTarget.id)}
            className="border-b py-3 px-3  hover:cursor-pointer transition-all sm:text-left text-center">
            <p>Software engineer </p>
            <p>Sep 2021 - Apr 2022</p>
            <p>Bacancy, India</p>
          </div>
          <div
            id="telus_international"
            onClick={(e) => changeHandler(e.currentTarget.id)}
            className="border-b py-3 px-3 hover:cursor-pointer transition-all sm:text-left text-center">
            <p>Senior software developer </p>
            <p>Apr 2022 - Dec 2022</p>
            <p>Telus International, India</p>
          </div>
        </div>
        <div className="lg:w-[80%] md:w-[80%] w-[100%] sm:text-[1.2rem] text-[1rem] normal-case lg:mt-[6rem] mt-[4rem]  sm:text-left text-center">
          <p>
            {EXPERIENCE.map(
              (exp) => exp.company === activeExperience && exp.description
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
