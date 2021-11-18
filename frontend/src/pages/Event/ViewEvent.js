import React, { useEffect } from 'react';

import Layout from 'components/layout/Layout';
import EventTable from 'components/event/EventTable';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { fetchAllEvents } from 'store/action/event.action';

const ViewEvent = ({ user, fetchAllEvents }) => {
  useEffect(() => fetchAllEvents(), [fetchAllEvents]);

  if (!Object.keys(user).length > 0) {
    return <Navigate to='/' />;
  }

  return (
    <Layout>
      <Row justify='space-between'>
        <Col>
          <h2>View Events</h2>
        </Col>
        <Col>
          <Button type='primary'>
            <Link to='/event/add'>Add Event</Link>
          </Button>
        </Col>
      </Row>
      <EventTable />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, { fetchAllEvents })(ViewEvent);
