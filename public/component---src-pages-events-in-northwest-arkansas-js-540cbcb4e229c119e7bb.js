"use strict";(self.webpackChunknwa_daily=self.webpackChunknwa_daily||[]).push([[30],{67437:function(e,t,a){a(67294),a(25444),a(56260)},18186:function(e,t,a){var n=a(67294),l=(a(67437),a(25444),a(97026));t.Z=function(e){var t=e.events,a=(0,l.Gc)();return console.log(t),n.createElement("div",null,a.sm?n.createElement("ul",{className:"uk-list uk-list-divider uk-width-8-8"},t.map((function(e,t){new Date(e.node.date);if("Featured"===e.node.type)return n.createElement("li",{className:"mobile-event",style:{backgroundColor:"#FFFFE0"},key:"event__left__"+e.node.slug},n.createElement("a",{className:"event-mobile",href:"/events-in-northwest-arkansas/"+e.node.slug},n.createElement("span",{className:"company-mobile"},e.node.organization),n.createElement("br",null),n.createElement("div",{className:"event-middle-section"},n.createElement("img",{width:"35",height:"35",src:e.node.photo.publicURL}),n.createElement("span",{className:"title-mobile"},e.node.title),n.createElement("span",{className:"date-mobile"},"Featured")),n.createElement("br",null),n.createElement("span",{className:"location-company-mobile"},e.node.location)))})),t.map((function(e,t){var a=new Date(e.node.date),l=new Date;if("Featured"!==e.node.type&&a>=l)return n.createElement("li",{className:"mobile-event",key:"event__left__"+e.node.slug},n.createElement("a",{className:"event-mobile",href:"/events-in-northwest-arkansas/"+e.node.slug},n.createElement("div",{className:"event-middle-section"},n.createElement("span",{className:"event-mobile"},e.node.name),n.createElement("span",{className:"category-mobile"},e.node.type),n.createElement("span",{className:"event-date-mobile"},["January","February","March","April","May","June","July","August","September","October","November","December"][a.getMonth()]+" "+a.getDate()))))}))):n.createElement("ul",{className:"uk-list uk-list-divider uk-width-8-8"},t.map((function(e,t){var a=new Date(e.node.date),l=new Date;if("Featured"===e.node.type&&a>=l)return n.createElement("li",{className:"event",style:{backgroundColor:"#FFFFE0"},key:"event__left__"+e.node.slug},n.createElement("a",{className:"event",href:"/events-in-northwest-arkansas/"+e.node.slug},n.createElement("div",{className:"event-middle-section"},n.createElement("span",{className:"event"},e.node.organization),n.createElement("span",{className:"category"},e.node.type),n.createElement("span",{className:"event-date"},"Featured"))))})),t.map((function(e,t){var a=new Date(e.node.date),l=new Date;if(console.log(l),console.log(a),"Featured"!==e.node.type&&a>=l)return n.createElement("li",{className:"event",key:"event__left__"+e.node.slug},n.createElement("a",{className:"event",href:"/events-in-northwest-arkansas/"+e.node.slug},n.createElement("div",{className:"event-middle-section"},n.createElement("span",{className:"event"},e.node.name),n.createElement("span",{className:"category"},e.node.type),n.createElement("span",{className:"event-date"},["January","February","March","April","May","June","July","August","September","October","November","December"][a.getMonth()]+" "+a.getDate()))))}))))}},35926:function(e,t,a){a.r(t);var n=a(51721),l=a(67294),o=a(25444),r=a(67312),s=a(18186),i=a(97026),c=a(97489),m=a(42594),u=a(65733),d=a(18656),p=a(29181),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleInputChange=function(e){var t;console.log("test");var n=e.target,l=n.value,o=n.name;console.log(o),a.setState(((t={})[o]=l,t)),console.log(a.state.email)},a.handleAdInputChange=function(e){var t;console.log("test");var n=e.target,l=n.value,o=n.name;console.log(o),a.setState(((t={})[o]=l,t)),console.log(a.state.advertiser)},a.handleModalClose=function(e){a.setState({isModalOpen:!1})},a.submitAdHandler=function(e){if(e.preventDefault(),""!==a.state.advertiser){var t={email:a.state.advertiser.toLowerCase(),oneLiner:a.state.oneLiner,event:a.state.extendedText,sponsor:a.state.sponsor,property:"NWA Daily"};fetch("https://nwadailybackend.herokuapp.com/inquiries",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(e){console.log(e.data),a.setState({isAdSubmitted:!0})})).catch((function(e){console.log(e)}))}else a.setState({submitError:!0}),console.log(!0)},a.submitHandler=function(e){e.preventDefault();var t=null;if(console.log(window.location.href.split("?id=").length),window.location.href.split("?id=").length>1?(console.log("idhere"),console.log(window.location.href),t=(t=window.location.href.split("?id=")[1]).split("&")[0],console.log(t)):(t="event-calendar",console.log(t)),""!==a.state.email){var n={email:a.state.email.toLowerCase(),location:a.state.location,source:t,subscribeDate:a.state.date,property:"NWA Daily"};fetch("https://nwadailybackend.herokuapp.com/signup",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(e){console.log(e.data),a.setState({isModalOpen:!1,isSubmitted:!0})})).catch((function(e){console.log(e)}))}else a.setState({submitError:!0}),console.log(!0)},a.emailRef=l.createRef(),a.state={email:"",location:"landing regular",isModalOpen:!1,submitError:!1,isSubmitted:!1,isAdSubmitted:!1,advertiser:"",oneLiner:"0",extendedText:"0",sponsor:"0",date:new Date},a}(0,n.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;window.setTimeout((function(){e.setState({isModalOpen:!0})}),1500)},a.render=function(){var e=this,t=this.props.breakpoints;return console.log(t),l.createElement(o.StaticQuery,{query:"2046005636",render:function(a){return l.createElement(r.Z,{seo:a.strapiHomepage.seo},l.createElement(c.Z,{open:e.state.isModalOpen,keepMounted:!0,onClose:function(){return e.handleModalClose()},"aria-labelledby":"modal-slide-title","aria-describedby":"modal-slide-description"},l.createElement(m.Z,{id:"classic-modal-slide-title",disableTypography:!0},l.createElement(d.Z,{key:"close","aria-label":"Close",color:"inherit",onClick:function(){return e.handleModalClose()}},l.createElement(p.Z,null)),l.createElement("h3",{style:{fontWeight:"bold"}},"Join thousands of NWA locals and subscribe to the free daily newsletter")),l.createElement(u.Z,{id:"modal-slide-description"},t.sm?l.createElement("form",null,!1===e.state.isSubmitted?l.createElement("div",{class:"uk-margin",style:{width:"90%",marginLeft:"auto",marginRight:"auto"}},l.createElement("input",{style:{width:"100%",color:"#307765",marginLeft:"auto",marginRight:"auto",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"signup",name:"email",type:"text",placeholder:"Email address",labelText:"Your Email",value:e.state.email,onChange:function(t){console.log(t.target.value),e.setState({email:t.target.value,location:"landing pop up"})}}),l.createElement("br",null),l.createElement("br",null),l.createElement("button",{style:{width:"100%",marginLeft:"auto",marginRight:"auto",backgroundColor:"#307765",opacity:1,color:"white"},className:"uk-button uk-button-default",onClick:e.submitHandler},"Subscribe")):l.createElement("div",{class:"uk-margin"},l.createElement("h4",{style:{textAlign:"center"}},"Look for us in your inbox!"))):l.createElement("form",null,!1===e.state.isSubmitted?l.createElement("div",{class:"uk-margin",style:{width:"90%",marginLeft:"auto",marginRight:"auto"}},l.createElement("input",{style:{width:"70%",color:"#307765",marginLeft:"auto",marginRight:"auto",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"signup",name:"email",type:"text",placeholder:"Email address",labelText:"Your Email",value:e.state.email,onChange:function(t){console.log(t.target.value),e.setState({email:t.target.value})}}),l.createElement("button",{style:{backgroundColor:"#307765",opacity:1,color:"white"},className:"uk-button uk-button-default",onClick:e.submitHandler},"Subscribe")):l.createElement("div",{class:"uk-margin"},l.createElement("h4",{style:{textAlign:"center"}},"Look for us in your inbox!"))))),l.createElement("div",{className:"job-head"},l.createElement("h2",{className:"job-header"},"Browse upcoming events in Northwest Arkansas"),l.createElement("a",{href:"/eventpost"},l.createElement("button",{className:"job-post-button"},"Post an event"))),a.allStrapiEvent.edges.length>0?(t.sm,l.createElement("div",{className:"uk-section"},l.createElement("div",{className:"uk-container uk-container-large"},l.createElement(s.Z,{events:a.allStrapiEvent.edges})))):l.createElement("div",{className:"uk-section"},l.createElement("div",{className:"uk-container uk-container-large uk-text-center"},l.createElement("p",null,"There are no jobs posted at this time"),l.createElement("br",null),l.createElement("br",null),l.createElement("br",null),l.createElement("br",null),l.createElement("br",null),l.createElement("br",null),l.createElement("br",null),l.createElement("br",null),l.createElement("br",null))))}})},t}(l.Component);t.default=(0,i.gK)(g)}}]);
//# sourceMappingURL=component---src-pages-events-in-northwest-arkansas-js-540cbcb4e229c119e7bb.js.map