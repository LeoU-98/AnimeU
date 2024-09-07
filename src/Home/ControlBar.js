import { useAnime } from "../Context/AnimeContext";

export default function ControlBar() {
  const { query, handleSearch, handleSort } = useAnime();

  return (
    <div className="control-bar">
      <form className="search-form">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="search-form-svg"
        >
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
        </svg>
        <input
          placeholder="Search"
          type="text"
          id="search-input-field"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
      <div className="sort-box glass">
        <label htmlFor="sort-box-label">Sort by</label>
        <select
          id="sort-box-select"
          className="glass"
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="epi">Episodes</option>
        </select>
      </div>
    </div>
  );
}
