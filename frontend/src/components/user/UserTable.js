import { Button, message, Popconfirm, Space, Table } from 'antd';
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from 'features/user/userApiSlice';
import moment from 'moment';
import { useEffect, useMemo } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

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
    render: (id, { deleteUser, user_type }) => {
      return (
        <Space>
          <Popconfirm
            okText='Yes'
            cancelText='No'
            disabled={user_type === 'A'}
            title='Are you sure to delete this user?'
            onConfirm={() => deleteUser(id)}
          >
            <Button disabled={user_type === 'A'}>
              <FaTrashAlt />
            </Button>
          </Popconfirm>
        </Space>
      );
    },
  },
];
const UserTable = () => {
  const { data: users, isSuccess } = useGetUsersQuery();
  const [deleteUser, { isSuccess: isDeleteSuccess }] = useDeleteUserMutation();

  const dataSource = useMemo(() => {
    if (!isSuccess) return [];
    return users.reduce((acc, cur) => {
      acc.push({
        ...cur,
        deleteUser,
      });
      return acc;
    }, []);
  }, [users, isSuccess, deleteUser]);

  useEffect(() => {
    if (isDeleteSuccess) {
      message.success('User delete successfully', 1);
    }
  }, [isDeleteSuccess]);

  if (!isSuccess) return null;
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} rowKey='id' />
    </div>
  );
};

export default UserTable;
