import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { getImgs } from "./js/unsplash-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [imgs, setImgs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isShowBtnLoadMore, setIsShowBtnLoadMore] = useState(false);

  // const [showModal, setShowModal] = useState(false);
  // const [modalUrl, setModalUrl] = useState("");
  // const [modalAlt, setModalAlt] = useState("");

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
    setQuery(querySearchBar);
    setImgs([]);
    setPage(1);
    setError(null);
    setIsShowBtnLoadMore(false);
    setIsEmpty(false);
  };

  const handleClickLoadMoreBtn = () => {
    return setPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmitSearchBar} />
      <ImageGallery imgs={imgs} />
      {loading && <Loader />}
      {error && <ErrorMessage text={"❌ Something went wrong"} />}
      {isEmpty && <ErrorMessage text={"Sorry. There are no images ... 😭"} />}
      {isShowBtnLoadMore && (
        <LoadMoreBtn onClick={handleClickLoadMoreBtn}>
          {loading ? "Loading..." : "Load more"}
        </LoadMoreBtn>
      )}
    </>
  );
}

export default App;
