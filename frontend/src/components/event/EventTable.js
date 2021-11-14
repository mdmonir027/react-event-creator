import React from 'react';
import { Button, Space, Table } from 'antd';
import { list } from 'dummy/eventList.data';
const dataSource = list;

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
    title: 'Source Url',
    dataIndex: 'source_url',
    key: 'source_url',
    render: (url) => <a href={url}>Source</a>,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Action',
    dataIndex: 'id',
    key: 'action',
    render: (id) => (
      <Space>
        <Button onClick={() => console.log(id)}>View</Button>
        <Button>Edit </Button>
        <Button>Delete</Button>
      </Space>
    ),
  },
];
const EventTable = () => {
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default EventTable;
