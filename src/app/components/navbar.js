"use client";
import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import Image from "next/image";

import logo from "../../../public/images/logo.svg";
import Cart from "../../../public/images/icon-cart.svg";
import User from "../../../public/images/image-avatar.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleM = () => {
    setMenuOpen((old) => !old);
  };

  const toggleC = () => {
    setCartOpen((old2) => !old2);
  };

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
              className="hover:text-black flex flex-row items-center hover:border-orange-500 border-b-2 border-transparent mx-4"
              onClick=""
            >
              Collections
            </button>

            <button
              className="hover:text-black flex flex-row items-center hover:border-orange-500 border-b-2 border-transparent mx-4"
              onClick=""
            >
              Men
            </button>

            <button
              className="hover:text-black flex flex-row items-center hover:border-orange-500 border-b-2 border-transparent mx-4"
              onClick=""
            >
              Women
            </button>

            <button
              className="hover:text-black flex flex-row items-center hover:border-orange-500 border-b-2 border-transparent mx-4"
              onClick=""
            >
              About
            </button>

            <button
              className="hover:text-black flex flex-row items-center hover:border-orange-500 border-b-2 border-transparent mx-4"
              onClick=""
            >
              Contact
            </button>
          </div>

          {/* Cart || User */}
          <div className=" flex flex-row w-[150px] h-[60px] mr-4 justify-around ">
            <button
              className=" relative rounded-2xl w-[30px] h-[30px]  place-self-center  "
              onClick={toggleC}
            >
              <Image
                src={Cart}
                alt="Cart"
                width={30}
                height={30}
                className=" w-30 h-auto"
              />
              {/* mapear los objetos en el store para contar */}
              <div className="absolute z-10 -top-1 -right-1 rounded-full w-[23px] h-[17px] text-[12px] text-white bg-orange-400">
                1{/* conteo de items*/}
              </div>
            </button>
            <div className="relative">
              {cartOpen ? (
                <div className=" absolute z-10 top-16 -right-28 w-[300px] min-h-32 rounded-xl shadow-zinc-400 shadow-lg bg-gray-100">
                  <h1 className="m-2 font-semibold text-black">Cart</h1>
                  <div className="h-[1px] bg-slate-300" />
                  {<div></div>}
                </div>
              ) : (
                <div>
                  {/* mapear los objetos en el store para listarlos aqui*/}
                </div>
              )}
            </div>
            <button className="rounded-full w-[45px] h-[45px]  place-self-center justify-center border-4 hover:border-4 hover:border-orange-400 ">
              <Image
                src={User}
                alt="User"
                width={45}
                height={45}
                className=" w-45 h-auto"
              />
            </button>
          </div>
        </div>
      }
    </div>
  );
}
