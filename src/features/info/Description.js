function Description({ chosenAnime }) {
  return (
    <p className="item-description glass">
      {chosenAnime?.synopsis ||
        "Sorry, The Anime Description is Not Avaiable Right Now"}
    </p>
  );
}

export default Description;
