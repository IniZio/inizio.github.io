!function(e){e.$fuse$=e,e.global("__fsbx_css",function(t,r){if(!e.isServer){var n=t.replace(/[\.\/]+/g,"-");"-"===n.charAt(0)&&(n=n.substring(1));var o=document.getElementById(n);if(o)r&&(o.innerHTML=r);else{var i=document.createElement(r?"style":"link");i.id=n,i.type="text/css",r?i.innerHTML=r:(i.rel="stylesheet",i.href=t),document.getElementsByTagName("head")[0].appendChild(i)}}}),e.on("async",function(t){if(!e.isServer)return/\.css$/.test(t)?(__fsbx_css(t),!1):void 0}),e.pkg("default",{},function(e){e.file("index.js",function(e,t,r,n,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var s=t("react"),a=i(s),u=t("react-dom"),l=i(u);t("./styles/main.scss");var c=t("./App"),f=i(c);l.default.render(a.default.createElement(f.default,null),document.getElementById("root"))}),e.file("styles/main.scss",function(e,t,r,n,o){__fsbx_css("styles/main.css")}),e.file("App.js",function(e,t,r,n,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l,c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=t("react"),p=i(f),d=t("mobx-react"),h=t("./store"),b=i(h),y=t("./router"),m=i(y),v=(0,d.observer)(l=function(e){function t(){return s(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){return p.default.createElement(m.default,{store:b.default})}}]),t}(f.Component))||l;e.default=v}),e.file("store/index.js",function(e,t,r,n,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t,r,n,o){var i={};return Object.keys(n).forEach(function(e){i[e]=n[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.PostStore=e.Post=void 0;var l,c,f,p,d,h,b,y,m=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),v=t("axios"),g=i(v),w=t("mobx"),_=t("front-matter"),O=i(_),j=t("../util"),P=t("./api"),E=t("markdown-it")({}),S=e.Post=(l=function(){function e(t){a(this,e),s(this,"name",c,this),s(this,"sha",f,this),s(this,"size",p,this),s(this,"body",d,this),s(this,"attributes",h,this),Object.assign(this,t)}return m(e,[{key:"title",get:function(){return this.name?this.name.replace(/\.md$/,"").replace(/^\d{4}-\d{1,2}-\d{1,2}-/,""):""}},{key:"date",get:function(){return/^\d{4}-\d{1,2}-\d{1,2}/.exec(this.name)?/^\d{4}-\d{1,2}-\d{1,2}/.exec(this.name)[0]:""}},{key:"html",get:function(){return this.body?E.render(this.body):""}}]),m(e,[{key:"fetchDetail",value:function(){var e=this;return new Promise(function(t,r){var n="post."+e.sha,o=void 0;e.body&&t(e),window.sessionStorage&&window.sessionStorage.hasOwnProperty(n)?(o=JSON.parse(window.sessionStorage.getItem(n)),Object.assign(e,o),t(e)):g.default.get((0,P.getPostUrl)(e.sha),{headers:{Accept:"application/vnd.github.v3.raw"}}).then(function(r){o=(0,O.default)(r.data),console.log(o),Object.assign(e,o),window.sessionStorage&&window.sessionStorage.setItem(n,JSON.stringify(o)),t(e)},r)})}}]),e}(),c=u(l.prototype,"name",[w.observable],{enumerable:!0,initializer:null}),f=u(l.prototype,"sha",[w.observable],{enumerable:!0,initializer:null}),p=u(l.prototype,"size",[w.observable],{enumerable:!0,initializer:null}),d=u(l.prototype,"body",[w.observable],{enumerable:!0,initializer:null}),h=u(l.prototype,"attributes",[w.observable],{enumerable:!0,initializer:null}),u(l.prototype,"title",[w.computed],Object.getOwnPropertyDescriptor(l.prototype,"title"),l.prototype),u(l.prototype,"date",[w.computed],Object.getOwnPropertyDescriptor(l.prototype,"date"),l.prototype),u(l.prototype,"html",[w.computed],Object.getOwnPropertyDescriptor(l.prototype,"html"),l.prototype),u(l.prototype,"fetchDetail",[w.action],Object.getOwnPropertyDescriptor(l.prototype,"fetchDetail"),l.prototype),l),x=e.PostStore=(b=function(){function e(){a(this,e),s(this,"posts",y,this)}return m(e,[{key:"fetchList",value:function(){var e=this;return new Promise(function(t,r){if(window.sessionStorage&&window.sessionStorage.hasOwnProperty("posts")){var n=JSON.parse(window.sessionStorage.getItem("posts"));e.posts=n.map(function(e){return new S(e)}),t(n)}else g.default.get((0,P.getListUrl)()).then(function(r){var n=r.data.reverse().map(function(e){return new S((0,j.objReduce)(e,["name","sha","size"]))});window.sessionStorage&&window.sessionStorage.setItem("posts",JSON.stringify(n)),e.posts=n,t(n)},r)})}}]),e}(),y=u(b.prototype,"posts",[w.observable],{enumerable:!0,initializer:function(){return[]}}),u(b.prototype,"fetchList",[w.action],Object.getOwnPropertyDescriptor(b.prototype,"fetchList"),b.prototype),b);e.default={postStore:new x}}),e.file("util.js",function(e,t,r,n,o){"use strict";function i(e,t){return Object.keys(e).filter(function(e){return-1!==t.indexOf(e)}).reduce(function(t,r){return t[r]=e[r],t},{})}function s(e){return e.replace(/\.md$/,"").replace(/^\d{4}-\d{1,2}-\d{1,2}-/,"")}function a(e){return/^\d{4}-\d{1,2}-\d{1,2}/.exec(e)?/^\d{4}-\d{1,2}-\d{1,2}/.exec(e)[0]:""}Object.defineProperty(e,"__esModule",{value:!0}),e.objReduce=i,e.onlyTitle=s,e.onlyDate=a}),e.file("store/api.js",function(e,t,r,n,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getPostUrl=e.getListUrl=void 0;var i=t("../repo.json"),s=function(e){return e&&e.__esModule?e:{default:e}}(i);e.getListUrl=function(){return"https://api.github.com/repos/"+s.default.repo+"/contents/"+(s.default.path?s.default.path:"")+"?"+(s.default.branch?"ref="+s.default.branch:"")},e.getPostUrl=function(e){return"https://api.github.com/repos/"+s.default.repo+"/git/blobs/"+e}}),e.file("repo.json",function(e,t,r,n,o){r.exports={blogTitle:"IniZio",repo:"IniZio/Thoughts",path:"posts",branch:null}}),e.file("router.js",function(e,t,r,n,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=t("react"),u=i(a),l=t("react-router-dom"),c=t("./scenes/List"),f=i(c),p=t("./scenes/Post"),d=i(p);e.default=function(e){var t=e.store,r="pushState"in window.history;return u.default.createElement(l.BrowserRouter,{basename:"/",forceRefresh:!r},u.default.createElement("div",null,u.default.createElement(l.Route,{exact:!0,path:"/",component:function(){return u.default.createElement(f.default,{postStore:t.postStore})}}),u.default.createElement(l.Route,{path:"/post/:sha",component:function(e){return u.default.createElement(d.default,s({},e,{post:t.postStore.posts.filter(function(t){return t.sha===e.match.params.sha})[0]}))}})))}}),e.file("scenes/List/index.js",function(e,t,r,n,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l,c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=t("react"),p=i(f),d=t("mobx-react"),h=t("react-router-dom"),b=t("react-list"),y=i(b),m=(t("../../store"),(0,d.observer)(l=function(e){function t(){var e,r,n,o;s(this,t);for(var i=arguments.length,u=Array(i),l=0;l<i;l++)u[l]=arguments[l];return r=n=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.renderPost=function(e,t){var r=n.props.postStore.posts[e];return p.default.createElement("li",{key:t},p.default.createElement(h.Link,{to:"post/"+r.sha},r.title))},o=r,a(n,o)}return u(t,e),c(t,[{key:"componentDidMount",value:function(){this.props.postStore.fetchList()}},{key:"render",value:function(){this.props.postStore.posts;return p.default.createElement("div",null,p.default.createElement("h1",null,"Post list"),p.default.createElement("div",{style:{maxHeight:400}},p.default.createElement("ul",null,p.default.createElement(y.default,{itemRenderer:this.renderPost,length:this.props.postStore.posts.length}))))}}]),t}(f.Component))||l);e.default=m}),e.file("scenes/Post/index.js",function(e,t,r,n,o){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u,l,c,f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=t("react"),d=function(e){return e&&e.__esModule?e:{default:e}}(p),h=t("mobx-react"),b=t("../../store"),y=(0,h.observer)((c=l=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"componentDidMount",value:function(){this.props.post.sha||(this.props.post.sha=this.props.match.params.sha),this.props.post.fetchDetail()}},{key:"render",value:function(){return d.default.createElement("div",null,this.props.post.sha?d.default.createElement("div",null,d.default.createElement("h1",null,this.props.post.title),d.default.createElement("article",{dangerouslySetInnerHTML:{__html:this.props.post.html}})):null)}}]),t}(p.Component),l.defaultProps={post:new b.Post({sha:""})},u=c))||u;e.default=y})}),e.import("default/index.js"),e.main("default/index.js")}(FuseBox);