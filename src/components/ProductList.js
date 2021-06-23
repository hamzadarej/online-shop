import React, { useState, useContext } from "react";
import ProductItem from "./ProductItem";
import { StoreContext } from "../context";

const ProductList = ({userInput,filteredData}) => {
  //const [cart, setCart] = useState([]);
  const store = useContext(StoreContext);
  const [totalBill, setTotalBill] = useState(0);
  console.log(filteredData);
  /*const addToCart = (item) => {
    setCart((prevStat) => [...prevStat, item]);
    console.log(cart);
  };
  const bill = () =>
    setTotalBill(cart.reduce((acc, cur) => acc + cur.price, 0 ));
    */
   let check =userInput ? filteredData:store.data;
  const items = check.map((item, i) => (
    <ProductItem key={i} info={item} addToCart={store.addToCart} />
  ));

  return (
    <React.Fragment>
      <div>
        <button className="totalB" onClick={() => setTotalBill(store.bill())}>
          Total bill
        </button>{" "}
        <h2>{totalBill}€</h2>
      </div>
      <ul>{items}</ul>
    </React.Fragment>
  );
};
export default ProductList;
