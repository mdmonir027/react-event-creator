import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Space, Table } from 'antd';

import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { fetchAllEvents } from 'store/action/event.action';
import { sliceString } from 'utils/stringHelper';
import moment from 'moment';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Coordinates',
    dataIndex: 'coordinates',
    key: 'coordinates',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    render: (description) => sliceString(description),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },

  {
    title: 'Ticket Price',
    dataIndex: 'ticket_price',
    key: 'ticket_price',
    render: (price) => (price ? '$' + price : 'Free'),
  },
  {
    title: 'Source Url',
    dataIndex: 'source_url',
    key: 'source_url',
    render: (url) => <a href={url}>Source</a>,
  },
  {
    title: 'Action',
    dataIndex: 'id',
    key: 'action',
    render: (id) => (
      <Space>
        <Button>
          <Link to={`/event/edit/${id}`}>
            <FaPen />
          </Link>
        </Button>
        <Button>
          <FaTrashAlt />
        </Button>
      </Space>
    ),
  },
];
const EventTable = ({ fetchAllEvents, events }) => {
  useEffect(() => fetchAllEvents(), [fetchAllEvents]);
  const dataSource = events?.map((event) => {
    const location = `${event.address || ' '} ${event.city || ' '} ${
      event.country || ' '
    }`;
    const date_from = event.date_from
      ? moment(event.date_from).format('MMM DD, Y')
      : '';
    const date_to = event.date_from
      ? moment(event.date_to).format('MMM DD, Y')
      : '';
    const date = `${date_from} - ${date_to} `;

    const time_from = sliceString(event.time_from, 5, true);
    const time_to = sliceString(event.time_to, 5, true);
    const time = `${time_from} - ${time_to}`;

    const data = { ...event, location, date, time };

    return data;
  });

  useEffect(() => {
    console.log(moment('2021-11-12 00:26:12').format());
    console.log(moment('2021-11-12 00:26:12').format(' h:mm:ss a '));
  }, []);
  return (
    <div className='table-wrapper'>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  events: state.event.events,
});
export default connect(mapStateToProps, { fetchAllEvents })(EventTable);
