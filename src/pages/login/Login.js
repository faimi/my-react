import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./Login.less";
import { render } from "@testing-library/react";
// react-router4.0官方文档里已经废弃了：BrowserHistory
const history = createBrowserHistory();

class Login extends Component {
  constructor(props) {
    super(props);
  };
  layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    }
  };
  tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16
    }
  };
  onFinish = values => {
    // console.log(this.props);
    this.props.history.push("/admin");
  };

  onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  render() {
    return (
      <div>
        <div className="padCenter">Faimi's React project</div>
        <div className="loginCenter">
          <Form
            {...this.layout}
            name="basic"
            initialValues={{
              remember: true
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                {
                  required: true,
                  message: "请输入用户名！"
                }
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入密码！"
                }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item {...this.tailLayout} name="remember" valuePropName="checked">
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item {...this.tailLayout}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

// const Login = () => {
//   const onFinish = values => {
//     history.push("/admin");
//     history.go();
//   };

//   return (

//   );
// };

export default withRouter(Login);
