import GridGallery from "../components/grid-gallery";


export default function Gallery() {

  const images = [
     "/images/bird_1.jpg",
     "/images/bird_2.jpg",
     "/images/bird_3.jpg",
     "/images/bird_4.jpg",
     "/images/bird_5.jpg",
     "/images/bird_6.jpg",
     "/images/bird_7.jpg",
     "/images/bird_8.jpg",
     "/images/bird_9.jpg",
  
  ];
 
    return  <GridGallery images={images} />
}
