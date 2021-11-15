import React from 'react';
import { Menu, Avatar } from 'antd';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

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
    zIndex: ' 999999',
    height: ' 65px',
    background: ' white',
  },
});

const Header = () => {
  const classes = useStyles();
  const handleClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div className={classes.main}>
      <div>
        <Menu onClick={handleClick} mode='horizontal' style={{ border: 0 }}>
          <Menu.SubMenu
            key='SubMenu'
            className={classes.subMenu}
            icon={<Avatar src='https://joeschmoe.io/api/v1/random' />}
          >
            <Menu.Item key='setting:1'>
              <Link to='/profile'>Profile</Link>
            </Menu.Item>
            <Menu.Item key='setting:2'>
              <Link to='/change-password'>Change Password</Link>
            </Menu.Item>
            <Menu.Item key='setting:3'>
              <Link to='/log-out'>Log Out</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
