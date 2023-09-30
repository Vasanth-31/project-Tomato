import React, { useState } from "react";
import Products from "./Products";
import Search from "./Search";

function SearchElement () {
    // const [searchResults, setSearchResults] = useState([]);

    // const handleSearch = (query) => {
    //   // Filter products based on the search query
    //   const filteredProducts = dummyData.filter((product) =>
    //     product.name.toLowerCase().includes(query.toLowerCase())
    //   );
    //   setSearchResults(filteredProducts);
    // };
  
    return (
      <div className="App">
        <h1>Product Search</h1>
        <Search/>
        {/* <Search onSearch={handleSearch} />  */}
        <div className="product-list">
          {/* {searchResults.map((product) => (
            <Products key={product.id} product={product} />
          ))} */}
        </div>
      </div>
    );
}

export default SearchElement;
