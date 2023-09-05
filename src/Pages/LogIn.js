import React from "react";
import { BsDiscord } from "react-icons/bs";
import { Link } from "react-router-dom";
import bg_login from "../assets/login_bg.svg";

import qr_code from "../assets/qr_code.png";
const LogIn = () => {
  return (
    <div>
      <section
        style={{ backgroundImage: `url(${bg_login})` }}
        className="bg-center bg-cover  h-screen  bg-no-repeat max-w-[100%]"
      >
        <Link to={"/"}>
          <div className="flex items-center hover:cursor-pointer py-9   px-11 ">
            <BsDiscord className="text-3xl mx-2 text-white" />
            <h1 className="font-extrabold text-white hover:text-black">
              Discord
            </h1>
          </div>
        </Link>

        {/* Login */}
        <section className="md:flex md:justify-center h-[86%] md:h-auto ">
          <div className="bg-zinc-700 px-10 py-10 h-full text-white md:min-w-[50%] lg:min-w-[30%] rounded md:rounded-l ">
            <h1 className="text-2xl font-semibold my-2">Welcome back!</h1>
            <p className="text-xs">We're so excited to see you again!</p>
            <form className="pt-4 ">
              <label className="block text-xs  mb-2 pr-2" htmlFor="email">
                EMAIL
              </label>
              <input
                className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-zinc-800 border-black"
                id="email"
                type="text"
              />
              <div className="my-4"></div>

              <label className="block text-xs mb-2 " htmlFor="password">
                PASSWORD
              </label>
              <input
                className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-zinc-800 border-black"
                id="password"
                type="password"
              />

              <h1 className="text-xs text-sky-400 my-8 cursor-pointer hover:underline">
                Forgot your password?
              </h1>
              <button
                type="button"
                className="bg-primary w-full py-2 rounded hover:shadow-xl font-semibold "
              >
                Login
              </button>
              <h1 className="text-xs  my-8 cursor-pointer hover:underline">
                Need an account? <span className="text-sky-400">Register</span>
              </h1>
            </form>
          </div>

          {/* second half of the login form which it is in desktop mode in mobile it will be hidden */}
          <div className="hidden md:flex md:flex-col bg-zinc-700 px-5 md:justify-center md:items-center rounded-r">
            <img src={qr_code} alt="qr_code" width={200} className="my-10 p-2 rounded  bg-white"/>
            <div className="text-center text-white">
              <h1 className="text-xl font-semibold">Log in with QR code </h1>
              <p className="mt-1 text-sm">Scan this with Discord mobile app to log in instantly.</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default LogIn;
