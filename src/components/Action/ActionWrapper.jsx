import React from "react";
import Search from "./Search";
import SelectMenu from "./SelectMenu";

const ActionWrapper = ({ setQuery }) => {
  return (
    <div className="flex items-center justify-between pt-10">
      <Search setQuery={setQuery} />
      <SelectMenu />
    </div>
  );
};

export default ActionWrapper;
