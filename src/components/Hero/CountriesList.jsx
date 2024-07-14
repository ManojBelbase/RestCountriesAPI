import React, { useEffect, useState } from "react";
// import countriesData from "../../CountriesData";
import CountriesCard from "./CountriesCard";

const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

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
