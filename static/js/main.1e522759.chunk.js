(this["webpackJsonp14.06-app"]=this["webpackJsonp14.06-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(4),o=n.n(i),a=(n(10),n(2)),u=n(0),s=function(e){var t=e.info,n=e.addToCart,c=t.id,r=t.productName,i=t.icon,o=t.price,a=t.inventory;return Object(u.jsxs)("li",{children:[Object(u.jsx)("h4",{children:r})," ",Object(u.jsx)("i",{children:i}),Object(u.jsxs)("h5",{children:[o,"\u20ac"]}),Object(u.jsxs)("h6",{children:[a," items in stock"]}),Object(u.jsx)("button",{disabled:0===a,onClick:function(){console.log(t),n(t)},children:a>0?"Add to cart":"Sold out"})]},c)},d={data:n(5),cart:[],bill:function(){return d.cart.reduce((function(e,t){return e+t.price}),0)},addToCart:function(e){return d.cart.push(e)},lookUp:function(e){var t=e.toLocaleLowerCase().trim(),n=t.length;return d.data.filter((function(e){return e.productName.slice(0,n)===t}))}},l=r.a.createContext(d),j=function(e){var t=e.userInput,n=Object(c.useContext)(l),i=Object(c.useState)(0),o=Object(a.a)(i,2),d=o[0],j=o[1],p=n.lookUp(t).map((function(e,t){return Object(u.jsx)(s,{info:e,addToCart:n.addToCart},t)}));return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("button",{className:"totalB",onClick:function(){return j(n.bill())},children:"Total bill"})," ",Object(u.jsxs)("h2",{children:[d,"\u20ac"]})]}),Object(u.jsx)("ul",{children:p})]})};var p=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)(l.Provider,{value:d,children:[Object(u.jsx)("h1",{children:"Welcome to our online store"}),Object(u.jsxs)("form",{className:"filter-form",onSubmit:function(e){e.preventDefault()},children:[Object(u.jsx)("input",{type:"text",onChange:function(e){r(e.target.value)},value:n}),Object(u.jsx)("input",{type:"submit",value:"filter"})]}),Object(u.jsx)(j,{userInput:n})]})};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('[{"id":0,"productName":"apple","icon":"\ud83c\udf4f","price":3,"inventory":10,"_img":"./img/food.jpeg"},{"id":1,"productName":"watermelon","icon":"\ud83c\udf49","price":90,"inventory":3},{"id":2,"productName":"pizza","icon":"\ud83c\udf55","price":10,"inventory":100},{"id":3,"productName":"salad","icon":"\ud83e\udd57","price":40,"inventory":0},{"id":4,"productName":"ice cream","icon":"\ud83c\udf66","price":7,"inventory":66},{"id":5,"productName":"water","icon":"\ud83e\uddca","price":10,"inventory":0},{"id":6,"productName":"sushi","icon":"\ud83c\udf63","price":33,"inventory":3}]')}},[[12,1,2]]]);
//# sourceMappingURL=main.1e522759.chunk.js.map