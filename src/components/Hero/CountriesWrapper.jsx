import React from "react";

import CountriesList from "./CountriesList";

const CountriesWrapper = ({ query }) => {
  return (
    <div className="container mx-10 mt-10">
      <CountriesList query={query} />
    </div>
  );
};

export default CountriesWrapper;
