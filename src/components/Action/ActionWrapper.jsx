import React from "react";
import Search from "./Search";
import SelectMenu from "./SelectMenu";

const ActionWrapper = ({ setQuery }) => {
  return (
    <div className=" mx-10 flex items-center justify-between mt-8">
      <Search setQuery={setQuery} />
      <SelectMenu />
    </div>
  );
};

export default ActionWrapper;
