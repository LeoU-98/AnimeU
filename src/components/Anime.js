import { useEffect, useState, useRef } from "react";
import "./ContentDetails.css";
import "./Loader.css";
import "./MediaQueries.css";
import Content from "./Content";
import ContentDetails from "./ContentDetails";
import { ControlBar } from "./ControlBar";
import Card from "./Card";

export default function Anime() {
  const [chosen, setChosen] = useState({});
  const [query, setQuery] = useState("");
  const [isBack, setIsBack] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);
  const initialData = useRef([]);

  useEffect(
    function () {
      const controller = new AbortController();
      async function getData() {
        try {
          setIsLoading(true);

          const res = await fetch(
            `https://api.jikan.moe/v4/anime?q=${query}&sfw=true`,
            {
              signal: controller.signal,
            }
          );
          const data = await res.json();
          setDisplayedData(data.data);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setDisplayedData(initialData.current);
        return;
      }

      getData();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  useEffect(function () {
    async function getInitialData() {
      try {
        setIsLoading(true);
        const res = await fetch(`https://api.jikan.moe/v4/anime?q&sfw=true`);
        const data = await res.json();
        initialData.current = data.data;
        setDisplayedData(data.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getInitialData();
  }, []);

  console.log(initialData.current);

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

  return (
    <div className="anime">
      <ControlBar search={query} onSearch={handleSearch} onSort={handleSort} />
      {isBack ? (
        <Content searchResult={displayedData}>
          {isLoading ? (
            <div className="loader-box">
              <div className="loader"></div>
            </div>
          ) : (
            displayedData?.map((el) => (
              <Card animeData={el} onChoice={handleChoice} />
            ))
          )}
        </Content>
      ) : (
        <ContentDetails chosenAnime={chosen} onBack={handleIsBack} />
      )}
    </div>
  );
}
