import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { getImgs } from "./js/unsplash-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [imgs, setImgs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isShowBtnLoadMore, setIsShowBtnLoadMore] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [imageCard, setImageCard] = useState({});

  useEffect(() => {
    if (!query) return;
    const fetchImgs = async () => {
      setLoading(true);
      try {
        const { results, total_pages } = await getImgs(query, page);

        if (!results.length) {
          return setIsEmpty(true);
        }
        setImgs((prevImgs) => [...prevImgs, ...results]);
        setIsShowBtnLoadMore(page < total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImgs();
  }, [page, query]);

  const handleSubmitSearchBar = (querySearchBar) => {
    if (!querySearchBar.trim()) return;

    setQuery(querySearchBar);
    setImgs([]);
    setPage(1);
    setError(null);
    setIsShowBtnLoadMore(false);
    setIsEmpty(false);
  };

  const handleClickLoadMoreBtn = (heightForScroll) => {
    setTimeout(() => {
      window.scrollBy({
        top: heightForScroll,
        behavior: "smooth",
      });
    }, 1300);
    return setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setShowModal(true);
    setImageCard(image);
    document.body.classList.add("modalIsOpen");
  };

  const closeModal = () => {
    setShowModal(false);
    setImageCard({});
    document.body.classList.remove("modalIsOpen");
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmitSearchBar} />

      {imgs.length > 0 && <ImageGallery imgs={imgs} openModal={openModal} />}

      {loading && <Loader />}

      {error !== null && <ErrorMessage text={"❌ Something went wrong"} />}
      {isEmpty && <ErrorMessage text={"Sorry. There are no images ... 😭"} />}

      {isShowBtnLoadMore && (
        <LoadMoreBtn onClick={handleClickLoadMoreBtn} disabled={loading}>
          {loading ? "Loading..." : "Load more"}
        </LoadMoreBtn>
      )}

      <ImageModal
        showModal={showModal}
        closeModal={closeModal}
        image={imageCard}
      />
    </>
  );
}

export default App;
