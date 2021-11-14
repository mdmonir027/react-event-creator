import { Form, Button, Input } from 'antd';
import { AiFillLock } from 'react-icons/ai';
import React from 'react';

const UpdatePasswordForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form name='normal_login' onFinish={onFinish}>
        <Form.Item
          name='old-password'
          rules={[
            {
              required: true,
              message: 'Old password is required!',
            },
          ]}
          key='old-password'
        >
          <Input
            prefix={<AiFillLock />}
            type='text'
            placeholder='Old Password'
          />
        </Form.Item>
        <Form.Item
          name='new-password'
          rules={[
            {
              required: true,
              message: 'New password is required!',
            },
          ]}
          key='new-password'
        >
          <Input
            prefix={<AiFillLock />}
            type='text'
            placeholder='New Password'
          />
        </Form.Item>
        <Form.Item
          name='confirm-password'
          rules={[
            {
              required: true,
              message: 'Confirm your password!',
            },
          ]}
          key='confirm-password'
        >
          <Input
            prefix={<AiFillLock />}
            type='text'
            placeholder='Confirm password'
          />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Update Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdatePasswordForm;
