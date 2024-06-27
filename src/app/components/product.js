"use client";
import React, { useState } from "react";
import Image from "next/image";
import Gallery from "./gallery";

export default function Product() {
  return (
    <div className="flex flex-row justify-between text-black">
      <Gallery />
      <div className="flex flex-col border-2 border-black h-[600px] w-[400px] justify-center">
        <p>
          Sneaker Company Fall Limited Edition Sneakers These low-profile
          sneakers are your perfect casual wear companion. Featuring a durable
          rubber outer sole, they’ll withstand everything the weather can offer.
          $125.00 50% $250.00
        </p>
        <div className="flex flex-row">
          <div>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>

          <button className=" w-[180px] h-[50px] bg-orange-400 rounded-xl ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
