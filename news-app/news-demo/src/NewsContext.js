import React, { createContext, useEffect } from "react";
import axios from "axios";
import getBaseURL from "./constants/APIKey";

export const NewsContext = createContext();
const baseURL = getBaseURL();
function NewsContextProvider(props) {
  const [search, setSearch] = React.useState([]);
  let { forCountry, toquery, forCategory, page } = props;
  const defaultCountry = "country=gb";
  if (forCategory) {
    forCategory = `&category=${forCategory}`;
  }
  if (forCountry) {
    forCountry = `country=${forCountry}`;
  }
  const fetchData = async (isPageUpdated) => {
    const obj = {
      forCountry: forCountry ? forCountry : defaultCountry,
      toquery: toquery ? toquery : "",
      forCategory: forCategory ? forCategory : "",
      page: page ? page : 1,
    };
    try {
      const result = await axios.get(baseURL, { params: obj });
      setSearch(result.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // fetchData();
  }, [toquery, forCategory, forCountry, page]);
  return (
    <>
      <NewsContext.Provider value={search}>
        {props.children}
      </NewsContext.Provider>
    </>
  );
}

export default NewsContextProvider;
