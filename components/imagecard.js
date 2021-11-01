import React from 'react';

const ImageCard = ({ image }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img src={image.url} alt="" className="w-full" />
          <div className="px-2 py-2">
            <div className="font-bold text-purple-500 text-xl mb-2">
              {image.name}
            </div>
             
          </div>
         
        </div>
    );
}

export default ImageCard;
