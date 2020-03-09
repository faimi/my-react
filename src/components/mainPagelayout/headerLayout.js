import React, { Component } from "react";
import "./mainPagelayout.less";
import { withRouter } from "react-router-dom";
import { Layout, Row, Col } from "antd";
const { Header } = Layout;

class HeaderSiders extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Row>
            <Col span={12} className="faimi">
              <img className="reactLogo" src="asserts/timg.jpg" alt="" />
              &nbsp;&nbsp;&nbsp;Faimi's React project
            </Col>
            <Col span={12} className="reactAdmin">
              <img className="reactTx" src="asserts/tx.jpg" alt="" />
              &nbsp;&nbsp;&nbsp;
              <span>管理员&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
              <span>退出</span>
            </Col>
          </Row>
        </Header>
      </Layout>
    );
  }
}
export default withRouter(HeaderSiders);
