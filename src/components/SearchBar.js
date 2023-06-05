import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = () => {
    console.log(searchTerm);
    // onSubmit(searchTerm);
  }

  return <div>
    <input onChange={(value) => setSearchTerm(value)}/>
    <button onClick={handleClick}>Search</button>
  </div>;
};

export default SearchBar;
