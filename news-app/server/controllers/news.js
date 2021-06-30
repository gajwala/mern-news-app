import axios from "axios";
const apikey = "832fb7def2684e7d9f60643876af0e50";
export const getNews = async (req, res) => {
  try {
    const { forCountry, toquery, forCategory } = req.query;
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?${forCountry}${
        toquery ? toquery : ""
      }${forCategory ? forCategory : ""}&pageSize=40&apiKey=${apikey}`
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
