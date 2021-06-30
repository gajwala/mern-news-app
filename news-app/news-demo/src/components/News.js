import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import { Grid } from "@material-ui/core";
import NewsArticle from "./NewsArticle";
import useStyles from "./NewsStyles";
function News() {
  const data = useContext(NewsContext);
  const classes = useStyles();
  return (
    <div className="news_card">
      {!data || data?.length === 0 ? (
        "Loading...."
      ) : (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {data.map((news) => (
            <Grid key={news.url} item xs={12} sm={3}>
              <NewsArticle data={news} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default News;
