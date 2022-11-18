import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {

  const searchValueChange = (evt) => {
    setSearchValue(evt.target.value);
  }

  return (
    <input 
      className={`TodoSearch ${loading ? 'TodoSearch--loading' : undefined}`} 
      placeholder="search task..." 
      value={searchValue}
      onChange={searchValueChange}
      disabled={loading}
    />
  )
}

export { TodoSearch };