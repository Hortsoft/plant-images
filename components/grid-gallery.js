import React from "react";
import Image from "next/image";

export default function GridGallery({ images }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images &&
        images.map((imageUrl) => (
          <Image
            src={imageUrl}
            width={16}
            height={9}
            alt=""
            layout="responsive"
            quality={95}
          />
        ))}
    </div>
  );
}
