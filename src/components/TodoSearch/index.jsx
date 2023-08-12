import React from 'react';
import './TodoSearch.css';
import { useSearchParams } from 'react-router-dom';

function TodoSearch({ searchValue, setSearchValue, loading }) {

  // let [searchParams, setSearchParams] = useSearchParams();
  // const paramsValue = searchParams.get('search');

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