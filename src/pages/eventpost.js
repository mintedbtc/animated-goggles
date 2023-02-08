import React from "react";
import { Link, graphql, useStaticQuery, StaticQuery, navigate } from "gatsby";
import Layout from "../components/layout";
import { withBreakpoints } from 'gatsby-plugin-breakpoints';
import "../assets/css/main.css";
import 'react-quill/dist/quill.snow.css';

class JobpostPage extends React.Component {
  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {
        this.ReactQuill = require('react-quill')
      }
    this.emailRef = React.createRef();
    this.state = {
      email: "",
      name: "",
      organization: "",
      description: "",
      location: "",
      type: "",
      slug: "",
      eventLink: "",
      isModalOpen: false,
      submitError: false,
      isSubmitted: false,
      date: new Date()
    }
  }
  handleInputChange = event => {
    event.preventDefault();
    console.log('test')
    const target = event.target
    const value = target.value
    const name = target.name
    console.log(name)
    this.setState({
      [name]: value,
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    
    let postId = null
    console.log(window.location.href.split('?id=').length)
    if (window.location.href.split('?id=').length > 1) {
      console.log('idhere')
      console.log(window.location.href)
      postId = window.location.href.split('?id=')[1]
      postId = postId.split('&')[0]
      console.log(postId)
      }
    else {
        postId = 'regular'
        console.log(postId)
      }
    if (this.state.email !== "") {
    
    const email = this.state.email.toLowerCase()
    const name = this.state.name
    const location = this.state.location
    const organization = this.state.organization
    const description = this.state.description
    const title = this.state.title
    const date = this.state.date
    const eventLink = this.state.eventLink

    const requestBody = {
        email: email,
        location: location,
        name: name,
        title: title,
        slug: name.replaceAll(' ', '-').toLowerCase(),
        organization: organization,
        description: description,
        eventLink: eventLink,
        date: date,
        // property: "NWA Daily"
      }
  
    fetch(`https://nwadailybackend.herokuapp.com/events`, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData.data)
        this.setState({
          isModalOpen: false,
          isSubmitted: true
        })
        navigate('https://buy.stripe.com/8wM29id04f6f9OgdR3')
      })
      .catch(err => {
        console.log(err);
      });
    
  }
  else {
    this.setState({
      submitError: true,
    })
    console.log(true)
  }
  
  }



  render() {
    const { breakpoints } = this.props;
    const ReactQuill = this.ReactQuill
    
  return (
    <StaticQuery
    query={graphql`
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
    }
    `}
    render={data => (
    <Layout seo={data.strapiHomepage.seo}>
      <div>
{breakpoints.sm ? 
(
<div className="uk-section">
      
      <h3 className="uk-text-center">Post an event on our event calendar</h3>
      <p style={{marginLeft:"auto",marginRight:"auto",width:"60%"}}>Our event calendar helps our readers keep up with fun things going on in the newsletter. Post your even here so our readers and website visitors know about it. Each posting is $100.</p>
      <form class="uk-form" style={{marginLeft:"auto",marginRight:"auto",width:"60%"}}>
            
              <div class="test">
                    
              {this.state.isSubmitted === false ?
                (
                  <div class="uk-margin">
              <label>
              Event Name
              </label>
              <br></br>
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="eventName"
              name="name" 
              type="text" 
              placeholder="Event Name"
              labelText="Event Name"
              value={this.state.name}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({name:e.target.value})
              }}
              />
              <br></br>
              <br></br>
              <label>
              Organization
              </label>
              <br></br>
              
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="jobOrganization"
              name="organization" 
              type="text" 
              placeholder="Organization"
              labelText="Organization"
              value={this.state.organization}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({organization:e.target.value})
              }}
              />
              <br></br>
              <br></br>
              <label>
              Event Location
              </label>
              <br></br>
              
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="jobLocation"
              name="location" 
              type="text" 
              placeholder="Job Location"
              labelText="Location"
              value={this.state.location}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({location:e.target.value})
              }}
              />
              
              <br></br>
              <br></br>
              <label>
              Event Description
              </label>
              <br></br>
             
              {(typeof window !== 'undefined' && ReactQuill) ? 
                (
              <ReactQuill theme="snow" 
                  name="jobDescription"
                  value={this.state.description}
                  onChange={(content) => {
                  this.setState({description:content})
                  }}
              />
                )
                :
                (
                    <textarea />
                )}
              
              <br></br>
              <label>
              Event Link
              </label>
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                className="uk-input" 
                id="jobLink"
                name="link" 
                type="text" 
                placeholder="Event Link"
                labelText="Event Link"
                value={this.state.eventLink}
                  onChange={(e) => {
                    console.log(e.target.value)
                    this.setState({eventLink:e.target.value})
                }}
                />
                <br></br>
                <br></br>
              <label>
              Event Date
              </label>
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                className="uk-input" 
                id="date"
                name="date" 
                type="date" 
                placeholder="Event Date"
                labelText="Event Date"
                value={this.state.date}
                  onChange={(e) => {
                    console.log(e.target.value)
                    this.setState({date:e.target.value})
                }}
                />
                <br></br>
                <br></br>
              <label>
              Contact Email Address
              </label>
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                className="uk-input" 
                id="jobEmail"
                name="email" 
                type="text" 
                placeholder="Email Address"
                labelText="Your Email"
                value={this.state.email}
                  onChange={(e) => {
                    console.log(e.target.value)
                    this.setState({email:e.target.value})
                }}
                />
                <div className="uk-container">
      
        
                <div className="job-head">
                  <br></br>
      <a href="/jobpost">
      <button className="job-post-button"
              onClick={this.submitHandler}>Post your event</button>
      </a>
      </div>
  </div>
                <br></br>
                <br></br>
                
                {/* <div style={{textAlign: "center"}}>
            <button 
              style={{textAlign: "center",backgroundColor:"#307765",opacity:1,color:"white"}} 
              className="uk-button uk-button-default"
              onClick={this.submitHandler}
              >Post Job</button>
              </div> */}
              </div>
                )
                :
                (
                  <div class="uk-margin">
            <h4 style={{textAlign:"center"}}>You're all set!</h4>
              </div>
                )}
                </div>
            
          </form>
        
        </div>
)
:
(
<div className="uk-section">
      
      <h3 className="uk-text-center">Post an event on our event calendar</h3>
      <p style={{marginLeft:"auto",marginRight:"auto",width:"60%"}}>Our event calendar helps our readers keep up with fun things going on in the newsletter. Post your even here so our readers and website visitors know about it. Each posting is $100.</p>
      <form class="uk-form" style={{marginLeft:"auto",marginRight:"auto",width:"75%"}}>
            
              <div class="test">
                    
              {this.state.isSubmitted === false ?
                (
                  <div class="uk-margin">
              <label>
              Event Name
              </label>
              <br></br>
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="jobTitle"
              name="title" 
              type="text" 
              placeholder="Event Name"
              labelText="Event Name"
              value={this.state.name}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({name:e.target.value})
              }}
              />
              <br></br>
              <br></br>
              <label>
              Organization
              </label>
              <br></br>
              
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="jobOrganization"
              name="organization" 
              type="text" 
              placeholder="Organization"
              labelText="Organization"
              value={this.state.organization}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({organization:e.target.value})
              }}
              />
              <br></br>
              <br></br>
              <label>
              Event Location
              </label>
              <br></br>
              
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="jobLocation"
              name="location" 
              type="text" 
              placeholder="Event Location"
              labelText="Location"
              value={this.state.location}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({location:e.target.value})
              }}
              />
              
              <br></br>
              <br></br>
              <label>
              Event Description
              </label>
              <br></br>
              {(typeof window !== 'undefined' && ReactQuill) ? 
                (
              <ReactQuill theme="snow" 
                  name="jobDescription"
                  value={this.state.description}
                  onChange={(content) => {
                  this.setState({description:content})
                  }}
              />
                )
                :
                (
                    <textarea />
                )}
              
              <br></br>
              <label>
              Event Link
              </label>
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                className="uk-input" 
                id="jobLink"
                name="link" 
                type="text" 
                placeholder="Event Link"
                labelText="Event Link"
                value={this.state.eventLink}
                  onChange={(e) => {
                    console.log(e.target.value)
                    this.setState({eventLink:e.target.value})
                }}
                />
                <br></br>
                <br></br>
              <label>
              Event Date
              </label>
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                className="uk-input" 
                id="date"
                name="date" 
                type="date" 
                placeholder="Event Date"
                labelText="Event Date"
                value={this.state.date}
                  onChange={(e) => {
                    console.log(e.target.value)
                    this.setState({date:e.target.value})
                }}
                />
                <br></br>
                <br></br>
              <label>
              Contact Email Address
              </label>
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                className="uk-input" 
                id="jobEmail"
                name="email" 
                type="text" 
                placeholder="Email Address"
                labelText="Your Email"
                value={this.state.email}
                  onChange={(e) => {
                    console.log(e.target.value)
                    this.setState({email:e.target.value})
                }}
                />
                <br></br>
                <br></br>
                <div className="uk-container">
      
        
           
            <div className="job-head">
                  <br></br>
      <a href="/jobpost">
      <button className="job-post-button"
              onClick={this.submitHandler}>Post your event</button>
      </a>
      </div>
        </div>
        <br></br>
        <br></br>
                {/* <div style={{textAlign: "center"}}>
            <button 
              style={{textAlign: "center",backgroundColor:"#307765",opacity:1,color:"white"}} 
              className="uk-button uk-button-default"
              onClick={this.submitHandler}
              >Post Job</button>
              </div> */}
              </div>
                )
                :
                (
                  <div class="uk-margin">
            <h4 style={{textAlign:"center"}}>You're all set!</h4>
              </div>
                )}
                </div>
            
          </form>
        
        </div>
)}
      </div>
    </Layout>
    )}
    />     
  )
               
}
}


export default withBreakpoints(JobpostPage);
