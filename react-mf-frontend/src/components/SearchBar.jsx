import { Input } from "antd";
const { Search } = Input;

import SearchBarStyle from "../styles/SearchBarStyle";

const SearchBar = () => {
  return (
    <>
      <Input
        placeholder="Explore your"
        style={SearchBarStyle}
        onChange={() => {}}
        size="large"
      />
    </>
  );
};

export default SearchBar;
