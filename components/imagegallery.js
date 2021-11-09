import React from 'react';
import ImageCard from "../components/imagecard";

import { imageList } from "../data/data";
export const getStaticProps = async () => {
 
    return {
      props: { 
        images: imageList 
      }
    }
  }

  const ImageGallery = ({images}) => {
    // console.log(images)

     return (
        <div>
          <div className="container mx-auto">
          <div className="grid grid-cols-4 md:grid-cols-6 gap-1">
            {images && images.length>0 && images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        </div>
        </div>
      );
    }
     
export default ImageGallery;