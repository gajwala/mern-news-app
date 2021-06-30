import React from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import useStyles from "./newsArticleStyle";
import moment from "moment";
function NewsArticle({ data }) {
  const classes = useStyles();
  const cardClickHandler = (url) => {
    window.open(url);
  };
  return (
    <Card className={classes.card} onClick={() => cardClickHandler(data.url)}>
      <div className={classes.header_inline}>
        <p>{`Source:${data.source.name}`}</p>
        {data.author ? <p>{`Author:${data.author}`}</p> : null}
      </div>

      <div>
        <Typography variant="body2">
          {`Posted:${moment(data.publishedAt).fromNow()}`}
        </Typography>
      </div>
      {data.urlToImage ? (
        <CardMedia className={classes.media} image={data.urlToImage} />
      ) : null}
      <CardContent>
        <Typography
          className={classes.title}
          gutterBottom
          variant="body2"
          component="p"
        >
          {data.title}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NewsArticle;
