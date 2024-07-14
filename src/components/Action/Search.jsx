import React from "react";

const Search = ({ setQuery }) => {
  return (
    <div className="px-3 py-3 border-2 rounded-sm">
      <div className="flex items-center justify-between gap-4">
        <i className="fa-solid fa-magnifying-glass" />
        <input
          type="text"
          placeholder="Search for a country..."
          className="outline-none border-e w-full"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
    </div>
  );
};

export default Search;
