"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";

import logo from "../../../public/images/logo.svg";
import Menu from "../../../public/images/icon-menu.svg";
import Cart from "../../../public/images/icon-cart.svg";
import User from "../../../public/images/image-avatar.png";
import Trash from "../../../public/images/icon-delete.svg";
import Zapas1t from "../../../public/images/image-product-1-thumbnail.jpg";

export default function Navbar() {
  const { cart, removeFromCart } = useCart();
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const totalCartCount = cart.reduce(
      (total, item) => total + item.cartCount,
      0
    );
    setCartCount(totalCartCount);
    setProduct(cart.length > 0 ? cart[0] : null);
  }, [cart]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleCart = () => {
    setCartOpen((prev) => !prev);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="w-full h-[70px] flex flex-row items-center justify-items-stretch font-Epilogue justify-between border-neutral-400 border-b-2 border-opacity-20">
      <div className="flex flex-row h-[30px] min-w-[200px]  md:w-full items-end">
        <div className="relative md:hidden mx-3 w-[23px] h-[19px]">
          <button className="" onClick={toggleMenu}>
            <Image
              src={Menu}
              alt="menu"
              width={55}
              height={55}
              className="w-[23px] h-[19px]"
            />
          </button>
          {menuOpen && (
            <div className="fixed inset-0 z-50 flex justify-items-start justify-start bg-black bg-opacity-75">
              <div className="relative w-[250px] bg-slate-50">
                <div className="absolute top-[20px] left-[20px] ">
                  <button
                    className=" text-gray-500 hover:text-orange-500"
                    onClick={toggleMenu}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current "
                    >
                      <path
                        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="flex flex-col items-start justify-start w-full h-full text-slate-700 font-bold mt-6">
                    <button
                      className="hover:text-black hover:border-orange-500 border-b-2 border-transparent my-2"
                      onClick=""
                    >
                      Collections
                    </button>
                    <button
                      className="hover:text-black hover:border-orange-500 border-b-2 border-transparent my-2"
                      onClick=""
                    >
                      Men
                    </button>
                    <button
                      className="hover:text-black  hover:border-orange-500 border-b-2 border-transparent my-2"
                      onClick=""
                    >
                      Women
                    </button>
                    <button
                      className="hover:text-black  hover:border-orange-500 border-b-2 border-transparent my-2"
                      onClick=""
                    >
                      About
                    </button>
                    <button
                      className="hover:text-black  hover:border-orange-500 border-b-2 border-transparent my-2"
                      onClick=""
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex ">
          <Image
            src={logo}
            alt="logo"
            width={84}
            height={27}
            className="w-[160px] h-[25px]"
          />
        </div>
        <div className=" hidden md:flex flex-row text-gray-500 font-medium">
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
      </div>

      <div className=" flex flex-row md:w-[150px] w-[100px] h-[60px] mr-4 justify-around">
        <button
          className="relative rounded-2xl w-[30px] h-[30px] place-self-center"
          onClick={toggleCart}
        >
          <Image
            src={Cart}
            alt="Cart"
            width={30}
            height={30}
            className="w-30 h-auto"
          />
          {cartCount > 0 && (
            <div className="absolute z-10 -top-1 -right-1 rounded-full w-[23px] h-[17px] text-[12px] text-white bg-orange-400">
              {cartCount}
            </div>
          )}
        </button>
        <div className="relative">
          {cartOpen && (
            <div className="absolute z-10 md:top-16 top-[70px] md:-right-[120px] -right-[50px] w-[320px] border-t-[1px] border-slate-300 min-h-32 rounded-xl shadow-zinc-400 shadow-lg bg-gray-100">
              <h1 className="m-2 font-semibold text-black">Cart</h1>
              <div className="h-[1px] bg-slate-300" />
              {cartCount > 0 ? (
                <div>
                  <div className="flex justify-center">
                    <div className="flex flex-row w-[280px] h-[50px] items-center justify-between mt-4">
                      <Image
                        src={Zapas1t}
                        alt="product"
                        width={45}
                        height={45}
                        className="rounded-md w-[45px] h-[45px]"
                      />
                      <div className="flex flex-col w-[200px] h-[48px] text-slate-500 text-[14px]">
                        <h1 className="">{product?.name}</h1>
                        <div className="flex flex-row text-[12px]">
                          <p>
                            ${product?.price * (1 - product?.discount / 100)}
                            {".00 "}x {cartCount}
                          </p>
                          <p className=" font-semibold text-black">
                            = $
                            {(
                              product?.price *
                              cartCount *
                              (1 - product?.discount / 100)
                            ).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <button
                        className="h-[20px]"
                        onClick={() => handleRemoveFromCart(product?.id)}
                      >
                        <Image
                          src={Trash}
                          alt="Trash"
                          width={15}
                          height={18}
                          className="w-[15px] h-[18px]"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center my-6">
                    <button className="flex rounded-lg bg-orange-400 w-[280px] h-[50px] font-semibold text-black justify-center py-4 hover:opacity-75">
                      Checkout
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-center my-4 text-slate-500">
                  Your cart is empty
                </p>
              )}
            </div>
          )}
        </div>
        <button className="rounded-full w-[45px] h-[45px] place-self-center justify-center border-4 hover:border-4 hover:border-orange-400">
          <Image
            src={User}
            alt="User"
            width={45}
            height={45}
            className="w-45 h-auto"
          />
        </button>
      </div>
    </div>
  );
}
