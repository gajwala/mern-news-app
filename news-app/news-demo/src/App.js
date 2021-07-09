import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
// import NewsContextProvider from "./NewsContext";
import News from "./components/News";
import Header from "./components/Header";
import Button from "@material-ui/core/Button";
import axios from "axios";
import getBaseURL from "./constants/APIKey";
const baseURL = getBaseURL();
function App() {
  const [forCountry, setForCountry] = React.useState("gb");
  const [forcategory, setForCategory] = React.useState("general");
  const [toquery, setToQuery] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);

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
  const debounce = (fn) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setToQuery(`&q=${value}`);
  };

  const optimisedVersion = useCallback(debounce(handleChange), []);

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
        handleChange={optimisedVersion}
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
