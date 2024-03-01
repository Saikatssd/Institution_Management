// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import authReducer from './authReducers';

// const store = createStore(authReducer, applyMiddleware(thunk));

// export default store;





// import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose, } from "redux";
// import thunk from 'redux-thunk';
// // import * as thunk from 'redux-thunk';

// import { authReducer, forgotPasswordReducer, userReducer } from "./Reducers/userReducer";


// const reducer = combineReducers({
//     auth: authReducer,
//     user: userReducer,
//     forgotPassword: forgotPasswordReducer,
// });

// let initialState = {
 
// };

// // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const middleware = [thunk];
// console.log('Middleware:', middleware);
// const store = createStore(
//     reducer,
//     initialState,
//     composeEnhancers(applyMiddleware(...middleware))
// );


// export default store;


import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';

import { authReducer, forgotPasswordReducer, userReducer } from "./Reducers/userReducer";

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
});

let initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const composeEnhancers = compose;
// const composeEnhancers = composeWithDevToolsExtension();

const middleware = [thunk];
// console.log('Middleware:', middleware);

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
