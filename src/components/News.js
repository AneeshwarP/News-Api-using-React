import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <h1 className="head__text">Todays News </h1>
      <h6 className="Sub__head__text">Designed by Aneeshwar.P</h6>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;
