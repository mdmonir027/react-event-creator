import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.page';
import Login from './pages/Login.page';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
