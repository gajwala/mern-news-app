import React, { createContext, useEffect } from "react";
import axios from "axios";
import getBaseURL from "./constants/APIKey";

export const NewsContext = createContext();
const baseURL = getBaseURL();
function NewsContextProvider(props) {
  const [search, setSearch] = React.useState([]);
  let { forCountry, toquery, forCategory } = props;
  const defaultCountry = "country=gb";
  if (forCategory) {
    forCategory = `&category=${forCategory}`;
  }
  if (forCountry) {
    forCountry = `country=${forCountry}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      const obj = {
        forCountry: forCountry ? forCountry : defaultCountry,
        toquery: toquery ? toquery : "",
        forCategory: forCategory ? forCategory : "",
      };
      const result = await axios.get(baseURL, { params: obj });
      setSearch(result.data.articles);
    };
    fetchData();
  }, [toquery, forCategory, forCountry]);
  return (
    <>
      <NewsContext.Provider value={search}>
        {props.children}
      </NewsContext.Provider>
    </>
  );
}

export default NewsContextProvider;
