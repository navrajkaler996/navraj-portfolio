import Email from "../assets/email.png";
import Phone from "../assets/phone-call.png";
import Linkedin from "../assets/linkedin.png";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface ContactType {
  leave: string;
}

const Contact: React.FC<ContactType> = ({ leave }) => {
  const contactRef = useRef(null);

  const isInView = useInView(contactRef, { once: false });

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
      ref={contactRef}
      id="contact"
      className="text-[#fff]  w-[100%]">
      <div className="font-cuprum tracking-[3px] lowercase">
        <p className="font-cuprum text-[2rem] uppercase text-center mb-[6rem]">
          Say hi to me!
        </p>
        <div id="contact__info">
          <div
            id="contact__info-email"
            className="flex items-center blue-background lg:w-[40%]  w-[100%] py-[.5rem] px-[1rem] my-[2rem]">
            <img src={Email} />{" "}
            <span className="ml-[1rem]"> navrajkaler996@gmail.com</span>
          </div>
          <div
            id="contact__info-phone"
            className="flex  items-center blue-background   lg:w-[40%]  w-[100%] py-[.5rem] px-[1rem] my-[2rem]">
            <img src={Phone} />{" "}
            <span className="ml-[1rem]"> +1 (431) 557 4946</span>
          </div>
          <div
            id="contact__info-linkedin"
            className="flex  items-center blue-background  lg:w-[40%]  w-[100%] py-[.5rem] px-[1rem] my-[2rem]">
            <img src={Linkedin} />{" "}
            <span className="ml-[1rem]"> https://tinyurl.com/navraj-kaler</span>
          </div>
        </div>
      </div>
      {/* <div className=" font-cuprum absolute left-[55%] right-[5%] text-white text-[1.2em]">
        <p className="font-cuprum text-[2rem] uppercase">Send me an email</p>
      </div> */}
    </motion.div>
  );
};

export default Contact;
