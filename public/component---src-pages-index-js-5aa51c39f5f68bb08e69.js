"use strict";(self.webpackChunknwa_daily=self.webpackChunknwa_daily||[]).push([[634],{93056:function(e,t,a){var n=a(67294),l=(a(67437),a(25444),a(97026));t.Z=function(e){var t=e.guides,a=(0,l.Gc)();return console.log(t),n.createElement("div",null,a.sm?n.createElement("ul",{class:"uk-list uk-list-divider uk-text-center uk-width-8-8"},t.map((function(e,t){var a=new Date(e.node.publishedAt);return n.createElement("li",{key:"guide__left__"+e.node.slug},n.createElement("a",{id:"guide-link",href:"/guide/"+e.node.slug,style:{fontFamily:"Helvetica,Arial,sans-serif",color:"black",fontSize:"20px",fontWeight:"700",marginBottom:"0",lineHeight:"26px",marginTop:"8px"}},n.createElement("strong",{style:{color:"black"}},e.node.title)),n.createElement("p",{style:{color:"black"}},"Published "+["January","February","March","April","May","June","July","August","September","October","November","December"][a.getMonth()]+" "+a.getDate()),n.createElement("br",null))}))):n.createElement("ul",{class:"uk-list uk-list-divider uk-text-center uk-width-2-3"},t.map((function(e,t){var a=new Date(e.node.publishedAt);return n.createElement("li",{key:"guide__left__"+e.node.slug},n.createElement("a",{id:"guide-link",href:"/guide/"+e.node.slug,style:{fontFamily:"Helvetica,Arial,sans-serif",color:"black",fontSize:"20px",fontWeight:"700",marginBottom:"0",lineHeight:"26px",marginTop:"8px"}},n.createElement("strong",null,e.node.title)),n.createElement("p",{style:{color:"black"}},"Published "+["January","February","March","April","May","June","July","August","September","October","November","December"][a.getMonth()]+" "+a.getDate()),n.createElement("br",null))}))))}},97704:function(e,t,a){a.r(t);var n=a(51721),l=a(25444),o=a(67312),i=a(97698),r=(a(50802),a(88066),a(93056)),s=a(44923),c=a(41347),u=a(97026),m=a(67294),d=a(97489),g=a(42594),h=a(65733),p=a(18656),k=a(29181),b=(a(96633),function(e){function t(t){var a;return(a=e.call(this,t)||this).componentDidMount=function(){window.setTimeout((function(){a.setState({isModalOpen:!0})}),2e3),fetch("https://nwadailybackend.herokuapp.com/emails/count",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(e){console.log(e),a.setState({emails:e})})).catch((function(e){console.log(e)}))},a.submitBigMonthlyHandler=function(e){e.preventDefault(),(0,l.navigate)("https://buy.stripe.com/9AQ9BK1hm3nx0dG6oz")},a.submitBigAnnualHandler=function(e){e.preventDefault(),(0,l.navigate)("https://buy.stripe.com/5kA5lu9NS9LVgcEdR0")},a.submitSuperMonthlyHandler=function(e){e.preventDefault(),(0,l.navigate)("https://buy.stripe.com/5kA9BK8JO7DN7G86ox")},a.submitSuperAnnualHandler=function(e){e.preventDefault(),(0,l.navigate)("https://buy.stripe.com/7sI15e8JO9LV8Kc28g")},a.submitMegaMonthlyHandler=function(e){e.preventDefault(),(0,l.navigate)("https://buy.stripe.com/00g7tCe487DNgcEcMS")},a.submitMegaAnnualHandler=function(e){e.preventDefault(),(0,l.navigate)("https://buy.stripe.com/eVag081hmgaj0dG3cj")},a.handleInputChange=function(e){var t;console.log("test");var n=e.target,l=n.value,o=n.name;console.log(o),a.setState(((t={})[o]=l,t)),console.log(a.state.email)},a.handleAdInputChange=function(e){var t;console.log("test");var n=e.target,l=n.value,o=n.name;console.log(o),a.setState(((t={})[o]=l,t)),console.log(a.state.advertiser)},a.handleModalClose=function(e){a.setState({isModalOpen:!1})},a.submitAdHandler=function(e){e.preventDefault(),console.log(a.state.advertiser);var t=null;if(console.log(window.location.href.split("?id=").length),window.location.href.split("?id=").length>1?(console.log("idhere"),console.log(window.location.href),t=(t=window.location.href.split("?id=")[1]).split("&")[0],console.log(t)):(t="regular",console.log(t)),""!==a.state.advertiser){var n=a.state.advertiser.toLowerCase(),l={email:n,oneLiner:a.state.oneLiner,event:a.state.extendedText,sponsor:a.state.sponsor,property:"NWA Daily"};fetch("https://nwadailybackend.herokuapp.com/inquiries",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(e){console.log(e.data),a.setState({isModalOpen:!1,isAdSubmitted:!0})})).catch((function(e){console.log(e)})),fetch("https://nwadailybackend.herokuapp.com/advertiser",{method:"POST",body:JSON.stringify({email:n}),headers:{"Content-Type":"application/json"},mode:"cors"}).then((function(e){return 200!==e.status&&201!==e.status?(console.log(e.status),e.status):e})).catch((function(e){console.log(e)}))}else a.setState({submitError:!0}),console.log(!0)},a.submitHandler=function(e){e.preventDefault();var t=null;if(console.log(window.location.href.split("?id=").length),window.location.href.split("?id=").length>1?(console.log("idhere"),console.log(window.location.href),t=(t=window.location.href.split("?id=")[1]).split("&")[0],console.log(t)):(t="regular",console.log(t)),""!==a.state.email){var n={publication_id:"pub_2213b531-0bad-4dc4-932c-2bf5fa45f9dd",email:a.state.email.toLowerCase(),utm_source:"website",utm_campaign:"website",utm_medium:"website",channel:a.state.location,referring_site:"www.northwestarkansasdaily.com"};fetch("https://nwadailybackend.herokuapp.com/subscribe",{method:"POST",body:JSON.stringify(n)}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return a.setState({isModalOpen:!1,isSubmitted:!0}),e.json()})).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}else a.setState({submitError:!0}),console.log(!0)},a.emailRef=m.createRef(),a.state={email:"",location:"landing regular",isModalOpen:!1,submitError:!1,isSubmitted:!1,isAdSubmitted:!1,advertiser:"",time:"monthly",emails:22e3,oneLiner:"0",extendedText:"0",sponsor:"0",date:new Date},a}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props.breakpoints;return console.log(t),m.createElement(l.StaticQuery,{query:"4067297738",render:function(a){return m.createElement(o.Z,{seo:a.strapiHomepage.seo},m.createElement("div",{style:{paddingTop:"0px"},className:"uk-section"},m.createElement("div",{class:"uk-light","uk-grid":!0},m.createElement("div",null,m.createElement(d.Z,{open:e.state.isModalOpen,keepMounted:!0,onClose:function(){return e.handleModalClose()},"aria-labelledby":"modal-slide-title","aria-describedby":"modal-slide-description"},m.createElement(g.Z,{id:"classic-modal-slide-title",disableTypography:!0},m.createElement(p.Z,{key:"close","aria-label":"Close",color:"inherit",onClick:function(){return e.handleModalClose()}},m.createElement(k.Z,null)),m.createElement("h3",{style:{fontWeight:"bold"}},"Join "+e.state.emails.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" NWA locals and subscribe to the free daily newsletter")),m.createElement(h.Z,{id:"modal-slide-description"},t.sm?m.createElement("form",null,!1===e.state.isSubmitted?m.createElement("div",{class:"uk-margin",style:{width:"90%",marginLeft:"auto",marginRight:"auto"}},m.createElement("input",{style:{width:"100%",color:"#307765",marginLeft:"auto",marginRight:"auto",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"signup",name:"email",type:"text",placeholder:"Email address",labelText:"Your Email",value:e.state.email,onChange:function(t){console.log(t.target.value),e.setState({email:t.target.value,location:"landing pop up"})}}),m.createElement("br",null),m.createElement("br",null),m.createElement("button",{style:{width:"100%",marginLeft:"auto",marginRight:"auto",backgroundColor:"#307765",opacity:1,color:"white"},className:"uk-button uk-button-default",onClick:e.submitHandler},"Subscribe")):m.createElement("div",{class:"uk-margin"},m.createElement("h4",{style:{textAlign:"center"}},"Look for us in your inbox!"))):m.createElement("form",null,!1===e.state.isSubmitted?m.createElement("div",{class:"uk-margin",style:{width:"90%",marginLeft:"auto",marginRight:"auto"}},m.createElement("input",{style:{width:"70%",color:"#307765",marginLeft:"auto",marginRight:"auto",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"signup",name:"email",type:"text",placeholder:"Email address",labelText:"Your Email",value:e.state.email,onChange:function(t){console.log(t.target.value),e.setState({email:t.target.value})}}),m.createElement("button",{style:{backgroundColor:"#307765",opacity:1,color:"white"},className:"uk-button uk-button-default",onClick:e.submitHandler},"Subscribe")):m.createElement("div",{class:"uk-margin"},m.createElement("h4",{style:{textAlign:"center"}},"Look for us in your inbox!"))))),t.sm?m.createElement("div",{id:"coverImg",class:"uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle",style:{backgroundImage:"url("+c.Z+")"}},m.createElement("div",{style:{marginTop:"80px",textAlign:"center"},className:"uk-container uk-container-large"},m.createElement("h3",{style:{width:"100%"}},"A newsletter about all things NWA delivered to your inbox every weekday"),m.createElement("div",null,m.createElement("form",{class:"uk-form"},m.createElement("div",{class:"test"},!1===e.state.isSubmitted?m.createElement("div",{class:"uk-margin"},m.createElement("input",{style:{width:"60%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"signup",name:"email",type:"text",placeholder:"Email address",labelText:"Your Email",value:e.state.email,onChange:function(t){console.log(t.target.value),e.setState({email:t.target.value})}}),m.createElement("button",{style:{backgroundColor:"#307765",opacity:1,color:"white"},className:"uk-button uk-button-default",onClick:e.submitHandler},"Subscribe")):m.createElement("div",{class:"uk-margin"},m.createElement("h4",{style:{textAlign:"center"}},"Look for us in your inbox!"))))),m.createElement("h3",{style:{marginTop:"0px",paddingTop:"0px",paddingLeft:"0px",marginLeft:"0px"}},"Check out our latest newsletters"),m.createElement("div",{style:{marginRight:"auto",marginLeft:"auto",width:"70%"}},m.createElement(i.Z,{articles:a.allStrapiEdition.edges})))):m.createElement("div",{id:"coverImg",class:"uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle",style:{backgroundImage:"url("+s.Z+")"}},m.createElement("div",{style:{marginTop:"20px"},className:"uk-container uk-container-large"},m.createElement("h2",{style:{width:"55%"}},"A newsletter about all things NWA delivered to your inbox every weekday"),m.createElement("div",null,m.createElement("form",{class:"uk-form"},m.createElement("div",{class:"test"},!1===e.state.isSubmitted?m.createElement("div",{class:"uk-margin"},m.createElement("input",{style:{width:"35%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"signup",name:"email",type:"text",placeholder:"Email address",labelText:"Your Email",value:e.state.email,onChange:function(t){console.log(t.target.value),e.setState({email:t.target.value})}}),m.createElement("button",{style:{backgroundColor:"#307765",opacity:1,color:"white"},className:"uk-button uk-button-default",onClick:e.submitHandler},"Subscribe")):m.createElement("div",{class:"uk-margin"},m.createElement("h4",{style:{marginLeft:"15%"}},"Look for us in your inbox!"))))),m.createElement("h3",{style:{marginTop:"0px",paddingTop:"0px",paddingLeft:"0px",marginLeft:"0px"}},"Check out our latest newsletters"),m.createElement(i.Z,{articles:a.allStrapiEdition.edges}))))),m.createElement("div",{className:"uk-section"},m.createElement("h2",{className:"uk-text-center"},"Read our local spotlights"),t.sm?m.createElement("div",{style:{marginLeft:"0%"}},m.createElement(r.Z,{guides:a.allStrapiGuide.edges})):m.createElement("div",{style:{marginLeft:"25%"}},m.createElement(r.Z,{guides:a.allStrapiGuide.edges}))),m.createElement("div",{style:{width:"100%",marginTop:"0px"},"uk-grid":!0},t.sm?m.createElement("div",{className:"uk-section"},m.createElement("h3",{className:"uk-text-center"},"Become a fan and support us!"),m.createElement("p",{style:{marginLeft:"auto",marginRight:"auto",width:"70%"}},"At NWA Daily, we're passionate about delivering the content you love. We want to make sure you know all the great things going on in Northwest Arkansas, so you can be as connected as possible with your hometown."),m.createElement("p",{style:{marginLeft:"auto",marginRight:"auto",width:"70%"}},"We're locally owned and operated and want to make sure we can sustainably keep delivering you great content and employing great local folks to do so. Becoming a fan with either a monthly or annual commitment will help us continue to hire local folks to deliver you the best newsletter possible every weekday!"),m.createElement("div",null,"monthly"===e.state.time?m.createElement("button",{style:{marginLeft:"21%",marginRight:"auto",width:"30%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:function(t){console.log("monthly"),e.setState({time:"monthly"})}},"Monthly"):m.createElement("button",{style:{marginLeft:"21%",marginRight:"auto",width:"30%",backgroundColor:"#525252",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:function(t){console.log("monthly"),e.setState({time:"monthly"})}},"Monthly"),"annual"===e.state.time?m.createElement("button",{style:{marginLeft:"auto",marginRight:"auto",width:"30%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:function(t){console.log("annual"),e.setState({time:"annual"})}},"Annual"):m.createElement("button",{style:{marginLeft:"auto",marginRight:"auto",width:"30%",backgroundColor:"#525252",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:function(t){console.log("annual"),e.setState({time:"annual"})}},"Annual")),m.createElement("form",{class:"uk-form",style:{marginLeft:"auto",marginRight:"auto",width:"100%"}},m.createElement("div",{class:"test"},!1===e.state.isSubmitted?m.createElement("div",{class:"uk-margin"},m.createElement("div",{className:"uk-container"},m.createElement("div",{style:{display:"inline-block",paddingRight:"20px",marginLeft:"10%",marginBottom:"10px",width:"80%"}},m.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body",id:"ad-card-sponsor"},m.createElement("h3",{className:"uk-card-title uk-text-center",id:"sponsor-title"},"Big Fan"),"monthly"===e.state.time?m.createElement("h4",{style:{textAlign:"center"}},"$7 / mo"):m.createElement("h4",{style:{textAlign:"center"}},"$70 / yr"),m.createElement("ul",null,m.createElement("li",null,"Help us meet goals like hiring full time employees"),m.createElement("li",null,"Make sustainable, local news curation possible in NWA"),m.createElement("li",null,m.createElement("strong",null,"Access to exclusive giveaways available only to FANS!"))),m.createElement("div",null,"monthly"===e.state.time?m.createElement("button",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitBigMonthlyHandler},"Become a Big Fan"):m.createElement("button",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitBigAnnualHandler},"Become a Big Fan")))),m.createElement("div",{style:{paddingRight:"20px",display:"inline-block",marginLeft:"10%",marginBottom:"10px",width:"80%"}},m.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body"},m.createElement("h3",{className:"uk-card-title uk-text-center"},"Super Fan"),"monthly"===e.state.time?m.createElement("h4",{style:{textAlign:"center"}},"$10 / mo"):m.createElement("h4",{style:{textAlign:"center"}},"$100 / yr"),m.createElement("ul",null,m.createElement("li",null,"Help us meet goals like hiring full time employees"),m.createElement("li",null,"Make sustainable, local news curation possible in NWA"),m.createElement("li",null,m.createElement("strong",null,"Access to exclusive giveaways available only to FANS!"))),"monthly"===e.state.time?m.createElement("button",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitSuperMonthlyHandler},"Become a Super Fan"):m.createElement("button",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitSuperAnnualHandler},"Become a Super Fan"))),m.createElement("div",{style:{paddingRight:"20px",display:"inline-block",marginLeft:"10%",marginBottom:"10px",width:"80%"}},m.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body"},m.createElement("h3",{className:"uk-card-title uk-text-center"},"Mega Fan"),"monthly"===e.state.time?m.createElement("h4",{style:{textAlign:"center"}},"$15 / mo"):m.createElement("h4",{style:{textAlign:"center"}},"$150 / yr"),m.createElement("ul",null,m.createElement("li",null,"Help us meet goals like hiring full time employees"),m.createElement("li",null,"Make sustainable, local news curation possible in NWA"),m.createElement("li",null,m.createElement("strong",null,"Access to exclusive giveaways available only to FANS!"))),"monthly"===e.state.time?m.createElement("button",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitMegaMonthlyHandler},"Become a Mega Fan"):m.createElement("button",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitMegaAnnualHandler},"Become a Mega Fan")))),m.createElement("p",null,m.createElement("img",{style:{textAlign:"center",marginLeft:"10%",marginRight:"auto",width:"80%",height:"50%"},src:"https://nwa-daily-photos.s3.amazonaws.com/NWA_Daily_Crew_fa690b6c71.jpeg"})),m.createElement("br",null),m.createElement("br",null)):m.createElement("div",{class:"uk-margin"},m.createElement("h4",{style:{textAlign:"center"}},"You're all set!"))))):m.createElement("div",{className:"uk-section"},m.createElement("h3",{className:"uk-text-center"},"Become a fan and support us!"),m.createElement("p",{style:{marginLeft:"auto",marginRight:"auto",width:"60%"}},"At NWA Daily, we're passionate about delivering the content you love. We want to make sure you know all the great things going on in Northwest Arkansas, so you can be as connected as possible with your hometown."),m.createElement("p",{style:{marginLeft:"auto",marginRight:"auto",width:"60%"}},"We're locally owned and operated and want to make sure we can sustainably keep delivering you great content and employing great local folks to do so. Becoming a fan with either a monthly or annual commitment will help us continue to hire local folks to deliver you the best newsletter possible every weekday!"),m.createElement("div",null,"monthly"===e.state.time?m.createElement("button",{style:{marginLeft:"41%",marginRight:"auto",width:"8%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:function(t){console.log("monthly"),e.setState({time:"monthly"})}},"Monthly"):m.createElement("button",{style:{marginLeft:"41%",marginRight:"auto",width:"8%",backgroundColor:"#525252",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:function(t){console.log("monthly"),e.setState({time:"monthly"})}},"Monthly"),"annual"===e.state.time?m.createElement("button",{style:{marginLeft:"auto",marginRight:"auto",width:"8%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:function(t){console.log("annual"),e.setState({time:"annual"})}},"Annual"):m.createElement("button",{style:{marginLeft:"auto",marginRight:"auto",width:"8%",backgroundColor:"#525252",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:function(t){console.log("annual"),e.setState({time:"annual"})}},"Annual")),m.createElement("form",{class:"uk-form",style:{marginLeft:"auto",marginRight:"auto",width:"80%"}},m.createElement("div",{class:"test"},!1===e.state.isSubmitted?m.createElement("div",{class:"uk-margin"},m.createElement("div",{className:"uk-container"},m.createElement("div",{style:{display:"inline-block",paddingRight:"20px",width:"31%"}},m.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body",id:"ad-card-sponsor"},m.createElement("h3",{className:"uk-card-title uk-text-center",id:"sponsor-title"},"Big Fan"),"monthly"===e.state.time?m.createElement("h4",{style:{textAlign:"center"}},"$7 / mo"):m.createElement("h4",{style:{textAlign:"center"}},"$70 / yr"),m.createElement("ul",null,m.createElement("li",null,"Help us meet goals like hiring full time employees"),m.createElement("li",null,"Make sustainable, local news curation possible in NWA"),m.createElement("li",null,m.createElement("strong",null,"Access to exclusive giveaways available only to FANS!"))),m.createElement("div",null,"monthly"===e.state.time?m.createElement("button",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitBigMonthlyHandler},"Become a Big Fan"):m.createElement("button",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitBigAnnualHandler},"Become a Big Fan")))),m.createElement("div",{style:{paddingRight:"20px",display:"inline-block",width:"31%"}},m.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body"},m.createElement("h3",{className:"uk-card-title uk-text-center"},"Super Fan"),"monthly"===e.state.time?m.createElement("h4",{style:{textAlign:"center"}},"$10 / mo"):m.createElement("h4",{style:{textAlign:"center"}},"$100 / yr"),m.createElement("ul",null,m.createElement("li",null,"Help us meet goals like hiring full time employees"),m.createElement("li",null,"Make sustainable, local news curation possible in NWA"),m.createElement("li",null,m.createElement("strong",null,"Access to exclusive giveaways available only to FANS!"))),"monthly"===e.state.time?m.createElement("button",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitSuperMonthlyHandler},"Become a Super Fan"):m.createElement("button",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitSuperAnnualHandler},"Become a Super Fan"))),m.createElement("div",{style:{paddingRight:"20px",display:"inline-block",width:"31%"}},m.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body"},m.createElement("h3",{className:"uk-card-title uk-text-center"},"Mega Fan"),"monthly"===e.state.time?m.createElement("h4",{style:{textAlign:"center"}},"$15 / mo"):m.createElement("h4",{style:{textAlign:"center"}},"$150 / yr"),m.createElement("ul",null,m.createElement("li",null,"Help us meet goals like hiring full time employees"),m.createElement("li",null,"Make sustainable, local news curation possible in NWA"),m.createElement("li",null,m.createElement("strong",null,"Access to exclusive giveaways available only to FANS!"))),"monthly"===e.state.time?m.createElement("button",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitMegaMonthlyHandler},"Become a Mega Fan"):m.createElement("button",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default",onClick:e.submitMegaAnnualHandler},"Become a Mega Fan")))),m.createElement("p",null,m.createElement("img",{style:{textAlign:"center",marginLeft:"29%",marginRight:"auto",width:"40%",height:"50%"},src:"https://nwa-daily-photos.s3.amazonaws.com/NWA_Daily_Crew_fa690b6c71.jpeg"})),m.createElement("br",null),m.createElement("br",null)):m.createElement("div",{class:"uk-margin"},m.createElement("h4",{style:{textAlign:"center"}},"You're all set!")))))),m.createElement("div",{style:{width:"100%",marginTop:"0px"},"uk-grid":!0},t.sm?m.createElement("div",{style:{paddingBottom:"50px",marginBottom:"0px"},className:"uk-section uk-section-muted uk-section-large"},m.createElement("h2",{className:"uk-title uk-text-center"},"Advertise with us"),m.createElement("h3",{className:"uk-text-center",style:{color:"#666",marginLeft:"auto",marginRight:"auto",width:"93%"}},"Get in front of "+e.state.emails.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" Northwest Arkansans. Select any or all of these options to indicate your interest, submit your email, and we'll get right back to you"),m.createElement("form",{class:"uk-form",style:{marginLeft:"auto",marginRight:"auto",width:"93%"}},m.createElement("div",{class:"test"},!1===e.state.isAdSubmitted?m.createElement("div",{class:"uk-margin"},m.createElement("input",{style:{width:"70%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"advertiser",name:"advertiser",type:"text",placeholder:"Email address",labelText:"Your Email",value:e.state.advertiser,onChange:function(t){console.log(t.target.value),e.setState({advertiser:t.target.value})}}),m.createElement("button",{style:{backgroundColor:"#307765",opacity:1,color:"white"},className:"uk-button uk-button-default",onClick:e.submitAdHandler},"Submit")):m.createElement("div",{class:"uk-margin"},m.createElement("h4",{style:{textAlign:"center"}},"We'll be with you shortly!")))),m.createElement("div",{className:"uk-container"},m.createElement("div",{style:{display:"block"}},m.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body",id:"ad-card-sponsor"},m.createElement("h3",{className:"uk-card-title uk-text-center",id:"sponsor-title"},"Title Sponsor"),m.createElement("p",null,"This ad spot is the most prominent spot we offer. It includes your logo and a description about your business or organization and will be the first thing our readers see."),m.createElement("div",{className:"uk-text-center"},m.createElement("img",{src:"https://nwa-daily-photos.s3.amazonaws.com/sponsor_3905f62571.png",width:"67%",height:"67%",style:{marginBottom:"5%",textAlign:"center"},alt:"Bulletin Ad"})),"0"===e.state.sponsor?m.createElement("button",{style:{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default uk-position-bottom-center",onClick:function(t){e.setState({sponsor:"1"})}},"Select"):m.createElement("button",{style:{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default uk-position-bottom-center",onClick:function(t){e.setState({sponsor:"0"})}},"Selected"))),m.createElement("div",{style:{paddingTop:"4.5%",display:"block"}},m.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body"},m.createElement("h3",{className:"uk-card-title uk-text-center"},"Article Sponsor"),m.createElement("p",null,"This ad spot is perfect for a business or that wants to tell its story. It is a block that includes a photo, a header, and text and looks like the rest of our content."),m.createElement("div",{className:"uk-text-center"},m.createElement("img",{src:"https://nwa-daily-photos.s3.amazonaws.com/extened_Text_decd614915.png",width:"67%",height:"67%",style:{marginBottom:"5%",textAlign:"center"},alt:"Bulletin Ad"})),"0"===e.state.extendedText?m.createElement("button",{style:{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default uk-position-bottom-center",onClick:function(t){e.setState({extendedText:"1"})}},"Select"):m.createElement("button",{style:{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default uk-position-bottom-center",onClick:function(t){e.setState({extendedText:"0"})}},"Selected"))),m.createElement("div",{style:{paddingTop:"4.5%",display:"block"}},m.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body"},m.createElement("h3",{className:"uk-card-title uk-text-center"},"Daily Pick"),m.createElement("p",null,"This ad spot is a one line promotion of your business in a section at the bottom of the news letter. This is the most cost effective way to partner with us."),m.createElement("div",{className:"uk-text-center"},m.createElement("img",{src:"https://nwa-daily-photos.s3.amazonaws.com/bulletin_0a3e0d74e3.png",width:"67%",height:"67%",style:{marginBottom:"5%",textAlign:"center"},alt:"Bulletin Ad"})),"0"===e.state.oneLiner?m.createElement("button",{style:{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default uk-position-bottom-center",onClick:function(t){e.setState({oneLiner:"1"})}},"Select"):m.createElement("button",{style:{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default uk-position-bottom-center",onClick:function(t){e.setState({oneLiner:"0"})}},"Selected"))))):m.createElement("div",{style:{paddingBottom:"50px",marginBottom:"0px"},className:"uk-section uk-section-muted uk-section-large"},m.createElement("h2",{className:"uk-title uk-text-center"},"Advertise with us"),m.createElement("h3",{className:"uk-text-center",style:{color:"#666",marginLeft:"auto",marginRight:"auto",width:"70%"}},"Get in front of "+e.state.emails.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" Northwest Arkansans. Select any or all of these options to indicate your interest, submit your email, and we'll get right back to you"),m.createElement("form",{class:"uk-form",style:{marginLeft:"auto",marginRight:"auto",width:"50%"}},m.createElement("div",{class:"test"},!1===e.state.isAdSubmitted?m.createElement("div",{class:"uk-margin"},m.createElement("input",{style:{width:"70%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"advertiser",name:"advertiser",type:"text",placeholder:"Email address",labelText:"Your Email",value:e.state.advertiser,onChange:function(t){console.log(t.target.value),e.setState({advertiser:t.target.value})}}),m.createElement("button",{style:{backgroundColor:"#307765",opacity:1,color:"white"},className:"uk-button uk-button-default",onClick:e.submitAdHandler},"Submit")):m.createElement("div",{class:"uk-margin"},m.createElement("h4",{style:{textAlign:"center"}},"We'll be with you shortly!")))),m.createElement("div",{className:"uk-container",style:{paddingTop:"25px",marginTop:"25px"}},m.createElement("div",{style:{width:"30%",display:"inline-block"}},m.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body",id:"ad-card-sponsor"},m.createElement("h3",{className:"uk-card-title uk-text-center",id:"sponsor-title"},"Title Sponsor"),m.createElement("p",null,"This ad spot is the most prominent spot we offer. It includes your logo and a description about your business or organization and will be the first thing our readers see."),m.createElement("div",{className:"uk-text-center"},m.createElement("img",{src:"https://nwa-daily-photos.s3.amazonaws.com/sponsor_3905f62571.png",width:"67%",height:"67%",style:{marginBottom:"5%",textAlign:"center"},alt:"Bulletin Ad"})),"0"===e.state.sponsor?m.createElement("button",{style:{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default uk-position-bottom-center",onClick:function(t){e.setState({sponsor:"1"})}},"Select"):m.createElement("button",{style:{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default uk-position-bottom-center",onClick:function(t){e.setState({sponsor:"0"})}},"Selected"))),m.createElement("div",{style:{width:"30%",paddingLeft:"4.5%",display:"inline-block"}},m.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body"},m.createElement("h3",{className:"uk-card-title uk-text-center"},"Article Sponsor"),m.createElement("p",null,"This ad spot is perfect for a business or that wants to tell its story. It is a block that includes a photo, a header, and text and looks like the rest of our content."),m.createElement("div",{className:"uk-text-center"},m.createElement("img",{src:"https://nwa-daily-photos.s3.amazonaws.com/extened_Text_decd614915.png",width:"67%",height:"67%",style:{marginBottom:"5%",textAlign:"center"},alt:"Bulletin Ad"})),"0"===e.state.extendedText?m.createElement("button",{style:{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default uk-position-bottom-center",onClick:function(t){e.setState({extendedText:"1"})}},"Select"):m.createElement("button",{style:{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default uk-position-bottom-center",onClick:function(t){e.setState({extendedText:"0"})}},"Selected"))),m.createElement("div",{style:{width:"30%",paddingLeft:"4.5%",display:"inline-block"}},m.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body"},m.createElement("h3",{className:"uk-card-title uk-text-center"},"Daily Pick"),m.createElement("p",null,"This ad spot is a one line promotion of your business in a section at the bottom of the news letter. This is the most cost effective way to partner with us."),m.createElement("div",{className:"uk-text-center"},m.createElement("img",{src:"https://nwa-daily-photos.s3.amazonaws.com/bulletin_0a3e0d74e3.png",width:"67%",height:"67%",style:{marginBottom:"5%",textAlign:"center"},alt:"Bulletin Ad"})),"0"===e.state.oneLiner?m.createElement("button",{style:{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default uk-position-bottom-center",onClick:function(t){e.setState({oneLiner:"1"})}},"Select"):m.createElement("button",{style:{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"},className:"uk-button uk-button-default uk-position-bottom-center",onClick:function(t){e.setState({oneLiner:"0"})}},"Selected"))))))))}})},t}(m.Component));t.default=(0,u.gK)(b)}}]);
//# sourceMappingURL=component---src-pages-index-js-5aa51c39f5f68bb08e69.js.map