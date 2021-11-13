import React from 'react';
import Header from 'components/header/Header';
import { Row, Col } from 'antd';
import Sidebar from 'components/sidebar/Sidebar';
const Layout = ({ children }) => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={5}>
          <Sidebar />
        </Col>
        <Col span={19}>{children}</Col>
      </Row>
    </div>
  );
};

export default Layout;
