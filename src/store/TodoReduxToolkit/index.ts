import {TodoItem, TodoItemStatus} from "types";
import {todoSelector} from "store/TodoReduxToolkit/hooks";
import {createSlice} from "@reduxjs/toolkit";

export type TodoState = {
    todoList: TodoItem[],
}

const initialTodoState: TodoState = {
    todoList: [
        {
            id: 1,
            state: TodoItemStatus.CREATED,
            title: '생성 작업 1',
            content: '내용 1'
        },
        {
            id: 2,
            state: TodoItemStatus.CREATED,
            title: '생성 작업 2',
            content: '내용 2'
        },
        {
            id: 3,
            state: TodoItemStatus.CREATED,
            title: '생성 작업 3',
            content: '내용 3'
        },
        {
            id: 4,
            state: TodoItemStatus.PROGRESSING,
            title: '진행 작업 1',
            content: '내용 1'
        },
        {
            id: 5,
            state: TodoItemStatus.PROGRESSING,
            title: '진행 작업 2',
            content: '내용 2'
        },
        {
            id: 6,
            state: TodoItemStatus.DONE,
            title: '완료 작업 1',
            content: '내용 1'
        },

    ]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialTodoState,
    reducers:{
        addTodo:(state, {payload}) => {
            state.todoList = [...state.todoList, payload];
        },
        changeTodoStatus: ({todoList}, {payload}) => {
            const {id, status} = payload
            const target = todoList.find(todo => todo.id === id)

            if (target) {
                target.state = status
            }
        },
        removeTodo: ({todoList}, {payload:{id}}) => {
            const target = todoList.find(todo => todo.id === id)
            if (target) {
                todoList.splice(todoList.indexOf(target), 1)
            }
        },
        editTodo: ({todoList}, {payload:{id,title,content}}) => {
            const target = todoList.find(todo => todo.id === id)
            if (target) {
                target.title = title;
                target.content = content;
            }
        }
    }
})

export {todoSelector};
export const {addTodo, changeTodoStatus, removeTodo, editTodo} = todoSlice.actions;
export default todoSlice.reducer;









