(self.webpackChunknwa_daily=self.webpackChunknwa_daily||[]).push([[519],{32993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(!i(e[l],o[l]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],o.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof o.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof o.toString)return e.toString()===o.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],o[s[l]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},24839:function(e,t,n){"use strict";var r,a=n(67294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},97026:function(e,t,n){"use strict";var r=n(47701);t.Gc=r.useBreakpoint,r.BreakpointProvider,r.BreakpointContext;var a=n(25509);t.gK=a.withBreakpoints},25509:function(e,t,n){"use strict";var r=n(64836);t.__esModule=!0,t.withBreakpoints=void 0;var a=r(n(10434)),i=r(n(67294)),o=n(47701);t.withBreakpoints=e=>t=>{const n=(0,o.useBreakpoint)();return i.default.createElement(e,(0,a.default)({breakpoints:n},t))}},67312:function(e,t,n){"use strict";n.d(t,{Z:function(){return Te}});var r=n(67294),a=n(25444),i=n(97026);var o=()=>{const e=(0,i.Gc)();return r.createElement("div",null,e.sm?r.createElement("div",null,r.createElement("nav",{className:"uk-navbar-container","data-uk-navbar":!0},r.createElement("div",{className:"uk-navbar-left"},r.createElement("ul",{className:"uk-navbar-nav"},r.createElement("li",null,r.createElement(a.Link,{to:"/"},r.createElement("img",{width:"125",height:"25",src:"https://nwa-daily-photos.s3.amazonaws.com/faviconweb_removebg_preview_ec3f8396cb.png"}))))),r.createElement("div",{className:"uk-navbar-right"},r.createElement("ul",{className:"uk-navbar-nav"},r.createElement("li",null,r.createElement("a",{href:"#"},"Browse"),r.createElement("div",{class:"uk-navbar-dropdown"},r.createElement("ul",{class:"uk-nav uk-navbar-dropdown-nav"},r.createElement("li",null,r.createElement(a.Link,{to:"/guide"},"Guides")),r.createElement("li",null,r.createElement(a.Link,{to:"/events-in-northwest-arkansas"},"Events")),r.createElement("li",null,r.createElement(a.Link,{to:"/story"},"Stories")),r.createElement("li",null,r.createElement(a.Link,{to:"/archive"},"Archive")),r.createElement("li",null,r.createElement(a.Link,{to:"/jobs"},"Jobs")),r.createElement("li",null,r.createElement(a.Link,{to:"/advertise"},"Advertise")),r.createElement("li",null,r.createElement(a.Link,{to:"/partners"},"Sponsor")),r.createElement("li",null,r.createElement(a.Link,{to:"/subscribe"},"Subscribe"))))))))):r.createElement("div",null,r.createElement("nav",{className:"uk-navbar-container","data-uk-navbar":!0},r.createElement("div",{className:"uk-navbar-left"},r.createElement("ul",{className:"uk-navbar-nav"},r.createElement("li",null,r.createElement(a.Link,{to:"/"},r.createElement("img",{width:"125",height:"25",src:"https://nwa-daily-photos.s3.amazonaws.com/faviconweb_removebg_preview_ec3f8396cb.png"}))))),r.createElement("div",{className:"uk-navbar-right"},r.createElement("ul",{className:"uk-navbar-nav"},r.createElement("li",null,r.createElement(a.Link,{to:"/guide"},"Guides")),r.createElement("li",null,r.createElement(a.Link,{to:"/events-in-northwest-arkansas"},"Events")),r.createElement("li",null,r.createElement(a.Link,{to:"/story"},"Stories")),r.createElement("li",null,r.createElement(a.Link,{to:"/archive"},"Archive")),r.createElement("li",null,r.createElement(a.Link,{to:"/jobs"},"Jobs")),r.createElement("li",null,r.createElement(a.Link,{to:"/advertise"},"Advertise")),r.createElement("li",null,r.createElement(a.Link,{to:"/partners"},"Sponsor")),r.createElement("li",null,r.createElement(a.Link,{to:"/subscribe"},"Subscribe")))))))};var c,l,s,u,f=()=>{const e=(0,i.Gc)();return r.createElement("div",null,r.createElement("div",null,e.sm?r.createElement("nav",{className:"uk-navbar-container","data-uk-navbar":!0},r.createElement("div",{className:"uk-navbar-center"},r.createElement("ul",{className:"uk-navbar-nav",style:{display:"block"}},r.createElement("li",{style:{display:"block"}},r.createElement(a.Link,{to:"/terms"},"Terms & Conditions")),r.createElement("li",{style:{display:"block"}},r.createElement(a.Link,{to:"/privacy"},"Privacy Policy")),r.createElement("li",{style:{display:"block"}},r.createElement(a.Link,{to:"/sweepstakes"},"Sweepstakes")),r.createElement("li",null,r.createElement(a.Link,{to:"/"},"Built with ❤️ ".concat("  ").concat(" in NWA"))),r.createElement("li",{style:{display:"block"}},r.createElement(a.Link,{to:"/"},"© ",1900+(new Date).getYear(),", NWA Daily LLC"))))):r.createElement("nav",{className:"uk-navbar-container","data-uk-navbar":!0},r.createElement("div",{className:"uk-navbar-left"},r.createElement("ul",{className:"uk-navbar-nav"},r.createElement("li",null,r.createElement(a.Link,{to:"/terms"},"Terms & Conditions")),r.createElement("li",null,r.createElement(a.Link,{to:"/privacy"},"Privacy Policy")),r.createElement("li",null,r.createElement(a.Link,{to:"/sweepstakes"},"Sweepstakes")))),r.createElement("div",{style:{paddingRight:"30px"},className:"uk-navbar-center"},r.createElement("ul",{className:"uk-navbar-nav"},r.createElement("li",null,r.createElement(a.Link,{to:"/"},"Built with ❤️ ".concat("  ").concat(" in NWA"))))),r.createElement("div",{style:{paddingRight:"30px"},className:"uk-navbar-right"},r.createElement("ul",{className:"uk-navbar-nav"},r.createElement("li",null,r.createElement(a.Link,{to:"/"},"© ",1900+(new Date).getYear(),", NWA Daily LLC")))))))},p=n(45697),m=n.n(p),d=n(24839),y=n.n(d),h=n(32993),v=n.n(h),b=n(46494),E=n.n(b),g="bodyAttributes",T="htmlAttributes",k="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},A=(Object.keys(w).map((function(e){return w[e]})),"charset"),S="cssText",C="href",O="http-equiv",L="innerHTML",j="itemprop",N="name",P="property",x="rel",I="src",_="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",B="defer",D="encodeSpecialCharacters",Y="onChangeClientState",q="titleTemplate",H=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),U=[w.NOSCRIPT,w.SCRIPT,w.STYLE],F="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=ee(e,w.TITLE),n=ee(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ee(e,R);return t||r||void 0},Q=function(e){return ee(e,Y)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return K({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ie("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],l=c.toLowerCase();-1===t.indexOf(l)||n===x&&"canonical"===e[n].toLowerCase()||l===x&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==L&&c!==S&&c!==j||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],l=E()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},ee=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},te=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout((function(){te(e)}),0)}),ne=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||te:n.g.requestAnimationFrame||te,ae="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ne:n.g.cancelAnimationFrame||ne,ie=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ce=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;ue(w.BODY,r),ue(w.HTML,a),se(f,p);var m={baseTag:fe(w.BASE,n),linkTags:fe(w.LINK,i),metaTags:fe(w.META,o),noscriptTags:fe(w.NOSCRIPT,c),scriptTags:fe(w.SCRIPT,s),styleTags:fe(w.STYLE,u)},d={},y={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(y[e]=m[e].oldTags)})),t&&t(),l(e,d,y)},le=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=le(e)),ue(w.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(F),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var l=o[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute(F):n.getAttribute(F)!==o.join(",")&&n.setAttribute(F,o.join(","))}},fe=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+F+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===L)n.innerHTML=t.innerHTML;else if(r===S)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(F,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},pe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})[F]=!0,i=me(n,a),[r.createElement(w.TITLE,i,e)];var e,n,a,i},toString:function(){return function(e,t,n,r){var a=pe(n),i=le(t);return a?"<"+e+" "+F+'="true" '+a+">"+V(i,r)+"</"+e+">":"<"+e+" "+F+'="true">'+V(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case T:return{toComponent:function(){return me(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,i=((a={key:n})[F]=!0,a);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===L||n===S){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),r.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===L||e===S)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===U.indexOf(e);return t+"<"+e+" "+F+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ye=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:de(w.BASE,t,r),bodyAttributes:de(g,n,r),htmlAttributes:de(T,a,r),link:de(w.LINK,i,r),meta:de(w.META,o,r),noscript:de(w.NOSCRIPT,c,r),script:de(w.SCRIPT,l,r),style:de(w.STYLE,s,r),title:de(w.TITLE,{title:f,titleAttributes:p},r)}},he=y()((function(e){return{baseTag:Z([C,_],e),bodyAttributes:$(g,e),defer:ee(e,B),encode:ee(e,D),htmlAttributes:$(T,e),linkTags:X(w.LINK,[x,C],e),metaTags:X(w.META,[N,A,O,P,j],e),noscriptTags:X(w.NOSCRIPT,[L],e),onChangeClientState:Q(e),scriptTags:X(w.SCRIPT,[I,L],e),styleTags:X(w.STYLE,[S],e),title:J(e),titleAttributes:$(k,e)}}),(function(e){oe&&ae(oe),e.defer?oe=re((function(){ce(e,(function(){oe=null}))})):(ce(e),oe=null)}),ye)((function(){return null})),ve=(l=he,u=s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!v()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return K({},r,((t={})[n.type]=[].concat(r[n.type]||[],[K({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case w.TITLE:return K({},a,((t={})[r.type]=o,t.titleAttributes=K({},i),t));case w.BODY:return K({},a,{bodyAttributes:K({},i)});case w.HTML:return K({},a,{htmlAttributes:K({},i)})}return K({},a,((n={})[r.type]=K({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=K({},t);return Object.keys(e).forEach((function(t){var r;n=K({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(W(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=W(e,["children"]),a=K({},n);return t&&(a=this.mapChildrenToProps(t,a)),r.createElement(l,a)},G(t,null,[{key:"canUseDOM",set:function(e){l.canUseDOM=e}}]),t}(r.Component),s.propTypes={base:m().object,bodyAttributes:m().object,children:m().oneOfType([m().arrayOf(m().node),m().node]),defaultTitle:m().string,defer:m().bool,encodeSpecialCharacters:m().bool,htmlAttributes:m().object,link:m().arrayOf(m().object),meta:m().arrayOf(m().object),noscript:m().arrayOf(m().object),onChangeClientState:m().func,script:m().arrayOf(m().object),style:m().arrayOf(m().object),title:m().string,titleAttributes:m().object,titleTemplate:m().string},s.defaultProps={defer:!0,encodeSpecialCharacters:!0},s.peek=l.peek,s.rewind=function(){var e=l.rewind();return e||(e=ye({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},u);ve.renderStatic=ve.rewind;const be=e=>{let{seo:t={}}=e;const{strapiGlobal:n}=(0,a.useStaticQuery)(ge),{defaultSeo:i,siteName:o,favicon:c}=n,l={...i,...t},s=(()=>{const e=[];if(l.metaTitle&&e.push({property:"og:title",content:l.metaTitle},{name:"twitter:title",content:l.metaTitle}),l.metaDescription&&e.push({name:"description",content:l.metaDescription},{property:"og:description",content:l.metaDescription},{name:"twitter:description",content:l.metaDescription}),l.shareImage){const t=({}.GATSBY_ROOT_URL||"http://localhost:8000")+l.shareImage.publicURL;e.push({name:"image",content:t},{property:"og:image",content:t},{name:"twitter:image",content:t})}return l.article&&e.push({property:"og:type",content:"article"}),e.push({name:"twitter:card",content:"summary_large_image"}),e})();return r.createElement(ve,{title:l.metaTitle,titleTemplate:"%s | "+o,link:[{rel:"icon",href:c.publicURL},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Staatliches"},{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"}],script:[{src:"https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"},{src:"https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js"},{src:"https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"}],meta:s})};var Ee=be;be.defaultProps={title:null,description:null,image:null,article:!1};const ge="557794130";var Te=e=>{let{children:t,seo:n}=e;return r.createElement(a.StaticQuery,{query:"161018792",render:e=>r.createElement(r.Fragment,null,r.createElement(Ee,{seo:n}),r.createElement(ve,null,r.createElement("script",{async:!0,src:"https://js.sparkloop.app/team_3438fa0f43.js","data-sparkloop":!0})),r.createElement(o,null),r.createElement("main",null,t),r.createElement(f,null))})}}}]);
//# sourceMappingURL=c0e2ed88665ea88fd3a34a123337c92128d51f53-137f63aa83ac1251ab75.js.map