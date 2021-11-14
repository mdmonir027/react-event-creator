import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.page';
import Login from './pages/Login.page';
import AddEvent from 'pages/Event/AddEvent';
import ViewEvent from 'pages/Event/ViewEvent';
import EditEvent from 'pages/Event/EditEvent';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/dashboard' element={<Home />} />
        <Route path='/event/add' element={<AddEvent />} />
        <Route path='/event/view' element={<ViewEvent />} />
        <Route path='/event/edit' element={<EditEvent />} />
      </Routes>
    </div>
  );
};

export default App;
