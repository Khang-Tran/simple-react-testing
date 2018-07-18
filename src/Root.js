import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import React from 'react';
import reduxPromise from 'redux-promise';

import reducers from './reducers';

export default ({children, initialState = {}}) => {
    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

