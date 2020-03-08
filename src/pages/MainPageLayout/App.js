import React from "react";
import "./App.less";
import { withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons";
import Cal from "../../components/cal/cal";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <div>
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
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UserOutlined />
                    <span>User</span>
                  </span>
                }
              >
                {/* <Menu.Item key="3"><Link to="/cal">Tom</Link></Menu.Item> */}
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <TeamOutlined />
                    <span>Team</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="1">
                <PieChartOutlined />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <DesktopOutlined />
                <span>Option 2</span>
              </Menu.Item>
              {/* <Menu.Item key="9">
                <FileOutlined />
              </Menu.Item> */}
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                Bill is a cat.
                <Cal />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default withRouter(SiderDemo);
