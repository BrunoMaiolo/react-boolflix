import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="d-flex mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control me-2"
        placeholder="Cerca un film..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-primary">Cerca</button>
    </form>
  );
}

export default SearchBar;