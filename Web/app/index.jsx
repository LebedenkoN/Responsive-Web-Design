/* global __DEVTOOLS__ __DEVELOPMENT__ */
/* eslint global-require:0 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

require('../assets/css/styles.css');

import {
    App,
    Home,
    NoMatch
} from 'pages';

const store = configureStore({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

class Index extends React.Component {
    checkAuthentication(nextState, replace) {
        const state = store ? store.getState().identity : null;
        if ((state.token.access_token === ''
            && state.token.expires_in === undefined)
            || state.token.expires_in.getTime() < (new Date()).getTime()) {
            replace(`login${nextState.location.pathname}`);
        }
    }
    renderRoutes() {
        return (
            <Router history={history}>
                <Route path="/" component={App} >
                    <IndexRoute component={Home} />
                    <Route path="*" component={NoMatch} />
                </Route>
            </Router>
        );
    }
    render() {
        let component;
        if (__DEVTOOLS__) {
            const DevTools = require('pages/DevTools').default;

            component = (
                <div>
                    <Provider store={store}>
                        <div>
                            {this.renderRoutes()}
                            <DevTools />
                        </div>
                    </Provider>
                </div>
            );
        } else {
            component = (
                <div>
                    <Provider store={store}>
                      {this.renderRoutes()}
                    </Provider>
                </div>
        );
        }

        return component;
    }
}

if (__DEVELOPMENT__) {
    if (module.hot) {
        // Enable Webpack hot module replacement
        module.hot.accept();
        /* if you need to enable hot module replacement for reducers only - uncomment this block
                module.hot.accept('reducers', () => {
                const nextReducer = require('reducers');
                store.replaceReducer(nextReducer);
            });*/
    }
}

render(<Index />, document.getElementById('content'));
