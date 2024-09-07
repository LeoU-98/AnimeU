import { useAnime } from "../Context/AnimeContext";

export function Status() {
  const { chosen } = useAnime();

  return (
    <section className="status-box glass">
      <div className="status-item-score-box">
        <p className="status-item-score">{chosen?.score || "N/A"}⭐</p>
        <p className="status-item-score-users">Users:🤵 2,093,317 </p>
      </div>
      <div className="status-item">
        <span className="status-item-type">Ranked</span>
        <p className="status-item-value">
          {chosen?.rank ? `#${chosen?.rank}` : "N/A"}
        </p>
      </div>
      <div className="status-item">
        <span className="status-item-type">Popularity</span>
        <p className="status-item-value">{chosen?.popularity || "N/A"}</p>
      </div>
      <div className="status-item">
        <span className="status-item-type">Members</span>
        <p className="status-item-value">{chosen?.members || "N/A"}</p>
      </div>
    </section>
  );
}
