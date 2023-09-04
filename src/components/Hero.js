import React from "react";

import right_bg from "../assets/right_bg_landing_header.svg";
import bgImage from "../assets/center_bg_landing_header.svg";

const Hero = () => {
  return (
    <div
      className=" bg-no-repeat bg-cover bg-center bg-[#404eed] "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="bg-right-bottom  h-screen  bg-no-repeat bg-[length:700px]"
        style={{ backgroundImage: `url(${right_bg})` }}
      >
        <section className="flex flex-col  sm:items-start md:items-center px-5 ">
          <h1 className="mt-20 lg:mt-40 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black">IMAGINE A PLACE..</h1>
          <p className="max-w-2xl mt-5 text-sm text-left leading-relaxed text-white md:mt-8 md:text-lg md:max-w-[60%] md:text-center">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </section>
        <section className="flex flex-col items-start px-5 mt-5 md:flex-row md:justify-center md:mt-10">
            <button type="button" className="bg-white px-8 py-3 rounded-full text-md font-semibold my-2 hover:text-sky-600 hover:shadow-lg hover:shadow-white/20 md:mx-5">Download for Windows</button>
            <button type="button" className="text-white px-8 py-3 rounded-full text-md font-semibold my-2 bg-zinc-800 hover:bg-zinc-700 hover:shadow-lg hover:shadow-zinc-700/40 md:mx-5">Open Discord in your browser</button>
        </section>
      </div>
    </div>
  );
};

export default Hero;
