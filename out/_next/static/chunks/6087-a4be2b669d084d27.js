(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6087],{48418:function(e,n,s){"use strict";function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var s=[],i=!0,a=!1,r=void 0;try{for(var t,l=e[Symbol.iterator]();!(i=(t=l.next()).done)&&(s.push(t.value),!n||s.length!==n);i=!0);}catch(c){a=!0,r=c}finally{try{i||null==l.return||l.return()}finally{if(a)throw r}}return s}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,r=(a=s(67294))&&a.__esModule?a:{default:a},t=s(76273),l=s(90387),c=s(57190);var o={};function d(e,n,s,i){if(e&&t.isLocalURL(n)){e.prefetch(n,s,i).catch((function(e){0}));var a=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;o[n+"%"+s+(a?"%"+a:"")]=!0}}var u=function(e){var n,s=!1!==e.prefetch,a=l.useRouter(),u=r.default.useMemo((function(){var n=i(t.resolveHref(a,e.href,!0),2),s=n[0],r=n[1];return{href:s,as:e.as?t.resolveHref(a,e.as):r||s}}),[a,e.href,e.as]),h=u.href,m=u.as,f=e.children,p=e.replace,j=e.shallow,v=e.scroll,x=e.locale;"string"===typeof f&&(f=r.default.createElement("a",null,f));var g=(n=r.default.Children.only(f))&&"object"===typeof n&&n.ref,N=i(c.useIntersection({rootMargin:"200px"}),2),y=N[0],b=N[1],w=r.default.useCallback((function(e){y(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,y]);r.default.useEffect((function(){var e=b&&s&&t.isLocalURL(h),n="undefined"!==typeof x?x:a&&a.locale,i=o[h+"%"+m+(n?"%"+n:"")];e&&!i&&d(a,h,m,{locale:n})}),[m,h,b,x,s,a]);var k={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,s,i,a,r,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&t.isLocalURL(s))&&(e.preventDefault(),null==l&&i.indexOf("#")>=0&&(l=!1),n[a?"replace":"push"](s,i,{shallow:r,locale:c,scroll:l}))}(e,a,h,m,p,j,v,x)},onMouseEnter:function(e){t.isLocalURL(h)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),d(a,h,m,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof x?x:a&&a.locale,C=a&&a.isLocaleDomain&&t.getDomainLocale(m,L,a&&a.locales,a&&a.domainLocales);k.href=C||t.addBasePath(t.addLocale(m,L,a&&a.defaultLocale))}return r.default.cloneElement(n,k)};n.default=u},57190:function(e,n,s){"use strict";function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var s=[],i=!0,a=!1,r=void 0;try{for(var t,l=e[Symbol.iterator]();!(i=(t=l.next()).done)&&(s.push(t.value),!n||s.length!==n);i=!0);}catch(c){a=!0,r=c}finally{try{i||null==l.return||l.return()}finally{if(a)throw r}}return s}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,s=e.disabled||!t,c=a.useRef(),o=i(a.useState(!1),2),d=o[0],u=o[1],h=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),s||d||e&&e.tagName&&(c.current=function(e,n,s){var i=function(e){var n=e.rootMargin||"",s=l.get(n);if(s)return s;var i=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=i.get(e.target),s=e.isIntersecting||e.intersectionRatio>0;n&&s&&n(s)}))}),e);return l.set(n,s={id:n,observer:a,elements:i}),s}(s),a=i.id,r=i.observer,t=i.elements;return t.set(e,n),r.observe(e),function(){t.delete(e),r.unobserve(e),0===t.size&&(r.disconnect(),l.delete(a))}}(e,(function(e){return e&&u(e)}),{rootMargin:n}))}),[s,n,d]);return a.useEffect((function(){if(!t&&!d){var e=r.requestIdleCallback((function(){return u(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[d]),[h,d]};var a=s(67294),r=s(9311),t="undefined"!==typeof IntersectionObserver;var l=new Map},1311:function(e,n){"use strict";n.Z=function(e){var n=[];if(!e.parentNode)return n;for(var s=e.parentNode.firstChild;s;)1===s.nodeType&&s!==e&&n.push(s),s=s.nextSibling;return n}},57498:function(e,n,s){"use strict";s.d(n,{z:function(){return a},_:function(){return r}});var i=s(1311),a=function(e){(0,i.Z)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},r=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},33391:function(e,n,s){"use strict";var i=s(85893),a=(s(67294),s(41664),s(82806));n.Z=function(e){var n=e.hideBGCOLOR;return(0,i.jsx)("footer",{className:"".concat(n?"":"sub-bg"),children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-4",children:(0,i.jsxs)("div",{className:"item md-mb50",children:[(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h5",{children:"Contact Us"})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"icon pe-7s-map-marker"}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h6",{children:"Location"}),(0,i.jsx)("p",{children:"London & Kent"})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"icon pe-7s-mail"}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h6",{children:"Email Us"}),(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:"mailto:iameddyoswald@gmail.com",children:"iameddyoswald@gmail.com"})})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"icon pe-7s-call"}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h6",{children:"Call Me"}),(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:"tel:+44 7983241425",children:"+44 7983241425"})})]})]})]})]})}),(0,i.jsx)("div",{className:"col-lg-4"}),(0,i.jsx)("div",{className:"col-lg-4",children:(0,i.jsxs)("div",{className:"item",children:[(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)("img",{src:a.E8,alt:""})}),(0,i.jsx)("div",{className:"social",children:(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-linkedin"})})}),(0,i.jsx)("div",{className:"copy-right",children:(0,i.jsx)("p",{children:"\xa9 2022, Eddy Ku"})})]})})]})})})}},65895:function(e,n,s){"use strict";var i=s(85893),a=(s(67294),s(41664)),r=s(82806),t=s(57498);n.Z=function(e){var n=e.lr,s=e.nr,l=e.theme;return(0,i.jsx)("nav",{ref:s,className:"navbar navbar-expand-lg change ".concat("themeL"===l?"light":""),children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(a.default,{href:"/",children:(0,i.jsx)("a",{className:"logo",children:l&&"themeL"===l?(0,i.jsx)("img",{ref:n,src:r.Q1,alt:"logo"}):(0,i.jsx)("img",{ref:n,src:r.E8,alt:"logo"})})}),(0,i.jsx)("button",{className:"navbar-toggler",type:"button",onClick:t._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,i.jsx)("span",{className:"icon-bar",children:(0,i.jsx)("i",{className:"fas fa-bars"})})}),(0,i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,i.jsx)("ul",{className:"navbar-nav ml-auto",children:(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(a.default,{href:"/",children:(0,i.jsx)("a",{className:"nav-link",children:"Home"})})})})})]})})}},21095:function(e,n,s){"use strict";var i=s(85893);s(67294);n.Z=function(){return(0,i.jsx)("section",{className:"next-prog section-padding",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-12",children:(0,i.jsx)("div",{className:"box",children:(0,i.jsxs)("div",{className:"bg-img valign",style:{backgroundImage:"url(/img/portfolio/project2/6.jpg)"},"data-overlay-dark":"4",children:[(0,i.jsx)("div",{className:"caption ontop valign",children:(0,i.jsx)("div",{className:"o-hidden full-width",children:(0,i.jsx)("h1",{children:(0,i.jsx)("a",{href:"",children:(0,i.jsx)("div",{className:"stroke",children:"Natural plus modern."})})})})}),(0,i.jsx)("div",{className:"copy-cap valign",children:(0,i.jsx)("div",{className:"cap full-width",children:(0,i.jsx)("h1",{children:(0,i.jsx)("a",{href:"",children:(0,i.jsx)("span",{children:"Natural plus modern."})})})})})]})})})})})})}},62351:function(e,n,s){"use strict";var i=s(85893);s(67294);n.Z=function(e){var n=e.projectDescriptionData;return(0,i.jsx)("section",{className:"intro-section section-padding",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-3 col-md-4",children:(0,i.jsx)("div",{className:"htit",children:(0,i.jsxs)("h4",{children:[(0,i.jsx)("span",{children:"02 "})," Description"]})})}),(0,i.jsx)("div",{className:"col-lg-8 offset-lg-1 col-md-8",children:(0,i.jsx)("div",{className:"text js-scroll__content",children:(0,i.jsx)("p",{className:"extra-text",children:n.content})})})]})})})}},69965:function(e,n,s){"use strict";var i=s(85893),a=(s(67294),s(41664));n.Z=function(e){var n=e.projectHeaderData;return(0,i.jsx)("section",{className:"page-header proj-det bg-img parallaxie valign",style:{backgroundImage:"url(".concat(n.projectHeaderImage,")")},"data-overlay-dark":"4",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-lg-7 col-md-9",children:(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h6",{children:n.title.small}),(0,i.jsx)("h2",{children:n.title.big})]})})}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-3",children:(0,i.jsxs)("div",{className:"item mt-30",children:[(0,i.jsx)("h6",{children:"Client"}),(0,i.jsx)("p",{children:(0,i.jsx)(a.default,{href:n.clientURLLink,children:(0,i.jsx)("a",{children:n.clientURLName})})})]})}),(0,i.jsx)("div",{className:"col-lg-3",children:(0,i.jsxs)("div",{className:"item mt-30",children:[(0,i.jsx)("h6",{children:"Date"}),(0,i.jsx)("p",{children:n.date})]})}),(0,i.jsx)("div",{className:"col-lg-3",children:(0,i.jsxs)("div",{className:"item mt-30",children:[(0,i.jsx)("h6",{children:"Categories"}),(0,i.jsx)("p",{children:n.categories.map((function(e,s){return(0,i.jsx)(a.default,{href:e.link,children:(0,i.jsxs)("a",{children:[e.name,n.categories.length!=s+1?" ,":""]})},e.id)}))})]})}),(0,i.jsx)("div",{className:"col-lg-3",children:(0,i.jsxs)("div",{className:"item mt-30",children:[(0,i.jsx)("h6",{children:"Tags"}),(0,i.jsx)("p",{children:n.tags.map((function(e,s){return(0,i.jsx)(a.default,{href:e.link,children:(0,i.jsxs)("a",{children:[e.name,n.tags.length!=s+1?" ,":""]})},e.id)}))})]})})]})]})})}},63769:function(e,n,s){"use strict";var i=s(85893);s(67294);n.Z=function(){return(0,i.jsx)("section",{className:"projdtal",children:(0,i.jsx)("div",{className:"popup-img",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("a",{href:"#",className:"col-md-3 popimg",children:(0,i.jsx)("img",{alt:"",src:"/img/portfolio/project2/1.jpg"})}),(0,i.jsx)("a",{href:"#",className:"col-md-3 popimg",children:(0,i.jsx)("img",{alt:"",src:"/img/portfolio/project2/2.jpg"})}),(0,i.jsx)("a",{href:"#",className:"col-md-3 popimg",children:(0,i.jsx)("img",{alt:"",src:"/img/portfolio/project2/3.jpg"})}),(0,i.jsx)("a",{href:"#",className:"col-md-3 popimg",children:(0,i.jsx)("img",{alt:"",src:"/img/portfolio/project2/5.jpg"})}),(0,i.jsx)("a",{href:"#",className:"col-md-12 popimg",children:(0,i.jsx)("img",{alt:"",src:"/img/portfolio/project2/7.jpg"})})]})})})}},61946:function(e,n,s){"use strict";var i=s(85893);s(67294);n.Z=function(e){var n=e.projectIntroductionData;return(0,i.jsx)("section",{className:"intro-section section-padding",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-3 col-md-4",children:(0,i.jsx)("div",{className:"htit",children:(0,i.jsxs)("h4",{children:[(0,i.jsx)("span",{children:"01 "})," Introduction"]})})}),(0,i.jsx)("div",{className:"col-lg-8 offset-lg-1 col-md-8",children:(0,i.jsxs)("div",{className:"text js-scroll__content",children:[(0,i.jsx)("p",{className:"extra-text",children:n.content}),(0,i.jsx)("ul",{className:"smp-list mt-30",children:n.spmList.map((function(e){return(0,i.jsx)("li",{children:e.name},e.id)}))})]})})]})})})}},72658:function(e,n,s){"use strict";var i=s(85893),a=s(67294),r=s(61239);s(45607);function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var s=[],i=!0,a=!1,r=void 0;try{for(var t,l=e[Symbol.iterator]();!(i=(t=l.next()).done)&&(s.push(t.value),!n||s.length!==n);i=!0);}catch(c){a=!0,r=c}finally{try{i||null==l.return||l.return()}finally{if(a)throw r}}return s}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.Z=function(e){var n=e.projectVideoDate;console.clear();var s=t(a.useState(!1),2),l=s[0],c=s[1];return(0,i.jsx)("section",{children:(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsx)("div",{className:"video-wrapper section-padding bg-img parallaxie valign",style:{backgroundImage:"url(".concat(n.projectHeaderImage,")")},"data-overlay-dark":"4",children:(0,i.jsxs)("div",{className:"full-width text-center",children:[(0,i.jsx)(r.Z,{channel:"vimeo",autoplay:!0,isOpen:l,videoId:"127203262",onClose:function(){return c(!1)}}),(0,i.jsx)("a",{className:"vid",onClick:function(e){e.preventDefault(),c(!0)},children:(0,i.jsx)("div",{className:"vid-butn",children:(0,i.jsx)("span",{className:"icon",children:(0,i.jsx)("i",{className:"fas fa-play"})})})})]})})})})}},41664:function(e,n,s){e.exports=s(48418)},34268:function(e){"use strict";e.exports=JSON.parse('{"id":1,"title":{"small":"art & illustration","big":"Inspiring new space."},"clientURLLink":"#","projectHeaderImage":"/img/portfolio/project2/bg.jpg","videoLink":"https://vimeo.com/127203262","clientURLName":"Envato.com","date":"6 August 2022","categories":[{"id":1,"name":"Web Design","link":"#"},{"id":2,"name":"WordPress","link":"#"}],"tags":[{"id":1,"name":"Minimal","link":"#"},{"id":2,"name":"Modern","link":"#"},{"id":3,"name":"Design","link":"#"}],"intro":{"content":"We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part.","spmList":[{"id":1,"name":"Aenean sollicitudin"},{"id":2,"name":"lorem quis bibendum auctor"},{"id":31,"name":"nisi elit conseq uat ipsum"},{"id":4,"name":"nec sagittis sem nibh id elit"}]},"gallery":["/img/portfolio/project2/1.jpg","/img/portfolio/project2/2.jpg","/img/portfolio/project2/3.jpg","/img/portfolio/project2/5.jpg","/img/portfolio/project2/7.jpg"],"description":{"content":"We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part."}}')}}]);