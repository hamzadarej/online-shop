(this["webpackJsonp14.06-app"]=this["webpackJsonp14.06-app"]||[]).push([[0],{14:function(t){t.exports=JSON.parse('[{"id":0,"productName":"apple","icon":"\ud83c\udf4f","price":3,"inventory":10,"_img":"./img/food.jpeg"},{"id":1,"productName":"watermelon","icon":"\ud83c\udf49","price":90,"inventory":3},{"id":2,"productName":"pizza","icon":"\ud83c\udf55","price":10,"inventory":100},{"id":3,"productName":"salad","icon":"\ud83e\udd57","price":40,"inventory":0},{"id":4,"productName":"ice cream","icon":"\ud83c\udf66","price":7,"inventory":66},{"id":5,"productName":"water","icon":"\ud83e\uddca","price":10,"inventory":0},{"id":6,"productName":"sushi","icon":"\ud83c\udf63","price":33,"inventory":3}]')},26:function(t,e,c){},37:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c(15),i=c.n(r),o=(c(26),c(10)),j=c(4),a=c(8),u=c(1),d={addProduct:function(t){return{type:"ADD_PRODUCT",product:t}}},s=Object(a.b)((function(t){}),d)((function(t){var e=t.item,c=t.addProduct;return Object(u.jsxs)("li",{children:[Object(u.jsxs)("span",{children:[Object(u.jsxs)(o.b,{to:"/product/".concat(e.id),children:[Object(u.jsx)("h4",{children:e.productName})," \u20ac",e.price]},e.id),Object(u.jsx)("h5",{children:e.inventory>0?"x ".concat(e.inventory," items left"):"sold out"})]}),Object(u.jsx)("i",{children:e.icon}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){return c(e)},disabled:0===e.inventory,children:e.inventory>0?"Add to cart":"Sold out"})})]})})),b=Object(a.b)((function(t){return{items:Object.values(t.products)}}))((function(t){var e=t.items;console.log(e);var c=e.map((function(t){return Object(u.jsx)(s,{item:t},t.id)}));return Object(u.jsx)("ul",{className:"product",children:c})})),O=Object(a.b)((function(t){return{store:t}}))((function(t){var e=t.store,c=t.id,n=e.products[c];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{children:[n.productName," ",Object(u.jsx)("i",{children:n.icon})]}),Object(u.jsxs)("h4",{children:[n.price,"\u20ac"]}),Object(u.jsx)(o.b,{to:"/product",children:"Back"})]})})),l=function(){return Object(u.jsxs)("nav",{children:[Object(u.jsx)(o.b,{to:"/",children:Object(u.jsx)("li",{children:"Home"})}),Object(u.jsx)(o.b,{to:"/product",children:Object(u.jsx)("li",{children:"Product"})}),Object(u.jsx)(o.b,{to:"/cart",children:Object(u.jsx)("li",{children:"Cart"})}),Object(u.jsx)(o.b,{to:"/about",children:Object(u.jsx)("li",{children:"About"})})]})},p=function(){return Object(u.jsx)("h5",{children:"about the App "})},h=function(){return Object(u.jsxs)("h3",{children:["Hey you,",Object(u.jsx)("br",{})," welcome to our online online Store \ud83d\ude09"]})},x={removeOne:function(t){return{type:"REMOVE_ONE",product:t}},removeAll:function(t){return{type:"REMOVE_ALL",product:t}}},m=Object(a.b)((function(t){return{}}),x)((function(t){var e=t.item,c=t.removeOne,n=t.removeAll;return Object(u.jsxs)("li",{children:[Object(u.jsxs)("p",{children:[e.productName," ",e.icon,"| \u20ac ",e.price," | x ",e.quantity]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){return c(e)},children:"Remove One"}),Object(u.jsx)("button",{onClick:function(){return n(e)},children:"Remove All"})]})]})})),v={checkout:function(){return{type:"CHECKOUT"}},emptyCart:function(){return{type:"EMPTY_CART"}}},y=Object(a.b)((function(t){return{items:Object.values(t.cart)}}),v)((function(t){var e=t.items,c=t.checkout,r=t.emptyCart,i=e.map((function(t){return Object(u.jsx)(m,{item:t},t.id)}));return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("ul",{children:i}),Object(u.jsxs)("p",{children:["Total: \u20ac",e.reduce((function(t,e){return t+e.price*e.quantity}),0)]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:r,disabled:!e.length,children:"Empty cart"}),Object(u.jsx)("button",{onClick:c,disabled:!e.length,children:"Checkout"})]})]})})),f=function(){return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(l,{}),Object(u.jsx)("h1",{children:"My online-store"}),Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/online-shop/",exact:!0,component:h}),Object(u.jsx)(j.a,{path:"/about",exact:!0,component:p}),Object(u.jsx)(j.a,{path:"/product",exact:!0,component:b}),Object(u.jsx)(j.a,{path:"/product/:id",component:function(t){var e=t.match;return Object(u.jsx)(O,{id:e.params.id})}}),Object(u.jsx)(j.a,{path:"/cart",exact:!0,component:y})]})]})},E=c(21),_=c(11),N=c(2),C=c(14),T=function(){var t,e,c,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,i=n.cart,o=n.products,j=r.product,a=j||{},u=a.id,d=a.productName,s=a.price,b=a.icon;switch(r.type){case"ADD_PRODUCT":return t=i[u]?i[u].quantity:0,e=j.inventory>0?j.inventory-1:j.inventory,Object(N.a)(Object(N.a)({},n),{},{products:Object(N.a)(Object(N.a)({},o),{},Object(_.a)({},u,Object(N.a)(Object(N.a)({},j),{},{inventory:e}))),cart:Object(N.a)(Object(N.a)({},i),{},Object(_.a)({},u,{id:u,productName:d,price:s,icon:b,quantity:t+1}))});case"CHECKOUT":return console.log("Thank you for spending all your money with us, see you soon \ud83d\ude09"),{products:C,cart:{}};case"REMOVE_ONE":return e=o[u].inventory,t=j.quantity,delete(c=Object(N.a)({},i))[u],Object(N.a)(Object(N.a)({},n),{},{cart:t>1?Object(N.a)(Object(N.a)({},i),{},Object(_.a)({},u,Object(N.a)(Object(N.a)({},j),{},{quantity:t-1}))):c,products:Object(N.a)(Object(N.a)({},o),{},Object(_.a)({},u,Object(N.a)(Object(N.a)({},j),{},{inventory:e+1})))});case"REMOVE_ALL":return e=o[u].inventory,t=j.quantity,delete(c=Object(N.a)({},i))[u],Object(N.a)(Object(N.a)({},n),{},{products:Object(N.a)(Object(N.a)({},o),{},Object(_.a)({},u,Object(N.a)(Object(N.a)({},j),{},{inventory:e+t}))),cart:c});case"EMPTY_CART":return{products:C,cart:{}};default:return n}},g=Object(E.a)(T,{products:C,cart:{}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(u.jsx)(a.a,{store:g,children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.ce7f2e05.chunk.js.map