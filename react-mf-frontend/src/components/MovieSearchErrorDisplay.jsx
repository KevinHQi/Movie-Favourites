import { useSelector } from "react-redux";

import HomePageStyle from "../styles/HomePageStyle";

const MovieSearchErrorDisplay = () => {
  const errorToDisplay = useSelector(
    (state) => state.movieSearchResult.errorToDisplay
  );
  return (
    <div style={HomePageStyle}>
      <p>{errorToDisplay}</p>
    </div>
  );
};

export default MovieSearchErrorDisplay;
