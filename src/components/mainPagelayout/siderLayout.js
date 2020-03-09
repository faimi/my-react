import React, { Component } from "react";
import "./mainPagelayout.less";
import { withRouter, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons";
const { Sider } = Layout;
const { SubMenu } = Menu;

class Siders extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["2"]} mode="inline">
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                <span>User</span>
              </span>
            }
          >
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
            <Link to="/admin">
              <PieChartOutlined />
              <span>ECharts</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/echarts">
              <DesktopOutlined />
              <span>Option 2</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
export default withRouter(Siders);
