import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ children, onClick, disabled }) {
  const handleClick = (e) => {
    const heightForScroll = e.target.getBoundingClientRect().top - 32;
    onClick(heightForScroll);
  };

  return (
    <button
      className={css.btn}
      type="button"
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default LoadMoreBtn;
