import {applyMiddleware, createStore} from "redux";
import todoReducer from "./TodoRedux";
import {configureStore} from "@reduxjs/toolkit";
import {createLogger} from 'redux-logger';
import todos from './TodoReduxToolkit'

const reduxLogger = createLogger();
const store = configureStore({
    middleware:[reduxLogger],
    reducer:{
        todos
    }
})

// const store = createStore(todoReducer, applyMiddleware(reduxLogger))
// export default store;

export default store

export type RootState = ReturnType<typeof store.getState>