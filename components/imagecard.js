import React from 'react';

const ImageCard = ({ image }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img src={image.url} alt="" className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
              Photo by The Boys
            </div>
             
          </div>
         
        </div>
    );
}

export default ImageCard;