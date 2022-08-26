import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import SubscribeComponent from "../components/subscribe";
import PopupComponent from "../components/popup";

export const query = graphql`
  query PartnerQuery($slug: String!) {
    strapiPartner(slug: { eq: $slug }) {
      strapiId
      Name
      description
      Location
      slug
      url
      logo {
        url
      }
      published_at
      facebook
      instagram
    }
  }
`;

const Partner = ({ data }) => {
  const breakpoints = useBreakpoint();
  const partner = data.strapiPartner;
  
  const seo = {
    metaTitle: partner.name,
    metaDescription: partner.description,
    shareImage: partner.image,
    partner: true,
  };
  
  partner.description = partner.description.split('<img ').join('<img style="text-align:center; margin-left:auto;margin-right:auto;display:block"')
  partner.description = partner.description.split('class="ql-align-center"').join('class="ql-align-center" style="text-align:center; margin-left:auto;margin-right:auto;display:block;width:50%"')
  partner.description = partner.description.split('<em>').join('<em style="color:black">')
  partner.description = partner.description.split('a href=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" href=')
  
  let dt = new Date(partner.date)
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
  return (
    
    <Layout seo={seo}>
      <PopupComponent/>
      {breakpoints.sm ? 
      (
      <div>
          <h2 className="uk-text-center" style={{paddingTop:"15%",marginTop:"15%"}}>{partner.name}</h2>
          {/* <div style={{textAlign:"center",paddingBottom:"20px"}}>
            <a href={partner.applicationLink}>
            <button className="event-post-button"
                    >Apply Here</button>
            </a>
            </div> */}
          <div style={{paddingLeft:"3%",paddingRight:"3%",paddingTop:"2%",paddingBottom:"5%"}}>
          
          <div key={partner.strapiId} style={{color:"black"}} dangerouslySetInnerHTML={{__html:partner.description}}></div>
          </div>
      </div>
      
      )
      :
      (
      <div>
        <br></br>
        <br></br>
        <br></br>
          <h2 className="uk-text-center">{partner.name}</h2>
          <h4 className="uk-text-center">{partner.location + ' - ' + monthNames[dt.getMonth()] + ' '+ dt.getDate()}</h4>
          {/* <div style={{textAlign:"center",paddingBottom:"20px"}}>
            <a href={partner.applicationLink}>
            <button className="event-post-button"
                    >Apply Here</button>
            </a>
            </div> */}
          <div style={{paddingLeft:"15%",paddingRight:"15%",paddingTop:"2%"}}>
          
          <div key={partner.strapiId} style={{color:"black"}} dangerouslySetInnerHTML={{__html:partner.description}}></div>
          </div>
      </div>
      )}
      
    </Layout>
  );
};

export default Partner;
