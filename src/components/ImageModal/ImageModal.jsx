import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

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

  const { urls, alt_description, description } = image;

  ReactModal.setAppElement("#root");

  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal for one img"
    >
      <div className={css.wrapperContentModal}>
        <img src={urls?.regular} alt={alt_description} />
        {description && <p className={css.descriptionImg}>{description}</p>}
      </div>
    </ReactModal>
  );
}

export default ImageModal;
