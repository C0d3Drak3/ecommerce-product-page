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
// import Close from "../../../public/images/icon-close.svg";
import Next from "../../../public/images/icon-next.svg";
import Previous from "../../../public/images/icon-previous.svg";

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

  return (
    <div className="flex flex-col h-[600px] w-[400px] justify-center p-4">
      <div
        className="relative flex flex-col justify-center mb-4 mx-[9px] cursor-pointer"
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
          <div className="relative bg-white p-4 rounded-xl">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-orange-500"
              onClick={handleLightbox}
            >
              <svg
                width="14"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
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
  );
}
