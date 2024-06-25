"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="  w-full h-[70px] flex flex-row items-center font-Epilogue border-neutral-400 border-b-2 border-opacity-20 ">
      <div className="flex flex-row  m-4 ">
        <Image
          src={logo}
          alt="logo"
          width={84}
          height={27}
          className=" w-27 h-auto"
        />
      </div>

      {
        <div className="flex  w-full justify-between">
          {/* menu buttons */}
          <div className="flex flex-row text-gray-500  font-medium">
            <button
              className="hover:text-black flex flex-row items-center border-orange-500 hover:border-b-2 mx-4"
              onClick=""
            >
              Collections
            </button>

            <button
              className="hover:text-black flex flex-row items-center border-orange-500 hover:border-b-2 mx-4"
              onClick=""
            >
              Men
            </button>

            <button
              className="hover:text-black flex flex-row items-center border-orange-500 hover:border-b-2 mx-4"
              onClick=""
            >
              Women
            </button>

            <button
              className="hover:text-black flex flex-row items-center border-orange-500 hover:border-b-2 mx-4"
              onClick=""
            >
              About
            </button>

            <button
              className="hover:text-black flex flex-row items-center border-orange-500 hover:border-b-2 mx-4"
              onClick=""
            >
              Contact
            </button>
          </div>

          {/* Login buttons */}
          <div className="flex flex-row  h-[60px] mr-4  ">
            <button className=" rounded-2xl w-[100px] h-[45px]  place-self-center font-Epilogue  text-gray-500 font-semibold  hover:text-black ">
              Cart
            </button>
            <button className=" rounded-2xl w-[100px] h-[45px]  place-self-center font-Epilogue border-2 border-gray-500 hover:border-black text-gray-500 font-semibold  hover:text-black ">
              User
            </button>
          </div>
        </div>
      }
    </div>
  );
}
