import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ imgs }) {
  return (
    <ul>
      {imgs.map(({ id, urls, alt_description }) => (
        <li key={id}>
          <ImageCard src={urls.small} alt={alt_description} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
