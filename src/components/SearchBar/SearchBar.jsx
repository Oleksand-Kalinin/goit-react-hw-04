import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChangeQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return alert("Please enter our search request");
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChangeQuery}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default SearchBar;
