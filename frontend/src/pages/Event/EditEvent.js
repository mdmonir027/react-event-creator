import React from 'react';
import { Row, Col, Button } from 'antd';
import Layout from 'components/layout/Layout';
import EventForm from 'components/event/EventForm';
const EditEvent = () => {
  return (
    <Layout>
      <Row justify='space-between'>
        <Col>
          <h2>Edit Event</h2>
        </Col>
        <Col>
          <Button type='primary'>View Events</Button>
        </Col>
      </Row>
      <EventForm />
    </Layout>
  );
};

export default EditEvent;
