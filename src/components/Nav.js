import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { BsDiscord } from "react-icons/bs";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav class="sticky top-0 z-10 backdrop-filter backdrop-blur-lg  bg-opacity-95  bg-primary w-full py-4 flex justify-evenly items-center  ">
        <div className="flex items-center hover:cursor-pointer  ">
          {/* <img src={dis_logo} alt="logo" width={50} className="mx-2" /> */}
          <BsDiscord className="text-3xl mx-2 text-white" />
          <h1 className="font-extrabold text-white hover:text-black">
            Discord
          </h1>
        </div>
        {/* Desktop Nav */}
        <div className="hidden lg:flex p-4  text-white font-semibold nav_items ">
          <ul>Downlod</ul>
          <ul>Nitro</ul>
          <ul>Support</ul>
          <ul>Safety</ul>
          <ul>Careers</ul>
          <ul> Blog</ul>
        </div>

        <div className="p-4">
          <button
            type="button"
            className="bg-white px-6 rounded-full py-2 hover:bg-black hover:text-white text-sm font-semibold"
          >
            Open Discord
          </button>
        </div>
        {/* Mobile Nav*/}
        <div className="lg:hidden flex relative">
          <div className="flex ">
            <button
              onClick={() => setToggle((prev) => !prev)}
              type="button"
              className=""
            >
              {toggle ? <ImCross /> : <GiHamburgerMenu />}
            </button>
            {toggle && (
              <div className="dropdown">
                <ul onClick={() => setToggle(false)} className="cursor-pointer">
                  Downlod
                </ul>
                <ul onClick={() => setToggle(false)} className="cursor-pointer">
                  Nitro
                </ul>
                <ul onClick={() => setToggle(false)} className="cursor-pointer">
                  Support
                </ul>
                <ul onClick={() => setToggle(false)} className="cursor-pointer">
                  Safety
                </ul>
                <ul onClick={() => setToggle(false)} className="cursor-pointer">
                  Careers
                </ul>
                <ul onClick={() => setToggle(false)} className="cursor-pointer">
                  {" "}
                  Blog
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
