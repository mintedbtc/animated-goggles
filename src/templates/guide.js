import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import SubscribeComponent from "../components/subscribe";

export const query = graphql`
  query GuideQuery($slug: String!) {
    strapiGuide(slug: { eq: $slug }) {
      strapiId
      title
      description
      content
      slug
      publishedAt
    }
  }
`;

const Guide = ({ data }) => {
  const breakpoints = useBreakpoint();
  const guide = data.strapiGuide;
  
  const seo = {
    metaTitle: guide.title,
    metaDescription: guide.description,
    shareImage: guide.image,
    guide: true,
  };
  
  guide.content = guide.content.split('<img ').join('<img style="text-align:center; margin-left:auto;margin-right:auto;display:block"')
  guide.content = guide.content.split('class="ql-align-center"').join('class="ql-align-center" style="text-align:center; margin-left:auto;margin-right:auto;display:block;width:50%"')
  guide.content = guide.content.split('<em>').join('<em style="color:black">')
  guide.content = guide.content.split('a href=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" href=')
  guide.content = guide.content.split('<pre class="ql-syntax" spellcheck="false">"').join('')
  guide.content = guide.content.split('"</pre>').join('')
  
  return (
    
    <Layout seo={seo}>
      {breakpoints.sm ? 
      (
      <div>
        
          <h2 className="uk-text-center" style={{paddingTop:"15%",marginTop:"15%"}}>{guide.title}</h2>
      
          <div style={{paddingLeft:"3%",paddingRight:"3%",paddingTop:"2%",paddingBottom:"5%"}}>
          
          <div key={guide.strapiId} style={{color:"black"}} dangerouslySetInnerHTML={{__html:guide.content}}></div>
          </div>
      </div>
      
      )
      :
      (
      <div>
        
          <h2 className="uk-text-center">{guide.title}</h2>
        
          <div style={{paddingLeft:"15%",paddingRight:"15%",paddingTop:"2%",paddingBottom:"5%"}}>
          
          <div key={guide.strapiId} style={{color:"black"}} dangerouslySetInnerHTML={{__html:guide.content}}></div>
          </div>
      </div>
      )}
      <SubscribeComponent/>
    </Layout>
  );
};

export default Guide;