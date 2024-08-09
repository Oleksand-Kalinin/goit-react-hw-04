function ImageCard({ image, openModal }) {
  const { urls, alt_description } = image;

  const handleClickImg = () => {
    openModal(image);
  };

  return (
    <>
      <img src={urls.small} alt={alt_description} onClick={handleClickImg} />
    </>
  );
}

export default ImageCard;
