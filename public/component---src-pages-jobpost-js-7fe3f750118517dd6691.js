"use strict";(self.webpackChunknwa_daily=self.webpackChunknwa_daily||[]).push([[890],{39828:function(e,t,l){l.r(t);var a=l(51721),n=l(67294),o=l(25444),i=l(67312),r=l(97026),c=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleInputChange=function(e){var t;e.preventDefault(),console.log("test");var l=e.target,n=l.value,o=l.name;console.log(o),a.setState(((t={})[o]=n,t))},a.submitHandler=function(e){e.preventDefault();var t=null;if(console.log(window.location.href.split("?id=").length),window.location.href.split("?id=").length>1?(console.log("idhere"),console.log(window.location.href),t=(t=window.location.href.split("?id=")[1]).split("&")[0],console.log(t)):(t="regular",console.log(t)),""!==a.state.email){var l=a.state.email.toLowerCase(),n=a.state.location,o=a.state.organization,i=a.state.description,r={email:l,location:n,title:a.state.title,organization:o,description:i,applicationLink:a.state.applicationLink};fetch("https://nwadailybackend.herokuapp.com/jobs",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(e){console.log(e.data),a.setState({isModalOpen:!1,isSubmitted:!0})})).catch((function(e){console.log(e)}))}else a.setState({submitError:!0}),console.log(!0)},a.submitBasicHandler=function(e){e.preventDefault();var t=null;if(console.log(window.location.href.split("?id=").length),window.location.href.split("?id=").length>1?(console.log("idhere"),console.log(window.location.href),t=(t=window.location.href.split("?id=")[1]).split("&")[0],console.log(t)):(t="regular",console.log(t)),""!==a.state.email){var l=a.state.email.toLowerCase(),n=a.state.location,i=a.state.organization,r=a.state.description,c={email:l,location:n,title:a.state.title,organization:i,description:r,type:"Basic",applicationLink:a.state.applicationLink};fetch("https://nwadailybackend.herokuapp.com/jobs",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(e){console.log(e.data),a.setState({isModalOpen:!1,isSubmitted:!0}),(0,o.navigate)("https://buy.stripe.com/3cs01a0dif6f5y0144")})).catch((function(e){console.log(e)}))}else a.setState({submitError:!0}),console.log(!0)},a.submitFeaturedHandler=function(e){e.preventDefault();var t=null;if(console.log(window.location.href.split("?id=").length),window.location.href.split("?id=").length>1?(console.log("idhere"),console.log(window.location.href),t=(t=window.location.href.split("?id=")[1]).split("&")[0],console.log(t)):(t="regular",console.log(t)),""!==a.state.email){var l=a.state.email.toLowerCase(),n=a.state.location,i=a.state.organization,r=a.state.description,c={email:l,location:n,title:a.state.title,organization:i,description:r,type:"Featured",applicationLink:a.state.applicationLink};fetch("https://nwadailybackend.herokuapp.com/jobs",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(e){console.log(e.data),a.setState({isModalOpen:!1,isSubmitted:!0}),(0,o.navigate)("https://buy.stripe.com/8wM29i7FK8HR9OgbIK")})).catch((function(e){console.log(e)}))}else a.setState({submitError:!0}),console.log(!0)},a.submitPremiumHandler=function(e){e.preventDefault();var t=null;if(console.log(window.location.href.split("?id=").length),window.location.href.split("?id=").length>1?(console.log("idhere"),console.log(window.location.href),t=(t=window.location.href.split("?id=")[1]).split("&")[0],console.log(t)):(t="regular",console.log(t)),""!==a.state.email){var l=a.state.email.toLowerCase(),n=a.state.location,i=a.state.organization,r=a.state.description,c={email:l,location:n,title:a.state.title,organization:i,description:r,type:"Premium",applicationLink:a.state.applicationLink};fetch("https://nwadailybackend.herokuapp.com/jobs",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(e){console.log(e.data),a.setState({isModalOpen:!1,isSubmitted:!0}),(0,o.navigate)("https://buy.stripe.com/6oE8xGd04cY78Kc3cd")})).catch((function(e){console.log(e)}))}else a.setState({submitError:!0}),console.log(!0)},"undefined"!=typeof window&&(a.ReactQuill=l(8070)),a.emailRef=n.createRef(),a.state={email:"",title:"",organization:"",description:"",location:"",basic:"0",featured:"0",premium:"0",applicationLink:"",isModalOpen:!1,submitError:!1,isSubmitted:!1,date:new Date},a}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props.breakpoints,l=this.ReactQuill;return n.createElement(o.StaticQuery,{query:"3055651617",render:function(a){return n.createElement(i.Z,{seo:a.strapiHomepage.seo},n.createElement("div",null,t.sm?n.createElement("div",{className:"uk-section"},n.createElement("h3",{className:"uk-text-center"},"Post a job on our job board"),n.createElement("p",{className:"uk-text-center",style:{marginLeft:"auto",marginRight:"auto",width:"60%"}}),n.createElement("form",{class:"uk-form",style:{marginLeft:"auto",marginRight:"auto",width:"60%"}},n.createElement("div",{class:"test"},!1===e.state.isSubmitted?n.createElement("div",{class:"uk-margin"},n.createElement("label",null,"Job Title"),n.createElement("br",null),n.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobTitle",name:"title",type:"text",placeholder:"Job Title",labelText:"Job Title",value:e.state.title,onChange:function(t){console.log(t.target.value),e.setState({title:t.target.value})}}),n.createElement("br",null),n.createElement("br",null),n.createElement("label",null,"Organization"),n.createElement("br",null),n.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobOrganization",name:"organization",type:"text",placeholder:"Organization",labelText:"Organization",value:e.state.organization,onChange:function(t){console.log(t.target.value),e.setState({organization:t.target.value})}}),n.createElement("br",null),n.createElement("br",null),n.createElement("label",null,"Job Location"),n.createElement("br",null),n.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobLocation",name:"location",type:"text",placeholder:"Job Location",labelText:"Location",value:e.state.location,onChange:function(t){console.log(t.target.value),e.setState({location:t.target.value})}}),n.createElement("br",null),n.createElement("br",null),n.createElement("label",null,"Job Description"),n.createElement("br",null),"undefined"!=typeof window&&l?n.createElement(l,{theme:"snow",name:"jobDescription",value:e.state.description,onChange:function(t){e.setState({description:t})}}):n.createElement("textarea",null),n.createElement("br",null),n.createElement("label",null,"Job Application Link"),n.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobLink",name:"link",type:"text",placeholder:"Job Application Link",labelText:"Job Application Link",value:e.state.applicationLink,onChange:function(t){console.log(t.target.value),e.setState({applicationLink:t.target.value})}}),n.createElement("br",null),n.createElement("br",null),n.createElement("label",null,"Contact Email Address"),n.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobEmail",name:"email",type:"text",placeholder:"Email Address",labelText:"Your Email",value:e.state.email,onChange:function(t){console.log(t.target.value),e.setState({email:t.target.value})}}),n.createElement("div",{className:"uk-container"},n.createElement("div",{style:{paddingRight:"20px",paddingTop:"25px",width:"100%"}},n.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body",id:"ad-card-sponsor"},n.createElement("h3",{className:"uk-card-title uk-text-center",id:"sponsor-title"},"Basic"),n.createElement("p",{style:{textAlign:"center"}},"$50 / job"),n.createElement("ul",null,n.createElement("li",null,"Position posted on NWA Daily's job board for 30 days")),n.createElement("div",{style:{textAlign:"center"}},n.createElement("button",{style:{width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitBasicHandler},"Post Basic")))),n.createElement("div",{style:{paddingRight:"20px",paddingTop:"25px",width:"100%"}},n.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body"},n.createElement("h3",{className:"uk-card-title uk-text-center"},"Featured"),n.createElement("p",{style:{textAlign:"center"}},"$100 / month"),n.createElement("ul",null,n.createElement("li",null,"Job board posting"),n.createElement("li",null,"Highlighted on job board"),n.createElement("li",null,"Posted 1 time in newsletter")),n.createElement("div",{style:{textAlign:"center"}},n.createElement("button",{style:{width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitFeaturedHandler},"Post Featured")))),n.createElement("div",{style:{width:"100%",paddingTop:"25px"}},n.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body"},n.createElement("h3",{className:"uk-card-title uk-text-center"},"Premium"),n.createElement("p",{style:{textAlign:"center"}},"$150 / month"),n.createElement("ul",null,n.createElement("li",null,"Job board posting"),n.createElement("li",null,"Highlighted on job board"),n.createElement("li",null,"Posted 2 times in newsletter")),n.createElement("div",{style:{textAlign:"center"}},n.createElement("button",{style:{width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitPremiumHandler},"Post Premium"))))),n.createElement("br",null),n.createElement("br",null)):n.createElement("div",{class:"uk-margin"},n.createElement("h4",{style:{textAlign:"center"}},"You're all set!"))))):n.createElement("div",{className:"uk-section"},n.createElement("h3",{className:"uk-text-center"},"Post a job on our job board"),n.createElement("p",{className:"uk-text-center",style:{marginLeft:"auto",marginRight:"auto",width:"60%"}}),n.createElement("form",{class:"uk-form",style:{marginLeft:"auto",marginRight:"auto",width:"75%"}},n.createElement("div",{class:"test"},!1===e.state.isSubmitted?n.createElement("div",{class:"uk-margin"},n.createElement("label",null,"Job Title"),n.createElement("br",null),n.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobTitle",name:"title",type:"text",placeholder:"Job Title",labelText:"Job Title",value:e.state.title,onChange:function(t){console.log(t.target.value),e.setState({title:t.target.value})}}),n.createElement("br",null),n.createElement("br",null),n.createElement("label",null,"Organization"),n.createElement("br",null),n.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobOrganization",name:"organization",type:"text",placeholder:"Organization",labelText:"Organization",value:e.state.organization,onChange:function(t){console.log(t.target.value),e.setState({organization:t.target.value})}}),n.createElement("br",null),n.createElement("br",null),n.createElement("label",null,"Job Location"),n.createElement("br",null),n.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobLocation",name:"location",type:"text",placeholder:"Job Location",labelText:"Location",value:e.state.location,onChange:function(t){console.log(t.target.value),e.setState({location:t.target.value})}}),n.createElement("br",null),n.createElement("br",null),n.createElement("label",null,"Job Description"),n.createElement("br",null),"undefined"!=typeof window&&l?n.createElement(l,{theme:"snow",name:"jobDescription",value:e.state.description,onChange:function(t){e.setState({description:t})}}):n.createElement("textarea",null),n.createElement("br",null),n.createElement("label",null,"Job Application Link"),n.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobLink",name:"link",type:"text",placeholder:"Job Application Link",labelText:"Job Application Link",value:e.state.applicationLink,onChange:function(t){console.log(t.target.value),e.setState({applicationLink:t.target.value})}}),n.createElement("br",null),n.createElement("br",null),n.createElement("label",null,"Contact Email Address"),n.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobEmail",name:"email",type:"text",placeholder:"Email Address",labelText:"Your Email",value:e.state.email,onChange:function(t){console.log(t.target.value),e.setState({email:t.target.value})}}),n.createElement("br",null),n.createElement("br",null),n.createElement("div",{className:"uk-container"},n.createElement("div",{style:{display:"inline-block",paddingRight:"20px",width:"30%"}},n.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body",id:"ad-card-sponsor"},n.createElement("h3",{className:"uk-card-title uk-text-center",id:"sponsor-title"},"Basic"),n.createElement("p",{style:{textAlign:"center"}},"$50 / month"),n.createElement("ul",null,n.createElement("li",null,"Position posted on NWA Daily's job board for 30 days")),n.createElement("div",{style:{textAlign:"center"}},n.createElement("button",{style:{width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitBasicHandler},"Post Basic")))),n.createElement("div",{style:{paddingRight:"20px",display:"inline-block",width:"30%"}},n.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body"},n.createElement("h3",{className:"uk-card-title uk-text-center"},"Featured"),n.createElement("p",{style:{textAlign:"center"}},"$100 / month"),n.createElement("ul",null,n.createElement("li",null,"Job board posting"),n.createElement("li",null,"Highlighted on job board"),n.createElement("li",null,"Posted 1 times in newsletter")),n.createElement("div",{style:{textAlign:"center"}},n.createElement("button",{style:{width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitFeaturedHandler},"Post Featured")))),n.createElement("div",{style:{display:"inline-block",width:"30%"}},n.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body"},n.createElement("h3",{className:"uk-card-title uk-text-center"},"Premium"),n.createElement("p",{style:{textAlign:"center"}},"$150 / month"),n.createElement("ul",null,n.createElement("li",null,"Job board posting"),n.createElement("li",null,"Highlighted on job board"),n.createElement("li",null,"Posted 2 times in newsletter")),n.createElement("div",{style:{textAlign:"center"}},n.createElement("button",{style:{width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitPremiumHandler},"Post Premium"))))),n.createElement("br",null),n.createElement("br",null)):n.createElement("div",{class:"uk-margin"},n.createElement("h4",{style:{textAlign:"center"}},"You're all set!")))))))}})},t}(n.Component);t.default=(0,r.gK)(c)}}]);
//# sourceMappingURL=component---src-pages-jobpost-js-7fe3f750118517dd6691.js.map