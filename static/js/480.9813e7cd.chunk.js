"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[480],{4480:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(5861),a=n(9439),i=n(7757),s=n.n(i),o=n(2791),c=n(1087),u=n(7689),l=n(5667),v=(n(5462),n(1216)),d=n(5721),p=n(3380),m={boxImg:"movieDetailesPage_boxImg__cmq4X",container:"movieDetailesPage_container__BRGrn",item:"movieDetailesPage_item__gWQp7",titleMovie:"movieDetailesPage_titleMovie__4hXUz",secondTitleMovie:"movieDetailesPage_secondTitleMovie__uBk0X",itemGenre:"movieDetailesPage_itemGenre__FunFZ"},f=n(184),h=function(){var e,t,n,i=(0,o.useState)(),h=(0,a.Z)(i,2),x=h[0],_=h[1],g=(0,u.UO)().id,b=null!==(e=null===(t=(0,u.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.hK)(g);case 3:t=e.sent,_(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n=e.t0.response,console.log(n.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.rU,{to:b,children:(0,f.jsx)(d.Z,{className:m.btn,children:"Go back"})}),(0,f.jsxs)("div",{className:m.container,children:[(0,f.jsx)("div",{className:m.item,children:(0,f.jsx)("img",{className:m.boxImg,src:(n=null===x||void 0===x?void 0:x.poster_path,null===n?"".concat(p):"https://www.themoviedb.org/t/p/w300".concat(n)),alt:null===x||void 0===x?void 0:x.title})},null===x||void 0===x?void 0:x.id),(0,f.jsxs)("div",{className:m.item,children:[(0,f.jsxs)("h1",{className:m.titleMovie,children:[null===x||void 0===x?void 0:x.title," (",null===x||void 0===x?void 0:x.release_date.slice(0,4),")"]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{className:m.secondTitleMovie,children:"User score:"}),(10*(null===x||void 0===x?void 0:x.vote_average)).toFixed(0),"% (",null===x||void 0===x?void 0:x.vote_count," votes)"]}),(0,f.jsx)("h2",{className:m.secondTitleMovie,children:"Overview"}),(0,f.jsx)("p",{children:null===x||void 0===x?void 0:x.overview}),(0,f.jsx)("h2",{className:m.secondTitleMovie,children:"Genres"}),(0,f.jsx)("p",{children:null===x||void 0===x?void 0:x.genres.map((function(e){return(0,f.jsx)("li",{className:m.itemGenre,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)}))})]})]}),(0,f.jsxs)("div",{className:m.container,children:[(0,f.jsx)(c.rU,{to:"cast",state:{from:b},children:(0,f.jsx)(d.Z,{className:m.btn,children:"Cast"})}),(0,f.jsx)(c.rU,{to:"reviews",state:{from:b},children:(0,f.jsx)(d.Z,{className:m.btn,children:"Reviews"})}),void l.NY.scrollMore(100)]}),(0,f.jsx)(u.j3,{})]})},x=h;h.defaultProps={profile_path:p,character:"Sorry",vote_average:"Sorry",overview:"Sorry",movie:[],genre:[]}},5721:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(2007),a=n.n(r),i="button_btn__r1lcq",s=n(184),o=function(e){var t=e.children,n=e.onClick,r=e.type;return(0,s.jsx)("button",{onClick:n,className:i,type:r,children:t})},c=o;o.defaultProps={type:"button"},o.prototypes={onClick:a().func,type:a().oneOf(["submit","button","reset"]),children:a().element.isRequired}},1216:function(e,t,n){n.d(t,{H_:function(){return l},aV:function(){return o},c0:function(){return u},hK:function(){return c},z1:function(){return v}});var r=n(5861),a=n(7757),i=n.n(a),s=n(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"27a3692489226a6f77b57cb0bdb9ce9a"}}),o=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("trending/movie/day?");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a,o=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,e.next=3,s.get("/search/movie",{params:{query:t,page:n}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},5462:function(){},3380:function(e,t,n){e.exports=n.p+"static/media/defaultImg.7dfd12e48149e5eaa99b.png"}}]);
//# sourceMappingURL=480.9813e7cd.chunk.js.map