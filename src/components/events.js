import React from "react";
import Card from "./card";
import { Link } from "gatsby";
import "../assets/css/main.css";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const Events = ({ events }) => {
  const breakpoints = useBreakpoint()
  console.log(events)

  return (
    
    <div>
   
   {breakpoints.sm ? 
    (
      
      <ul className="uk-list uk-list-divider uk-width-8-8">
           {/* {events.map((event, i) => {
            let dt = new Date(event.node.published_at)
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
          if (event.node.type === 'Featured') {
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              <li className="mobile-event" style={{backgroundColor:"#FFFFE0"}} key={`event__left__${event.node.slug}`}>
                
                
                   <a
                      className="event-mobile"
                      href={'/events/'+event.node.slug}
                      // state={{ postId: post.id }}
                      >
                       
                        
                        <span className="company-mobile">{event.node.organization}</span>
                        <br></br>
                        <div className="event-middle-section">
                        <img width="35" height="35" src={event.node.logo.publicURL}/>
                        <span className="title-mobile">{event.node.title}</span>
                        <span className="date-mobile">Featured</span>
                        </div>
                        <br></br>
                        <span className="location-company-mobile">{event.node.location}</span>
                        
                        
                        </a>
                      
                  
                  
              </li>
            );
          }
          })
          
        }

        {events.map((event, i) => {
            let dt = new Date(event.node.published_at)
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
        if (event.node.type !== 'Featured') {
            
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              <li className="mobile-event" key={`event__left__${event.node.slug}`}>
                
                
                   <a
                      className="event-mobile"
                      href={'/events/'+event.node.slug}
                      // state={{ postId: post.id }}
                      >
                       
                        
                        <span className="company-mobile">{event.node.organization}</span>
                        <br></br>
                        <div className="event-middle-section">
                        <img width="35" height="35" src={event.node.logo.publicURL}/>
                        <span className="title-mobile">{event.node.title}</span>
                        <span className="date-mobile">{"Posted " + monthNames[dt.getMonth()] + ' '+ dt.getDate()}</span>
                        </div>
                        <br></br>
                        <span className="location-company-mobile">{event.node.location}</span>
                        
                        
                        </a>
                      
                  
                  
              </li>
            );
          
        }
      })
          
    } */}
      
      </ul>
    )
    :
    (
      
        <ul className="uk-list uk-list-divider uk-width-8-8">
          {/* {events.map((event, i) => {
            let dt = new Date(event.node.published_at)
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
          if (event.node.type === 'Featured') {
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              <li className="event" style={{backgroundColor:"#FFFFE0"}} key={`event__left__${event.node.slug}`}>
                
                
                   <a
                      className="event"
                      href={'/events/'+event.node.slug}
                      // state={{ postId: post.id }}
                      >
                       
                        
                        <span className="company">{event.node.organization}</span>
                        <br></br>
                        <div className="event-middle-section">
                        <img width="35" height="35" src={event.node.logo.publicURL}/>
                        <span className="title">{event.node.title}</span>
                        <span className="date">Featured</span>
                        </div>
                        <br></br>
                        <span className="location company">{event.node.location}</span>
                        
                        
                        </a>
                      
                  
                  
              </li>
            );
          }
          })
          
        }

        {events.map((event, i) => {
            let dt = new Date(event.node.published_at)
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
        if (event.node.type !== 'Featured') {
            
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              <li className="event" key={`event__left__${event.node.slug}`}>
                
                
                   <a
                      className="event"
                      href={'/events/'+event.node.slug}
                      // state={{ postId: post.id }}
                      >
                       
                        
                        <span className="company">{event.node.organization}</span>
                        <br></br>
                        <div className="event-middle-section">
                        <img width="35" height="35" src={event.node.logo.publicURL}/>
                        <span className="title">{event.node.title}</span>
                        <span className="date">{"Posted " + monthNames[dt.getMonth()] + ' '+ dt.getDate()}</span>
                        </div>
                        <br></br>
                        <span className="location company">{event.node.location}</span>
                        
                        
                        </a>
                      
                  
                  
              </li>
            );
          
        }
      })
          
    } */}
        
          </ul>
    )}
     
     
    </div>
  );
};

export default Events;