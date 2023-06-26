import React, { useEffect, useState } from "react";
import Card from "./card";
import { Link } from "gatsby";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const Archives = ({ articles }) => {
  const [restApiArticles, setRestApiArticles] = useState([]);
  const breakpoints = useBreakpoint()

  useEffect(() => {
    fetch("https://nwadailybackend.herokuapp.com/beehiiv", {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => setRestApiArticles(data.data))
    .catch(error => console.error(error));
  }, []);

  const allArticles = [...restApiArticles, ...articles];

  const leftArticlesCount = Math.ceil(allArticles.length / 5);
  const leftArticles = allArticles.slice(0, leftArticlesCount);
  const rightArticles = allArticles.slice(leftArticlesCount, allArticles.length);
  console.log(allArticles)

  return (
   
   
   <div>
   
   {breakpoints.sm ? 
    (
      
        <ul class="uk-list uk-list-divider uk-center uk-width-7-8">
          {allArticles.map((article, i) => {
            if(article.hasOwnProperty('node')) {
              let dt = new Date(article.node.date)
              const monthNames = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ];
              return (
                // <Card
                //   article={article}
                //   key={`article__left__${article.node.slug}`}
                // />
                <li key={`article__left__${article.node.slug}`}>
                  <a id="archive-link"
                    href={'/article/'+article.node.slug}
                    
                  >
                    {monthNames[dt.getMonth()] + ' '+ dt.getDate() + ' - ' + article.node.headline} 
                    </a>
                </li>
              );
            }
            else {
              let dt = new Date(article.displayed_date * 1000)
              const monthNames = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ];
              return (
                // <Card
                //   article={article}
                //   key={`article__left__${article.node.slug}`}
                // />
                <li key={`article__left__${article.slug}`}>
                  <a id="archive-link"
                    href={`/article/${article.slug}?channel=${article.id}`}
                    
                  >
                    {monthNames[dt.getMonth()] + ' '+ dt.getDate() + ' - ' + article.title} 
                    </a>
                </li>
              );
            }
          })}
          </ul>
    )
    :
    (
      <ul class="uk-list uk-list-divider uk-center uk-width-1-2">
          {allArticles.map((article, i) => {
            if(article.hasOwnProperty('node')) {
              let dt = new Date(article.node.date)
              const monthNames = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ];
              return (
                // <Card
                //   article={article}
                //   key={`article__left__${article.node.slug}`}
                // />
                <li key={`article__left__${article.node.slug}`}>
                  <a id="archive-link"
                    href={'/article/'+article.node.slug}
                    
                  >
                    {monthNames[dt.getMonth()] + ' '+ dt.getDate() + ' - ' + article.node.headline} 
                    </a>
                </li>
              );
            }
            else {
              let dt = new Date(article.displayed_date * 1000)
              const monthNames = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ];
              return (
                // <Card
                //   article={article}
                //   key={`article__left__${article.node.slug}`}
                // />
                <li key={`article__left__${article.slug}`}>
                  <a id="archive-link"
                    href={`/article/${article.slug}?channel=${article.id}`}
                    
                  >
                    {monthNames[dt.getMonth()] + ' '+ dt.getDate() + ' - ' + article.title} 
                    </a>
                </li>
              );
            }
          })}
          </ul>
    )}
     
     
    </div>
  );
};

export default Archives;