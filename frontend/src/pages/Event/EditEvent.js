import React, { useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import Layout from 'components/layout/Layout';
import EventForm from 'components/event/EventForm';
import { Link, useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { findPostForEdit } from 'store/action/event.action';

const EditEvent = ({ findPostForEdit }) => {
  const { id } = useParams();
  useEffect(() => findPostForEdit(id), [id, findPostForEdit]);
  return (
    <Layout>
      <Row justify='space-between'>
        <Col>
          <h2>Edit Event</h2>
        </Col>
        <Col>
          <Button type='primary'>
            <Link to='/event/view'>View Events</Link>
          </Button>
        </Col>
      </Row>
      <EventForm isEdit />
    </Layout>
  );
};

export default connect(null, { findPostForEdit })(EditEvent);
