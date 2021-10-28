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

  console.log(guide.content)
  guide.content = guide.content.split('<img ').join('<img style="text-align:center; margin-left:auto;margin-right:auto;display:block"')
  guide.content = guide.content.split('class="ql-align-center"').join('class="ql-align-center" style="text-align:center; margin-left:auto;margin-right:auto;display:block;width:50%"')
  guide.content = guide.content.split('<em>').join('<em style="color:black">')
  guide.content = guide.content.split('a href=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" href=')
  guide.content = guide.content.split('<p>&lt;blockquote').join('<blockquote').split('> <').join('><').split('" ').join('"').split('&gt;&lt;').join('><').split('gt').join('>').split('&>').join('>').split('";/').join('')
  // guide.content = guide.content.split('<span class="ql-size-small">').join('<span style="font-weight:400; font-size:11px;">')
  // guide.content = guide.content.split('</span>').join('</span>')
  
  return (
    
    <Layout seo={seo}>
      <h2 style={{paddingTop:"10%"}} className="uk-text-center">{guide.title}</h2>
      {breakpoints.sm ? 
      (
        
      <div>
        
          
      
          <div style={{paddingLeft:"3%",paddingRight:"3%",paddingTop:"2%",paddingBottom:"5%"}}>
          <div key={guide.strapiId} style={{color:"black"}} dangerouslySetInnerHTML={{__html:guide.content}}></div>
          </div>
      </div>
      
      )
      :
      (
      <div>
        
          
        
          <div style={{paddingLeft:"25%",paddingRight:"25%",paddingTop:"2%",paddingBottom:"5%"}}>
          
          <div key={guide.strapiId} style={{color:"black"}} dangerouslySetInnerHTML={{__html:guide.content}}></div>
          </div>
      </div>
      )}
      <SubscribeComponent/>
    </Layout>
  );
};

export default Guide;