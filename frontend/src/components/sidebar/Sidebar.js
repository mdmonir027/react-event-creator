import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  menu: {
    paddingTop: 90,
    minHeight: '100vh',
    boxSizing: 'border-box',
    background: '#D9CCC5',
    borderRight: 0,
  },
});

const Sidebar = () => {
  const classes = useStyles();
  const handleClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div className='bg-grey-red'>
      <Menu
        onClick={handleClick}
        defaultSelectedKeys={[]}
        defaultOpenKeys={[]}
        mode='inline'
        className={classes.menu}
      >
        <Menu.Item>
          <Link to='/dashboard'>Dashboard</Link>
        </Menu.Item>
        <Menu.SubMenu key='Event' icon={<MailOutlined />} title='Event'>
          <Menu.Item key='1'>
            <Link to='/event/add'>Add Event</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/event/view'>View Events</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key='user' icon={<AppstoreOutlined />} title='User'>
          <Menu.Item key='5'>
            <Link to='/user/add'>Add User</Link>
          </Menu.Item>
          <Menu.Item key='6'>
            <Link to='/user'>View User</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key='profile' icon={<AppstoreOutlined />} title='Profile'>
          <Menu.Item key='setting:1'>
            <Link to='/profile'>Profile</Link>
          </Menu.Item>
          <Menu.Item key='setting:2'>
            <Link to='/change-password'>Change Password</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key='logout'>
          <Link to='/log-out'>Log Out</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
