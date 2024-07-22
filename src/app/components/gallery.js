"use client";
import React, { useState } from "react";
import Image from "next/image";

import Zapas1 from "../../../public/images/image-product-1.jpg";
import Zapas2 from "../../../public/images/image-product-2.jpg";
import Zapas3 from "../../../public/images/image-product-3.jpg";
import Zapas4 from "../../../public/images/image-product-4.jpg";
import Zapas1t from "../../../public/images/image-product-1-thumbnail.jpg";
import Zapas2t from "../../../public/images/image-product-2-thumbnail.jpg";
import Zapas3t from "../../../public/images/image-product-3-thumbnail.jpg";
import Zapas4t from "../../../public/images/image-product-4-thumbnail.jpg";

export default function Product() {
  const productImgs = {
    thumbs: [Zapas1t, Zapas2t, Zapas3t, Zapas4t],
    images: [Zapas1, Zapas2, Zapas3, Zapas4],
  };

  const [mainImage, setMainImage] = useState(productImgs.images[0]);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const [lightboxOp, setLightboxOp] = useState(false);

  const handleThumbnailClick = (index) => {
    setMainImage(productImgs.images[index]);
    setSelectedThumbnail(index);
  };

  const handleLightbox = () => {
    setLightboxOp(!lightboxOp);
  };

  const handleLightboxPrev = () => {
    const prevIndex =
      (selectedThumbnail - 1 + productImgs.images.length) %
      productImgs.images.length;
    setMainImage(productImgs.images[prevIndex]);
    setSelectedThumbnail(prevIndex);
  };

  const handleLightboxNext = () => {
    const nextIndex = (selectedThumbnail + 1) % productImgs.images.length;
    setMainImage(productImgs.images[nextIndex]);
    setSelectedThumbnail(nextIndex);
  };

  return (
    <div className="md:mr-10">
      <div className="hidden md:flex flex-col h-[600px] w-[400px] justify-center">
        <div
          className="relative flex flex-col justify-center mb-4 mx-[0px] cursor-pointer"
          onClick={handleLightbox}
        >
          <Image
            src={mainImage}
            alt="Producto principal"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="flex justify-center space-x-2">
          {productImgs.thumbs.map((thumb, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className="cursor-pointer"
            >
              <Image
                src={thumb}
                alt={`Producto ${index + 1}`}
                className={`w-20 h-auto rounded-xl border-2 transition-all ${
                  selectedThumbnail === index
                    ? "border-orange-400 opacity-75"
                    : "border-transparent hover:opacity-75"
                }`}
              />
            </div>
          ))}
        </div>

        {lightboxOp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative p-4 rounded-xl">
              <button
                className="absolute -top-6 right-[15px]  text-gray-200 hover:text-orange-500"
                onClick={handleLightbox}
              >
                <svg
                  width="25"
                  height="25"
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
              <Image
                src={mainImage}
                alt="Producto principal en lightbox"
                className="w-[600px] h-auto rounded-xl"
              />
              <button
                className="absolute top-[300px] -left-[10px] w-[50px] h-[50px] rounded-full px-[10px]  bg-white  text-gray-500 hover:text-orange-500"
                onClick={handleLightboxPrev}
              >
                <svg
                  width="23"
                  height="28"
                  viewBox="0 0 13 18"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current "
                >
                  <path
                    d="M11 1 3 9l8 8"
                    strokeWidth="5"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <button
                className="absolute top-[300px] -right-[10px] w-[50px] h-[50px] rounded-full px-[15px] bg-white  text-gray-500 hover:text-orange-500"
                onClick={handleLightboxNext}
              >
                <svg
                  width="23"
                  height="28"
                  viewBox="0 0 13 18"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current "
                >
                  <path
                    d="m2 1 8 8-8 8"
                    strokeWidth="5"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <div className="flex justify-center space-x-2 mt-4">
                {productImgs.thumbs.map((thumb, index) => (
                  <div
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className="cursor-pointer"
                  >
                    <Image
                      src={thumb}
                      alt={`Producto ${index + 1}`}
                      className={`w-20 h-auto rounded-xl border-2 transition-all ${
                        selectedThumbnail === index
                          ? "border-orange-400 opacity-75"
                          : "border-transparent hover:opacity-75"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex relative md:hidden">
        <div className="flex justify-center  items-center">
          <Image
            src={mainImage}
            alt="Producto principal en lightbox"
            className="w-auto h-auto"
          />
          <button
            className="absolute  left-[20px] w-[50px] h-[50px] rounded-full px-[10px]  bg-white  text-gray-500 hover:text-orange-500"
            onClick={handleLightboxPrev}
          >
            <svg
              width="23"
              height="28"
              viewBox="0 0 13 18"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current "
            >
              <path
                d="M11 1 3 9l8 8"
                strokeWidth="5"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="absolute  right-[20px] w-[50px] h-[50px] rounded-full px-[15px] bg-white  text-gray-500 hover:text-orange-500"
            onClick={handleLightboxNext}
          >
            <svg
              width="23"
              height="28"
              viewBox="0 0 13 18"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current "
            >
              <path
                d="m2 1 8 8-8 8"
                strokeWidth="5"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
