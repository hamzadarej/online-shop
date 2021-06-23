import React, { useState,useContext } from "react";
//import Data from "./data.json";
import ProductList from "./components/ProductList";
//import { FaBeer } from "react-icons/fa";
//<h3>Lets go for a <FaBeer /></h3>
import {StoreContext,Store} from './context';

function App() {
 // const [data, setData] = useState(Data);
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const store = useContext(StoreContext);

  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };
  const lookUp = () => {
    const userText = userInput.toLocaleLowerCase().trim();
    const userTextLength = userText.length;
    // const searchText = userText ? userText : "";
    let newArr = store.data.filter((item) => {
      const slicedProductName = item.productName.slice(0, userTextLength);
      return slicedProductName === userText;
    });console.log([...newArr]);
    setFilteredData(newArr);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    lookUp();
  };
  return (
    <StoreContext.Provider value={Store}>
      <h1>Welcome to our online store</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={changeHandle} value={userInput} />
        <input type="submit" value="filter" />
      </form>
      <ProductList userInput={userInput} filteredData={filteredData} />
    </StoreContext.Provider>
  );
}

export default App;
