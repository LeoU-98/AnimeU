import { useNavigate } from "react-router-dom";

export default function Card({ animeData, onChoice }) {
  const navigate = useNavigate();
  function handleCardClick() {
    onChoice(animeData);
    navigate("/AnimeInfo");
    window.scroll({ top: 0, behavior: "smooth" });
  }
  return (
    <article
      to="AnimeInfo"
      className="card-content glass"
      onClick={handleCardClick}
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
    </article>
  );
}
