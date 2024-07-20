import ActionWrapper from "./components/Action/ActionWrapper";

import CountriesWrapper from "./components/Hero/CountriesWrapper";
import "./index.css";
import React, { useState } from "react";

function Home() {
  const [query, setQuery] = useState("");
  return (
    <main>
      <ActionWrapper setQuery={setQuery} />
      <CountriesWrapper query={query} />
    </main>
  );
}

export default Home;
