import React from "react";

function SearchBox({ searchField, searchChange }) {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="search robot"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
