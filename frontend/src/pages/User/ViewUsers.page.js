import { Button, Col, Row } from 'antd';
import UserTable from 'components/user/UserTable';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import routeList from 'utils/routeList';

const ViewUsers = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to='/' />;
  }
  if (!user.isAdmin) {
    return <Navigate to='/event/view' />;
  }

  return (
    <>
      <Row justify='space-between'>
        <Col>
          <h2>All User</h2>
        </Col>
        <Col>
          <Button type='primary'>
            <Link to={routeList.user.add}>Add User</Link>
          </Button>
        </Col>
      </Row>
      <UserTable />
    </>
  );
};

export default ViewUsers;
