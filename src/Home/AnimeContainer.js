import { useAnime } from "../Context/AnimeContext";
import "../Styles/Content.css";
import Loader from "../ui/Loader";
import Card from "./Card";

export default function AnimeContainer() {
  const { isLoading, data, handleChoice } = useAnime();

  return (
    <div className="content-box glass ">
      {isLoading ? (
        <Loader />
      ) : (
        data?.data?.map((el, key) => (
          <Card animeData={el} onChoice={handleChoice} key={key} />
        ))
      )}
    </div>
  );
}
