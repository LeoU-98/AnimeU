import { useState } from "react";
import "./MediaQueries.css";
import Content from "./features/list/Content";
import AnimeDetails from "./features/info/AnimeDetails";
import { ControlBar } from "./features/list/ControlBar";
import Card from "./features/list/Card";
import Loader from "./ui/Loader";
import { useQuery } from "@tanstack/react-query";

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

export default function Anime() {
  const [chosen, setChosen] = useState({});
  const [isBack, setIsBack] = useState(true);
  const [query, setQuery] = useState("");
  const { isLoading, data } = useQuery({
    queryKey: ["animeData", query],
    queryFn: () => getData(query),
  });

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

  return (
    <div className="anime">
      <ControlBar search={query} onSearch={handleSearch} onSort={handleSort} />
      {isBack ? (
        <Content>
          {isLoading ? (
            <Loader />
          ) : (
            data?.data?.map((el) => (
              <Card animeData={el} onChoice={handleChoice} />
            ))
          )}
        </Content>
      ) : (
        <AnimeDetails chosenAnime={chosen} onBack={handleIsBack} />
      )}
    </div>
  );
}
