import React from "react";
import { Link } from "react-router-dom";

const CountriesCard = ({ image, name, population, capital, region }) => {
  return (
    <>
      <Link to={`/${name}`}>
        <div className="w-48 rounded-md shadow-md border hover:translate-x-1">
          <div className="imagesecion max-h-28 h-full w-full object-cover">
            <img src={image} alt="df" className="rounded-sm h-28 w-full " />
          </div>
          <div className="p-2 mt-2">
            <h1 className="text-lg font-medium">{name}</h1>
            <div className="text-sm">
              <p>Population: {population}</p>
              <p>Region: {region}</p>
              <p>Capital : {capital}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CountriesCard;
