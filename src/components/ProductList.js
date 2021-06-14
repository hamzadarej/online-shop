import React, { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ data }) => {
  const [cart, setCart] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const addToCart = (item) => {
    setCart((prevStat) => [...prevStat, item]);
    console.log(cart);
  };
  const bill = () =>
    setTotalBill(cart.reduce((acc, cur) => acc + cur.price, 0 ));
    
  const items = data.map((item, i) => (
    <ProductItem key={i} info={item} addToCart={addToCart} bill={bill} />
     
  ));

  
    
  return (
    <React.Fragment>
      <div>
        <button className="totalB" onClick={bill}>Total bill</button> <h2>{totalBill}€</h2>
      </div>
      <ul>{items}</ul>
    </React.Fragment>
  );
};
export default ProductList;