import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg px-2 py-2">
      <img src={image.url} alt={image.name} className="w-full" />
    </div>
  );
};

export default ImageCard;
