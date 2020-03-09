import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Layout } from "antd";
const { Footer } = Layout;

class footer extends Component {
  render() {
    return (
      <div>
        <Footer style={{ textAlign: "center" }}>
          This project Design ©2020 Created by Faimi
        </Footer>
      </div>
    );
  }
}
export default withRouter(footer);
