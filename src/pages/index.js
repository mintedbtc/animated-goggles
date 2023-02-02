
import { Link, graphql, useStaticQuery, StaticQuery, navigate } from "gatsby";
import Layout from "../components/layout";
import ArticlesComponent from "../components/articles";
import AdvertiseComponent from "../components/advertise";
import StoriesComponent from "../components/stories";
import GuidesComponent from "../components/guides";
import "../assets/css/main.css";
import background from "../images/cover.png";
import mobileBackground from "../images/mobileCover.png";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { withBreakpoints } from 'gatsby-plugin-breakpoints';
import React, { useState, useEffect } from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from '@material-ui/core/IconButton';
import Close from "@material-ui/icons/Close";
import axios from 'axios';

const email = ""

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.state = {
      email: "",
      location: "landing regular",
      isModalOpen: false,
      submitError: false,
      isSubmitted: false,
      isAdSubmitted: false,
      advertiser: "",
      time:"monthly",
      emails: 22000,
      oneLiner: "0",
      extendedText: "0",
      sponsor: "0",
      date: new Date()
    }
  }

  componentDidMount = () => {
		// Set delay in milliseconds
		window.setTimeout(() =>{this.setState({ isModalOpen: true })}, 2000);
    fetch(`https://nwadailybackend.herokuapp.com/emails/count`, {
        method: 'GET',
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
          console.log(resData)
          this.setState({ emails: resData })
        })
        .catch(err => {
          console.log(err);
        });

	}  

  submitBigMonthlyHandler = (e) => {
    e.preventDefault();
    navigate('https://buy.stripe.com/9AQ9BK1hm3nx0dG6oz')
  }

  submitBigAnnualHandler = (e) => {
    e.preventDefault();
    navigate('https://buy.stripe.com/5kA5lu9NS9LVgcEdR0')
  }

  submitSuperMonthlyHandler = (e) => {
    e.preventDefault();
    navigate('https://buy.stripe.com/5kA9BK8JO7DN7G86ox')
  }

  submitSuperAnnualHandler = (e) => {
    e.preventDefault();
    navigate('https://buy.stripe.com/7sI15e8JO9LV8Kc28g')
  }

  submitMegaMonthlyHandler = (e) => {
    e.preventDefault();
    navigate('https://buy.stripe.com/00g7tCe487DNgcEcMS')
  }

  submitMegaAnnualHandler = (e) => {
    e.preventDefault();
    navigate('https://buy.stripe.com/eVag081hmgaj0dG3cj')
  }

  handleInputChange = event => {
    console.log('test')
    const target = event.target
    const value = target.value
    const name = target.name
    console.log(name)
    this.setState({
      [name]: value,
    })
    console.log(this.state.email)
  }

  handleAdInputChange = event => {
    console.log('test')
    const target = event.target
    const value = target.value
    const name = target.name
    console.log(name)
    this.setState({
      [name]: value,
    })
    console.log(this.state.advertiser)
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  submitAdHandler = (e) => {
      e.preventDefault();
      console.log(this.state.advertiser)
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
      if (this.state.advertiser !== "") {
      
      const email = this.state.advertiser.toLowerCase()
      const oneLiner = this.state.oneLiner
      const extendedText = this.state.extendedText
      const sponsor = this.state.sponsor
      const requestBody = {
          email: email,
          oneLiner: oneLiner,
          event: extendedText,
          sponsor: sponsor,
          property: "NWA Daily"
          // location: "advertise",
          // source: "regular",
        }
    
      fetch(`https://nwadailybackend.herokuapp.com/inquiries`, {
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
            isAdSubmitted: true
          })
          
        })
        .catch(err => {
          console.log(err);
        });
      //   fetch(`https://boiling-lake-07785.herokuapp.com/https://nwadaily-emailer.herokuapp.com/signup/`, {
      //   method: 'POST',
      //   body: JSON.stringify({email: email}),
      //   headers: {
      //     'Access-Control-Allow-Origin':'http://localhost:8000/',
      //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      //     'Content-Type': 'application/json'
      //   },
      //   mode: 'cors'
      // })
      //   .then(res => {
      //     if (res.status !== 200 && res.status !== 201) {
      //       console.log(res.status)
      //       return res.status
      //     }
      //     return res;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      fetch(`https://nwadailybackend.herokuapp.com/advertiser`, {
        method: 'POST',
        body: JSON.stringify({email: email}),
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      })
        .then(res => {
          if (res.status !== 200 && res.status !== 201) {
            console.log(res.status)
            return res.status
          }
          return res;
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
    const location = this.state.location
    const requestBody = {
        email: email,
        location: location,
        source: postId,
        subscribeDate: this.state.date,
        property: "NWA Daily"
      }
  
    fetch(`https://nwadailybackend.herokuapp.com/signup`, {
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
        this.setState({
          isModalOpen: false,
          isSubmitted: true
        })
        return res.json();
      })
      .then(resData => {
        console.log(resData.data)
        
        
      })
      .catch(err => {
        console.log(err);
      });
    //   fetch(`https://nwadailybackend.herokuapp.com/signup`, {
    //   method: 'POST',
    //   body: JSON.stringify({email: email}),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   mode: 'cors'
    // })
    //   .then(res => {
    //     if (res.status !== 200 && res.status !== 201) {
    //       console.log(res.status)
    //       return res.status
    //     }
    //     return res;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
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
  console.log(breakpoints)
  
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
                                allStrapiEdition(sort: {order: DESC, fields: date}, filter: {writer: {id: {eq: 2}}}, limit: 5) {
                                  edges {
                                    node {
                                      strapiId
                                      slug
                                      date
                                      posts {
                                        title
                                        content
                                        topic
                                      }
                                      headline
                                      writer {
                                        name
                                        picture {
                                          childImageSharp {
                                            gatsbyImageData(layout: FIXED)
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                
                                allStrapiGuide(sort: {order: DESC, fields: publishedAt}, limit: 5,
				filter: {property: {eq: "NWA Daily"}}) {
                                  edges {
                                    node {
                                      strapiId
                                      slug
                                      publishedAt
                                      title
                                    }
                                  }
                                }
                            
                              }
                              `}
                              render={data => (
                                <Layout seo={data.strapiHomepage.seo}>
                              
    
      <div style={{paddingTop:"0px"}} className="uk-section">
      
      {/* <h1 className="uk-text-center">{data.strapiHomepage.hero.title}</h1> */}
      <div class="uk-light" uk-grid>
    <div>
    <Dialog
        open={this.state.isModalOpen}
        keepMounted
        onClose={() => this.handleModalClose()}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
        >
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => this.handleModalClose()}
          >
            <Close />
          </IconButton>
          <h3 style={{fontWeight:"bold"}}>{`Join ${this.state.emails.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} NWA locals and subscribe to the free daily newsletter`}</h3>
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
        >
          {breakpoints.sm ? 
            (
            <form>
            
            {this.state.isSubmitted === false ?
                (
                  
                  <div class="uk-margin" style={{width:"90%",marginLeft:"auto",marginRight:"auto"}}>
            <input 
              style={{width:"100%",color:"#307765",marginLeft:"auto",marginRight:"auto", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="signup"
              name="email" 
              type="text" 
              placeholder="Email address"
              labelText="Your Email"
              value={this.state.email}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({email:e.target.value,
                                  location:"landing pop up"})
              }}
              />
              <br></br>
              <br></br>
            <button 
              style={{width:"100%",marginLeft:"auto",marginRight:"auto",backgroundColor:"#307765",opacity:1,color:"white"}} 
              className="uk-button uk-button-default"
              onClick={this.submitHandler}
              >Subscribe</button>
              </div>
                )
                :
                (
                  <div class="uk-margin">
            <h4 style={{textAlign:"center"}}>Look for us in your inbox!</h4>
              </div>
                )}
             
            </form>
            )
            :
            (
              <form>
            
            {this.state.isSubmitted === false ?
                (
                  
                  <div class="uk-margin" style={{width:"90%",marginLeft:"auto",marginRight:"auto"}}>
            <input 
              style={{width:"70%",color:"#307765",marginLeft:"auto",marginRight:"auto", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="signup"
              name="email" 
              type="text" 
              placeholder="Email address"
              labelText="Your Email"
              value={this.state.email}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({email:e.target.value})
              }}
              />
            <button 
              style={{backgroundColor:"#307765",opacity:1,color:"white"}} 
              className="uk-button uk-button-default"
              onClick={this.submitHandler}
              >Subscribe</button>
              </div>
                )
                :
                (
                  <div class="uk-margin">
            <h4 style={{textAlign:"center"}}>Look for us in your inbox!</h4>
              </div>
                )}
             
            </form>
            )}
            </DialogContent>
      </Dialog>
        
        {breakpoints.sm ? 
        (
          <div id="coverImg" class="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ backgroundImage: `url(${mobileBackground})` }}>
        <div style={{marginTop:"40px",textAlign:"center"}} className="uk-container uk-container-large" >
        <h3 style={{width:"100%"}}>A newsletter about all things NWA delivered to your inbox every weekday</h3>
        <div>
        <form class="uk-form">
            
              <div class="test">
                    
              
                {this.state.isSubmitted === false ?
                (
                  <div class="uk-margin">
            <input 
              style={{width:"60%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="signup"
              name="email" 
              type="text" 
              placeholder="Email address"
              labelText="Your Email"
              value={this.state.email}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({email:e.target.value})
              }}
              />
            <button 
              style={{backgroundColor:"#307765",opacity:1,color:"white"}} 
              className="uk-button uk-button-default"
              onClick={this.submitHandler}
              >Subscribe</button>
              </div>
                )
                :
                (
                  <div class="uk-margin">
            <h4 style={{textAlign:"center"}}>Look for us in your inbox!</h4>
              </div>
                )}
        
              
                </div>
            
          </form>
        </div>
        <h3 style={{marginTop:"0px",paddingTop:"0px",paddingLeft:"0px",marginLeft:"0px"}}>Check out our latest newsletters</h3>
          <div style={{marginRight:"auto",marginLeft:"auto",width:"70%"}}>
          <ArticlesComponent articles={data.allStrapiEdition.edges} />
        </div>
        </div>
        </div>
        )
        :
        ( 
          <div id="coverImg" class="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ backgroundImage: `url(${background})` }}>
        <div style={{marginTop:"20px"}} className="uk-container uk-container-large" >
        <h2 style={{width:"55%"}}>A newsletter about all things NWA delivered to your inbox every weekday</h2>
        <div>
        <form class="uk-form">
            
              <div class="test">
                    
              {this.state.isSubmitted === false ?
                (
                  <div class="uk-margin">
            <input style={{width:"35%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="signup"
              name="email" 
              type="text" 
              placeholder="Email address"
              labelText="Your Email"
              value={this.state.email}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({email:e.target.value})
              }}
              />
            <button 
              style={{backgroundColor:"#307765",opacity:1,color:"white"}} 
              className="uk-button uk-button-default"
              onClick={this.submitHandler}
              >Subscribe</button>
              </div>
                )
                :
                (
                  <div class="uk-margin">
            <h4 style={{marginLeft:"15%"}}>Look for us in your inbox!</h4>
              </div>
                )}
                </div>
            
          </form>
        </div>
        <h3 style={{marginTop:"0px",paddingTop:"0px",paddingLeft:"0px",marginLeft:"0px"}}>Check out our latest newsletters</h3>
          <ArticlesComponent articles={data.allStrapiEdition.edges} />
        
        </div>
        </div>
        )}
        
    </div>
    
    
</div>

<div className="uk-section">
  <h2 className="uk-text-center">Read our local spotlights</h2>
  {breakpoints.sm ? 
        (
<div style={{marginLeft:"0%"}}>
<GuidesComponent guides={data.allStrapiGuide.edges} />
</div>
        )
        :
        (
<div style={{marginLeft:"25%"}}>
<GuidesComponent guides={data.allStrapiGuide.edges} />
</div>
        )}
</div>


<div style={{width:"100%",marginTop:"0px"}} uk-grid>
{breakpoints.sm ? 
(
<div className="uk-section">
      
      <h3 className="uk-text-center">Become a fan and support us!</h3>
      <p  style={{marginLeft:"auto",marginRight:"auto",width:"70%"}}>
        At NWA Daily, we're passionate about delivering the content you love. We want to make sure you know all the great things going on in Northwest Arkansas, so you can be as connected as possible with your hometown. 
      </p>
      <p  style={{marginLeft:"auto",marginRight:"auto",width:"70%"}}>
        We're locally owned and operated and want to make sure we can sustainably keep delivering you great content and employing great local folks to do so. Becoming a fan with either a monthly or annual commitment will help us continue to hire local folks to deliver you the best newsletter possible every weekday!
      </p>
      <div>
      {this.state.time === "monthly" ? (
      <button 
                    style={{marginLeft:"21%",marginRight:"auto",width:"30%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={(e) => {
                      console.log("monthly")
                      this.setState({time:"monthly"})
                  }}                    
                    >Monthly</button>
      )
                    :
                    (
                      <button 
                    style={{marginLeft:"21%",marginRight:"auto",width:"30%",backgroundColor:"#525252",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={(e) => {
                      console.log("monthly")
                      this.setState({time:"monthly"})
                  }}                    
                    >Monthly</button>
                    )
                }
      {this.state.time === "annual" ? (
      <button 
                    style={{marginLeft:"auto",marginRight:"auto",width:"30%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={(e) => {
                      console.log("annual")
                      this.setState({time:"annual"})
                  }}                    
                    >Annual</button>
      )
      :
      (
        <button 
                    style={{marginLeft:"auto",marginRight:"auto",width:"30%",backgroundColor:"#525252",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={(e) => {
                      console.log("annual")
                      this.setState({time:"annual"})
                  }}                    
                    >Annual</button>
      )
                }
      </div>
      <form class="uk-form" style={{marginLeft:"auto",marginRight:"auto",width:"100%"}}>
            
              <div class="test">
                    
              {this.state.isSubmitted === false ?
                (
                  <div class="uk-margin">
          
              
                <div className="uk-container">
      
        
            <div style={{display:"inline-block",paddingRight:"20px",marginLeft:"10%",marginBottom:"10px",width:"80%"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body" id="ad-card-sponsor">
                    <h3 className="uk-card-title uk-text-center" id="sponsor-title">Big Fan</h3>
                    {this.state.time === "monthly" ? (
                    <h4 style={{textAlign:"center"}}>$7 / mo</h4>
                    )
                    :
                    (
                      <h4 style={{textAlign:"center"}}>$70 / yr</h4>
                    )
                    }
              {/* <p style={{textAlign:"center"}}>Free</p> */}
              <ul>
                <li>
                Help us meet goals like hiring full time employees
                </li>
                <li>
                Make sustainable, local news curation possible in NWA
                </li>
                <li>
                <strong>Access to exclusive giveaways available only to FANS!</strong>
                </li>
              </ul>
              <div>
              
              {this.state.time === "monthly" ? (
                    <button 
                    style={{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBigMonthlyHandler}
                    >Become a Big Fan</button>
              )
              :
              (
                <button 
                    style={{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBigAnnualHandler}
                    >Become a Big Fan</button>
              )
              }
                    
                    {/* {this.state.basic === "0" ? 
                    (
                    <button 
                      style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ basic: "1" })
                      }}
                      >Select</button>
                      )
                    :
                    (
                      <button style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ basic: "0" })
                      }}
                    >Selected</button>
                    )} */}
                </div>
                </div>

            </div>
            <div style={{paddingRight:"20px",display:"inline-block",marginLeft:"10%",marginBottom:"10px",width:"80%"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Super Fan</h3>
                    {/* <p style={{textDecoration:"line-through",textAlign:"center"}}>$200 / month</p> */}
                    
                    {this.state.time === "monthly" ? (
                    <h4 style={{textAlign:"center"}}>$10 / mo</h4>
                    )
                    :
                    (
                      <h4 style={{textAlign:"center"}}>$100 / yr</h4>
                    )
                    }
              {/* <p style={{textAlign:"center"}}>Free</p> */}
              <ul>
                <li>
                Help us meet goals like hiring full time employees
                </li>
                <li>
                Make sustainable, local news curation possible in NWA
                </li>
                <li>
                <strong>Access to exclusive giveaways available only to FANS!</strong>
                </li>
              </ul>
              {this.state.time === "monthly" ? (
                    <button 
                    style={{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitSuperMonthlyHandler}
                    >Become a Super Fan</button>
              )
              :
              (
                <button 
                    style={{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitSuperAnnualHandler}
                    >Become a Super Fan</button>
              )
              }
                    {/* {this.state.featured === "0" ? 
                    (
                    <button 
                      style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ featured: "1" })
                      }}
                      >Select</button>
                      )
                    :
                    (
                      <button style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ featured: "0" })
                      }}
                    >Selected</button>
                    )} */}
                </div>

            </div>
            <div style={{paddingRight:"20px",display:"inline-block",marginLeft:"10%",marginBottom:"10px",width:"80%"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Mega Fan</h3>
                    {/* <p style={{textDecoration:"line-through",textAlign:"center"}}>$200 / month</p> */}
                    
                    {this.state.time === "monthly" ? (
                    <h4 style={{textAlign:"center"}}>$15 / mo</h4>
                    )
                    :
                    (
                      <h4 style={{textAlign:"center"}}>$150 / yr</h4>
                    )
                    }
              {/* <p style={{textAlign:"center"}}>Free</p> */}
              <ul>
                <li>
                Help us meet goals like hiring full time employees
                </li>
                <li>
                Make sustainable, local news curation possible in NWA
                </li>
                <li>
                <strong>Access to exclusive giveaways available only to FANS!</strong>
                </li>
              </ul>
              {this.state.time === "monthly" ? (
                    <button 
                    style={{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitMegaMonthlyHandler}
                    >Become a Mega Fan</button>
              )
              :
              (
                <button 
                    style={{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitMegaAnnualHandler}
                    >Become a Mega Fan</button>
              )
              }
                    {/* {this.state.featured === "0" ? 
                    (
                    <button 
                      style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ featured: "1" })
                      }}
                      >Select</button>
                      )
                    :
                    (
                      <button style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ featured: "0" })
                      }}
                    >Selected</button>
                    )} */}
                </div>

            </div>
            
        </div>
        <p>
        <img style={{textAlign:"center",marginLeft:"10%",marginRight:"auto",width:"80%",height:"50%"}} src="https://nwa-daily-photos.s3.amazonaws.com/NWA_Daily_Crew_fa690b6c71.jpeg"></img>
      </p>
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
      
      <h3 className="uk-text-center">Become a fan and support us!</h3>
      <p style={{marginLeft:"auto",marginRight:"auto",width:"60%"}}>
        At NWA Daily, we're passionate about delivering the content you love. We want to make sure you know all the great things going on in Northwest Arkansas, so you can be as connected as possible with your hometown. 
      </p>
      <p style={{marginLeft:"auto",marginRight:"auto",width:"60%"}}>
        We're locally owned and operated and want to make sure we can sustainably keep delivering you great content and employing great local folks to do so. Becoming a fan with either a monthly or annual commitment will help us continue to hire local folks to deliver you the best newsletter possible every weekday!
      </p>
      <div>
      {this.state.time === "monthly" ? (
      <button 
                    style={{marginLeft:"41%",marginRight:"auto",width:"8%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={(e) => {
                      console.log("monthly")
                      this.setState({time:"monthly"})
                  }}                    
                    >Monthly</button>
      )
                    :
                    (
                      <button 
                    style={{marginLeft:"41%",marginRight:"auto",width:"8%",backgroundColor:"#525252",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={(e) => {
                      console.log("monthly")
                      this.setState({time:"monthly"})
                  }}                    
                    >Monthly</button>
                    )
                }
      {this.state.time === "annual" ? (
      <button 
                    style={{marginLeft:"auto",marginRight:"auto",width:"8%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={(e) => {
                      console.log("annual")
                      this.setState({time:"annual"})
                  }}                    
                    >Annual</button>
      )
      :
      (
        <button 
                    style={{marginLeft:"auto",marginRight:"auto",width:"8%",backgroundColor:"#525252",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={(e) => {
                      console.log("annual")
                      this.setState({time:"annual"})
                  }}                    
                    >Annual</button>
      )
                }
      </div>
      <form class="uk-form" style={{marginLeft:"auto",marginRight:"auto",width:"80%"}}>
            
              <div class="test">
                    
              {this.state.isSubmitted === false ?
                (
                  <div class="uk-margin">
          
              
                <div className="uk-container">
      
        
            <div style={{display:"inline-block",paddingRight:"20px",width:"31%"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body" id="ad-card-sponsor">
                    <h3 className="uk-card-title uk-text-center" id="sponsor-title">Big Fan</h3>
                    {this.state.time === "monthly" ? (
                    <h4 style={{textAlign:"center"}}>$7 / mo</h4>
                    )
                    :
                    (
                      <h4 style={{textAlign:"center"}}>$70 / yr</h4>
                    )
                    }
              {/* <p style={{textAlign:"center"}}>Free</p> */}
              <ul>
                <li>
                Help us meet goals like hiring full time employees
                </li>
                <li>
                Make sustainable, local news curation possible in NWA
                </li>
                <li>
                <strong>Access to exclusive giveaways available only to FANS!</strong>
                </li>
              </ul>
              <div>
              
              {this.state.time === "monthly" ? (
                    <button 
                    style={{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBigMonthlyHandler}
                    >Become a Big Fan</button>
              )
              :
              (
                <button 
                    style={{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBigAnnualHandler}
                    >Become a Big Fan</button>
              )
              }
                    
                    {/* {this.state.basic === "0" ? 
                    (
                    <button 
                      style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ basic: "1" })
                      }}
                      >Select</button>
                      )
                    :
                    (
                      <button style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ basic: "0" })
                      }}
                    >Selected</button>
                    )} */}
                </div>
                </div>

            </div>
            <div style={{paddingRight:"20px",display:"inline-block",width:"31%"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Super Fan</h3>
                    {/* <p style={{textDecoration:"line-through",textAlign:"center"}}>$200 / month</p> */}
                    
                    {this.state.time === "monthly" ? (
                    <h4 style={{textAlign:"center"}}>$10 / mo</h4>
                    )
                    :
                    (
                      <h4 style={{textAlign:"center"}}>$100 / yr</h4>
                    )
                    }
              {/* <p style={{textAlign:"center"}}>Free</p> */}
              <ul>
                <li>
                Help us meet goals like hiring full time employees
                </li>
                <li>
                Make sustainable, local news curation possible in NWA
                </li>
                <li>
                <strong>Access to exclusive giveaways available only to FANS!</strong>
                </li>
              </ul>
              {this.state.time === "monthly" ? (
                    <button 
                    style={{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitSuperMonthlyHandler}
                    >Become a Super Fan</button>
              )
              :
              (
                <button 
                    style={{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitSuperAnnualHandler}
                    >Become a Super Fan</button>
              )
              }
                    {/* {this.state.featured === "0" ? 
                    (
                    <button 
                      style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ featured: "1" })
                      }}
                      >Select</button>
                      )
                    :
                    (
                      <button style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ featured: "0" })
                      }}
                    >Selected</button>
                    )} */}
                </div>

            </div>
            <div style={{paddingRight:"20px",display:"inline-block",width:"31%"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Mega Fan</h3>
                    {/* <p style={{textDecoration:"line-through",textAlign:"center"}}>$200 / month</p> */}
                    
                    {this.state.time === "monthly" ? (
                    <h4 style={{textAlign:"center"}}>$15 / mo</h4>
                    )
                    :
                    (
                      <h4 style={{textAlign:"center"}}>$150 / yr</h4>
                    )
                    }
              {/* <p style={{textAlign:"center"}}>Free</p> */}
              <ul>
                <li>
                Help us meet goals like hiring full time employees
                </li>
                <li>
                Make sustainable, local news curation possible in NWA
                </li>
                <li>
                <strong>Access to exclusive giveaways available only to FANS!</strong>
                </li>
              </ul>
              {this.state.time === "monthly" ? (
                    <button 
                    style={{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitMegaMonthlyHandler}
                    >Become a Mega Fan</button>
              )
              :
              (
                <button 
                    style={{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitMegaAnnualHandler}
                    >Become a Mega Fan</button>
              )
              }
                    {/* {this.state.featured === "0" ? 
                    (
                    <button 
                      style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ featured: "1" })
                      }}
                      >Select</button>
                      )
                    :
                    (
                      <button style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ featured: "0" })
                      }}
                    >Selected</button>
                    )} */}
                </div>

            </div>
            
        </div>
        <p>
        <img style={{textAlign:"center",marginLeft:"29%",marginRight:"auto",width:"40%",height:"50%"}} src="https://nwa-daily-photos.s3.amazonaws.com/NWA_Daily_Crew_fa690b6c71.jpeg"></img>
      </p>
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


<div style={{width:"100%",marginTop:"0px"}} uk-grid>
{breakpoints.sm ? 
              (
                <div style={{paddingBottom:"50px",marginBottom:"0px"}} className="uk-section uk-section-muted uk-section-large">
                <h2 className="uk-title uk-text-center">Advertise with us</h2>
                <h3 className="uk-text-center" style={{color:"#666",marginLeft:"auto",marginRight:"auto",width:"93%"}}>{`Get in front of ${this.state.emails.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Northwest Arkansans. Select any or all of these options to indicate your interest, submit your email, and we'll get right back to you`}</h3>
                <form class="uk-form" style={{marginLeft:"auto",marginRight:"auto",width:"93%"}}>
                      
                        <div class="test">
                              
                        {this.state.isAdSubmitted === false ?
                          (
                            <div class="uk-margin">
                      <input style={{width:"70%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                        className="uk-input" 
                        id="advertiser"
                        name="advertiser" 
                        type="text" 
                        placeholder="Email address"
                        labelText="Your Email"
                        value={this.state.advertiser}
                          onChange={(e) => {
                            console.log(e.target.value)
                            this.setState({advertiser:e.target.value})
                        }}
                        />
                      <button 
                        style={{backgroundColor:"#307765",opacity:1,color:"white"}} 
                        className="uk-button uk-button-default"
                        onClick={this.submitAdHandler}
                        >Submit</button>
                        </div>
                          )
                          :
                          (
                            <div class="uk-margin">
                      <h4 style={{textAlign:"center"}}>We'll be with you shortly!</h4>
                        </div>
                          )}
                          </div>
                      
                    </form>
    <div className="uk-container">
      
        
            <div style={{display:"block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body" id="ad-card-sponsor">
                    <h3 className="uk-card-title uk-text-center" id="sponsor-title">Title Sponsor</h3>
                    <p>This ad spot is the most prominent spot we offer. It includes your logo and a description about your business or organization and will be the first thing our readers see.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/sponsor_3905f62571.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    {this.state.sponsor === "0" ? 
                    (
                    <button 
                      style={{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ sponsor: "1" })
                      }}
                      >Select</button>
                      )
                    :
                    (
                      <button style={{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ sponsor: "0" })
                      }}
                    >Selected</button>
                    )}
                </div>

            </div>
            <div style={{paddingTop:"4.5%",display:"block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Article Sponsor</h3>
                    <p>This ad spot is perfect for a business or that wants to tell its story. It is a block that includes a photo, a header, and text and looks like the rest of our content.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/extened_Text_decd614915.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    {this.state.extendedText === "0" ? 
                    (
                    <button 
                      style={{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ extendedText: "1" })
                      }}
                      >Select</button>
                      )
                    :
                    (
                      <button style={{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ extendedText: "0" })
                      }}
                    >Selected</button>
                    )}
                </div>

            </div>
            <div style={{paddingTop:"4.5%",display:"block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Daily Pick</h3>
                    <p>This ad spot is a one line promotion of your business in a section at the bottom of the news letter. This is the most cost effective way to partner with us.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/bulletin_0a3e0d74e3.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    {this.state.oneLiner === "0" ? 
                    (
                    <button 
                      style={{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ oneLiner: "1" })
                      }}
                      >Select</button>
                    )
                    :
                    (
                      <button 
                      style={{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ oneLiner: "0" })
                      }}
                      >Selected</button>
                    )}
                </div>

            </div>
        </div>
        </div>
              )
              :
              (
                <div style={{paddingBottom:"50px",marginBottom:"0px"}} className="uk-section uk-section-muted uk-section-large">
      <h2 className="uk-title uk-text-center">Advertise with us</h2>
      <h3 className="uk-text-center" style={{color:"#666",marginLeft:"auto",marginRight:"auto",width:"70%"}}>{`Get in front of ${this.state.emails.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Northwest Arkansans. Select any or all of these options to indicate your interest, submit your email, and we'll get right back to you`}</h3>
      <form class="uk-form" style={{marginLeft:"auto",marginRight:"auto",width:"50%"}}>
            
              <div class="test">
                    
              {this.state.isAdSubmitted === false ?
                (
                  <div class="uk-margin">
            <input style={{width:"70%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="advertiser"
              name="advertiser" 
              type="text" 
              placeholder="Email address"
              labelText="Your Email"
              value={this.state.advertiser}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({advertiser:e.target.value})
              }}
              />
            <button 
              style={{backgroundColor:"#307765",opacity:1,color:"white"}} 
              className="uk-button uk-button-default"
              onClick={this.submitAdHandler}
              >Submit</button>
              </div>
                )
                :
                (
                  <div class="uk-margin">
            <h4 style={{textAlign:"center"}}>We'll be with you shortly!</h4>
              </div>
                )}
                </div>
            
          </form>
<div className="uk-container" style={{paddingTop:"25px",marginTop:"25px"}}>
        
            <div style={{width:"30%",display:"inline-block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body" id="ad-card-sponsor">
                    <h3 className="uk-card-title uk-text-center" id="sponsor-title">Title Sponsor</h3>
                    <p>This ad spot is the most prominent spot we offer. It includes your logo and a description about your business or organization and will be the first thing our readers see.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/sponsor_3905f62571.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    {this.state.sponsor === "0" ? 
                    (
                    <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ sponsor: "1" })
                      }}
                    >Select</button>
                    )
                    :
                    (
                      <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ sponsor: "0" })
                      }}
                    >Selected</button>
                    )}
                </div>

            </div>
            <div style={{width:"30%",paddingLeft:"4.5%",display:"inline-block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Article Sponsor</h3>
                    <p>This ad spot is perfect for a business or that wants to tell its story. It is a block that includes a photo, a header, and text and looks like the rest of our content.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/extened_Text_decd614915.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    {this.state.extendedText === "0" ? 
                    (
                    <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                    onClick={e => {
                      this.setState({ extendedText: "1" })
                    }}
                    >Select</button>
                    )
                    :
                    (
                      <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ extendedText: "0" })
                      }}
                    >Selected</button>
                    )}
                </div>

            </div>
            <div style={{width:"30%",paddingLeft:"4.5%",display:"inline-block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Daily Pick</h3>
                    <p>This ad spot is a one line promotion of your business in a section at the bottom of the news letter. This is the most cost effective way to partner with us.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/bulletin_0a3e0d74e3.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    {this.state.oneLiner === "0" ? 
                    (
                    <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                    onClick={e => {
                      this.setState({ oneLiner: "1" })
                    }}
                    >Select</button>
                    )
                    :
                    (
                      <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ oneLiner: "0" })
                      }}
                    >Selected</button>
                    )}
                </div>

            </div>
        </div>
        </div>
              )}
      </div>
      
        
      </div>
      
    </Layout>
    )}
    />     
  );
};
}


export default withBreakpoints(IndexPage);
