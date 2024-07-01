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
    lightboxOp ? setLightboxOp(false) : setLightboxOp(true);
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
        {lightboxOp ? (
          <div className="absolute -top-0 -right-0 z-30 w-screen h-screen bg-black opacity-10 "></div>
        ) : (
          <></>
        )}
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
    </div>
  );
}
