import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'; //REDUX - provider
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';    //REDUX - store
import thunk from 'redux-thunk'; //REDUX THUNK
import createSagaMiddleWare from 'redux-saga'; //SAGA

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import burgerBuilderReducer from './store/reducers/burgerBuilder';  //REDUX - reducer
import orderReducer from './store/reducers/order'; //REDUX - reducer
import authReducer from './store/reducers/auth';  //REDUX - reducer

import {watchAuth, watchBurgerBuilder, watchOrders} from './store/sagas/index'; //SAGA

//REDUX DEV TOOLS                                                       compose: is imported in line 5
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth: authReducer
})

//SAGA
const sagaMiddleware = createSagaMiddleWare();

const store = createStore(
    rootReducer,
    //applyMiddleware: is imported in line 5
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

//SAGA
sagaMiddleware.run(watchAuth)
sagaMiddleware.run(watchBurgerBuilder) 
sagaMiddleware.run(watchOrders);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
