import React from 'react';
import { Form, Input, Button, Typography, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { loginAction } from 'store/action/auth.action';

const useStyles = createUseStyles({
  form: {
    width: '360px',
    background: 'white',
    padding: '40px',
    borderRadius: 5,
  },
  button: {
    width: '100%',
  },
});

const LoginForm = ({ loginAction, errors }) => {
  const classes = useStyles();
  const onFinish = (values) => {
    loginAction(values);
  };
  return (
    <Form name='normal_login' className={classes.form} onFinish={onFinish}>
      <Space direction='vertical' style={{ marginBottom: 10 }}>
        {Object.keys(errors).length > 0 &&
          Object.values(errors).map((value) => (
            <Typography.Text type='danger'>{value}</Typography.Text>
          ))}
      </Space>
      <Form.Item
        name='username'
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} type='text' placeholder='Username' />
      </Form.Item>

      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          type='password'
          placeholder='Password'
        />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' className={classes.button}>
          Log in
        </Button>
      </Form.Item>

      <Form.Item>
        <a className='login-form-forgot' href='/'>
          Forgot password
        </a>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  errors: state.auth.errors,
});
const functions = { loginAction };

export default connect(mapStateToProps, functions)(LoginForm);
