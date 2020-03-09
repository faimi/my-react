import React from "react";
import HeaderLayout from "../../components/mainPagelayout/headerLayout";
import MainPageLayout from "../../components/mainPagelayout/siderLayout";
import Footer from "../../components/footer/footer";
import { connect } from "react-redux";
import { increase, decrease, reset } from "../../redux/actions";
import "./calPage.less";
import { Layout, Breadcrumb } from "antd";
const { Header, Content } = Layout;
class mainCal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <HeaderLayout></HeaderLayout>
        <Layout style={{ minHeight: "100vh" }}>
          <MainPageLayout></MainPageLayout>
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
                <span>当前计数值为：{this.props.reducers.count}</span>
                <button onClick={() => this.props.increases()}>增加</button>
                <button onClick={() => this.props.decreases()}>减少</button>
                <button onClick={() => this.props.resets()}>重置</button>
              </div>
            </Content>
            <Footer></Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default connect(
  state => state,
  dispatch => ({
    increases: () => {
      dispatch(increase());
    },
    decreases: () => {
      dispatch(decrease());
    },
    resets: () => {
      dispatch(reset());
    }
  })
)(mainCal);
