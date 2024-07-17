"use client";
import React, { useState } from "react";
import Gallery from "./gallery";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import Cart from "../../../public/images/icon-cart.svg";

const sneakersLE1 = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  stock: 9,
  price: 250.0,
  discount: 50,
  cartCount: 0,
};

export default function Product() {
  const { cart, addToCart } = useCart();
  const [count, setCount] = useState(0);

  const plusProd = () => {
    if (count < sneakersLE1.stock) {
      setCount(count + 1);
    }
  };

  const minProd = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  /*const addToCartFunction = () => {
    const productWithCount = { ...sneakersLE1, cartCount: count };
    addToCart(productWithCount);
  };*/

  const addToCartFunction = () => {
    addToCart(sneakersLE1, count);
    setCount(0);
  };

  const productInCart = cart.find((item) => item.id === sneakersLE1.id);
  const cartCount = productInCart ? productInCart.cartCount : 0;

  return (
    <div className="flex md:flex-row flex-col md:justify-between  items-center text-black mb-6">
      <Gallery />
      <div className="flex flex-col border-2  border-transparent md:h-[600px] w-[400px] justify-center">
        <h1>Sneaker Company</h1>
        <h1 className="font-bold text-[40px]">Fall Limited Edition Sneakers</h1>
        <p className="flex my-2">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex md:flex-col flex-row justify-between  md:space-y-2">
          <div className="flex flex-row h-[30px] items-center">
            <span className="font-bold text-[25px] ">
              ${sneakersLE1.price * (1 - sneakersLE1.discount / 100)}.00
            </span>
            <div className="rounded-lg bg-black w-[50px] h-[25px] text-white text-[15px] font-bold text-center p-[3px] ml-4">
              {sneakersLE1.discount}%
            </div>
          </div>
          <span className="h-[30px]">
            <s className=" font-semibold text-gray-600">${sneakersLE1.price}</s>
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center md:mt-0 mt-3">
          <div>
            <div className="flex flex-row md:w-[100px] w-[250px] h-[50px] align-middle justify-between rounded-lg mt-2 text-blue-600 font-bold">
              <button
                className="w-[30px] h-5 p-[14px]"
                onClick={minProd}
                disabled={count === 0}
              >
                <svg
                  width="15"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-auto h-auto transition-colors duration-200 fill-current text-gray-400 ${
                    count === 0 ? "" : `hover:text-orange-400`
                  }`}
                >
                  <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
                </svg>
              </button>
              <div className="w-[30px] flex justify-center p-1">
                <span className="text-black">{count}</span>
              </div>
              <button
                className="w-[30px] h-5 p-[10px]"
                onClick={plusProd}
                disabled={count + cartCount >= sneakersLE1.stock}
              >
                <svg
                  width="15"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-auto h-auto transition-colors duration-200 fill-current text-gray-400 ${
                    count + cartCount >= sneakersLE1.stock
                      ? ""
                      : `hover:text-orange-400`
                  }`}
                >
                  <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
                </svg>
              </button>
            </div>
          </div>
          <button
            className="w-[240px] h-[50px] bg-orange-400 rounded-xl hover:opacity-75 items-center justify-center flex flex-row md:m-2 m-5 md:shadow-none shadow-lg shadow-orange-300"
            onClick={addToCartFunction}
          >
            <div className="flex flex-row h-[20px] font-semibold items-center">
              <Image
                src={Cart}
                alt="Cart"
                width={30}
                height={30}
                className="w-[20px] h-[18px] mr-1"
              />
              Add to cart
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
