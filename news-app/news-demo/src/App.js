import React, { useState, useEffect } from "react";
import "./App.css";
import NewsContextProvider from "./NewsContext";
import News from "./components/News";
import Header from "./components/Header";

function App() {
  const [query, setQuery] = useState("");
  const [forCountry, setForCountry] = React.useState("gb");
  const [forcategory, setForCategory] = React.useState("general");
  const [toquery, setToQuery] = useState("");

  useEffect(() => {
    if (query) {
      setToQuery(`&q=${query}`);
    }
  }, [query]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const forCountryChange = (event) => {
    setForCountry(`${event.target.value}`);
  };

  const forCategoryChange = (event) => {
    const name = event.target.value;
    setForCategory(`${name}`);
  };
  return (
    <div className="App">
      <section>
        <Header
          handleChange={handleChange}
          query={query}
          handleCountryChange={forCountryChange}
          handleCategoryChange={forCategoryChange}
          forCountry={forCountry}
          forcategory={forcategory}
        />
      </section>
      <section>
        <NewsContextProvider
          toquery={toquery}
          forCountry={forCountry}
          forCategory={forcategory}
        >
          <News></News>
        </NewsContextProvider>
      </section>
    </div>
  );
}

export default App;
