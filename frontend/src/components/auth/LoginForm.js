import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';

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

const LoginForm = () => {
  const classes = useStyles();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form name='normal_login' className={classes.form} onFinish={onFinish}>
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
        <Input
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

export default LoginForm;
