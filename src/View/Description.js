import { useAnime } from "../Context/AnimeContext";

function Description() {
  const { chosen } = useAnime();

  return (
    <p className="item-description glass">
      {chosen?.synopsis ||
        "Sorry, The Anime Description is Not Avaiable Right Now"}
    </p>
  );
}

export default Description;
