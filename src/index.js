import React from "react";
import ReactDOM from "react-dom";
// 将react-router-dom改成react-router不会报错
import {
  Router,
  Route,
  Switch,
  Redirect,
  BrowserRouter,
  HashRouter
} from "react-router-dom";
import store from "./redux";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import CalPage from "./pages/calPage/calPage"
import Login from "./../src/pages/login/Login";
import Echarts from "./pages/echarts/echarts"
import "./index.css";
import "antd/dist/antd.css";
import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();
// react-routerV4版本丢弃IndexRoute，用exact和Redirect替代
ReactDOM.render(
  <Provider store={store}>
    {/* <Router history={history}>的实现效果和<BrowserRouter>一样;<BrowserRouter>和<HashRouter>的区别是：HashRouter有# */}
    <Router history={history}>
      {/* <Switch> */}
      <Route path="/admin" component={CalPage}></Route>
      <Route path="/echarts" component={Echarts}></Route>
      <Route exact path="/" component={Login}></Route>
      {/* /admin不能放到/里面，没有/admin点击跳转跳转不了 */}
      {/* <Redirect to="/" /> */}
      {/* </Switch> */}
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
