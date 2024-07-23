import "./MediaQueries.css";
export function Status({ chosenAnime }) {
  return (
    <div className="status-box glass">
      <div className="status-item-score-box">
        <p className="status-item-score">{chosenAnime?.score || "N/A"}⭐</p>
        <p className="status-item-score-users">Users:🤵 2,093,317 </p>
      </div>
      <div className="status-item">
        <span className="status-item-type">Ranked</span>
        <p className="status-item-value">
          {chosenAnime?.rank ? `#${chosenAnime?.rank}` : "N/A"}
        </p>
      </div>
      <div className="status-item">
        <span className="status-item-type">Popularity</span>
        <p className="status-item-value">{chosenAnime?.popularity || "N/A"}</p>
      </div>
      <div className="status-item">
        <span className="status-item-type">Members</span>
        <p className="status-item-value">{chosenAnime?.members || "N/A"}</p>
      </div>
    </div>
  );
}
