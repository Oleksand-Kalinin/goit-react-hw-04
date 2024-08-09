import css from "./ErrorMessage.module.css";

function ErrorMessage({ text }) {
  return <div className={css.errorMessage}>{text}</div>;
}

export default ErrorMessage;
