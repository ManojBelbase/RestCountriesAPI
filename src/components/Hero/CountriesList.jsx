import React from "react";
import countriesData from "../../CountriesData";
import CountriesCard from "./CountriesCard";

const CountriesList = ({ query }) => {
  const array = countriesData
    .filter((country) => country.name.common.toLowerCase().includes(query))
    .map((country, i) => {
      return (
        <div key={i}>
          <CountriesCard
            image={country.flags.svg}
            name={country.name.common}
            population={country.population.toLocaleString("EN-IN")}
            region={country.region}
            capital={country.capital?.[0]}
          />
        </div>
      );
    });
  return <div className="container grid grid-cols-4 gap-6">{array}</div>;
};

export default CountriesList;
