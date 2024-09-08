import { useAnime } from "../Context/AnimeContext";
import "../Styles/Content.css";
import Loader from "../ui/Loader";
import Card from "./Card";
import ControlBar from "./ControlBar";

export default function AnimeContainer() {
  const { isLoading, data, handleChoice } = useAnime();

  return (
    <>
      <ControlBar />
      <div className="content-box glass ">
        {isLoading ? (
          <Loader />
        ) : (
          data?.data?.map((el, key) => (
            <Card animeData={el} onChoice={handleChoice} key={key} />
          ))
        )}
      </div>
    </>
  );
}
