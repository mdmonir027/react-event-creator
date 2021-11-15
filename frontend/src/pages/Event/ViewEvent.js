import React from 'react';

import Layout from 'components/layout/Layout';
import EventTable from 'components/event/EventTable';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const ViewEvent = () => {
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

export default ViewEvent;
