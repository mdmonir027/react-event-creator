import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div>
      <Row>
        <Col span={12}>
          <Form name='normal_login' onFinish={onFinish}>
            <Form.Item
              name='name'
              rules={[
                {
                  required: true,
                  message: 'Name is required!',
                },
              ]}
              key='name'
            >
              <Input prefix={<UserOutlined />} type='text' placeholder='Name' />
            </Form.Item>

            <Form.Item
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Username is required!',
                },
              ]}
              key='username'
            >
              <Input
                prefix={<UserOutlined />}
                type='text'
                placeholder='Username'
              />
            </Form.Item>

            <Form.Item
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Email is required!',
                },
              ]}
              key='username'
            >
              <Input
                prefix={<UserOutlined />}
                type='text'
                placeholder='Email Address'
              />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Add User
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default UserForm;
