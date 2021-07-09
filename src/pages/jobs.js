import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import JobsComponent from "../components/jobs";
import "../assets/css/main.css";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const JobsPage = () => {
  const data = useStaticQuery(query);
  const breakpoints = useBreakpoint()
  
  const seo = {
    metaTitle: "NWA Daily Job Board",
    metaDescription: "Find cool jobs in Northwest Arkansas from small businesses, startups, and corporations in Bentonville, Fayetteville, Springdale, Rogers, and more",
    shareImage: data.strapiHomepage.seo.shareImage,
  };
  return (
    <Layout seo={seo}>

      <div className="job-head">
      <h2 className="job-header">Browse cool jobs in NWA</h2>
      <a href="/jobpost">
      <button className="job-post-button"
              >Post a job</button>
      </a>
      </div>

{data.allStrapiJob.edges.length > 0 ?
(breakpoints.sm ? 
(
<div className="uk-section">
      {/* <h1 className="uk-text-center">{data.strapiHomepage.hero.title}</h1> */}
        <div className="uk-container uk-container-large" >

          <JobsComponent jobs={data.allStrapiJob.edges} />
        
        </div>
      </div>
)
:
(
<div className="uk-section">
      {/* <h1 className="uk-text-center">{data.strapiHomepage.hero.title}</h1> */}
        <div className="uk-container uk-container-large" >
        
          <JobsComponent jobs={data.allStrapiJob.edges} />
        
        </div>
      </div>
)
) 
:
(
<div className="uk-section">
      {/* <h1 className="uk-text-center">{data.strapiHomepage.hero.title}</h1> */}
        <div className="uk-container uk-container-large uk-text-center" >

          <p>There are no jobs posted at this time</p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        
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
    allStrapiJob(sort: {order: DESC, fields: published_at}) {
      edges {
        node {
          strapiId
          slug
          published_at
          description
          title
          type
          applicationLink
          logo {
            publicURL
          }
          location
          organization
        }
      }
    }
  }
`;

export default JobsPage;