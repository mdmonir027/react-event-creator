import { Button, Space, Table } from 'antd';
import React from 'react';
import { users } from 'dummy/users.data';

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
    dataIndex: 'date_added',
    key: 'date_added',
  },
  {
    title: 'Last Login',
    dataIndex: 'last_login',
    key: 'last_login',
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
const UserTable = () => {
  //   console.log(users);
  return (
    <div>
      <Table dataSource={users} columns={columns} />
    </div>
  );
};

export default UserTable;
