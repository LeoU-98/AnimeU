import { useState } from "react";
import "./MediaQueries.css";
import Content from "./features/list/Content";
import AnimeDetails from "./features/info/AnimeDetails";
import { ControlBar } from "./features/list/ControlBar";
import Card from "./features/list/Card";
import useFetch from "./hooks/useFetch";
import Loader from "./ui/Loader";

export default function Anime() {
  const [chosen, setChosen] = useState({});
  const [isBack, setIsBack] = useState(true);
  const [query, setQuery, displayedData, setDisplayedData, isLoading] =
    useFetch();

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
        setDisplayedData((result) =>
          result.slice().sort((a, b) => a.title.localeCompare(b.title))
        );
        break;
      case "epi":
        setDisplayedData((result) =>
          result.slice().sort((a, b) => a?.episodes - b?.episodes)
        );
        break;
      default:
        console.log("something Went Wrong");
    }
  }

  console.log(isLoading);

  return (
    <div className="anime">
      <ControlBar search={query} onSearch={handleSearch} onSort={handleSort} />
      {isBack ? (
        <Content>
          {isLoading ? (
            <Loader />
          ) : (
            displayedData?.map((el) => (
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
