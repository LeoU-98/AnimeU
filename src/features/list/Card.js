import "./MediaQueries.css";
export default function Card({ animeData, onChoice }) {
  return (
    <div className="card-content glass" onClick={() => onChoice(animeData)}>
      <div className="card-img-box">
        <img
          className="card-img"
          src={animeData?.images?.webp?.large_image_url}
          alt="k"
        ></img>
      </div>
      <h2 className="card-title">
        {animeData?.title.split(" ").slice(0, 3).join(" ")}
      </h2>
    </div>
  );
}
