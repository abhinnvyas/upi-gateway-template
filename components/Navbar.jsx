import React from "react";
import Logo from "@/public/igniteauth_logo.png";
import Image from "next/image";
import {
  textPrimary,
  background,
  textLight,
  textSecondary,
  foreground,
} from "@/color.js";

function Navbar() {
  const ishidden = true;
  console.log(background);
  return (
    <div
      className={`sticky top-0 z-50 flex items-center justify-between p-2  shadow-md ${background}`}
    >
      <div className="flex items-center space-x-1">
        <Image src={Logo} width={40} height={40} alt="logo" />
        <h1 className="font-bold">UPI Gateway</h1>
      </div>

      <div className="hidden lg:block text-sm font-semibold ">
        <h1 className={`${textLight} border-b-2 border-gray-800`}>Home</h1>
      </div>

      <div className="hidden lg:flex space-x-4 items-center text-sm p-2 ">
        <button
          className={`${textPrimary} g-gray-300 px-4 py-1 rounded-sm  hover:bg-gray-400 transition-all ease-in-out hover:shadow-md`}
        >
          Login
        </button>

        <button
          className={`${foreground} text-gray-200 hover:text-white px-4 py-1 rounded-sm hover:shadow-md  transition-all ease-in-out`}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Navbar;
