import { Button, Col, Form, Input, message, Row } from 'antd';
import { useUpdatePasswordMutation } from 'features/auth/authApiSlice';
import { useEffect } from 'react';
import { AiFillLock } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const UpdatePasswordForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [updatePassword, { isSuccess, isError, error }] =
    useUpdatePasswordMutation();

  const onFinish = (values) => {
    updatePassword(values);
  };

  useEffect(() => {
    if (isSuccess) {
      message.success('Redirecting....', 1);
      setTimeout(() => {
        navigate('/profile');
      }, 1300);
    }
  }, [navigate, isSuccess]);

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
    <div>
      <Form name='normal_login' onFinish={onFinish} form={form}>
        <Row gutter={10}>
          <Col span={24}>
            <Form.Item
              name='oldPassword'
              rules={[
                {
                  required: true,
                  message: 'Old password is required!',
                },
              ]}
              key='oldPassword'
            >
              <Input.Password
                prefix={<AiFillLock />}
                type='text'
                placeholder='Old Password'
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='newPassword'
              dependencies={['confirmPassword']}
              rules={[
                {
                  required: true,
                  message: 'New password is required!',
                },
              ]}
              key='newPassword'
            >
              <Input.Password
                prefix={<AiFillLock />}
                type='text'
                placeholder='New Password'
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='confirmPassword'
              dependencies={['newPassword']}
              rules={[
                {
                  required: true,
                  message: 'Confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    const { newPassword } = getFieldValue();

                    if (newPassword === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject("Password didn't match!");
                  },
                }),
              ]}
              key='confirmPassword'
            >
              <Input.Password
                prefix={<AiFillLock />}
                type='text'
                placeholder='Confirm password'
              />
            </Form.Item>
          </Col>
        </Row>

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
