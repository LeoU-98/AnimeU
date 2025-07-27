import { useAnime } from "../Context/AnimeContext";

function Poster() {
  const { chosen } = useAnime();

  const chosenAnimeImage = chosen?.images?.jpg?.large_image_url;
  return (
    <div className="item-poster-box">
      <img
        className="item-poster-img"
        src={chosenAnimeImage}
        alt={chosen?.title}
      />
    </div>
  );
}

export default Poster;
