import {TodoItem} from "types";

type TodoAction = ReturnType<typeof addTodo>;
type TodoState = {
    todoList: TodoItem[]
}

const initialTodoState: TodoState = {
    todoList: []
}

const ADD_TODO = 'todo/ADD_TODO' as const;

export const addTodo = (todo: TodoItem) => ({
    type: ADD_TODO,
    payload: todo
})


export default function todoReducer(state: TodoState = initialTodoState, action: TodoAction) {
    switch (action.type) {
        case ADD_TODO:
            let todoList = [...state.todoList]
            todoList.push(action.payload)
            return {todoList}
        default :
            return state
    }
}

