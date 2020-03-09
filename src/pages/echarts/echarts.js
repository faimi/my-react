import React from "react";
import { withRouter } from "react-router-dom";
import HeaderLayout from "../../components/mainPagelayout/headerLayout";
import MainPageLayout from "../../components/mainPagelayout/siderLayout";
import Footer from "../../components/footer/footer";
import { Layout } from "antd";
const { Header, Content } = Layout;
class echart extends React.Component {
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
            </Content>
            <Footer></Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default withRouter(echart);
