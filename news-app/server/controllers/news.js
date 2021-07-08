import axios from "axios";
const apikey = "832fb7def2684e7d9f60643876af0e50";
export const getNews = async (req, res) => {
  try {
    const { forCountry, toquery, forCategory, page } = req.query;
    const url = `https://newsapi.org/v2/top-headlines?${forCountry}${
      toquery ? toquery : ""
    }${forCategory ? forCategory : ""}&pageSize=${page * 10}&apiKey=${apikey}`;
    const { data } = await axios.get(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
