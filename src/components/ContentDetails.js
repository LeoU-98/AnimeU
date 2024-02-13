import { Status } from "./Status";
import { Aside } from "./Aside";
import "./MediaQueries.css";

export default function ContentDetails({ chosenAnime, onBack }) {
  const chosenAnimeImage = chosenAnime?.images?.jpg?.large_image_url;

  return (
    <div className="content-details-page">
      <div className="back-btn-box glass" onClick={onBack}>
        <button className="back-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="back-btn-svg"
          >
            <path d="M232,144a64.07,64.07,0,0,1-64,64H80a8,8,0,0,1,0-16h88a48,48,0,0,0,0-96H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,45.66L51.31,80H168A64.07,64.07,0,0,1,232,144Z"></path>
          </svg>
        </button>
      </div>
      <div className="content-details-container glass">
        <div className="item-poster-box">
          <img
            className="item-poster-img"
            src={chosenAnimeImage}
            alt={chosenAnime?.title}
          />
        </div>
        <Aside chosenAnime={chosenAnime} />
        <Status chosenAnime={chosenAnime} />
        <p className="item-description glass">{chosenAnime?.synopsis}</p>
      </div>
    </div>
  );
}
