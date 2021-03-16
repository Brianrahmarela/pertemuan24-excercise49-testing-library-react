import { useState } from "react";

function Search() {
  const [inputValue, setInputValue] = useState("123");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        title="searchTitle"
        value={inputValue}
      />
    </div>
  );
}

export default Search;
