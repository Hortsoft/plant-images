import React from 'react';

const ImageCard = ({ image }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img src={image.url} alt="" className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
              Photo by The Boys
            </div>
            <ul>
              <li>
                <strong>Views: 1</strong>
              </li>
              <li>
                <strong>Downloads: 2</strong>
              </li>
              <li>
                <strong>Likes: 4</strong>
              </li>
            </ul>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full pc-3 py-1 text-sm font-semibold text-gray-700  mr-2">
              tag 1{" "}
            </span>
            <span className="inline-block bg-gray-200 rounded-full pc-3 py-1 text-sm font-semibold text-gray-700  mr-2">
              tag 2{" "}
            </span>
            <span className="inline-block bg-gray-200 rounded-full pc-3 py-1 text-sm font-semibold text-gray-700  mr-2">
              tag 3
            </span>
          </div>
        </div>
    )
}

export default ImageCard;
