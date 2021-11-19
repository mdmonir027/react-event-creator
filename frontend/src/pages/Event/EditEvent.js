import React, { useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import Layout from 'components/layout/Layout';
import EventForm from 'components/event/EventForm';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { findPostForEdit } from 'store/action/event.action';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EditEvent = ({ findPostForEdit }) => {
  const { id } = useParams();
  useEffect(() => findPostForEdit(id), [id, findPostForEdit]);

  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to='/' />;
  }

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
      <EventForm isEdit id={id} />
    </Layout>
  );
};

export default connect(null, { findPostForEdit })(EditEvent);
