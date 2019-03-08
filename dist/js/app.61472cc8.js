(function(t){function e(e){for(var s,a,o=e[0],l=e[1],c=e[2],p=0,d=[];p<o.length;p++)a=o[p],r[a]&&d.push(r[a][0]),r[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},r={app:0},i=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Loader"),n("Profile")],1)},i=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("dialog",{staticClass:"nes-dialog too-small-warning is-dark"},[n("h3",[t._v("TOO SMALL!")]),n("p",[t._v("\n\t\t\tHey. This screen is too small to view this page!"),n("br"),t._v("\n\t\t\tTry rotate your screen!\n\t\t")])]),n("dialog",{staticClass:"nes-dialog no-borders",attrs:{id:"loading-dialog"}},[n("p",{attrs:{id:"loading-message"}},[t._v("Loading...")])])])}],l=n("2877"),c={},u=Object(l["a"])(c,a,o,!1,null,null,null),p=u.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-screen",attrs:{id:"main-container",hidden:""}},[n("section",{staticClass:"animated fadeIn nes-container",attrs:{id:"profile-container"}},[n("div",{staticClass:"containers"},[n("div",{staticClass:"nes-container is-rounded is-centered"},[n("img",{attrs:{src:"img/jcc_logo.png",width:"200",alt:"My Logo"}}),n("p",[t._v("John Cyrill Corsanes")]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),n("br"),n("br"),n("button",{staticClass:"nes-btn",attrs:{onclick:"goToUrl('https://nostalgic-css.github.io/NES.css/')",id:"sensei-btn",type:"button"}},[t._v("NES.css")]),n("br"),n("br"),n("p",{staticStyle:{"font-size":"9px"}},[t._v("\n\t\t\t\t\tThis site's content(s) are under compliance of\n\t\t\t\t\t"),n("a",{staticStyle:{"font-size":"9px"},attrs:{href:"https://github.com/nostalgic-css/NES.css/blob/develop/LICENSE"}},[t._v("MIT\n\t\t\t\t\t\tLicense")]),t._v(".\n\t\t\t\t\t"),n("br"),n("br"),n("span",{staticStyle:{"font-size":"9px"}},[t._v("v"+t._s(t.app_version))]),t._v(" | "),n("a",{staticStyle:{"font-size":"9px"},attrs:{href:"v1"}},[t._v("Visit v1.0")]),n("br"),n("br")])])]),n("br"),n("Updates")],1)])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"profile-list"},[n("li",[t._v("Casual I.T. Guy")]),n("li",[t._v("Casual Developer, loves Web")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"nes-btn",attrs:{onclick:"goToUrl('https://linkedin.com/in/johncyrillcorsanes')",id:"linkedin-btn",type:"button"}},[n("i",{staticClass:"nes-icon linkedin"}),n("span",[t._v("LinkedIn")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"nes-btn",attrs:{onclick:"goToUrl('https://github.com/jccultima123')",id:"github-btn",type:"button"}},[n("i",{staticClass:"nes-icon github"}),n("span",[t._v("GitHub")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"nes-btn",attrs:{onclick:"goToUrl('mailto:johncyrillcorsanes@gmail.com', false)",id:"gmail-btn",type:"button"}},[n("i",{staticClass:"nes-icon gmail"}),n("span",[t._v("E-mail")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"nes-btn",attrs:{onclick:"goToUrl('https://www.youtube.com/user/jcstriker1')",id:"youtube-btn",type:"button"}},[n("i",{staticClass:"nes-icon youtube"}),n("span",[t._v("YouTube")])])}],b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"containers",staticStyle:{display:"none"},attrs:{id:"update-container"}},[n("div",{staticClass:"nes-container is-rounded"},[n("h4",[t._v("Updates")]),n("div",{attrs:{id:"all-post"}})])])}],_={},m=Object(l["a"])(_,b,v,!1,null,null,null),h=m.exports,g=n("9224"),y=g["a"],C={name:"Profile",components:{Updates:h},data:function(){return{app_version:y}}},j=C,w=Object(l["a"])(j,d,f,!1,null,null,null),E=w.exports,S={name:"app",components:{Loader:p,Profile:E}},x=S,O=Object(l["a"])(x,r,i,!1,null,null,null),T=O.exports,k=n("2f62");s["a"].use(k["a"]);var $=new k["a"].Store({state:{},mutations:{},actions:{}});s["a"].config.productionTip=!1,new s["a"]({store:$,render:function(t){return t(T)}}).$mount("#app")},9224:function(t){t.exports={a:"2.4.11"}}});
//# sourceMappingURL=app.61472cc8.js.map