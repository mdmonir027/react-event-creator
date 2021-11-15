import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { AiOutlineLogin, AiOutlineMail } from 'react-icons/ai';

const UserForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div>
      <Row>
        <Col span={24}>
          <Form name='normal_login' onFinish={onFinish}>
            <Row gutter={10}>
              <Col span={12}>
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
                  <Input
                    prefix={<UserOutlined />}
                    type='text'
                    placeholder='Name'
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
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
                    prefix={<AiOutlineLogin />}
                    type='text'
                    placeholder='Username'
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
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
                    prefix={<AiOutlineMail />}
                    type='text'
                    placeholder='Email Address'
                  />
                </Form.Item>
              </Col>
            </Row>

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
