(this["webpackJsonp14.06-app"]=this["webpackJsonp14.06-app"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(6),o=c.n(r),a=(c(14),c(2)),s=c(7),j=c(9),u=c(0),d=function(e){var t=e.info,c=e.addToCart,n=e.bill,i=t.id,r=t.productName,o=t.icon,a=t.price,s=t.inventory;return Object(u.jsxs)("li",{children:[Object(u.jsx)("h4",{children:r})," ",Object(u.jsx)("i",{children:o}),Object(u.jsxs)("h5",{children:[a,"\u20ac"]}),Object(u.jsxs)("h6",{children:[s," items in stock"]}),Object(u.jsx)("button",{disabled:0===s,onClick:function(){console.log(t),c(t),n()},children:s>0?"Add to cart":"Sold out"})]},i)},l=function(e){var t=e.data,c=Object(n.useState)([]),r=Object(a.a)(c,2),o=r[0],s=r[1],l=Object(n.useState)(0),b=Object(a.a)(l,2),p=b[0],O=b[1],h=function(e){s((function(t){return[].concat(Object(j.a)(t),[e])})),console.log(o)},f=function(){return O(o.reduce((function(e,t){return e+t.price}),0))},x=t.map((function(e,t){return Object(u.jsx)(d,{info:e,bill:f,addToCart:h},t)}));return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:f,children:"Total bill"})," ",Object(u.jsxs)("h6",{children:[p,"\u20ac"]})]}),Object(u.jsx)("ul",{children:x})]})},b=c(8);var p=function(){var e=Object(n.useState)(s),t=Object(a.a)(e,2),c=t[0],i=(t[1],Object(n.useState)("")),r=Object(a.a)(i,2),o=r[0],j=r[1],d=Object(n.useState)([]),p=Object(a.a)(d,2),O=p[0],h=p[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Welcome to our online store"}),Object(u.jsxs)("h3",{children:["Lets go for a ",Object(u.jsx)(b.a,{})]}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){var e=o.toLocaleLowerCase().trim(),t=e.length,n=c.filter((function(c){return c.productName.slice(0,t)===e}));h(n)}()},children:[Object(u.jsx)("input",{type:"text",onChange:function(e){j(e.target.value)},value:o}),Object(u.jsx)("input",{type:"submit",value:"filter"})]}),Object(u.jsx)(l,{data:o?O:c})]})};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"id":0,"productName":"apple","icon":"\ud83c\udf4f","price":3,"inventory":10,"_img":"./img/food.jpeg"},{"id":1,"productName":"watermelon","icon":"\ud83c\udf49","price":90,"inventory":3},{"id":2,"productName":"pizza","icon":"\ud83c\udf55","price":10,"inventory":100},{"id":3,"productName":"salad","icon":"\ud83e\udd57","price":40,"inventory":0},{"id":4,"productName":"ice cream","icon":"\ud83c\udf66","price":7,"inventory":66},{"id":5,"productName":"water","icon":"\ud83e\uddca","price":10,"inventory":0},{"id":6,"productName":"sushi","icon":"\ud83c\udf63","price":33,"inventory":3}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.81e0081c.chunk.js.map