/* global __DEVELOPMENT__ __DEVTOOLS__ */
/* eslint global-require: 0 */

import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import DevTools from 'pages/DevTools';
import { routerMiddleware } from 'react-router-redux';
import reducers from 'reducers';

export default function configureStore(initialState = {}, browserHistory) {
    const middlewares = [];
    middlewares.push(thunk);
    middlewares.push(routerMiddleware(browserHistory));

    if (__DEVELOPMENT__) {
        const createLogger = require('redux-logger');
        const logger = createLogger({ predicate:
            (getState, action) => action.type !== 'EFFECT_TRIGGERED' &&
                                  action.type !== 'EFFECT_RESOLVED' });
        middlewares.push(logger);
    }

    let createStoreWithMiddleware = applyMiddleware(...middlewares);

    if (__DEVTOOLS__) {
        createStoreWithMiddleware = compose(
            createStoreWithMiddleware,
            DevTools.instrument()
        );
    }

    const finalCreateStore = createStoreWithMiddleware(createStore);
    const store = finalCreateStore(reducers, initialState);

    return store;
}
