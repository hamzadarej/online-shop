import React, { useState,useContext } from "react";
import ProductList from "./components/ProductList";
import {StoreContext,Store} from './context';

function App() {
 
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const store = useContext(StoreContext);

  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };
  const lookUp = () => {
    const userText = userInput.toLocaleLowerCase().trim();
    const userTextLength = userText.length;
    let newArr = store.data.filter((item) => {
      const slicedProductName = item.productName.slice(0, userTextLength);
      return slicedProductName === userText;
    });
    setFilteredData(newArr);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    lookUp();
  };
  return (
    <StoreContext.Provider value={Store}>
      <h1>Welcome to our online store</h1>

      <form className="filter-form" onSubmit={handleSubmit}>
        <input type="text" onChange={changeHandle} value={userInput} />
        <input type="submit" value="filter" />
      </form>
      <ProductList userInput={userInput} filteredData={filteredData} />
    </StoreContext.Provider>
  );
}

export default App;
