import React from "react";

const Header: React.FC = () => {
  return (
    <div
      id="header"
      className="w-[80vw] h-[4rem] mt-[2rem] border border-[#3c3b3b]">
      <ul className=" h-[inherit] grid grid-cols-5 uppercase font-cuprum tracking-[2px] text-[#7b7b7b]">
        <li className="hover:cursor-pointer hover:text-white hover:scale-[1.8] transition-all text-center z-10 leading-[4rem]">
          Projects
        </li>

        <li className="hover:cursor-pointer hover:text-white hover:scale-[1.8] transition-all text-center z-10 leading-[4rem]">
          Skills
        </li>
        <li className="hover:cursor-pointer hover:text-white hover:scale-[1.8] transition-all text-center z-10 leading-[4rem]">
          About
        </li>
        <li className="hover:cursor-pointer hover:text-white hover:scale-[1.8] transition-all text-center z-10 leading-[4rem]">
          Experience
        </li>
        <li className="hover:cursor-pointer hover:text-white hover:scale-[1.8] transition-all text-center z-10 leading-[4rem]">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Header;
