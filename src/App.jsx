import ActionWrapper from "./components/Action/ActionWrapper";
import Header from "./components/Navigation/Header";
import CountriesWrapper from "./components/Hero/CountriesWrapper";
import "./index.css";
import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  return (
    <>
      <Header />
      <ActionWrapper setQuery={setQuery} />
      <CountriesWrapper query={query} />
    </>
  );
}

export default App;
