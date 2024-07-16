import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleCountry = () => {
  const params = useParams();
  console.log(params);
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const country = data[0];
          console.log(country);
          setCountryData({
            flags: country.flags.svg,
            name: country.name.common,
            nativeName: Object.values(country.name.nativeName)[0].common,
            population: country.population.toLocaleString("EN-IN"),
            region: country.region,
            subregion: country.subregion,
            capital: country.capital ? country.capital.join("") : "N/A",
            tld: country.tld ? country.tld.join(",") : "N/A",
            languages: Object.values(country.languages).join(","),
            currencies: Object.values(country.currencies)
              .map((currency) => currency.name)
              .join(","),
          });
        } else {
          setNotFound(true);
        }
      })
      .catch(() => {
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <div>Country Not Found</div>;
  }

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="countries-details-container">
        <span
          onClick={() => window.history.back()}
          className="back-button cursor-pointer"
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
        </span>
        <div className="country-details">
          <img src={countryData.flags} alt="Country Flag" />

          <div className="details-text-container">
            <h2 className="font-bold text-3xl mb-4">{countryData.name}</h2>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countryData.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{countryData.population}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{countryData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{countryData.subregion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital-city">{countryData.capital}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="domain">{countryData.tld}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currency">{countryData.currencies}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="language">{countryData.languages}</span>
              </p>
            </div>
            <div className="border-countries">
              <p>Border Countries:</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleCountry;
