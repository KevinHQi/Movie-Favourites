import { Input } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import SearchBarStyle from "../styles/SearchBarStyle";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const currentPath = useSelector((state) => state.routerPath.currentPath);
  const searchPagePath = useSelector(
    (state) => state.routerPath.pathToMovieSearchPage
  );
  const navigate = useNavigate();

  const handleSearchTermUpdate = (e) => {
    setSearchTerm(e.target.value);
    console.log(`Searching: ${searchTerm}`);
    if (searchTerm !== "") {
      navigate(searchPagePath);
    }
  };

  useEffect(() => {
    console.log(`currentPath: ${currentPath}`);
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
