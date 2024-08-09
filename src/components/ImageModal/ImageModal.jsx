import ReactModal from "react-modal";

function ImageModal({ showModal, closeModal, image }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  };

  const { urls, alt_description } = image;

  ReactModal.setAppElement("#root");

  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal for one img"
    >
      <img src={urls?.regular} alt={alt_description} />
    </ReactModal>
  );
}

export default ImageModal;
