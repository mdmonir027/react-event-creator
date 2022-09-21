import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import { useLoginMutation } from 'features/auth/authApiSlice';
import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';
import routeList from 'utils/routeList';

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
  title: {
    textAlign: 'center',
  },
});

const LoginForm = ({ errors = {} }) => {
  const classes = useStyles();
  const [login, { isSuccess, isError, error }] = useLoginMutation();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    login(values);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(routeList.event.view);
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (isError) {
      const errorArray = Object.entries(error.data).reduce(
        (acc, [key, value]) => {
          acc.push({
            name: key,
            errors: [value],
          });
          return acc;
        },
        []
      );
      form.setFields(errorArray);
    }
  }, [error, isError, form]);
  return (
    <Form
      name='normal_login'
      className={classes.form}
      onFinish={onFinish}
      form={form}
    >
      <Typography.Title className={classes.title}>Login Here</Typography.Title>
      <Form.Item
        name='username'
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
        key='username'
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
        key='password'
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

      {/* <Form.Item>
        <a className='login-form-forgot' href='/'>
          Forgot password
        </a>
      </Form.Item> */}
    </Form>
  );
};

export default LoginForm;
