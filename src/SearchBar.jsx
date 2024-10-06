import React, { useState } from 'react';
// Import the CSS for styling

const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing
    console.log(query); // Log the input value to the console
    setQuery(''); // Clear the input after submission
    onSearch(query)
    
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="search-input"
      />
      <button type="submit" className="search-button">
        🔍
      </button>
    </form>
  );
};

export default SearchBar;
