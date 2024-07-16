import React from "react";

import CountriesList from "./CountriesList";

const CountriesWrapper = ({ query }) => {
  return (
    <div className="container mx-auto mt-10">
      <CountriesList query={query} />
    </div>
  );
};

export default CountriesWrapper;
