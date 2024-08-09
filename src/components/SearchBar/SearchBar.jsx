import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChangeQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      const paramToast = {
        position: "top-right",
        style: {
          backgroundColor: "aquamarine",
          color: "green",
        },
      };
      toast("Please enter our search request", paramToast);
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmitForm}>
        <Toaster />
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChangeQuery}
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
