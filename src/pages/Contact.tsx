import Email from "../assets/email.png";
import Phone from "../assets/phone-call.png";
import Linkedin from "../assets/linkedin.png";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const contactRef = useRef(null);
  const formRef = useRef(null);

  const isInView = useInView(contactRef, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView]);

  const changeHandler = (e: any) => {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_hjpgc92",
          "template_zfskntm",
          formRef?.current,
          "F2e8BpOZ9ycB2jITU"
        )
        .then(
          (result: any) => {
            console.log(result.text);

            toast.success(
              "Thank you! I recieved your email. I will respond as soon as possible",
              {
                duration: 5000,
              }
            );
            setLoading(false);
          },
          (error: any) => {
            console.log(error.text);
            toast.error("Sorry! Email could not be sent.");
            setLoading(false);
          }
        );
    }
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
      ref={contactRef}
      id="contact"
      className="text-[#fff]">
      <Toaster />
      <div className="font-cuprum tracking-[3px] lowercase">
        <p className="font-cuprum text-[2rem] uppercase text-center sm:mb-[6rem] mb-[3rem]">
          Say hi to me!
        </p>
        <div className="grid lg:grid-rows-1 lg:grid-cols-2 grid-rows-2 grid-cols-1 lg:gap-[6rem] gap-[0]">
          <div id="contact__info">
            <div
              id="contact__info-email"
              className="flex items-center blue-background  py-[.5rem] px-[1rem] my-[2rem]">
              <img src={Email} />{" "}
              <span className="ml-[1rem]"> navrajkaler996@gmail.com</span>
            </div>
            <div
              id="contact__info-phone"
              className="flex  items-center blue-background  py-[.5rem] px-[1rem] my-[2rem]">
              <img src={Phone} />{" "}
              <span className="ml-[1rem]"> +1 (431) 557 4946</span>
            </div>
            <div
              id="contact__info-linkedin"
              className="flex items-center blue-background py-[.5rem] px-[1rem] mt-[2rem]">
              <img src={Linkedin} />{" "}
              <span className="ml-[1rem]">
                {" "}
                https://tinyurl.com/navraj-kaler
              </span>
            </div>
          </div>
          <div>
            <form ref={formRef} onSubmit={submitHandler}>
              <div>
                <label htmlFor="name" className="uppercase">
                  Your Name:
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(e) => changeHandler(e)}
                  placeholder="Enter your name"
                  className=" w-[100%] px-[.5rem] py-[.4rem] my-[1rem] text-[#000] opacity-[.9] outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="uppercase">
                  Your Email:
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={(e) => changeHandler(e)}
                  placeholder="Enter your email"
                  className=" w-[100%] px-[.5rem] py-[.4rem] my-[1rem] text-[#000] opacity-[.9] outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="uppercase">
                  Your Message:
                </label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(e) => changeHandler(e)}
                  placeholder="Enter your message"
                  rows={6}
                  className=" w-[100%] px-[.5rem] py-[.4rem] my-[1rem] text-[#000] opacity-[.9] outline-none"
                  required></textarea>
              </div>
              <div className="w-[100%] text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="blue-background px-[3rem] py-[.5rem] uppercase tracking-[1px] ">
                  {loading ? "submiting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
