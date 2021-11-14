import React from 'react';
import Header from 'components/header/Header';
import { Row, Col } from 'antd';
import Sidebar from 'components/sidebar/Sidebar';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  contentWrapper: {
    boxSizing: 'border-box',
    padding: '20px 50px',
  },
});
const Layout = ({ children }) => {
  const classes = useStyles();
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
        <Col span={19}>
          <div className={classes.contentWrapper}>{children}</div>
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
