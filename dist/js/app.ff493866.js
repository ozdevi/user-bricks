(function(e){function t(t){for(var n,a,s=t[0],c=t[1],u=t[2],d=0,b=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&b.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4025:function(e,t,r){"use strict";var n=r("e86f"),i=r.n(n);i.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("Hello, user!")]),r("p",[e._v(" This website will be built on top of your requests. Each request is a brick and we can start a construction with them. So this is really under construction. Go bring a brick! ")]),r("h2",[e._v("Where can I put my bricks?")]),e._m(0),r("UserBricks"),e._m(1)],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Good question. Maybe we need some sort of stockpile when we have many bricks! Until then, you can send your brick via email: "),r("a",{attrs:{href:"mailto:sendmybrick@gmail.com"}},[e._v("sendmybrick@gmail.com")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("img",{attrs:{src:r("5dd0"),alt:"A pictogram worker is digging the ground.",title:"1st brick by @ozdevi"}}),n("br"),n("a",{attrs:{href:"https://github.com/ozdevi"}},[e._v("ozdevi")]),e._v(" and "),n("a",{attrs:{href:"https://github.com/rabia-begum"}},[e._v("rabia begum")]),e._v(" are working on this... "),n("br"),n("br"),n("a",{attrs:{href:"/",title:"by @everyone"}},[e._v("Latest")]),e._v(" • History: "),n("a",{attrs:{href:"/bricks/base.html",title:"by @ozdevi"}},[e._v("Base")]),e._v(" • "),n("a",{attrs:{href:"/bricks/1st.html",title:"by @ozdevi"}},[e._v("1st Brick")]),e._v(" • "),n("a",{attrs:{href:"/bricks/2nd.html",title:"by @gulp"}},[e._v("2nd Brick")]),n("br"),n("br"),n("small",[e._v("gif graciously taken from "),n("a",{attrs:{href:"http://textfiles.com/underconstruction/"}},[e._v("textfiles.com")])])])}],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("Bricks (To-do list):")]),r("ul",[r("li",[r("input",{attrs:{type:"checkbox",id:"1st",checked:"","aria-checked":"true",title:"2nd brick by @gulp"}}),r("label",[e._v("Add under construction gif — me")])]),r("li",[r("input",{attrs:{type:"checkbox",id:"1st",checked:"","aria-checked":"true",title:"2nd brick by @gulp"}}),r("label",[e._v("Here is my brick! Turn those goddamn bullets into checkboxes. — "),r("a",{attrs:{href:"https://news.ycombinator.com/user?id=gulp"}},[e._v("@gulp")])])]),r("li",[r("input",{attrs:{type:"checkbox",id:"1st",disabled:"",title:"2nd brick by @gulp"}}),r("label",[e._v("Seriously need a stockpile (form/database) to save the bricks! — me")])])])])}],c={name:"UserBricks",props:{msg:String}},u=c,l=(r("4025"),r("2877")),d=Object(l["a"])(u,a,s,!1,null,"d919d18c",null),b=d.exports,h={name:"App",components:{UserBricks:b}},p=h,f=Object(l["a"])(p,i,o,!1,null,null,null),v=f.exports,A=r("2f62");n["a"].use(A["a"]);var m=new A["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({store:m,render:function(e){return e(v)}}).$mount("#user-bricks")},"5dd0":function(e,t){e.exports="data:image/gif;base64,R0lGODlhUQAyAPIAAP//AMzMM5mZQ3d3d2RkNzQ0NAAAAAQFBiH/C05FVFNDQVBFMi4wAwEAAAAh+QQFDgAHACwAAAAAUQAyAAAD/3i63P4wykmrvTjbwrv/YCiOZBkOTgGsbOu+cCzPNFygi1rvfO+3t9xvSCwCggqdccm04Q7KppSJhE6vy2oU+zMYigGWlmsUGMJd8XNL9gW86N1bLWwP3wLzd2cQ0JN2P29xZnEyeytjgT1nLm+NMXN/Vos7ZoeILn1Aa5V8Lnl+K4+OkImdnjSZBF5eBABehSxeLoqphyysrbF7jwFmopNsty2Iu61bj5mndcQwkMdebJcvts6lK9EGW8BOzdeaX7q7oJvegODP4rvBAIMy1unFZ9KG7/Co8i/k84bnlPpK0ZrlL0a8gADGEeRxMCC/Hw31PfQRMd0xIhXBXRyS8YzaRoj5ZhSYyOUjxZAvxpGcom3ZjootXVIx8EpTzR4RY8pcshNWuxoNdfYsMtTcS5RHhJZUhROp0KFEoPo8+i3hUyzUZtwTifKpVB+mVBWs1fXqlbBaocbzyrat24EGkSLMIndukSoDhtkF+eRAXhOAAwsezGFAXwWGEytezLix48eQIz/WQLmy5QYJAAAh+QQFCQAHACwQAAYAPAAmAAADzXi63P5HGAGrvbgak7v/EQeOZGMUQKqubOu+cLxucm3fMI3vPFzovSDPQDhMhEjbESBJOl/LVPT5nEqp1KNgq7JihwLAZky4foO033gT9p5lE8l6jBK/ccvAfFM33JVhXXt1fzVWBHuFSn4tamyKcE0veoyQMG2XQJYxlSxjgZucLXKaoVCViaaGNKRuqi+tZa82rZ07AQ1vcwFBJR5zhDu+Hak8wxeldsbHD8ldy8wMkjmgNdEOti7OLtfYi9ks3Q3TqxTiGOA5MOfDMAkAIfkEBQ4ABwAsDAAGADEAJQAAA60Iutz+MMpJq7046827/2AojmRpnmiqjkG7SoQhF+9TyDgdySbuCxJDSeDDAStCELFoOI6SO2agBIUsf6QqrBCTETK8h5bi01nCDYOZEjB00Z5xVHGo2+/4vP4gFzOKBHuCeGpsWm8yg3tQbhNwC0UCioNNETEQTJKTi0ydnW0/m4uaonczlwyldY0YoGuJqnZqsQcQA7SyFwYBikK0fWK8uL1rjhW4wH4TyK2TCQAh/iBSZWR1Y2VkIDU5JSBAIHd3dy5naWZ3aXphcmQuY29tAAA7"},e86f:function(e,t,r){}});
//# sourceMappingURL=app.ff493866.js.map