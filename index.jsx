import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/containers/App'; 
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import pokemonReducer from './src/reducers/pokemonReducer';
import './index.css';
import { logActions, reportError } from './src/middlewares';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(
    applyMiddleware(thunk, logActions, reportError )
);

const store = createStore( 
    pokemonReducer,
    composedEnhancers   // se o redux-devtools estiver instalado, usa-o
    );

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
    );
