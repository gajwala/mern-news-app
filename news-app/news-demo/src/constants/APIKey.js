// export const baseURL = "http://localhost:5000/news/getNews";
// export const baseURL = "https://balu-news-demo.herokuapp.com/news/getNews";

export default function getBaseURL() {
  let baseURL = "http://localhost:5000/news/getNews";
  if (process.env.NODE_ENV !== "development") {
    baseURL = "https://balu-news-demo.herokuapp.com/news/getNews";
  }
  return baseURL;
}
