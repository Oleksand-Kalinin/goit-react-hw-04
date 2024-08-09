import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ imgs, openModal }) {
  return (
    <ul className={css.galleryList}>
      {imgs.map((image) => (
        <li className={css.galleryItem} key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
