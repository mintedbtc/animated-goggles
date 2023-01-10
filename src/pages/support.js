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
      title: "",
      organization: "",
      description: "",
      location: "",
      basic: "0",
      featured: "0",
      premium: "0",
      applicationLink: "",
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
    const location = this.state.location
    const organization = this.state.organization
    const description = this.state.description
    const title = this.state.title
    const applicationLink = this.state.applicationLink

    const requestBody = {
        email: email,
        location: location,
        // source: postId,
        title: title,
        organization: organization,
        description: description,
        applicationLink: applicationLink,
        // property: "Tulsa Daily"
      }
  
    fetch(`https://tulsadaily.herokuapp.com/jobs`, {
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
        
      })
      .catch(err => {
        console.log(err);
      });
    //   fetch(`https://tulsadaily.herokuapp.com/signup`, {
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

  submitBasicHandler = (e) => {
    e.preventDefault();
    navigate('https://buy.stripe.com/6oE3dme488HR8KcdQV')
  //   let postId = null
  //   console.log(window.location.href.split('?id=').length)
  //   if (window.location.href.split('?id=').length > 1) {
  //     console.log('idhere')
  //     console.log(window.location.href)
  //     postId = window.location.href.split('?id=')[1]
  //     postId = postId.split('&')[0]
  //     console.log(postId)
  //     }
  //   else {
  //       postId = 'regular'
  //       console.log(postId)
  //     }
  //   if (this.state.email !== "") {
    
  //   const email = this.state.email.toLowerCase()
  //   const location = this.state.location
  //   const organization = this.state.organization
  //   const description = this.state.description
  //   const title = this.state.title
  //   const applicationLink = this.state.applicationLink

  //   const requestBody = {
  //       email: email,
  //       location: location,
  //       // source: postId,
  //       title: title,
  //       organization: organization,
  //       description: description,
  //       type: 'Basic',
  //       applicationLink: applicationLink,
  //       // property: "NWA Daily"
  //     }
  
  //   fetch(`https://nwadailybackend.herokuapp.com/jobs`, {
  //     method: 'POST',
  //     body: JSON.stringify(requestBody),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(res => {
  //       if (res.status !== 200 && res.status !== 201) {
  //         throw new Error('Failed!');
  //       }
  //       return res.json();
  //     })
  //     .then(resData => {
  //       console.log(resData.data)
  //       this.setState({
  //         isModalOpen: false,
  //         isSubmitted: true
  //       })
  //       navigate('https://buy.stripe.com/3cs01a0dif6f5y0144')
        
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   //   fetch(`https://nwadailybackend.herokuapp.com/signup`, {
  //   //   method: 'POST',
  //   //   body: JSON.stringify({email: email}),
  //   //   headers: {
  //   //     'Content-Type': 'application/json'
  //   //   },
  //   //   mode: 'cors'
  //   // })
  //   //   .then(res => {
  //   //     if (res.status !== 200 && res.status !== 201) {
  //   //       console.log(res.status)
  //   //       return res.status
  //   //     }
  //   //     return res;
  //   //   })
  //   //   .catch(err => {
  //   //     console.log(err);
  //   //   });
  // }
  // else {
  //   this.setState({
  //     submitError: true,
  //   })
  //   console.log(true)
  // }
  
  }

  submitFeaturedHandler = (e) => {
    e.preventDefault();
    navigate('https://buy.stripe.com/6oE3dme488HR8KcdQV')
  //   let postId = null
  //   console.log(window.location.href.split('?id=').length)
  //   if (window.location.href.split('?id=').length > 1) {
  //     console.log('idhere')
  //     console.log(window.location.href)
  //     postId = window.location.href.split('?id=')[1]
  //     postId = postId.split('&')[0]
  //     console.log(postId)
  //     }
  //   else {
  //       postId = 'regular'
  //       console.log(postId)
  //     }
  //   if (this.state.email !== "") {
    
  //   const email = this.state.email.toLowerCase()
  //   const location = this.state.location
  //   const organization = this.state.organization
  //   const description = this.state.description
  //   const title = this.state.title
  //   const applicationLink = this.state.applicationLink

  //   const requestBody = {
  //       email: email,
  //       location: location,
  //       // source: postId,
  //       title: title,
  //       organization: organization,
  //       description: description,
  //       type: 'Basic',
  //       applicationLink: applicationLink,
  //       // property: "NWA Daily"
  //     }
  
  //   fetch(`https://nwadailybackend.herokuapp.com/jobs`, {
  //     method: 'POST',
  //     body: JSON.stringify(requestBody),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(res => {
  //       if (res.status !== 200 && res.status !== 201) {
  //         throw new Error('Failed!');
  //       }
  //       return res.json();
  //     })
  //     .then(resData => {
  //       console.log(resData.data)
  //       this.setState({
  //         isModalOpen: false,
  //         isSubmitted: true
  //       })
  //       navigate('https://buy.stripe.com/3cs01a0dif6f5y0144')
        
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   //   fetch(`https://nwadailybackend.herokuapp.com/signup`, {
  //   //   method: 'POST',
  //   //   body: JSON.stringify({email: email}),
  //   //   headers: {
  //   //     'Content-Type': 'application/json'
  //   //   },
  //   //   mode: 'cors'
  //   // })
  //   //   .then(res => {
  //   //     if (res.status !== 200 && res.status !== 201) {
  //   //       console.log(res.status)
  //   //       return res.status
  //   //     }
  //   //     return res;
  //   //   })
  //   //   .catch(err => {
  //   //     console.log(err);
  //   //   });
  // }
  // else {
  //   this.setState({
  //     submitError: true,
  //   })
  //   console.log(true)
  // }
  
  }

  submitPremiumHandler = (e) => {
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
    const organization = this.state.organization
    const description = this.state.description
    const title = this.state.title
    const applicationLink = this.state.applicationLink

    const requestBody = {
        email: email,
        location: location,
        // source: postId,
        title: title,
        organization: organization,
        description: description,
        type: 'Premium',
        applicationLink: applicationLink,
        // property: "Tulsa Daily"
      }
  
    fetch(`https://tulsadaily.herokuapp.com/jobs`, {
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
        navigate('https://buy.stripe.com/6oE8xGd04cY78Kc3cd')
      })
      .catch(err => {
        console.log(err);
      });
    //   fetch(`https://tulsadaily.herokuapp.com/signup`, {
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
      
      <h3 className="uk-text-center">Become a fan and support us!</h3>
      <p  style={{marginLeft:"auto",marginRight:"auto",width:"70%"}}>
        At NWA Daily, we love delivering the you the content you love. We want to make sure you know all the great things going on in Northwest Arkansas, so you can be as connected as possible with your hometown. 
      </p>
      <p  style={{marginLeft:"auto",marginRight:"auto",width:"70%"}}>
        We're locally owned and operated and want to make sure we can sustainably keep delivering you great content and employing great local folks to do so. Becoming a fan with either a monthly or annual membership will help us continue to hire local folks to deliver you the best newsletter possible every weekday!
      </p>
      <p>
        <img style={{textAlign:"center",marginLeft:"20%",marginRight:"auto",width:"60%",height:"50%"}} src="https://nwa-daily-photos.s3.amazonaws.com/NWA_Daily_Crew_fa690b6c71.jpeg"></img>
      </p>
      <form class="uk-form" style={{marginLeft:"auto",marginRight:"auto",width:"100%"}}>
            
              <div class="test">
                    
              {this.state.isSubmitted === false ?
                (
                  <div class="uk-margin">
          
              
                <div className="uk-container">
      
        
            <div style={{display:"inline-block",paddingRight:"20px",marginLeft:"10%", marginBottom:"10px",width:"80%",textAlign:"center"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body" id="ad-card-sponsor">
                    <h3 className="uk-card-title uk-text-center" id="sponsor-title">Big Fan</h3>
                    <p style={{textAlign:"center"}}>$7 / mo</p>
              {/* <p style={{textAlign:"center"}}>Free</p> */}
              <ul>
                <li>
                Support NWA Daily with a monthly membership
                </li>
                <li>
                Make sustainable, local journalism possible in NWA
                </li>
                <li>
                Help us keep growing and offering you better content!
                </li>
              </ul>
              <div>
              <div style={{textAlign: "center",display:"inline-block"}}>
                    <button 
                    style={{width:"50%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBasicHandler}
                    >$7/mo</button>
                    <button 
                    style={{width:"50%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBasicHandler}
                    >$70/yr</button>
                    </div>
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
            <div style={{display:"inline-block",paddingRight:"20px",marginLeft:"10%", marginBottom:"10px",width:"80%",textAlign:"center"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Super Fan</h3>
                    {/* <p style={{textDecoration:"line-through",textAlign:"center"}}>$200 / month</p> */}
                    <p style={{textAlign:"center"}}>$10 / mo</p>
              {/* <p style={{textAlign:"center"}}>Free</p> */}
              <ul>
                <li>
                Support NWA Daily with an annual membership
                </li>
                <li>
                Make sustainable, local journalism possible in NWA
                </li>
                <li>
                Help us keep growing and offering you better content!
                </li>
              </ul>
              <div style={{textAlign: "center"}}>
              <button 
                    style={{width:"50%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBasicHandler}
                    >$10/mo</button>
                    <button 
                    style={{width:"50%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBasicHandler}
                    >$100/yr</button>
                    </div>
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
            <div style={{display:"inline-block",paddingRight:"20px",marginLeft:"10%", marginBottom:"10px",width:"80%",textAlign:"center"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Mega Fan</h3>
                    {/* <p style={{textDecoration:"line-through",textAlign:"center"}}>$200 / month</p> */}
                    <p style={{textAlign:"center"}}>$15 / mo</p>
              {/* <p style={{textAlign:"center"}}>Free</p> */}
              <ul>
                <li>
                Support NWA Daily with an annual membership
                </li>
                <li>
                Make sustainable, local journalism possible in NWA
                </li>
                <li>
                Help us keep growing and offering you better content!
                </li>
              </ul>
              <div style={{textAlign: "center"}}>
              <button 
                    style={{width:"50%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBasicHandler}
                    >$15/mo</button>
                    <button 
                    style={{width:"50%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBasicHandler}
                    >$150/yr</button>
                    </div>
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
      <p className="uk-text-center" style={{marginLeft:"auto",marginRight:"auto",width:"60%"}}>
        At NWA Daily, we love delivering the you the content you love. We want to make sure you know all the great things going on in Northwest Arkansas, so you can be as connected as possible with your hometown. 
      </p>
      <p className="uk-text-center" style={{marginLeft:"auto",marginRight:"auto",width:"60%"}}>
        We're locally owned and operated and want to make sure we can sustainably keep delivering you great content and employing great local folks to do so. Becoming a fan with either a monthly or annual membership will help us continue to hire local folks to deliver you the best newsletter possible every weekday!
      </p>
      <p>
        <img style={{textAlign:"center",marginLeft:"28%",marginRight:"auto",width:"40%",height:"50%"}} src="https://nwa-daily-photos.s3.amazonaws.com/NWA_Daily_Crew_fa690b6c71.jpeg"></img>
      </p>
      <form class="uk-form" style={{marginLeft:"auto",marginRight:"auto",width:"75%"}}>
            
              <div class="test">
                    
              {this.state.isSubmitted === false ?
                (
                  <div class="uk-margin">
          
              
                <div className="uk-container">
      
        
            <div style={{display:"inline-block",paddingRight:"20px",width:"30%"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body" id="ad-card-sponsor">
                    <h3 className="uk-card-title uk-text-center" id="sponsor-title">Big Fan</h3>
                    <p style={{textAlign:"center"}}>$7 / mo</p>
              {/* <p style={{textAlign:"center"}}>Free</p> */}
              <ul>
                <li>
                Support NWA Daily with a monthly membership
                </li>
                <li>
                Make sustainable, local journalism possible in NWA
                </li>
                <li>
                Help us keep growing and offering you better content!
                </li>
              </ul>
              <div>
              <div style={{textAlign: "center",display:"inline-block"}}>
                    <button 
                    style={{width:"50%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBasicHandler}
                    >$7/mo</button>
                    <button 
                    style={{width:"50%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBasicHandler}
                    >$70/yr</button>
                    </div>
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
            <div style={{paddingRight:"20px",display:"inline-block",width:"30%"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Super Fan</h3>
                    {/* <p style={{textDecoration:"line-through",textAlign:"center"}}>$200 / month</p> */}
                    <p style={{textAlign:"center"}}>$10 / mo</p>
              {/* <p style={{textAlign:"center"}}>Free</p> */}
              <ul>
                <li>
                Support NWA Daily with an annual membership
                </li>
                <li>
                Make sustainable, local journalism possible in NWA
                </li>
                <li>
                Help us keep growing and offering you better content!
                </li>
              </ul>
              <div style={{textAlign: "center"}}>
              <button 
                    style={{width:"50%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBasicHandler}
                    >$10/mo</button>
                    <button 
                    style={{width:"50%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBasicHandler}
                    >$100/yr</button>
                    </div>
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
            <div style={{paddingRight:"20px",display:"inline-block",width:"30%"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Mega Fan</h3>
                    {/* <p style={{textDecoration:"line-through",textAlign:"center"}}>$200 / month</p> */}
                    <p style={{textAlign:"center"}}>$15 / mo</p>
              {/* <p style={{textAlign:"center"}}>Free</p> */}
              <ul>
                <li>
                Support NWA Daily with an annual membership
                </li>
                <li>
                Make sustainable, local journalism possible in NWA
                </li>
                <li>
                Help us keep growing and offering you better content!
                </li>
              </ul>
              <div style={{textAlign: "center"}}>
              <button 
                    style={{width:"50%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBasicHandler}
                    >$15/mo</button>
                    <button 
                    style={{width:"50%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBasicHandler}
                    >$150/yr</button>
                    </div>
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
