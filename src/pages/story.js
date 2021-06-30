import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import StoriesComponent from "../components/stories";
import "../assets/css/main.css";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const StoryPage = () => {
  const data = useStaticQuery(query);
  const breakpoints = useBreakpoint()
  console.log(data)
  return (
    <Layout seo={data.strapiHomepage.seo}>
{breakpoints.sm ? 
(
<div className="uk-section">
      {/* <h1 className="uk-text-center">{data.strapiHomepage.hero.title}</h1> */}
        <div style={{marginLeft:"3%"}} className="uk-container uk-container-large" >
        <h2 style={{marginLeft:"14%"}}>Browse all our stories</h2>
          <StoriesComponent stories={data.allStrapiArticle.edges} />
        
        </div>
      </div>
)
:
(
<div className="uk-section">
      {/* <h1 className="uk-text-center">{data.strapiHomepage.hero.title}</h1> */}
        <div style={{marginLeft:"23%"}} className="uk-container uk-container-large" >
        <h2 style={{marginLeft:"17%"}}>Browse all our stories</h2>
          <StoriesComponent stories={data.allStrapiArticle.edges} />
        
        </div>
      </div>
)}
    </Layout>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
    allStrapiArticle(sort: {order: DESC, fields: publishedAt}) {
      edges {
        node {
          strapiId
          slug
          publishedAt
          content
          title
          author {
            name
          }
        }
      }
    }
  }
`;

export default StoryPage;