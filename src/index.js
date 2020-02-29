import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route} from 'react-router-dom';
import store from './redux';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';
import './index.css';
import App from './pages/MainPageLayout/App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';

const history=createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
        <Route path="/" component={App}/>
        </Router>
    </Provider>,document.getElementById('root')
);


serviceWorker.unregister();
