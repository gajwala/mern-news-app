import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import { Grid } from "@material-ui/core";
import NewsArticle from "./NewsArticle";
import useStyles from "./NewsStyles";

function News({ articles }) {
  // const data = useContext(NewsContext);
  const data = [...articles];
  const classes = useStyles();
  return (
    <div
      className={
        !data || data?.length === 0 ? "news_card-withoutdata" : "news_card"
      }
    >
      {!data || data?.length === 0 ? (
        "Loading...."
      ) : (
        <Grid
          className={classes.mainContainer}
          container
          alignItems="stretch"
          spacing={4}
        >
          {data.map((news) => (
            <Grid key={news.url} item xs={12} sm={6} md={3}>
              <NewsArticle data={news} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default News;
