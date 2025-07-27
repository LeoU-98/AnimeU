import { Status } from "./Status";
import { Aside } from "./Aside";
import "../Styles/AnimeDetails.css";
import BackButton from "../ui/BackButton";
import Description from "./Description";
import Poster from "./Poster";

export default function AnimeDetails() {
  return (
    <div className="content-details-page">
      <BackButton />
      <div className="content-details-container glass">
        <div className="overlay"></div>
        <Poster />
        <Aside />
        <Status />
        <Description />
      </div>
    </div>
  );
}
