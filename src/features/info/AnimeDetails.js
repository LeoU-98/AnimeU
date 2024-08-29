import { Status } from "./Status";
import { Aside } from "./Aside";
import "./MediaQueries.css";
import "./AnimeDetails.css";
import BackButton from "./BackButton";
import Description from "./Description";
import Poster from "./Poster";

export default function AnimeDetails({ chosenAnime, onBack }) {
  console.log(chosenAnime?.synopsis);
  return (
    <div className="content-details-page">
      <BackButton onBack={onBack} />
      <div className="content-details-container glass">
        <div className="overlay"></div>
        <Poster chosenAnime={chosenAnime} />
        <Aside chosenAnime={chosenAnime} />
        <Status chosenAnime={chosenAnime} />
        <Description chosenAnime={chosenAnime} />
      </div>
    </div>
  );
}
