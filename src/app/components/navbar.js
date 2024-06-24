"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const toggle2 = () => {
    setIsOpen2((old2) => !old2);
  };

  const transClass = isOpen ? "flex" : "hidden";
  const transClass2 = isOpen2 ? "flex" : "hidden";

  return (
    <div className="  w-full h-[70px] flex flex-row items-center font-Epilogue ">
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
          {/*
        <div className="flex flex-row text-gray-500  font-medium">
          <div className="m-5 relative">
            <button
              className="hover:text-black flex flex-row items-center"
              onClick={toggle}
            >
              Features
              {isOpen ? (
                <Image
                  src={arrowU}
                  alt="arrowU"
                  width={25}
                  height={25}
                  className=" mx-1 w-4 h-auto  "
                />
              ) : (
                <Image
                  src={arrowD}
                  alt="arrowD"
                  width={25}
                  height={25}
                  className=" mx-1 w-4 h-auto  "
                />
              )}
            </button>
            <div
              className={`absolute top-8 right-1 z-30 w-[150px] min-h-[170px] flex flex-col py-4 bg-zinc-100 shadow-md shadow-gray-800 rounded-md ${transClass}`}
            >
              <Link
                className=" hover:text-black px-4 py-1 flex flex-row items-center"
                href=""
                onClick={toggle}
              >
                <Image
                  src={todo}
                  alt="todo"
                  width={25}
                  height={25}
                  className=" mx-2 w-4 h-auto  "
                />
                Todo List
              </Link>
              <Link
                className=" hover:text-black px-4 py-1 flex flex-row items-center"
                href=""
                onClick={toggle}
              >
                <Image
                  src={calendar}
                  alt="calendar"
                  width={25}
                  height={25}
                  className=" mx-2 w-4 h-auto  "
                />
                Calendar
              </Link>
              <Link
                className=" hover:text-black px-4 py-1 flex flex-row items-center"
                href=""
                onClick={toggle}
              >
                <Image
                  src={reminders}
                  alt="reminders"
                  width={25}
                  height={25}
                  className=" mx-2 w-4 h-auto  "
                />
                Reminders
              </Link>
              <Link
                className=" hover:text-black px-4 py-1 flex flex-row items-center"
                href=""
                onClick={toggle}
              >
                <Image
                  src={planning}
                  alt="planning"
                  width={25}
                  height={25}
                  className=" mx-2 w-4 h-auto  "
                />
                Planning
              </Link>
            </div>
          </div>
          <div className="m-5 relative">
            <button
              className="hover:text-black flex flex-row items-center"
              onClick={toggle2}
            >
              Company{" "}
              {isOpen2 ? (
                <Image
                  src={arrowU}
                  alt="arrowU"
                  width={25}
                  height={25}
                  className=" mx-1 w-4 h-auto  "
                />
              ) : (
                <Image
                  src={arrowD}
                  alt="arrowD"
                  width={25}
                  height={25}
                  className=" mx-1 w-4 h-auto  "
                />
              )}
            </button>
            <div
              className={`absolute top-8 z-30 w-[150px] min-h-[130px] flex flex-col py-4 bg-zinc-100 shadow-md shadow-gray-800  rounded-md ${transClass2}`}
            >
              <Link
                className="hover:text-black px-4 py-1"
                href=""
                onClick={toggle2}
              >
                History
              </Link>
              <Link
                className="hover:text-black px-4 py-1"
                href=""
                onClick={toggle2}
              >
                Our Team
              </Link>
              <Link
                className="hover:text-black px-4 py-1"
                href=""
                onClick={toggle2}
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="m-5 relative">
            <button
              className="hover:text-black flex flex-row items-center"
              onClick=""
            >
              Careers{" "}
            </button>
          </div>
          <div className="m-5 relative">
            <button
              className="hover:text-black flex flex-row items-center"
              onClick=""
            >
              About{" "}
            </button>
          </div>
        </div>*/}

          {/* Login buttons */}
          <div className="flex flex-row  h-[60px] mr-4  ">
            <button className=" rounded-2xl w-[100px] h-[45px]  place-self-center font-Epilogue  text-gray-500 font-semibold  hover:text-black ">
              Login
            </button>
            <button className=" rounded-2xl w-[100px] h-[45px]  place-self-center font-Epilogue border-2 border-gray-500 hover:border-black text-gray-500 font-semibold  hover:text-black ">
              Register
            </button>
          </div>
        </div>
      }
    </div>
  );
}
