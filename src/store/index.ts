import {applyMiddleware, createStore} from "redux";
import todoReducer from "./Todo";
import {createLogger} from 'redux-logger';

const reduxLogger = createLogger()

const store = createStore(todoReducer, applyMiddleware(reduxLogger))

export default store;