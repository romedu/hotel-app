import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import reduxThunk from "redux-thunk";
import userReducer from "./store/reducers/userReducer";
import categoryReducer from "./store/reducers/categoryReducer";
import productReducer from "./store/reducers/productReducer";
import restaurantReducer from "./store/reducers/restaurantReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    restaurant: restaurantReducer
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();