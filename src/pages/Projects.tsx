import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import SeamlessUI from "../assets/seamless-ui.png";
import Visual1 from "../assets/visual-2.png";
import InfiniteScroll from "../assets/infinite.png";

const Projects: React.FC = () => {
  const projectsRef = useRef(null);

  const isInView = useInView(projectsRef, { once: false });

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
      ref={projectsRef}
      id="projects"
      className="text-[#fff]  w-[100%] font-cuprum">
      <p className="font-cuprum text-[2rem] uppercase text-center sm:mb-[6rem] mb-[3rem]">
        Projects
      </p>
      <div>
        <div className="w-[60%] capitalize tracking-[2px] mx-auto">
          <p className="font-cuprum sm:text-[2rem] text-[1rem] text-center">
            Prime Inventory Pro
          </p>
          <p className="mt-[2rem] normal-case">
            Prime inventory pro is an inventory management software that manages
            the inventory of a hypothetical chain of stores in Winnipeg named,
            PrimeMart. <br />
            React 18 is used on the frontend with Redux toolkit for
            state management. Throughout the frontend, several custom react and 
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-[2rem]">
          <div className="col-span-1 capitalize tracking-[2px] flex flex-col justify-center items-center">
            <div className="mb-[2rem]">
              <p>Easy-to-use UI</p>
            </div>

            <div className="col-span-1 capitalize tracking-[2px] flex justify-center items-center">
              <img src={SeamlessUI} className="w-[90%]" />
            </div>
          </div>

          <div className="col-span-1 capitalize tracking-[2px] flex flex-col justify-center items-center">
            <div className="mb-[2rem]">
              <p>Data Visualization</p>
            </div>

            <div className="col-span-1 capitalize tracking-[2px] flex justify-center items-center">
              <img src={Visual1} className="w-[90%]" />
            </div>
          </div>

          {/* <div className="col-span-1 capitalize tracking-[2px] flex flex-col justify-center items-center">
            <div>
              <p>Optimizing techniques</p>
            </div>

            <div className="col-span-1 capitalize tracking-[2px] flex justify-center items-center">
              <img src={InfiniteScroll} className="w-[90%]" />
            </div>
          </div> */}
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 my-[2rem]">
          <div className="col-span-1 capitalize tracking-[2px] flex flex-col justify-center items-center">
            <div className="mb-[2rem]">
              <p>Optimizing techniques</p>
            </div>

            <div className="col-span-1 capitalize tracking-[2px] flex justify-center items-center">
              <img src={InfiniteScroll} className="w-[90%]" />
            </div>
          </div>
          <div className="col-span-1 tracking-[2px] flex flex-col normal-case mt-[2rem] md:mt-[0rem]">
            Using optimizing techniques to make a web application more efficient
            and high performing has always been my major target. Some of the
            techniques I have used so far are listed below:
            <ul className="text-[0.9em] mt-[2rem]">
              <li>Infinite scroll</li>
              <li>Debouncing</li>
              <li>Custom react hooks</li>
              <li>Reusable components</li>
              <li>Lifting up the state</li>
              <li>SOLID principles</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
