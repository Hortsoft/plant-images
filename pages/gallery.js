import GridGallery from "../components/grid-gallery";

export default function Gallery() {
  const images = [
     "/images/bird_1.JPG",
     "/images/bird_2.JPG",
     "/images/bird_3.JPG",
     "/images/bird_4.JPG",
     "/images/bird_5.JPG",
     "/images/bird_6.JPG",
     "/images/bird_7.JPG",
     "/images/bird_8.JPG",
     "/images/bird_9.JPG",
     "/images/bird_10.JPG",
     "/images/bird_11.JPG",
     "/images/bird_12.JPG",
     "/images/bird_13.JPG",
     "/images/bird_14.JPG",
     "/images/bird_15.JPG",
     "/images/bird_16.JPG",
     "/images/bird_17.JPG",
     "/images/bird_18.JPG",
     "/images/bird_19.JPG",
     "/images/bird_20.JPG",
     "/images/bird_21.JPG",
     "/images/bird_22.JPG",
     "/images/bird_23.JPG",
     "/images/bird_24.JPG",
     "/images/bird_25.JPG",
     "/images/bird_26.JPG",
     "/images/bird_27.JPG",
     "/images/bird_28.JPG",
     "/images/bird_29.JPG",
     "/images/bird_30.JPG",
     "/images/bird_31.JPG",
     "/images/bird_32.JPG",
     "/images/bird_33.JPG",
     "/images/bird_34.JPG",
     "/images/bird_35.JPG",
     "/images/bird_36.JPG",
     "/images/bird_37.JPG",
     "/images/bird_38.JPG",
  ];
console.log(images);
    return  <GridGallery images={images} />
}
