import { Avatar, Menu } from 'antd';
import { useGetMeQuery } from 'features/auth/authApiSlice';
import { userLoggedOut } from 'features/auth/authSlice';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import routeList from 'utils/routeList';
import { removeToken } from 'utils/token';
const useStyles = createUseStyles({
  subMenu: {
    padding: 0,
  },
  main: {
    display: 'flex',
    justifyContent: 'end',
    boxShadow: '0px 0px 10px 1px #d3d3d3',
    padding: '10px 0',
    marginBottom: 10,
    position: ' fixed',
    width: ' 100%',
    zIndex: ' 1000',
    height: ' 65px',
    background: ' white',
  },
});

const Header = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const { data: me, isLoading } = useGetMeQuery();

  const logoutHandler = () => {
    removeToken();
    dispatch(userLoggedOut());
  };
  if (isLoading) return null;
  return (
    <div className={classes.main}>
      <div>
        <Menu mode='horizontal' style={{ border: 0 }}>
          <Menu.SubMenu
            key='SubMenu'
            className={classes.subMenu}
            icon={
              <Avatar src={`https://eu.ui-avatars.com/api/?name=${me.name}`} />
            }
          >
            <Menu.Item key='setting:1'>
              <Link to={routeList.profile.view}>Profile</Link>
            </Menu.Item>
            <Menu.Item key='setting:2'>
              <Link to={routeList.profile.updatePassword}>Change Password</Link>
            </Menu.Item>
            <Menu.Item key='setting:3' onClick={logoutHandler}>
              Log Out
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
