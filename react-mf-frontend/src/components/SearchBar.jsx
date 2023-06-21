import { Input } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import SearchBarStyle from "../styles/SearchBarStyle";
import { searchMovieByName } from "../features/movieSearchResult/movieSearchResultSlice";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const currentPath = useSelector((state) => state.routerPath.currentPath);
  const searchPagePath = useSelector(
    (state) => state.routerPath.pathToMovieSearchPage
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchTermUpdate = (e) => {
    setSearchTerm(e.target.value);
    const trimedSearchTerm = e.target.value.trim();
    console.log(`Searching: '${trimedSearchTerm}'`);
    if (trimedSearchTerm !== "") {
      if (currentPath !== searchPagePath) {
        navigate(searchPagePath);
      }
      dispatch(searchMovieByName(trimedSearchTerm));
    }
  };

  useEffect(() => {
    // console.log(`currentPath: ${currentPath}`);
    if (currentPath !== searchPagePath) {
      setSearchTerm("");
    }
  }, [currentPath]);

  return (
    <Input
      placeholder="Explore your"
      style={SearchBarStyle}
      allowClear="true"
      bordered="false"
      value={searchTerm}
      onChange={(e) => handleSearchTermUpdate(e)}
      size="large"
    />
  );
};

export default SearchBar;
