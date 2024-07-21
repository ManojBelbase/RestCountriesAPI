import CountriesList from "./CountriesList";
import { getWidowSize } from "../hooks/useWindowSize";
const CountriesWrapper = ({ query }) => {
  const windowSize = getWidowSize();
  return (
    <main className="pt-10">
      <h2 className="text-center mb-5 text-2xl font-bold">
        {windowSize.width} X {windowSize.height}
      </h2>
      <CountriesList query={query} />
    </main>
  );
};

export default CountriesWrapper;
