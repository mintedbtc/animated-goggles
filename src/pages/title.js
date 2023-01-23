import React from "react";
import { Link, graphql, useStaticQuery, StaticQuery, navigate } from "gatsby";
import Layout from "../components/layout";
import CustomCalendarComponent from '../components/CustomCalendarComponent';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { withBreakpoints } from 'gatsby-plugin-breakpoints';
import "../assets/css/main.css";
import 'react-quill/dist/quill.snow.css';
import moment from 'moment';

const momentDateFormat = "MM/DD/YYYY";

const currentDate = new Date();
const fourteenDaysFromNow = new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000);
const sevenDaysFromNow = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
const endOfYear = new Date(new Date().getFullYear(), 11, 31);
let nextDate = fourteenDaysFromNow;
let startDate = currentDate
const datesArray = []


while (nextDate <= endOfYear) {
  datesArray.push(nextDate);
  nextDate = new Date(nextDate.getTime() + 24 * 60 * 60 * 1000);
}

while (startDate <= sevenDaysFromNow) {
  console.log(startDate)
  datesArray.push(startDate);
  startDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);
}

const date = new Date();
const year = date.getFullYear();
const weekends = [];

for (let month = 0; month < 12; month++) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
        const currentDate = new Date(year, month, day);
        if (currentDate.getDay() === 6 || currentDate.getDay() === 0) {
            datesArray.push(currentDate);
        }
    }
}

const holidays = datesArray


class TitlePage extends React.Component {
  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {
        this.ReactQuill = require('react-quill')
      }
    this.emailRef = React.createRef();
    this.state = {
      link: "",
      instagram: "",
      organization: "",
      description: "",
      location: "",
      basic: "0",
      facebook: "",
      isModalOpen: false,
      submitError: false,
      isSubmitted: false,
      date: new Date(),
      price: 0,
      dpDate: moment().toDate(),
      ipDate: moment().format(momentDateFormat)
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

  
  handleDPChange (val) {
    val.setHours(val.getHours() - 5)
    console.log(val.toISOString().slice(0,10))
    fetch(`https://nwadailybackend.herokuapp.com/sponsors?_where[0][date]=${val.toISOString().split('T')[0]}`, {
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
        if (resData.length === 0) {
          this.setState({price:0});
        }
        else {
          this.setState({price:resData[0].price});
        }
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({dpDate:val, ipDate:moment(val).format(momentDateFormat)});
  }; 

  handleIpChange(val){
    let d = moment(val, momentDateFormat);
    if(d.isValid()){
        this.setState({dpDate:d.toDate()});
    }
    this.setState({ipDate:val});
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
    if (this.state.organization !== "") {
    
    // const email = this.state.email.toLowerCase()
    const location = this.state.location
    const link = this.state.link
    const organization = this.state.organization
    const description = this.state.description
    const instagram = this.state.instagram
    const facebook = this.state.facebook

    const requestBody = {
      Location: location,
      url: link,
      instagram: instagram,
      // source: postId,
      facebook: facebook,
      Name: organization,
      slug: organization.replaceAll(' ', '-').toLowerCase(),
      description: description,
      // property: "NWA Daily"
      }
  
    fetch(`https://nwadailybackend.herokuapp.com/partners`, {
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

  submitBasicHandler = (e) => {
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
      if (this.state.organization !== "") {
    
        // const email = this.state.email.toLowerCase()
        const location = this.state.location
        const link = this.state.link
        const organization = this.state.organization
        const description = this.state.description
        const instagram = this.state.instagram
        const facebook = this.state.facebook
    
        const requestBody = {
            Location: location,
            url: link,
            instagram: instagram,
            // source: postId,
            facebook: facebook,
            Name: organization,
            slug: organization.replaceAll(' ', '-').toLowerCase(),
            description: description,
            // property: "NWA Daily"
          }
  
    fetch(`https://nwadailybackend.herokuapp.com/partners`, {
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
        navigate('https://buy.stripe.com/4gwbJS9NS4rB9OgbIL')
        
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

  submitFeaturedHandler = (e) => {
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
      if (this.state.organization !== "") {
    
        // const email = this.state.email.toLowerCase()
        const location = this.state.location
        const link = this.state.link
        const organization = this.state.organization
        const description = this.state.description
        const instagram = this.state.instagram
        const facebook = this.state.facebook
    
        const requestBody = {
          Location: location,
          url: link,
          instagram: instagram,
          // source: postId,
          facebook: facebook,
          Name: organization,
          slug: organization.replaceAll(' ', '-').toLowerCase(),
          description: description,
          // property: "NWA Daily"
          }
  
    fetch(`https://nwadailybackend.herokuapp.com/partners`, {
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
        navigate('https://buy.stripe.com/8wM29i7FK8HR9OgbIK')
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
      if (this.state.organization !== "") {
    
        // const email = this.state.email.toLowerCase()
        const location = this.state.location
        const link = this.state.link
        const organization = this.state.organization
        const description = this.state.description
        const instagram = this.state.instagram
        const facebook = this.state.facebook
    
        const requestBody = {
          Location: location,
          url: link,
          instagram: instagram,
          // source: postId,
          facebook: facebook,
          Name: organization,
          slug: organization.replaceAll(' ', '-').toLowerCase(),
          description: description,
          // property: "NWA Daily"
          }
  
    fetch(`https://nwadailybackend.herokuapp.com/partners`, {
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
      allStrapiSponsor(sort: {order: DESC, fields: date}) {
        edges {
          node {
            website
            signup
            partnerMessage 
            partnerWebsite
            partnerLogo {
              publicURL
            }
            date
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
      
      <h3 className="uk-text-center">Sponsor a newsletter!</h3>
      <p className="uk-text-center" style={{marginLeft:"auto",marginRight:"auto",width:"60%"}}></p>
      <form class="uk-form" style={{marginLeft:"auto",marginRight:"auto",width:"60%"}}>
            
      <div class="test">
                    
                    {this.state.isSubmitted === false ?
                      (
                        <div class="uk-margin">
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
                    Title Spot Blurb (280 characters or less)
                    </label>
                    <br></br>
                    {(typeof window !== 'undefined' && ReactQuill) ? 
                      (
                    <ReactQuill theme="snow" 
                        name="jobDescription"
                        placeholde="Write what you want to say about your business or organization here"
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
                    Link for ad spot
                    </label>
                    <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                      className="uk-input" 
                      id="jobLink"
                      name="link" 
                      type="text" 
                      placeholder="Link for ad spot"
                      labelText="Link for ad spot"
                      value={this.state.link}
                        onChange={(e) => {
                          console.log(e.target.value)
                          this.setState({link:e.target.value})
                      }}
                      />
                      <br></br>
                      <br></br>
                      <label>
                    Link to logo
                    </label>
                    <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                      className="uk-input" 
                      id="jobLink"
                      name="link" 
                      type="text" 
                      placeholder="Link to logo"
                      labelText="Link to logo"
                      value={this.state.logo}
                        onChange={(e) => {
                          console.log(e.target.value)
                          this.setState({link:e.target.value})
                      }}
                      />
                      <br></br>
                      <br></br>
                      <label>
                    Date for ad to run
                    </label>
                      <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                      className="uk-input" 
                      id="date"
                      name="date" 
                      type="date" 
                      min="2023-01-09" max="2023-01-17"
                      placeholder="Ad Date"
                      labelText="Ad Date"
                      value={this.state.date}
                        onChange={(e) => {
                          console.log(e.target.value)
                          this.setState({date:e.target.value})
                      }}
                      />
                      
                      <br></br>
                      <br></br>
                      <div style={{textAlign: "center"}}>
                          <button 
                          style={{width:"50%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                          className="uk-button uk-button-default"
                          onClick={this.submitBasicHandler}
                          >Submit</button>
                          </div>
                      <br></br>
                      <div className="uk-container">
                  
                  
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
      
      <h3 className="uk-text-center">Sponsor a newsletter!</h3>
      <p className="uk-text-center" style={{marginLeft:"auto",marginRight:"auto",width:"60%"}}>Every day NWA Daily is sent out to over 22,000 subscribers and has a 50% plus open rate. It's a great way to reach an engaged, local audience.</p>
      <form class="uk-form" style={{marginLeft:"auto",marginRight:"auto",width:"75%"}}>
            
              <div class="test">
                    
              {this.state.isSubmitted === false ?
                (
                  <div class="uk-margin">
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
              Title Spot Blurb (280 characters or less)
              </label>
              <br></br>
              {(typeof window !== 'undefined' && ReactQuill) ? 
                (
              <ReactQuill theme="snow" 
                  name="jobDescription"
                  placeholde="Write what you want to say about your business or organization here"
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
              Link for ad spot
              </label>
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                className="uk-input" 
                id="jobLink"
                name="link" 
                type="text" 
                placeholder="Link for ad spot"
                labelText="Link for ad spot"
                value={this.state.link}
                  onChange={(e) => {
                    console.log(e.target.value)
                    this.setState({link:e.target.value})
                }}
                />
                <br></br>
                <br></br>
                <label>
              Link to logo
              </label>
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                className="uk-input" 
                id="jobLink"
                name="link" 
                type="text" 
                placeholder="Link to logo"
                labelText="Link to logo"
                value={this.state.logo}
                  onChange={(e) => {
                    console.log(e.target.value)
                    this.setState({link:e.target.value})
                }}
                />
                <br></br>
                <br></br>
                <label>
              Date for ad to run
              </label>
              {/*   <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                className="uk-input" 
                id="date"
                name="date" 
                type="date" 
                min="2023-01-09" max="2023-01-17"
                placeholder="Ad Date"
                labelText="Ad Date"
                value={this.state.date}
                  onChange={(e) => {
                    console.log(e.target.value)
                    this.setState({date:e.target.value})
                }}
                /> */}
                    <>
            
            <DatePicker 
              selected={this.state.dpDate}
              onChange={value => this.handleDPChange(value)}
              filterDate = {(date) => {
                return moment() < date;
              }}
              customInput={ <CustomCalendarComponent
                ipDate={this.state.ipDate}
                handleIpChange={(val)=>this.handleIpChange(val)}
              />}
              dateFormat={"MM/dd/yyyy"}
              showMonthDropdown
              showYearDropdown
              excludeDates={holidays}
              dropdownMode = 'select'
            />
        </>
        <br></br>
                <br></br>
                <div style={{textAlign: "center"}}>
                {this.state.price === 0 ?
                (
                  <h4>This date is unavailable. Please choose another one.</h4>
                )
                :
                (
                  <h4>The title spot for this date is ${this.state.price}</h4>
                )
                }
                </div>
                <br></br>
                <br></br>
                <div style={{textAlign: "center"}}>
                    <button 
                    style={{width:"20%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBasicHandler}
                    >Submit</button>
                    </div>
                <br></br>
                <div className="uk-container">
            
            
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


export default withBreakpoints(TitlePage);

