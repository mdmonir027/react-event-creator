import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.page';
import Login from './pages/Login.page';
import AddEvent from 'pages/Event/AddEvent';
import ViewEvent from 'pages/Event/ViewEvent';
import EditEvent from 'pages/Event/EditEvent';
import AddUser from 'pages/User/AddUser.page';
import ViewUsers from 'pages/User/ViewUsers.page';
import EditUser from 'pages/User/EditUser.page';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Home />} />

        <Route path='/event/add' element={<AddEvent />} />
        <Route path='/event/view' element={<ViewEvent />} />
        <Route path='/event/edit/:id' element={<EditEvent />} />

        <Route path='/user' element={<ViewUsers />} />
        <Route path='/user/add' element={<AddUser />} />
        <Route path='/user/edit/:id' element={<EditUser />} />
      </Routes>
    </div>
  );
};

export default App;
