import React, { useState } from "react";
import ProductList from "./components/ProductList";
import {StoreContext,Store} from './context';

function App() {
 
  const [userInput, setUserInput] = useState("");
  //const [filteredData, setFilteredData] = useState([]);
  //const store = useContext(StoreContext);

  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <StoreContext.Provider value={Store}>
      <h1>Welcome to our online store</h1>

      <form className="filter-form" onSubmit={handleSubmit}>
        <input type="text" onChange={changeHandle} value={userInput} />
        <input type="submit" value="filter" />
      </form>
      <ProductList userInput={userInput} />
    </StoreContext.Provider>
  );
}

export default App;
