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
        <span className="aside-item">Type: {chosenAnime?.type || " N/A"}</span>
      </div>
      <div className="aside-item">
        <span className="aside-item">
          Episodes: {chosenAnime?.episodes || " N/A"}
        </span>
      </div>
      <div className="aside-item">
        <span className="aside-item">
          Status: {chosenAnime?.status || " N/A"}
        </span>
      </div>
      <div className="aside-item">
        <span className="aside-item">
          Aired: {chosenAnime?.aired?.string || " N/A"}
        </span>
      </div>
      <div className="aside-item">
        <span className="aside-item">Producers: {producers || " N/A"}</span>
      </div>
      <div className="aside-item">
        <span className="aside-item">Licensors:{licensors || " N/A"}</span>
      </div>
      <div className="aside-item">
        <span className="aside-item">Studios: {studios || " N/A"}</span>
      </div>
      <div className="aside-item">
        <span className="aside-item">
          Source: {chosenAnime?.source || " N/A"}
        </span>
      </div>
      <div className="aside-item">
        <span className="aside-item">Theme: {themes || " N/A"}</span>
      </div>
      <div className="aside-item">
        <span className="aside-item">
          Demographic: {demographics || " N/A"}
        </span>
      </div>
      <div className="aside-item">
        <span className="aside-item">
          Duration: {chosenAnime?.duration || " N/A"}
        </span>
      </div>
      <div className="aside-item">
        <span className="aside-item">
          Rating: {chosenAnime?.rating || " N/A"}
        </span>
      </div>
    </div>
  );
}
