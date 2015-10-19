import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from './reducer';
import {setState} from './action_creators';
import App from './components/App';
import {TableContainer} from './components/Table';
import {generateHeaders, generateData} from './data_generator.js';
import Hello from './components/Hello';

const state = {
    table: {
        data: generateData(),
        headers: generateHeaders()
    }
};

const store = createStore(reducer);
store.dispatch(setState(state));

const routes = <Route component={App}>
    <Route path="/" component={TableContainer} />
    <Route path="/hello" component={Hello} />
</Route>;


ReactDOM.render(
    <Provider store={store}>
            <Router>{routes}</Router>
        </Provider>
    ,
    document.getElementById('app')
);