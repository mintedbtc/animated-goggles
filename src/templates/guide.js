import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import SubscribeComponent from "../components/subscribe";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from '@material-ui/core/IconButton';
import Close from "@material-ui/icons/Close";
import PopupComponent from "../components/popup";


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
  guide.content = guide.content.split('<img ').join('<img width=100% style="text-align:center; margin-left:auto;margin-right:auto;display:block"')
  guide.content = guide.content.split('class="ql-align-center"').join('class="ql-align-center" style="text-align:center; margin-left:auto;margin-right:auto;display:block;width:50%"')
  guide.content = guide.content.split('<em>').join('<em style="color:black">')
  guide.content = guide.content.split('a href=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" href=')
  // guide.content = guide.content.split('<p>&lt;blockquote').join('<blockquote').split('> <').join('><').split('" ').join('"').split('&gt;&lt;').join('><').split('gt').join('>').split('&>').join('>').split('";/').join('')
  // guide.content = guide.content.split('<span class="ql-size-small">').join('<span style="font-weight:400; font-size:11px;">')
  // guide.content = guide.content.split('</span>').join('</span>')
  // fdj

  return (
    
    <Layout seo={seo}>
      <PopupComponent/>
      
      {breakpoints.sm ? 
      (
        
        
      <div>
        <h2 style={{color:"#000",paddingTop:"10%"}} className="uk-text-center">{guide.title}</h2>
      <p style={{color:"#000"}} className="uk-text-center"><em style={{color:"#000"}}>By NWA Daily | Published Nov 2, 2021</em></p>
      
          
      
          <div style={{paddingLeft:"3%",paddingRight:"3%",paddingTop:"2%",paddingBottom:"5%"}}>
          <div key={guide.strapiId} style={{color:"black"}} dangerouslySetInnerHTML={{__html:guide.content}}></div>
          </div>
      </div>
      
      )
      :
      (
      <div>
          <h2 style={{color:"#000",paddingTop:"10%"}} className="uk-text-center">{guide.title}</h2>
          <p style={{color:"#000"}} className="uk-text-center"><em style={{color:"#000"}}>By NWA Daily | Published Nov 2, 2021</em></p>
          
        
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