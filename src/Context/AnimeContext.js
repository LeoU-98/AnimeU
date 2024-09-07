import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

async function getData(query) {
  let res;
  if (query !== "") {
    res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw=true`);
  } else {
    res = await fetch(`https://api.jikan.moe/v4/anime?q&sfw=true`);
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
  const [isBack, setIsBack] = useState(true);
  const [query, setQuery] = useState("");
  const { isLoading, data } = useQuery({
    queryKey: ["animeData", query],
    queryFn: () => getData(query),
  });

  //   const navigate = useNavigate();

  //   console.log(navigate);

  function handleIsBack() {
    setIsBack((isBack) => !isBack);
  }

  function handleSearch(queryValue) {
    setIsBack(true);
    setQuery(queryValue);
  }

  function handleChoice(chosenAnime) {
    setChosen(chosenAnime);
    handleIsBack();
  }

  function handleSort(sortType) {
    setIsBack(true);
    switch (sortType) {
      case "name":
        data?.data?.result
          .slice()
          .sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "epi":
        data?.data?.result.slice().sort((a, b) => a?.episodes - b?.episodes);
        break;
      default:
        console.log("something Went Wrong");
    }
  }

  const value = {
    handleSearch,
    handleChoice,
    handleSort,
    query,
    isLoading,
    data,
    handleIsBack,
    chosen,
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
