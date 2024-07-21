import React, { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import CountryListShimmer from "../shimmerEffect/CountryListShimmer";

const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  const filteredCountries = countriesData.filter(
    (country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase()) ||
      country.region.toLowerCase().includes(query.toLowerCase())
  );

  const array = filteredCountries.map((country, i) => (
    <div key={i}>
      <CountriesCard
        image={country.flags.svg}
        name={country.name.common}
        population={country.population.toLocaleString("EN-IN")}
        region={country.region}
        capital={country.capital?.[0]}
        data={country}
      />
    </div>
  ));

  return (
    <div className="">
      {!countriesData.length ? (
        <CountryListShimmer />
      ) : (
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {array}
        </div>
      )}
    </div>
  );
};

export default CountriesList;
