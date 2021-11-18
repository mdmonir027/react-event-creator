import { Button, Space, Table } from 'antd';
import moment from 'moment';
import React from 'react';

import { connect } from 'react-redux';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Date Added',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (value) => moment(value).format('D-MMM-YYYY  h:mm a'),
  },
  {
    title: 'Last Login',
    dataIndex: 'last_login',
    key: 'last_login',
    render: (value) => moment(value).format('D-MMM-YYYY  h:mm a'),
  },
  {
    title: 'Action',
    dataIndex: 'id',
    key: 'action',
    render: (id) => (
      <Space>
        <Button>Delete</Button>
      </Space>
    ),
  },
];
const UserTable = ({ users }) => {
  //   console.log(users);
  return (
    <div>
      <Table dataSource={users} columns={columns} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { users } = state.user;
  return { users };
};

export default connect(mapStateToProps)(UserTable);
