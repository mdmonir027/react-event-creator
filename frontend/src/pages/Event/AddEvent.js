import EventForm from 'components/event/EventForm';
import React from 'react';

import Layout from 'components/layout/Layout';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AddEvent = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to='/' />;
  }
  return (
    <Layout>
      <Row justify='space-between'>
        <Col>
          <h2>Add Events</h2>
        </Col>
        <Col>
          <Button type='primary'>
            <Link to='/event/view'>View Events</Link>
          </Button>
        </Col>
      </Row>
      <EventForm />
    </Layout>
  );
};

export default AddEvent;
