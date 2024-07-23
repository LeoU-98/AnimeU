import { useEffect, useRef, useState } from "react";

export default function useFetch() {
  const [query, setQuery] = useState("");
  const [displayedData, setDisplayedData] = useState([]);
  const initialData = useRef([]);
  const [isLoading, setIsLoading] = useState(false);

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

  console.log(isLoading);

  return [query, setQuery, displayedData, setDisplayedData, isLoading];
}
