import React, { useState } from "react";


const Search = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleSearch = () => {
      onSearch(searchQuery);
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    )
}

export default Search
