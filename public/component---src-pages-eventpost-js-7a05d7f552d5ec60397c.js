(self.webpackChunknwa_daily=self.webpackChunknwa_daily||[]).push([[369],{70648:function(e,t,n){var a=n(51694),l=n(60614),o=n(84326),r=n(5112)("toStringTag"),i=Object,c="Arguments"==o(function(){return arguments}());e.exports=a?o:function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=i(e),r))?n:c?o(t):"Object"==(a=o(t))&&l(t.callee)?"Arguments":a}},10647:function(e,t,n){var a=n(1702),l=n(47908),o=Math.floor,r=a("".charAt),i=a("".replace),c=a("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,a,m,d){var g=n+e.length,p=a.length,E=s;return void 0!==m&&(m=l(m),E=u),i(d,E,(function(l,i){var u;switch(r(i,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,g);case"<":u=m[c(i,1,-1)];break;default:var s=+i;if(0===s)return l;if(s>p){var d=o(s/10);return 0===d?l:d<=p?void 0===a[d-1]?r(i,1):a[d-1]+r(i,1):l}u=a[s-1]}return void 0===u?"":u}))}},47850:function(e,t,n){var a=n(70111),l=n(84326),o=n(5112)("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==l(e))}},67066:function(e,t,n){"use strict";var a=n(19670);e.exports=function(){var e=a(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},34706:function(e,t,n){var a=n(46916),l=n(92597),o=n(47976),r=n(67066),i=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in i||l(e,"flags")||!o(i,e)?t:a(r,e)}},51694:function(e,t,n){var a={};a[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(a)},41340:function(e,t,n){var a=n(70648),l=String;e.exports=function(e){if("Symbol"===a(e))throw TypeError("Cannot convert a Symbol value to a string");return l(e)}},68757:function(e,t,n){"use strict";var a=n(82109),l=n(46916),o=n(1702),r=n(84488),i=n(60614),c=n(68554),u=n(47850),s=n(41340),m=n(58173),d=n(34706),g=n(10647),p=n(5112),E=n(31913),v=p("replace"),b=TypeError,h=o("".indexOf),f=o("".replace),x=o("".slice),y=Math.max,k=function(e,t,n){return n>e.length?-1:""===t?n:h(e,t,n)};a({target:"String",proto:!0},{replaceAll:function(e,t){var n,a,o,p,w,S,N,L,C,B=r(this),j=0,z=0,T="";if(!c(e)){if((n=u(e))&&(a=s(r(d(e))),!~h(a,"g")))throw b("`.replaceAll` does not allow non-global regexes");if(o=m(e,v))return l(o,e,B,t);if(E&&n)return f(s(B),e,t)}for(p=s(B),w=s(e),(S=i(t))||(t=s(t)),N=w.length,L=y(1,N),j=k(p,w,0);-1!==j;)C=S?s(t(w,j,p)):g(w,p,j,[],void 0,t),T+=x(p,z,j)+C,z=j+N,j=k(p,w,j+L);return z<p.length&&(T+=x(p,z)),T}})},27207:function(e,t,n){n(68757)},7041:function(e,t,n){"use strict";n.r(t);var a=n(51721),l=(n(27207),n(67294)),o=n(25444),r=n(67312),i=n(97026),c=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleInputChange=function(e){var t;e.preventDefault(),console.log("test");var n=e.target,l=n.value,o=n.name;console.log(o),a.setState(((t={})[o]=l,t))},a.submitHandler=function(e){e.preventDefault();var t=null;if(console.log(window.location.href.split("?id=").length),window.location.href.split("?id=").length>1?(console.log("idhere"),console.log(window.location.href),t=(t=window.location.href.split("?id=")[1]).split("&")[0],console.log(t)):(t="regular",console.log(t)),""!==a.state.email){var n=a.state.email.toLowerCase(),l=a.state.name,r=a.state.location,i=a.state.organization,c=a.state.description,u=a.state.title,s=a.state.date,m=a.state.eventLink,d={email:n,location:r,name:l,title:u,slug:l.replaceAll(" ","-").toLowerCase(),organization:i,description:c,eventLink:m,date:s};fetch("https://nwadailybackend.herokuapp.com/events",{method:"POST",body:JSON.stringify(d),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(e){console.log(e.data),a.setState({isModalOpen:!1,isSubmitted:!0}),(0,o.navigate)("https://buy.stripe.com/8wM29id04f6f9OgdR3")})).catch((function(e){console.log(e)}))}else a.setState({submitError:!0}),console.log(!0)},"undefined"!=typeof window&&(a.ReactQuill=n(8070)),a.emailRef=l.createRef(),a.state={email:"",name:"",organization:"",description:"",location:"",type:"",slug:"",eventLink:"",isModalOpen:!1,submitError:!1,isSubmitted:!1,date:new Date},a}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props.breakpoints,n=this.ReactQuill;return l.createElement(o.StaticQuery,{query:"3055651617",render:function(a){return l.createElement(r.Z,{seo:a.strapiHomepage.seo},l.createElement("div",null,t.sm?l.createElement("div",{className:"uk-section"},l.createElement("h3",{className:"uk-text-center"},"Post an event on our event calendar"),l.createElement("p",{style:{marginLeft:"auto",marginRight:"auto",width:"60%"}},"Our event calendar helps our readers keep up with fun things going on in the newsletter. post your event here so our readers and website visitors know about it. Each posting is $100."),l.createElement("form",{class:"uk-form",style:{marginLeft:"auto",marginRight:"auto",width:"60%"}},l.createElement("div",{class:"test"},!1===e.state.isSubmitted?l.createElement("div",{class:"uk-margin"},l.createElement("label",null,"Event Name"),l.createElement("br",null),l.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"eventName",name:"name",type:"text",placeholder:"Event Name",labelText:"Event Name",value:e.state.name,onChange:function(t){console.log(t.target.value),e.setState({name:t.target.value})}}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Organization"),l.createElement("br",null),l.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobOrganization",name:"organization",type:"text",placeholder:"Organization",labelText:"Organization",value:e.state.organization,onChange:function(t){console.log(t.target.value),e.setState({organization:t.target.value})}}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Event Location"),l.createElement("br",null),l.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobLocation",name:"location",type:"text",placeholder:"Job Location",labelText:"Location",value:e.state.location,onChange:function(t){console.log(t.target.value),e.setState({location:t.target.value})}}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Event Description"),l.createElement("br",null),"undefined"!=typeof window&&n?l.createElement(n,{theme:"snow",name:"jobDescription",value:e.state.description,onChange:function(t){e.setState({description:t})}}):l.createElement("textarea",null),l.createElement("br",null),l.createElement("label",null,"Event Link"),l.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobLink",name:"link",type:"text",placeholder:"Event Link",labelText:"Event Link",value:e.state.eventLink,onChange:function(t){console.log(t.target.value),e.setState({eventLink:t.target.value})}}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Event Date"),l.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"date",name:"date",type:"date",placeholder:"Event Date",labelText:"Event Date",value:e.state.date,onChange:function(t){console.log(t.target.value),e.setState({date:t.target.value})}}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Contact Email Address"),l.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobEmail",name:"email",type:"text",placeholder:"Email Address",labelText:"Your Email",value:e.state.email,onChange:function(t){console.log(t.target.value),e.setState({email:t.target.value})}}),l.createElement("div",{className:"uk-container"},l.createElement("div",{className:"job-head"},l.createElement("br",null),l.createElement("a",{href:"/jobpost"},l.createElement("button",{className:"job-post-button",onClick:e.submitHandler},"Post your event")))),l.createElement("br",null),l.createElement("br",null)):l.createElement("div",{class:"uk-margin"},l.createElement("h4",{style:{textAlign:"center"}},"You're all set!"))))):l.createElement("div",{className:"uk-section"},l.createElement("h3",{className:"uk-text-center"},"Post an event on our event calendar"),l.createElement("p",{style:{marginLeft:"auto",marginRight:"auto",width:"60%"}},"Our event calendar helps our readers keep up with fun things going on in the newsletter. post your event here so our readers and website visitors know about it. Each posting is $100."),l.createElement("form",{class:"uk-form",style:{marginLeft:"auto",marginRight:"auto",width:"75%"}},l.createElement("div",{class:"test"},!1===e.state.isSubmitted?l.createElement("div",{class:"uk-margin"},l.createElement("label",null,"Event Name"),l.createElement("br",null),l.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobTitle",name:"title",type:"text",placeholder:"Event Name",labelText:"Event Name",value:e.state.name,onChange:function(t){console.log(t.target.value),e.setState({name:t.target.value})}}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Organization"),l.createElement("br",null),l.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobOrganization",name:"organization",type:"text",placeholder:"Organization",labelText:"Organization",value:e.state.organization,onChange:function(t){console.log(t.target.value),e.setState({organization:t.target.value})}}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Event Location"),l.createElement("br",null),l.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobLocation",name:"location",type:"text",placeholder:"Event Location",labelText:"Location",value:e.state.location,onChange:function(t){console.log(t.target.value),e.setState({location:t.target.value})}}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Event Description"),l.createElement("br",null),"undefined"!=typeof window&&n?l.createElement(n,{theme:"snow",name:"jobDescription",value:e.state.description,onChange:function(t){e.setState({description:t})}}):l.createElement("textarea",null),l.createElement("br",null),l.createElement("label",null,"Event Link"),l.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobLink",name:"link",type:"text",placeholder:"Event Link",labelText:"Event Link",value:e.state.eventLink,onChange:function(t){console.log(t.target.value),e.setState({eventLink:t.target.value})}}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Event Date"),l.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"date",name:"date",type:"date",placeholder:"Event Date",labelText:"Event Date",value:e.state.date,onChange:function(t){console.log(t.target.value),e.setState({date:t.target.value})}}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Contact Email Address"),l.createElement("input",{style:{width:"100%",color:"#307765",marginBottom:"0px",paddingBottom:"0px"},className:"uk-input",id:"jobEmail",name:"email",type:"text",placeholder:"Email Address",labelText:"Your Email",value:e.state.email,onChange:function(t){console.log(t.target.value),e.setState({email:t.target.value})}}),l.createElement("br",null),l.createElement("br",null),l.createElement("div",{className:"uk-container"},l.createElement("div",{className:"job-head"},l.createElement("br",null),l.createElement("a",{href:"/jobpost"},l.createElement("button",{className:"job-post-button",onClick:e.submitHandler},"Post your event")))),l.createElement("br",null),l.createElement("br",null)):l.createElement("div",{class:"uk-margin"},l.createElement("h4",{style:{textAlign:"center"}},"You're all set!")))))))}})},t}(l.Component);t.default=(0,i.gK)(c)}}]);
//# sourceMappingURL=component---src-pages-eventpost-js-7a05d7f552d5ec60397c.js.map