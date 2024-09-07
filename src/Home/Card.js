import { NavLink } from "react-router-dom";

export default function Card({ animeData, onChoice }) {
  return (
    <NavLink
      to="AnimeInfo"
      className="card-content glass"
      onClick={() => onChoice(animeData)}
    >
      <div className="card-img-box">
        <img
          className="card-img"
          src={animeData?.images?.webp?.large_image_url}
          alt={animeData.title}
        ></img>
      </div>
      <h2 className="card-title">
        {animeData?.title.split(" ").slice(0, 3).join(" ")}
      </h2>
    </NavLink>
  );
}