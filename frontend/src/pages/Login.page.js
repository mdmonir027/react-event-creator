import React from 'react';
import LoginForm from 'components/auth/LoginForm';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  main: {
    background: '#D9CCC5',
    width: '100vw',
    height: '100vh',
  },
  loginWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50% , -50%)',
  },
});

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.loginWrapper}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
