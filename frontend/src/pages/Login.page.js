import React from 'react';
import LoginForm from 'components/auth/LoginForm';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
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

const Login = ({ user }) => {
  const classes = useStyles();

  if (Object.keys(user).length > 0) {
    return <Navigate to='/event/view' />;
  }

  return (
    <div className={classes.main}>
      <div className={classes.loginWrapper}>
        <LoginForm />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps)(Login);
