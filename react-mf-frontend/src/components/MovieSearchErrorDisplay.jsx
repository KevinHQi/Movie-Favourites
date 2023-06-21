import { useSelector } from "react-redux";

const MovieSearchErrorDisplay = () => {
  const errorToDisplay = useSelector(
    (state) => state.movieSearchResult.errorToDisplay
  );
  return <p>{errorToDisplay}</p>;
};

export default MovieSearchErrorDisplay;
