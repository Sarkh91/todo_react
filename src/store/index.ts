import {combineReducers, createStore} from "redux";
import todoReducer from "./Todo";

const rootReducer = combineReducers({todo: todoReducer})
const store = createStore(rootReducer)

export default store;
export type rootState = ReturnType<typeof rootReducer>