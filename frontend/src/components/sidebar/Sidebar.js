import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { logout } from 'store/action/auth.action';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = createUseStyles({
  menu: {
    paddingTop: 90,
    minHeight: '100vh',
    boxSizing: 'border-box',
    background: '#D9CCC5',
    borderRight: 0,
  },
});

const Sidebar = ({ logout }) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const logoutHandler = () => {
    const result = logout();
    if (result) {
      navigate('/');
    }
  };
  return (
    <div className='bg-grey-red'>
      <Menu
        defaultSelectedKeys={[]}
        defaultOpenKeys={[]}
        mode='inline'
        className={classes.menu}
      >
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
        <Menu.Item key='setting:3' onClick={logoutHandler}>
          Log Out
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default connect(null, { logout })(Sidebar);
