import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './Reducer/Reducer';


const AppWithRouter = withRouter(App);
const store = createStore(reducer, applyMiddleware(thunk, logger));
const rootElement = document.getElementById('root');


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppWithRouter />
        </Router>
    </Provider>,
    rootElement
);

