(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(15),r=a.n(c),i=a(7),s=a(18),u=a(32),o=a(0),d=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],d=c[1];return Object(o.jsx)(u.a,{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),d(""))},children:Object(o.jsx)(u.a.Control,{type:"text",value:r,placeholder:"Search anything you want",onChange:function(e){d(e.target.value)}})})},j=a(2),l=a(16),b=a(31),p=a(12),m=a.n(p),f=a(17),h=function(){var e=Object(f.a)(m.a.mark((function e(t){var a,n,c,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"EpGgM99bfIkRWt2aIW1UpHBaOmQLbXrT",a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=").concat("EpGgM99bfIkRWt2aIW1UpHBaOmQLbXrT"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=a(30),x=function(e){var t=e.title,a=e.url;return Object(o.jsxs)(l.a,{sm:10,md:3,lg:3,className:"mx-1 mb-4 p-2 bg-white animate__animated animate__fadeIn border border-dark rounded",children:[Object(o.jsx)(O.a,{alt:t,src:a,fluid:!0}),Object(o.jsx)("p",{className:"mt-3 text-center",children:t})]})},g=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){h(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=a.data,r=a.loading;return Object(o.jsxs)(l.a,{children:[Object(o.jsx)("h3",{className:"mt-2 animate__animated animate__flipInX",children:t}),r&&Object(o.jsx)("p",{className:"animate__animated animate__bounce",children:"LOADING..."}),Object(o.jsx)(b.a,{className:"justify-content-around mt-3",children:c.map((function(e){return Object(o.jsx)(x,Object(j.a)({},e),e.id)}))})]})},v=function(e){var t=e.defaultCategories,a=void 0===t?[]:t,c=Object(n.useState)(a),r=Object(i.a)(c,2),s=r[0],u=r[1];return Object(o.jsxs)("div",{className:"m-5",children:[Object(o.jsxs)("div",{className:"head-app",children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(d,{setCategories:u}),Object(o.jsx)("hr",{})]}),Object(o.jsx)("ol",{children:s.map((function(e){return Object(o.jsx)(g,{category:e},e)}))})]})};a(27),a(28);r.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.74c61d12.chunk.js.map