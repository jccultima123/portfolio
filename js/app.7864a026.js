(function(t){function e(e){for(var a,n,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0bd1":function(t,e,s){"use strict";s("8687")},"1d13":function(t,e,s){},"3e4d":function(t,e,s){"use strict";s("532f")},"532f":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Loader"),s("Profile")],1)},r=[],n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"loader-container"}},[s("div",{staticClass:"containers"},[s("div",{staticClass:"nes-container is-rounded is-centered",attrs:{id:"loading-dialog"}},[s("p",{attrs:{id:"loading-message"}},[t._v("Initializing...")])])])])}],c=(s("0bd1"),s("2877")),l={},d=Object(c["a"])(l,n,o,!1,null,"0e459a24",null),u=d.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-screen",attrs:{id:"main-container"}},[s("section",{staticClass:"animated fadeIn nes-container",attrs:{id:"profile-container"}},[s("div",{staticClass:"containers"},[s("div",{staticClass:"nes-container is-rounded is-centered"},[s("img",{attrs:{id:"profile-logo",src:"img/jcc_logo.png",width:"200",alt:"My Logo"}}),s("br"),s("br"),s("ul",{staticClass:"profile-list"},[s("li",[t._v("Lazy Geek & "),s("a",{attrs:{href:"#"},on:{click:t.showProjects}},[t._v("Developer")])]),s("li",[t._v(" for Android & Web.")]),s("br"),s("li",[t._v(" I love "),s("a",{attrs:{href:"#"},on:{click:t.showSpotify}},[t._v(" music")]),t._v("! ")]),s("br")]),t._m(0),t._m(1),t._m(2),t._m(3),s("br"),s("br"),s("p",{staticStyle:{"font-size":"11px"}},[t._v(" This page is made with")]),s("p",{staticStyle:{"font-size":"9px"}},[s("button",{staticClass:"used-assets-btn nes-btn",attrs:{onclick:"goToUrl('https://vuejs.org')",type:"button"}},[t._v("VueJS")]),s("button",{staticClass:"used-assets-btn nes-btn",attrs:{onclick:"goToUrl('https://nostalgic-css.github.io/NES.css/')",type:"button"}},[t._v("NES.css")]),s("button",{staticClass:"used-assets-btn nes-btn",attrs:{onclick:"goToUrl('https://graphql.org')",type:"button"}},[t._v("GraphQL")]),s("br"),s("br"),s("span",{staticStyle:{"font-size":"9px"}},[s("a",{attrs:{href:"javascript:goToUrl('https://github.com/jcchikikomori/portfolio/releases')"}},[t._v("v"+t._s(t.app_version))]),t._v(" | "),s("a",{staticStyle:{"font-size":"9px"},attrs:{target:"_blank",href:"v1"}},[t._v("Visit old version")])]),s("br"),s("br")])])]),s("br"),t._m(4),s("Projects"),s("Spotify"),s("Updates")],1)])},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"nes-btn",attrs:{onclick:"goToUrl('https://johncyrillcorsanes.medium.com')",id:"medium-btn",type:"button"}},[s("i",{staticClass:"nes-icon medium"}),t._v(" "),s("span",[t._v("Medium")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"nes-btn",attrs:{onclick:"goToUrl('https://linkedin.com/in/johncyrillcorsanes')",id:"linkedin-btn",type:"button"}},[s("i",{staticClass:"nes-icon linkedin"}),t._v(" "),s("span",[t._v("LinkedIn")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"nes-btn",attrs:{onclick:"goToUrl('https://github.com/jcchikikomori')",id:"github-btn",type:"button"}},[s("i",{staticClass:"nes-icon github"}),t._v(" "),s("span",[t._v("GitHub")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"nes-btn",attrs:{onclick:"goToUrl('https://www.youtube.com/user/jcstriker1')",id:"youtube-btn",type:"button"}},[s("i",{staticClass:"nes-icon youtube"}),t._v(" "),s("span",[t._v("YouTube")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"containers"},[s("div",{staticClass:"nes-container is-rounded",attrs:{id:"post-container"}},[s("div",{attrs:{id:"all-post"}})])])}],m=s("a562"),v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"projects-container"}},[s("dialog",{staticClass:"nes-dialog is-rounded",attrs:{id:"dialog-projects"}},[s("form",{attrs:{method:"dialog"}},[s("h5",{staticClass:"title"},[t._v("Projects & Contributions")]),s("p",{staticClass:"subtitle"},[t._v("See more by "),s("a",{attrs:{href:"javascript:goToUrl('https://github.com/jcchikikomori')"}},[t._v("contacting me")]),t._v(" for my CV!")]),s("div",{staticClass:"card-group"},[s("div",{staticClass:"card"},[s("img",{staticClass:"card-img-top",attrs:{src:"img/projects/placeholder.png",alt:"php7-starter",onclick:"goToUrl('https://github.com/jcchikikomori/php7-starter')"}}),s("div",{staticClass:"card-body"},[s("h6",{staticClass:"card-title"},[t._v("php7-starter")]),s("p",{staticClass:"card-text"},[t._v("Pure & naked PHP 7 micro-framework. Perfect for prototypes.")]),s("p",{staticClass:"card-text"},[s("small",{staticClass:"text-muted"},[t._v("2017-present")])])])]),s("div",{staticClass:"card"},[s("img",{staticClass:"card-img-top",attrs:{src:"img/projects/placeholder.png",alt:"PayMaya Android SDK",onclick:"goToUrl('https://github.com/jcchikikomori?org=PayMaya&year_list=1')"}}),s("div",{staticClass:"card-body"},[s("h6",{staticClass:"card-title"},[t._v("PayMaya Android SDK")]),s("p",{staticClass:"card-text"},[t._v("Contributed the issues & fixes for their Android SDKs.")]),s("p",{staticClass:"card-text"},[s("small",{staticClass:"text-muted"},[t._v("2020-present")])])])]),s("div",{staticClass:"card"},[s("img",{staticClass:"card-img-top",attrs:{src:"img/projects/covemanila.png",alt:"Cove Manila",onclick:"goToUrl('https://covemanila.com')"}}),s("div",{staticClass:"card-body"},[s("h6",{staticClass:"card-title"},[t._v("Cove Manila 2019")]),s("p",{staticClass:"card-text"},[t._v("Maintained with Gorated Innovation Labs, Inc.")]),s("p",{staticClass:"card-text"},[s("small",{staticClass:"text-muted"},[t._v("2019")])])])]),s("div",{staticClass:"card"},[s("img",{staticClass:"card-img-top",attrs:{src:"img/projects/mcdelivery.png",alt:"McDelivery for Android",onclick:"goToUrl('https://play.google.com/store/apps/details?id=ph.mobext.mcdelivery&hl=en&gl=US')"}}),s("div",{staticClass:"card-body"},[s("h6",{staticClass:"card-title"},[t._v("McDelivery for Android")]),s("p",{staticClass:"card-text"},[t._v("Currently maintained with Gorated Innovation Labs, Inc.")]),s("p",{staticClass:"card-text"},[s("small",{staticClass:"text-muted"},[t._v("2019-present")])])])])]),s("menu",{staticClass:"dialog-menu"},[s("button",{staticClass:"nes-btn is-primary"},[t._v("Okay")])])])])])}],h={name:"Projects",components:{}},g=h,_=(s("f037"),Object(c["a"])(g,v,b,!1,null,"c452b39a",null)),y=_.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"spotify-container"}},[s("dialog",{staticClass:"nes-dialog is-rounded",attrs:{id:"dialog-spotify"}},[s("form",{attrs:{method:"dialog"}},[s("p",{staticClass:"title"},[t._v("My Party Box")]),s("p",{staticClass:"subtitle"},[t._v("powered by Spotify")]),s("iframe",{attrs:{src:"https://open.spotify.com/embed/playlist/64mrMELI7nTWZWbYAww4Zv",width:"450",height:"250",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}}),s("menu",{staticClass:"dialog-menu"},[s("button",{staticClass:"nes-btn is-primary"},[t._v("Close")])])])])])}],k={name:"Spotify",components:{}},w=k,x=(s("3e4d"),Object(c["a"])(w,C,j,!1,null,"f2de0e9e",null)),S=x.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"update-container"}})},E=[],O={},T=Object(c["a"])(O,P,E,!1,null,null,null),M=T.exports,U=s("9224"),$=U["a"],I={name:"Profile",components:{Projects:y,Spotify:S,Updates:M},methods:{showProjects:function(){var t=document.getElementById("dialog-projects");m["a"].registerDialog(t),t.showModal()},showSpotify:function(){var t=document.getElementById("dialog-spotify");m["a"].registerDialog(t),t.showModal()}},data:function(){return{app_version:$}}},L=I,D=Object(c["a"])(L,p,f,!1,null,null,null),A=D.exports,z={name:"app",components:{Loader:u,Profile:A}},G=z,J=(s("5c0b"),Object(c["a"])(G,i,r,!1,null,null,null)),B=J.exports,K=s("2f62");a["a"].use(K["a"]);var N=new K["a"].Store({state:{},mutations:{},actions:{}});s("30fe");a["a"].config.productionTip=!1,new a["a"]({store:N,render:function(t){return t(B)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},8687:function(t,e,s){},9224:function(t){t.exports=JSON.parse('{"a":"2.5.1"}')},"9c0c":function(t,e,s){},f037:function(t,e,s){"use strict";s("1d13")}});
//# sourceMappingURL=app.7864a026.js.map