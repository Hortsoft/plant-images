import React from "react"; 

export default function GridGallery({ images }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images &&
        images.map((imageUrl) => (
          <img
            src={imageUrl}
             
          />
        ))}
    </div>
  );
}
