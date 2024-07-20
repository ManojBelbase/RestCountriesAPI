import React from "react";

import CountriesList from "./CountriesList";

const CountriesWrapper = ({ query }) => {
  return (
    <main className="pt-10">
      <CountriesList query={query} />
    </main>
  );
};

export default CountriesWrapper;
