import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.page';
import Login from './pages/Login.page';
import Layout from 'components/layout/Layout';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
      <Layout>
        <Routes>
          <Route path='/dashboard' element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
