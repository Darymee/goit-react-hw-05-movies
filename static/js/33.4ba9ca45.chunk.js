"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{713:function(n,t,e){e.d(t,{Pd:function(){return p},XL:function(){return u},k0:function(){return f},kh:function(){return g},z6:function(){return h}});var r=e(861),a=e(757),c=e.n(a),i=e(44);i.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var o="74bfe718a55ac7916c6e6ad87b15f944";function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.ZP.get("trending/movie/day?api_key=".concat(o));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.ZP.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.ZP.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.ZP.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.ZP.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},47:function(n,t,e){e.d(t,{e:function(){return L}});var r,a,c,i,o,u,s,p=e(861),l=e(885),f=e(757),d=e.n(f),h=e(791),x=e(731),g=e(689),v=e(713),m=e(115),b=e(107),w=e(168),y=e(444),k=y.default.ul(r||(r=(0,w.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),Z=y.default.li(a||(a=(0,w.Z)(["\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),j=y.default.img(c||(c=(0,w.Z)(["\n  width: 100%;\n  height: 400px;\n"]))),_=y.default.div(i||(i=(0,w.Z)(["\n  background-color: rgba(49, 54, 73, 0.7);\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  position: absolute;\n  bottom: 0;\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  transform: translateY(100%);\n  li:hover &,\n  li:focus & {\n    transform: translateY(0%);\n  }\n"]))),P=y.default.p(o||(o=(0,w.Z)(["\n  font-size: 20px;\n\n  font-weight: 600;\n  text-align: center;\n"]))),z=y.default.p(u||(u=(0,w.Z)(["\n  font-size: 15px;\n\n  text-align: center;\n"]))),S=y.default.p(s||(s=(0,w.Z)(["\n  font-size: 15px;\n\n  text-align: center;\n\n  color: ",";\n"])),(function(n){return n.rating<=3.5?"#A5260A":n.rating<7?"#FFDB8B":n.rating<10?"#009B76":void 0})),U=e(184),L=function(n){var t=n.list,e=(0,h.useState)([]),r=(0,l.Z)(e,2),a=r[0],c=r[1],i=(0,g.TH)(),o="/"===i.pathname?"movies/":"";function u(){return(u=(0,p.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,v.XL)();case 2:if(t=n.sent){n.next=5;break}return n.abrupt("return");case 5:c(t);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,h.useEffect)((function(){t?c(t):function(){u.apply(this,arguments)}()}),[t]),(0,U.jsx)("div",{children:(0,U.jsx)(k,{children:a.map((function(n){var t=n.id,e=n.poster_path,r=n.title,a=n.release_date,c=n.vote_average;return(0,U.jsx)(Z,{children:(0,U.jsxs)(x.OL,{to:"".concat(o).concat(t),state:{from:i},children:[(0,U.jsx)(j,{src:e?m.X+e:b,alt:r}),(0,U.jsxs)(_,{children:[(0,U.jsx)(P,{children:r}),(0,U.jsx)(z,{children:a}),(0,U.jsxs)(S,{rating:c,children:[c.toFixed(1)," rating"]})]})]})},t)}))})})}},115:function(n,t,e){e.d(t,{X:function(){return r}});var r="https://image.tmdb.org/t/p/w500"},33:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r,a=e(168),c=e(444).default.h1(r||(r=(0,a.Z)(["\n  text-shadow: #fff 1px 0 10px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 35px;\n  margin-bottom: 40px;\n"]))),i=e(184),o=function(n){var t=n.text;return(0,i.jsx)(c,{children:t})},u=e(47),s=function(){return(0,i.jsxs)("main",{children:[(0,i.jsx)(o,{text:"Trending today"}),(0,i.jsx)(u.e,{})]})}},107:function(n,t,e){n.exports=e.p+"static/media/noPoster.7555b15218a0f4733bf7.jpeg"}}]);
//# sourceMappingURL=33.4ba9ca45.chunk.js.map