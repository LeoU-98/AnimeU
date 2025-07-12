import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

async function getData(query, currentPage = 1, picks = "all") {
  let res;
  if (query !== "") {
    res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw=true&
      page=${currentPage + 1}`);
  } else if (query === "") {
    switch (picks) {
      case "all":
        res = await fetch(
          `https://api.jikan.moe/v4/anime?sfw=true&page=${currentPage + 1}`
        );
        break;
      case "top":
        res = await fetch(
          `https://api.jikan.moe/v4/top/anime?sfw=true&page=${currentPage + 1}`
        );
        break;
      case "now":
        res = await fetch(
          `https://api.jikan.moe/v4/seasons/now?sfw=true&page=${
            currentPage + 1
          }`
        );
        break;
      case "schedules":
        res = await fetch(
          `https://api.jikan.moe/v4/schedules?sfw=true&page=${currentPage + 1}`
        );
        break;
      default:
        console.log("Invalid pick option");
    }
  } else {
    res = await fetch(
      `https://api.jikan.moe/v4/seasons/now?sfw=true&page=${currentPage + 1}`
    );
  }

  if (!res.ok) {
    throw new Error("Response Was not Okay");
  }

  const data = await res.json();
  return data;
}

const AnimeContext = createContext("animeContext");

export default function AnimeProvider({ children }) {
  const [chosen, setChosen] = useState({});
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [picks, setPicks] = useState("all");
  const { isLoading, data } = useQuery({
    queryKey: ["animeData", query, currentPage, picks],
    queryFn: () => getData(query, currentPage, picks),
  });

  const lastPage = data?.pagination?.last_visible_page || 1;
  const totalItems = data?.pagination?.items?.total || 0;

  function handlePageClick(event) {
    setCurrentPage(event.selected);
  }

  function handleSearch(queryValue) {
    setPicks("all");
    setCurrentPage(0);
    setQuery(queryValue);
  }

  function handleChoice(chosenAnime) {
    setChosen(chosenAnime);
  }

  const value = {
    handleSearch,
    handleChoice,
    query,
    setQuery,
    isLoading,
    data,
    chosen,
    lastPage,
    totalItems,
    picks,
    currentPage,
    setPicks,
    handlePageClick,
    setCurrentPage,
  };

  return (
    <AnimeContext.Provider value={value}>{children}</AnimeContext.Provider>
  );
}

export function useAnime() {
  const value = useContext(AnimeContext);

  if (!value) {
    throw new Error("You Are Using The Context Outside The Provider");
  }

  return value;
}
