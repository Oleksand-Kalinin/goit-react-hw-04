import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ imgs, openModal }) {
  return (
    <ul className={css.galleryList}>
      {imgs.map((image) => (
        <ImageCard key={image.id} image={image} openModal={openModal} />
      ))}
    </ul>
  );
}

export default ImageGallery;
