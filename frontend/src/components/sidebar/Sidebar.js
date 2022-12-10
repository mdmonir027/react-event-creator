import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { userLoggedOut } from 'features/auth/authSlice';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import routeList from 'utils/routeList';
import { removeToken } from 'utils/token';

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
  const dispatch = useDispatch();
  const { isAdmin } = useSelector((state) => state.auth.user);

  const logoutHandler = () => {
    removeToken();
    dispatch(userLoggedOut());
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
            <Link to={routeList.event.add}>Add Event</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to={routeList.event.view}>View Events</Link>
          </Menu.Item>
        </Menu.SubMenu>

        {isAdmin && (
          <Menu.SubMenu key='user' icon={<AppstoreOutlined />} title='User'>
            <Menu.Item key='5'>
              <Link to={routeList.user.add}>Add User</Link>
            </Menu.Item>
            <Menu.Item key='6'>
              <Link to={routeList.user.view}>View User</Link>
            </Menu.Item>
          </Menu.SubMenu>
        )}

        <Menu.SubMenu key='profile' icon={<AppstoreOutlined />} title='Profile'>
          <Menu.Item key='setting:1'>
            <Link to={routeList.profile.view}>Profile</Link>
          </Menu.Item>
          <Menu.Item key='setting:2'>
            <Link to={routeList.profile.updatePassword}>Change Password</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key='setting:3' onClick={logoutHandler}>
          Log Out
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
