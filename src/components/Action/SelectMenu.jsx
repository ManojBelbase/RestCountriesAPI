import React from "react";

const SelectMenu = () => {
  return (
    <div className="border-2 h-10 px-4 rounded-sm text-black bg-white">
      <select className="outline-none border-0 h-full">
        <option value="Africa" hidden="">
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SelectMenu;
