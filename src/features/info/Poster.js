function Poster({ chosenAnime }) {
  const chosenAnimeImage = chosenAnime?.images?.jpg?.large_image_url;
  return (
    <div className="item-poster-box">
      <img
        className="item-poster-img"
        src={chosenAnimeImage}
        alt={chosenAnime?.title}
      />
    </div>
  );
}

export default Poster;
