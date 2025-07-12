import { useAnime } from "../Context/AnimeContext";

export default function ControlBar() {
  const { query, handleSearch, picks, setPicks, setCurrentPage, setQuery } =
    useAnime();

  return (
    <div className="control-bar">
      <form className="search-form">
        <input
          placeholder="Search"
          name="search"
          type="text"
          id="search-input-field"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="search-form-svg"
        >
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
        </svg>
      </form>

      <ul className="picks-box-ul glass">
        <li
          onClick={() => {
            setQuery((query) => "");
            setCurrentPage((currentPage) => 0);
            setPicks("all");
          }}
          className={`picks-box-li ${picks === "all" ? "activePick" : ""}`}
        >
          All
        </li>
        <li
          onClick={() => {
            setQuery((query) => "");
            setCurrentPage((currentPage) => 0);
            setPicks("top");
          }}
          className={`picks-box-li ${picks === "top" ? "activePick" : ""}`}
        >
          Top
        </li>
        <li
          onClick={() => {
            setQuery((query) => "");
            setCurrentPage((currentPage) => 0);
            setPicks("now");
          }}
          className={`picks-box-li ${picks === "now" ? "activePick" : ""}`}
        >
          Now
        </li>
        <li
          onClick={() => {
            setQuery((query) => "");
            setCurrentPage((currentPage) => 0);
            setPicks("schedules");
          }}
          className={`picks-box-li ${
            picks === "schedules" ? "activePick" : ""
          }`}
        >
          Scheduled
        </li>
      </ul>
    </div>
  );
}
