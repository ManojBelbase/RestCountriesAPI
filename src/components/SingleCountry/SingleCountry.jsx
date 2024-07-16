import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CountryListShimmer from "../shimmerEffect/CountryListShimmer";

const SingleCountry = () => {
  const params = useParams();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const country = data[0];
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
            borders: country.borders || [],
          });

          // Fetch border countries data
          if (country.borders && country.borders.length > 0) {
            Promise.all(
              country.borders.map((border) =>
                fetch(`https://restcountries.com/v3.1/alpha/${border}`).then(
                  (res) => res.json()
                )
              )
            )
              .then((borderCountries) => {
                const borderNames = borderCountries.map(
                  (borderCountry) => borderCountry[0].name.common
                );
                setCountryData((prevData) => ({
                  ...prevData,
                  borders: borderNames,
                }));
              })
              .catch(() => {
                setCountryData((prevData) => ({
                  ...prevData,
                  borders: [],
                }));
              });
          }
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
    return <CountryListShimmer />; // Render the shimmer effect while loading
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
            {countryData.borders.length > 0 && (
              <div className="border-countries">
                <p>Border Countries:</p>
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleCountry;
