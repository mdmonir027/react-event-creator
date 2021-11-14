import React from 'react';

import Layout from 'components/layout/Layout';
import EventTable from 'components/event/EventTable';

const ViewEvent = () => {
  return (
    <Layout>
      <h2>View Event</h2>
      <EventTable />
    </Layout>
  );
};

export default ViewEvent;
