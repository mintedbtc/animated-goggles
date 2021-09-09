import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import SubscribeComponent from "../components/subscribe";

export const query = graphql`
  query EventQuery($slug: String!) {
    strapiEvent(slug: { eq: $slug }) {
      strapiId
      slug
      name
      organization
      location
      type
      date
      eventLink
      photo {
        publicURL
      }
      published_at
      description
    }
  }
`;

const Event = ({ data }) => {
  const breakpoints = useBreakpoint();
  const event = data.strapiEvent;
  
  const seo = {
    metaTitle: event.title,
    metaDescription: event.slug,
    shareImage: event.image,
    event: true,
  };
  
  event.description = event.description.split('<img ').join('<img style="text-align:center; margin-left:auto;margin-right:auto;display:block"')
  event.description = event.description.split('class="ql-align-center"').join('class="ql-align-center" style="text-align:center; margin-left:auto;margin-right:auto;display:block;width:50%"')
  event.description = event.description.split('<em>').join('<em style="color:black">')
  event.description = event.description.split('a href=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" href=')
  
  let dt = new Date(event.date)
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
  return (
    
    <Layout seo={seo}>
      {breakpoints.sm ? 
      (
      <div>
          <h2 className="uk-text-center" style={{paddingTop:"15%",marginTop:"15%"}}>{event.name}</h2>
          {/* <div style={{textAlign:"center",paddingBottom:"20px"}}>
            <a href={event.applicationLink}>
            <button className="event-post-button"
                    >Apply Here</button>
            </a>
            </div> */}
          <div style={{paddingLeft:"3%",paddingRight:"3%",paddingTop:"2%",paddingBottom:"5%"}}>
          
          <div key={event.strapiId} style={{color:"black"}} dangerouslySetInnerHTML={{__html:event.description}}></div>
          </div>
      </div>
      
      )
      :
      (
      <div>
        <br></br>
        <br></br>
        <br></br>
          <h2 className="uk-text-center">{event.name}</h2>
          <h4 className="uk-text-center">{event.organization + ' - ' + event.location + ' - ' + monthNames[dt.getMonth()] + ' '+ dt.getDate()}</h4>
          {/* <div style={{textAlign:"center",paddingBottom:"20px"}}>
            <a href={event.applicationLink}>
            <button className="event-post-button"
                    >Apply Here</button>
            </a>
            </div> */}
          <div style={{paddingLeft:"15%",paddingRight:"15%",paddingTop:"2%"}}>
          
          <div key={event.strapiId} style={{color:"black"}} dangerouslySetInnerHTML={{__html:event.description}}></div>
          </div>
      </div>
      )}
      
    </Layout>
  );
};

export default Event;