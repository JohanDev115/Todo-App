import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { CreateTodo } from './Pages/CreateTodo';
import { EditTodo } from './Pages/EditTodo';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<CreateTodo />} />
        <Route path='/edit' element={<EditTodo />}>
          <Route path=':id' element={<p>error 404</p>} />
        </Route>
        <Route path='*' element={<p>Page not found</p>} />
      </Routes>
    </HashRouter>
  )
}

export { App }
