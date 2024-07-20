import React from "react";

const Search = ({ setQuery }) => {
  return (
    <div className="px-3  border-2 rounded-sm max-w-96 h-10 bg-white">
      <div className="flex items-center justify-between  w-full h-full gap-2 rounded-md">
        <i className="fa-solid fa-magnifying-glass text-black" />
        <input
          type="text"
          placeholder="Search for a country..."
          className="outline-none h-full w-full text-black"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
    </div>
  );
};

export default Search;
