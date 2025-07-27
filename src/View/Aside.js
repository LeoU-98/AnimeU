import { useAnime } from "../Context/AnimeContext";

export function Aside() {
  const { chosen } = useAnime();

  function spreadArray(chosen, myArray) {
    return chosen[myArray]
      ?.map((el) => el)
      ?.map((el) => el?.name)
      ?.join(" , ");
  }

  const producers = spreadArray(chosen, "producers");
  const licensors = spreadArray(chosen, "licensors");
  const studios = spreadArray(chosen, "studios");
  const themes = spreadArray(chosen, "demographics");
  const demographics = spreadArray(chosen, "themes");

  return (
    <section className="aside-item-box glass">
      <span>
        Title: <strong>{chosen?.title}</strong>
      </span>
      <span>
        Title: <strong>{chosen?.title}</strong>
      </span>
      <span>Type: {chosen?.type || " N/A"}</span>
      <span>Episodes: {chosen?.episodes || " N/A"}</span>
      <span>Status: {chosen?.status || " N/A"}</span>
      <span>Aired: {chosen?.aired?.string || " N/A"}</span>
      <span>Producers: {producers || " N/A"}</span>
      <span>Licensors:{licensors || " N/A"}</span>
      <span>Studios: {studios || " N/A"}</span>
      <span>Source: {chosen?.source || " N/A"}</span>
      <span>Theme: {themes || " N/A"}</span>
      <span>Demographic: {demographics || " N/A"}</span>
      <span>Duration: {chosen?.duration || " N/A"}</span>
      <span>Rating: {chosen?.rating || " N/A"}</span>
    </section>
  );
}
