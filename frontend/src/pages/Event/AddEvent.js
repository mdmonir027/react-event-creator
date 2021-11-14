import EventForm from 'components/event/EventForm';
import React from 'react';

import Layout from 'components/layout/Layout';
import { Button, Col, Row } from 'antd';
const AddEvent = () => {
  return (
    <Layout>
      <Row justify='space-between'>
        <Col>
          <Button type='primary'>Add Events</Button>
        </Col>
        <Col>
          <Button type='primary'>View Events</Button>
        </Col>
      </Row>
      <EventForm />
    </Layout>
  );
};

export default AddEvent;
