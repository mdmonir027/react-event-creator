import { Route, Routes } from 'react-router-dom';

import Layout from 'components/layout/Layout';
import AddEvent from 'pages/Event/AddEvent';
import EditEvent from 'pages/Event/EditEvent';
import Images from 'pages/Event/Images.page';
import ViewEvent from 'pages/Event/ViewEvent';
import Profile from 'pages/Profile/Profile';
import UpdatePassword from 'pages/Profile/UpdatePassword';
import AddUser from 'pages/User/AddUser.page';
import ViewUsers from 'pages/User/ViewUsers.page';
import ProtectRoutes from 'utils/ProtectRoutes';
import routeList from 'utils/routeList.js';
import Login from './pages/Login.page';

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Login />} />

          <Route element={<ProtectRoutes />}>
            <Route path={routeList.event.images} element={<Images />} />
            <Route path={routeList.event.add} element={<AddEvent />} />
            <Route path={routeList.event.view} element={<ViewEvent />} />
            <Route path={routeList.event.edit} element={<EditEvent />} />

            <Route path={routeList.user.view} element={<ViewUsers />} />
            <Route path={routeList.user.add} element={<AddUser />} />

            <Route
              path={routeList.profile.updatePassword}
              element={<UpdatePassword />}
            />
            <Route path={routeList.profile.view} element={<Profile />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
