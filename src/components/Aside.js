import "./MediaQueries.css";
function spreadArray(chosenAnime, myArray) {
  return chosenAnime[myArray]
    ?.map((el) => el)
    ?.map((el) => el?.name)
    ?.join(" , ");
}

export function Aside({ chosenAnime }) {
  const producers = spreadArray(chosenAnime, "producers");
  const licensors = spreadArray(chosenAnime, "licensors");
  const studios = spreadArray(chosenAnime, "studios");
  const themes = spreadArray(chosenAnime, "demographics");
  const demographics = spreadArray(chosenAnime, "themes");

  return (
    <div className="aside-item-box glass">
      <div className="aside-item">
        <span className="aside-item">
          Title: <strong>{chosenAnime?.title}</strong>
        </span>
      </div>
      <div className="aside-item">
        <span className="aside-item">Type: {chosenAnime?.type}</span>
      </div>
      <div className="aside-item">
        <span className="aside-item">Episodes: {chosenAnime?.episodes}</span>
      </div>
      <div className="aside-item">
        <span className="aside-item">Status: {chosenAnime?.status}</span>
      </div>
      <div className="aside-item">
        <span className="aside-item">Aired: {chosenAnime?.aired?.string}</span>
      </div>
      <div className="aside-item">
        <span className="aside-item">Producers: {producers}</span>
      </div>
      <div className="aside-item">
        <span className="aside-item">Licensors:{licensors}</span>
      </div>
      <div className="aside-item">
        <span className="aside-item">Studios: {studios}</span>
      </div>
      <div className="aside-item">
        <span className="aside-item">Source: {chosenAnime?.source}</span>
      </div>
      <div className="aside-item">
        <span className="aside-item">Theme: {themes}</span>
      </div>
      <div className="aside-item">
        <span className="aside-item">Demographic: {demographics}</span>
      </div>
      <div className="aside-item">
        <span className="aside-item">Duration: {chosenAnime?.duration}</span>
      </div>
      <div className="aside-item">
        <span className="aside-item">Rating: {chosenAnime?.rating}</span>
      </div>
    </div>
  );
}
