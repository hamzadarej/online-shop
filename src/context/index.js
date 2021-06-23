import React from 'react';
import Data from '../data.json';

const Store ={
    data:Data,
    cart :[],
    bill:function(){
        return Store.cart.reduce((acc,cur)=>acc+cur.price,0)
    },
    addToCart:(item)=>Store.cart.push(item)
    

};
const StoreContext =React.createContext(Store);

export {Store ,StoreContext}
