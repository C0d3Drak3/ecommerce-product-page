"use client";
import React, { useState } from "react";
import Image from "next/image";
import Gallery from "./gallery";

export default function Product() {
  return (
    <div className="flex flex-row justify-between text-black">
      <Gallery />
      <div className="flex flex-col border-2 border-transparent h-[600px] w-[400px] justify-center">
        <h1>Sneaker Company</h1>
        <h1 className="font-bold text-[40px]">Fall Limited Edition Sneakers</h1>
        <p className="flex my-2">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row">
            <span className=" font-bold text-[25px]">
              $125.00{/*Product total cost x count */}
            </span>
            <div className=" rounded-lg bg-black w-[40px] h-[30px] text-white text-[15px] font-bold justify-center p-1">
              50%
            </div>
          </div>
          <span> $250.00 {/* product unit cost + discounts */}</span>
        </div>
        <div className="flex flex-row">
          <div>
            <div className="flex flex-row bg-slate-100 w-[90px] h-[32px] align-middle justify-between rounded-lg mt-2 text-blue-600 font-bold">
              <button
                className=" w-[30px] h-5 p-[14px]"
                onClick={""}
                disabled={""}
              >
                <svg
                  width="15"
                  height="5"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-auto h-auto transition-colors duration-200 fill-current text-gray-400 ${`hover:text-blue-600`}`}
                >
                  <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
                </svg>
              </button>
              <div className=" w-[30px]  flex justify-center p-1">
                <span>0{/* cantidad a pedir */}</span>
              </div>
              <button
                className=" w-[30px] h-5  p-[10px]"
                onClick={""}
                disabled={""}
              >
                <svg
                  width="15"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-auto h-auto transition-colors duration-200 fill-current text-gray-400 ${`hover:text-blue-600`}`}
                >
                  <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
                </svg>
              </button>
            </div>
          </div>

          <button className=" w-[180px] h-[50px] bg-orange-400 rounded-xl hover:opacity-75 ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
