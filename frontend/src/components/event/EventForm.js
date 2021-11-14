import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
  Col,
  Row,
  Select,
  Typography,
  DatePicker,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import axios from 'axios';

const useStyles = createUseStyles({
  form: {},
  button: {},
  formWrapper: {
    marginTop: 20,
  },
});
const EventForm = () => {
  const classes = useStyles();
  const [countryList, setCountryList] = useState([]);
  const [timezoneList, setTimezoneList] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => {
        const list = res.data;
        const countries = list.map((country) => country.name.common);
        setCountryList(countries);
        const timeZoneList = res.data.map((country) => {
          return country.timezones;
        });

        const timezoneUnique = [...new Set(timeZoneList.flat(Infinity))]
          .sort((a, b) => {
            if (a > b) return -1;
            if (a < b) return 1;
            return 0;
          })
          .filter((item) => item !== 'UTC');

        setTimezoneList(timezoneUnique);
      })
      .catch((e) => console.log(e));
  }, []);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div>
      <div className={classes.formWrapper}>
        <Form name='normal_login' className={classes.form} onFinish={onFinish}>
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
              placeholder='Enter Event name'
            />
          </Form.Item>
          <Typography.Text>Event location</Typography.Text>
          <Row gutter={20} style={{ marginTop: 10 }}>
            <Col span={12}>
              <Form.Item
                name='address'
                rules={[
                  {
                    required: true,
                    message: 'Address is required',
                  },
                ]}
                key='address'
              >
                <Input
                  prefix={<UserOutlined />}
                  type='text'
                  placeholder='Enter Event address'
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name='coordinates'
                rules={[
                  {
                    required: true,
                    message: 'Coordinates is required!',
                  },
                ]}
                key='coordinates'
              >
                <Input
                  prefix={<UserOutlined />}
                  type='text'
                  placeholder='Enter Event coordinates'
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name='city'
                rules={[
                  {
                    required: true,
                    message: 'City is required',
                  },
                ]}
                key='city'
              >
                <Input
                  prefix={<UserOutlined />}
                  type='text'
                  placeholder='Enter event city'
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Select
                key='country'
                showSearch
                style={{ width: '100%' }}
                placeholder='Select a country'
                optionFilterProp='children'
                name='country'
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {countryList.map((country) => (
                  <Select.Option value={country} key={country}>
                    {country}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>
          <Typography.Text>Event Date and Time</Typography.Text>
          <Row gutter={20} style={{ marginTop: 10 }}>
            <Col span={12}>
              <Form.Item
                name='date_from'
                rules={[
                  {
                    required: true,
                    message: 'Event date required!',
                  },
                ]}
                key='date_from'
              >
                <DatePicker
                  style={{ width: '100%' }}
                  placeholder='Event date from'
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                key='date_to'
                name='date_to'
                rules={[
                  {
                    required: true,
                    message: 'Event date required!',
                  },
                ]}
              >
                <DatePicker
                  style={{ width: '100%' }}
                  placeholder='Event date to'
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name='time_from'
                rules={[
                  {
                    required: true,
                    message: 'Event time is required!',
                  },
                ]}
                key='time_from'
              >
                <DatePicker
                  style={{ width: '100%' }}
                  placeholder='Event time from'
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name='time_to'
                rules={[
                  {
                    required: true,
                    message: 'Event time is required!',
                  },
                ]}
                key='time_to'
              >
                <DatePicker
                  style={{ width: '100%' }}
                  placeholder='Event time to'
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name='timezone'
                rules={[
                  {
                    required: true,
                    message: 'Timezone is required!',
                  },
                ]}
                key='timezone'
              >
                <Select
                  showSearch
                  style={{ width: '100%' }}
                  placeholder='Select event timezone'
                  optionFilterProp='children'
                  name='timezone'
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {timezoneList.map((value) => (
                    <Select.Option value={value} key={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                key='source_url'
                name='source_url'
                rules={[
                  {
                    required: true,
                    message: 'Source url is required!',
                  },
                ]}
              >
                <Input style={{ width: '100%' }} placeholder='Source Url' />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name='description'
            rules={[
              {
                required: true,
                message: 'Description is required',
              },
            ]}
            key='description'
          >
            <Input.TextArea
              prefix={<UserOutlined />}
              type='url'
              placeholder='Description'
              autoSize={{ minRows: 8, maxRows: 10 }}
            />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' className={classes.button}>
              Add Event
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EventForm;
