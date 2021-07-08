import React, { useState, useEffect } from "react";
import "./App.css";
// import NewsContextProvider from "./NewsContext";
import News from "./components/News";
import Header from "./components/Header";
import Button from "@material-ui/core/Button";
import axios from "axios";
import getBaseURL from "./constants/APIKey";
const baseURL = getBaseURL();
function App() {
  const [query, setQuery] = useState("");
  const [forCountry, setForCountry] = React.useState("gb");
  const [forcategory, setForCategory] = React.useState("general");
  const [toquery, setToQuery] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (query) {
      setToQuery(`&q=${query}`);
    }
  }, [query]);
  useEffect(() => {
    fetchData();
  }, [toquery, forcategory, forCountry, page]);

  const fetchData = async () => {
    const obj = {
      forCountry: forCountry ? `country=${forCountry}` : "country=gb",
      toquery: toquery ? toquery : "",
      forCategory: forcategory ? `&category=${forcategory}` : "",
      page: page ? page : 1,
    };
    try {
      const result = await axios.get(baseURL, { params: obj });
      setArticles(result.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const forCountryChange = (event) => {
    setForCountry(`${event.target.value}`);
    setPage(1);
  };

  const forCategoryChange = (event) => {
    const name = event.target.value;
    setForCategory(`${name}`);
    setPage(1);
  };
  const loadMore = () => {
    setPage((current) => current + 1);
  };
  return (
    <div className="App">
      <Header
        handleChange={handleChange}
        query={query}
        handleCountryChange={forCountryChange}
        handleCategoryChange={forCategoryChange}
        forCountry={forCountry}
        forcategory={forcategory}
      />

      {/* <NewsContextProvider
        toquery={toquery}
        forCountry={forCountry}
        forCategory={forcategory}
        page={page}
      >
        <News></News>
      </NewsContextProvider> */}
      <News articles={articles}></News>

      {page <= 10 && articles.length > 0 && (
        <div className="load_more">
          <Button variant="contained" color="secondary" onClick={loadMore}>
            loadMore
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
