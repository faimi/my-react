import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, BrowserRouter, HashRouter,Switch,Redirect } from "react-router-dom";
import store from "./redux";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import "./index.css";
import App from "./pages/MainPageLayout/App";
import Login from "./pages/login/Login";
import "antd/dist/antd.css";
import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();
// react-routerV4版本丢弃IndexRoute
ReactDOM.render(
  <Provider store={store}>
    {/* <Router history={history}>的实现效果和<BrowserRouter>一样;<BrowserRouter>和<HashRouter>的区别是：HashRouter有# */}
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        {/* /admin不能放到/里面 */}
        <Route path="/admin" component={App}></Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
