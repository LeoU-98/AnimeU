import { useAnime } from "../Context/AnimeContext";
import "../Styles/Content.css";
import "../Styles/Paginate.css";
import Loader from "../ui/Loader";
import Card from "./Card";
import ControlBar from "./ControlBar";

export default function AnimeContainer() {
  const { isLoading, data, handleChoice } = useAnime();

  return (
    <>
      <ControlBar />

      <div className="content-box glass ">
        {isLoading && <Loader />}

        {!isLoading && data?.data?.length === 0 ? (
          <p className="no-anime-found">
            Sorry, no anime found with this name. Please try another search.
          </p>
        ) : (
          data?.data?.map((el, key) => (
            <Card animeData={el} onChoice={handleChoice} key={key} />
          ))
        )}
      </div>
    </>
  );
}
