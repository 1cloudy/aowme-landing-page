import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <Row className="bottom-bar">
        <Col lg={24} sm={24}>
          <span style={{ marginRight: 12 }}>沪ICP备14005347号-1</span>
          <span style={{ marginRight: 12 }}>Copyright © 未来美学</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
