import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const searchValueChange = (evt) => {
    setSearchValue(evt.target.value);
  }

  return (
    <input onChange={searchValueChange} className='TodoSearch' placeholder="search task..." value={searchValue}/>
  )
}

export { TodoSearch };