import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import React from 'react';
import async from 'middlewares/async';

import reducers from './reducers';

export default ({children, initialState = {}}) => {
    const store = createStore(reducers, initialState, applyMiddleware(async));
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

