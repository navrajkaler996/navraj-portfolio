import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
interface ExperienceType {
  leave: string;
}

const EXPERIENCE = [
  {
    company: "infosys",
    description:
      "After completing my 4 months training at Infosys educational center in Mysore, I joined the organization as a MERN stack web developer. I joined my first project as React.js developer. We built a web application for a mortage company from scratch. After working on frontend for six months using React.js, Redux, Redux saga, and styled-components, I transitioned on server-side development as well. Though my role was limited, I got positibe exposure to Java microservices, and MySQL database.",
  },
  {
    company: "bacancy",
    description:
      "After completing my 4 months training at Infosys educational center in Mysore, I joined the organization as a MERN stack web developer. I joined my first project as React.js developer. We built a web application for a mortage company from scratch. After working on frontend for six months using React.js, Redux, Redux saga, and styled-components, I transitioned on server-side development as well. Though my role was limited, I got positibe exposure to Java microservices, and MySQL database.",
  },
  {
    company: "telus_international",
    description:
      "After completing my 4 months training at Infosys educational center in Mysore, I joined the organization as a MERN stack web developer. I joined my first project as React.js developer. We built a web application for a mortage company from scratch. After working on frontend for six months using React.js, Redux, Redux saga, and styled-components, I transitioned on server-side development as well. Though my role was limited, I got positibe exposure to Java microservices, and MySQL database.",
  },
];

const Experience: React.FC<ExperienceType> = ({ leave }) => {
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
      <p className="font-cuprum text-[2rem] uppercase text-center mb-[6rem]">
        My experience
      </p>
      <div className="flex flex-col justify-around items-center capitalize tracking-[2px] ">
        <div className="w-[100%] flex justify-between lg:text-[1em] md:text-[0.8em] text-[.6em] gap-6">
          <div
            id="infosys"
            onClick={(e) => changeHandler(e.currentTarget.id)}
            className="border-b py-3 px-3  hover:cursor-pointer transition-all blue-background">
            <p>System engineer </p>
            <p>Aug 2019 - Sep 2021</p>
            <p>Infosys, India</p>
          </div>
          <div
            id="bacancy"
            onClick={(e) => changeHandler(e.currentTarget.id)}
            className="border-b py-3 px-3  hover:cursor-pointer transition-all">
            <p>Software engineer </p>
            <p>Sep 2021 - Apr 2022</p>
            <p>Bacancy, India</p>
          </div>
          <div
            id="telus_international"
            onClick={(e) => changeHandler(e.currentTarget.id)}
            className="border-b py-3 px-3 hover:cursor-pointer transition-all">
            <p>Senior software developer </p>
            <p>Apr 2022 - Dec 2022</p>
            <p>Telus International, India</p>
          </div>
        </div>
        <div className="normal-case lg:mt-[6rem] mt-[4rem]">
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
