import React, { useState, useEffect } from "react";
import Head from "next/head";

//import ImageGallery from "../components/imagegallery";
// in the future put the data connection into own component
import ImageCard from "../components/imagecard";
import { imageList } from "../data/data";
import Navbar from "../components/Navbar";

export const getStaticProps = async () => {
 
  return {
    props: { 
      images: imageList,
    },
  }
}

export default function Home({images}) {
 
   
      
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Plant Images App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Navbar />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
         
      <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-4">
            {images && images.length>0 && images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        </div>
        
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/leaf-g.svg" alt="our Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
