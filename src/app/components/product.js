"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Zapas from "../../../public/images/image-product-1.jpg";

export default function Product() {
  return (
    <div className="flex flex-row justify-between text-black">
      <div className="flex border-2 border-black h-[600px] w-[400px] justify-center p-12">
        <Image src={Zapas} alt="zapatillas"></Image>
      </div>
      <div className="flex border-2 border-black h-[600px] w-[400px] justify-center"></div>
    </div>
  );
}
