import {TodoState} from "./index"
import {RootState} from "store/index";

export const todoSelector = (state:RootState) => state.todos.todoList;