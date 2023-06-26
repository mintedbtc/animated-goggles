import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import SubscribeComponent from "../components/subscribe";
import PopupComponent from "../components/popup";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';

const Article = () => {
  const [additionalData, setAdditionalData] = useState(null);
  
  useEffect(() => {
    axios.get('https://nwadailybackend.herokuapp.com/newsletter', {
      body: {
        postId:'post_2ae3ce5f-9300-418e-b8fd-07b6bb8602d0'
      },
    })
    .then(response => {
      setAdditionalData(response.data);
    })
    .catch(error => {
      console.error('Error fetching additional data:', error);
    });
  }, []);  // Empty dependency array so this runs once after the component mounts

  const breakpoints = useBreakpoint();
  const article = additionalData;
  console.log(article)

  return (
    <Layout seo={seo}>
      <PopupComponent/>
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

export default Article;


