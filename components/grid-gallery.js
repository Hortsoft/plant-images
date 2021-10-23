import Image from "next/image";

export default function GridGallery({ images }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images &&
        images.map((imageUrl) => (
          <Image
            key={imageUrl}
            src={imageUrl}
            alt="Picture of something nice"
            width={16}
            height={9}
            layout="responsive"
            quality={65}
          />
        ))}
    </div>
  );
}
