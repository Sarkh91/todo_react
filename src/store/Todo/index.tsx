import {TodoItem, TodoItemStatus} from "types";

type TodoAction = ReturnType<typeof addTodo> | ReturnType<typeof changeTodoStatus> | ReturnType<typeof removeTodo> | ReturnType<typeof editTodo>;
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

const ADD_TODO = 'ADD_TODO' as const;
const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS' as const;
const REMOVE_TODO = 'REMOVE_TODO' as const;
const EDIT_TODO = 'EDIT_TODO' as const;

export const addTodo = (todo: TodoItem) => ({
    type: ADD_TODO,
    payload: todo
})

export const changeTodoStatus = (id: number, status: TodoItemStatus) => ({
    type: CHANGE_TODO_STATUS,
    payload: {
        id,
        status
    }
})

export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: {
        id
    }
})

export const editTodo = (id: number, {title, content}: {title:string, content:string}) => ({
    type: EDIT_TODO,
    payload: {
        id,
        title,
        content
    }
})


export default function todoReducer(state: TodoState = initialTodoState, action: TodoAction) {
    switch (action.type) {
        case ADD_TODO: {
            return {todoList: [...state.todoList, action.payload]}
        }
        case CHANGE_TODO_STATUS: {
            const {id, status} = action.payload
            const todoList = [...state.todoList]
            const target = todoList.find(todo => todo.id === id)

            if (target) {
                target.state = status
            }

            return {todoList}
        }
        case REMOVE_TODO: {
            const {id} = action.payload;
            const todoList = [...state.todoList];
            const target = todoList.find(todo => todo.id === id)

            if (target) {
                todoList.splice(todoList.indexOf(target), 1)
            }

            return {todoList}
        }
        case EDIT_TODO: {
            const {id, title, content} = action.payload;
            const todoList = [...state.todoList];
            const target = todoList.find(todo => todo.id === id)

            if (target) {
                target.title = title;
                target.content = content;
            }

            return {todoList}
        }
        default :
            return state
    }
}

