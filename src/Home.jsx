import ActionWrapper from "./components/Action/ActionWrapper";

import CountriesWrapper from "./components/Hero/CountriesWrapper";
import "./index.css";
import React, { useState } from "react";

function Home() {
  const [query, setQuery] = useState("");
  return (
    <>
      <ActionWrapper setQuery={setQuery} />
      <CountriesWrapper query={query} />
    </>
  );
}

export default Home;
