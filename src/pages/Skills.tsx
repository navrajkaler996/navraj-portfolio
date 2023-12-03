import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import HTML5 from "../assets/html-5.png";
import CSS3 from "../assets/css-3.png";
import JavaScript from "../assets/js.png";
import TypeScript from "../assets/typescript.png";
import React from "../assets/react.svg";
import Redux from "../assets/redux.png";
import Tailwind from "../assets/tailwindcss.png";
import Bootstrap from "../assets/bootstrap.png";
import Sass from "../assets/sass.png";
import Node from "../assets/node.png";
import PHP from "../assets/php.png";
import PostgreSQL from "../assets/postgresql.png";
import MySQL from "../assets/mysql.png";
import MongoDB from "../assets/mongodb.png";
import Mongoose from "../assets/mongoose.png";
import Nest from "../assets/nest.png";
import Express from "../assets/express.png";
import Prisma from "../assets/prisma.png";

const Skills: React.FC = () => {
  const skillsRef = useRef(null);

  const isInView = useInView(skillsRef, { once: false });

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
      ref={skillsRef}
      id="skills"
      className="text-[#fff] w-[100%] font-cuprum">
      <p className="font-cuprum text-[2rem] uppercase text-center sm:mb-[6rem] mb-[3rem]">
        skills
      </p>
      <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col sm:items-center justify-around uppercase tracking-[1px]">
        <div className="border-b pb-[2rem] lg:w-[40%] sm:w-[100%] grid grid-cols-3 grid-rows-3 gap-[2rem]">
          <div className="flex flex-col items-center ">
            <img src={HTML5} className="w-[60px] h-[60px] mb-4" />
            <p>HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={CSS3} className="w-[60px] h-[60px] mb-4" />
            <p>CSS3</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={JavaScript} className="w-[60px] h-[60px]  mb-4" />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={TypeScript} className="w-[60px] h-[60px] mb-4" />
            <p>TypeScript</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={React} className="w-[60px] h-[60px] mb-4" />
            <p>React.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Redux} className="w-[60px] h-[60px] mb-4" />
            <p>Redux</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Tailwind} className="w-[60px] h-[60px] mb-4" />
            <p>Tailwind</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Bootstrap} className="w-[60px] h-[60px] mb-4" />
            <p>Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Sass} className="w-[60px] h-[60px] mb-4" />
            <p>Sass</p>
          </div>
        </div>
        <div className="border-b  pb-[2rem]  lg:w-[40%] sm:w-[100%] lg:mt-0 mt-[6rem] grid grid-cols-3 grid-rows-3 gap-[2rem]">
          <div className="flex flex-col items-center">
            <img src={Node} className="w-[60px] h-[60px] mb-4" />
            <p>Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={PHP} className="w-[60px] h-[60px] mb-4" />
            <p>PHP</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={PostgreSQL} className="w-[60px] h-[60px] mb-4" />
            <p>PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={MySQL} className="w-[60px] h-[60px] mb-4" />
            <p>MySQL</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={MongoDB} className="w-[60px] h-[60px]  mb-4" />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Express} className="w-[60px] h-[60px] mb-4" />
            <p>Express.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Nest} className="w-[60px] h-[60px] mb-4" />
            <p>Nest.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Prisma} className="w-[60px] h-[60px] mb-4" />
            <p>Prisma</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={Mongoose} className="w-[60px] h-[60px] mb-4" />
            <p>Mongoose</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
