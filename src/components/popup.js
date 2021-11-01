import React from "react";
import { Link, graphql, useStaticQuery, StaticQuery } from "gatsby";
import Layout from "../components/layout";
import { withBreakpoints } from 'gatsby-plugin-breakpoints';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from '@material-ui/core/IconButton';
import Close from "@material-ui/icons/Close";
import "../assets/css/main.css";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.state = {
      email: "",
      isModalOpen: false,
      submitError: false,
      isSubmitted: false,
      date: new Date()
    }
  }

  componentDidMount(){
		// Set delay in milliseconds
		window.setTimeout(() =>{this.setState({ isModalOpen: true })}, 2000);
	}  

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
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

  submitHandler = (e) => {
    e.preventDefault();
    
    let postId = null
    console.log(window.location.href.split('article/').length)
    if (window.location.href.split('article/').length > 1) {
      console.log('idhere')
      console.log(window.location.href)
      postId = 'article ' + window.location.href.split('article/')[1]
      postId = postId.split('&')[0]
      console.log(postId)
      }
    else if (window.location.href.split('story/').length > 1) {
        console.log('idhere')
        console.log(window.location.href)
        postId = 'story ' + window.location.href.split('story/')[1]
        postId = postId.split('&')[0]
        console.log(postId)
        }
    else if (window.location.href.split('post/').length > 1) {
            console.log('idhere')
            console.log(window.location.href)
            postId = 'post ' + window.location.href.split('post/')[1]
            postId = postId.split('&')[0]
            console.log(postId)
            }
    else if (window.location.href.split('guide/').length > 1) {
              console.log('idhere')
              console.log(window.location.href)
              postId = 'guide ' + window.location.href.split('guide/')[1]
              postId = postId.split('&')[0]
              console.log(postId)
              }
    else {
        postId = 'regular'
        console.log(postId)
      }
    if (this.state.email !== "") {
    
    const email = this.state.email.toLowerCase()
    const requestBody = {
        email: email,
        location: "subscribe",
        source: postId,
        subscribeDate: this.state.date,
        property: "NWA Daily"
      }
  
    fetch(`https://nwadailybackend.herokuapp.com/emails`, {
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
      fetch(`https://nwadailybackend.herokuapp.com/signup`, {
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

  render() {
    const { breakpoints } = this.props;
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
          <h3 style={{fontWeight:"bold"}}>Join thousands of NWA locals and subscribe to the free daily newsletter</h3>
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
    </div>
    )}
    />     
  );
}
}


export default withBreakpoints(Popup);