import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import fandom from "../assets/fandom_landing.svg";
import hangout from "../assets/hanging_out_easy_landing.svg";
import talk from "../assets/invite_only_landing.svg";
import just_chill from "../assets/just_chiling_landing.svg"

const Home = () => {
  return (
    <div>
      <Nav />
      
      <Hero />
      <section>
        <div className="flex flex-col md:flex-row md:p-5 md:items-center justify-evenly">
          <img
            className="p-5 mt-5 md:max-w-[55%]"
            src={talk}
            alt="invite_only_landing"
          />
          <div className="p-10 lg:max-w-[40%]">
            <h1 className="font-bold leading-relaxed md:font-bold text-xl md:text-2xl lg:text-5xl">
              Create an invite-only place where you belong
            </h1>
            <p className="leading-relaxed mt-4 text-sm lg:leading-loose lg:text-md lg:max-w-[80%]">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:p-5 md:items-center justify-evenly bg-[#f6f6f6]">
          <img
            className="p-5 mt-5 md:max-w-[55%] md:order-last"
            src={hangout}
            alt="invite_only_landing"
          />
          <div className="p-10 lg:max-w-[40%]">
            <h1 className="font-bold leading-relaxed md:font-bold text-xl md:text-2xl lg:text-5xl">
              Where hanging out is easy
            </h1>
            <p className="leading-relaxed mt-4 text-sm lg:leading-loose lg:text-md lg:max-w-[80%]">
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:p-5 md:items-center justify-evenly">
          <img
            className="p-5 mt-5 md:max-w-[55%]"
            src={fandom}
            alt="invite_only_landing"
          />
          <div className="p-10 lg:max-w-[40%]">
            <h1 className="font-bold leading-relaxed md:font-bold text-xl md:text-2xl lg:text-5xl">
              From few to a fandom
            </h1>
            <p className="leading-relaxed mt-4 text-sm lg:leading-loose lg:text-md lg:max-w-[80%]">
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </div>
        </div>

        <section className="flex flex-col pt-10 md:items-center bg-[#f6f6f6] md:mt-10">
          <div className="px-10 md:max-w-[80%] md:mt-20">
            <h1 className="font-bold  md:font-bold text-xl md:text-4xl lg:text-5xl md:text-center">RELIABLE TECH FOR STAYING CLOSE</h1>
            <p className="leading-relaxed mt-4 text-sm md:text-center md:text-md lg:leading-loose lg:text-md ">
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </p>
          </div>
          <img className="p-5 mt-5 md:max-w-[90%]" src = {just_chill} alt="just-chilling"/>
          <div className="px-10 lg:max-w-[40%] md:mt-10">
            <h1 className="font-bold  md:font-bold text-xl md:text-2xl ">Ready to start your journey?</h1>
            <button type="button" className="text-white py-3 rounded-full text-lg font-semibold my-5 bg-primary hover:bg-primary-700 hover:shadow-lg hover:shadow-primary/40 w-[100%]">Download for Windows</button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
