import { UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, message, Row } from 'antd';
import { useAddUserMutation } from 'features/user/userApiSlice';
import { useEffect } from 'react';
import { AiOutlineLogin, AiOutlineMail } from 'react-icons/ai';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { addUser } from 'store/action/user.action';
import routeList from 'utils/routeList';

const UserForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [addUser, { isSuccess, isError, error }] = useAddUserMutation();

  const onFinish = (values) => {
    addUser(values);
  };

  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
      message.success('User created successfully! Redirecting.....', 1);
      setTimeout(() => {
        navigate(routeList.user.view);
      }, 1300);
    }
  }, [form, isSuccess, navigate]);

  useEffect(() => {
    if (isError) {
      message.error('Error. Please Try again!');
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
    <div>
      <Row>
        <Col span={24}>
          <Form name='normal_login' form={form} onFinish={onFinish}>
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
                    {
                      type: 'email',
                      message: 'Email must be valid!',
                    },
                  ]}
                  key='email'
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

const mapStateToProps = (state) => ({
  errors: {},
});

export default connect(mapStateToProps, { addUser })(UserForm);
