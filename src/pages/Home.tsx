import {useDispatch, useSelector} from "react-redux";
import {rootState} from "../store";
import {addTodo} from "../store/Todo";
import {TodoItem, TodoItemStatus} from "../types";
import {useRef} from "react";

const Home = () => {
    const todoList = useSelector((state: rootState) => state.todo.todoList)
    const input = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()

    const onClickAddBtn = () => {
        const {current} = input

        if (current?.value) {
            const newTodo: TodoItem = {
                state: TodoItemStatus.CREATED,
                title: current?.value || '',
                content: ''
            }

            dispatch(addTodo(newTodo))
            current.value = ''
        }
    }

    return (
        <div className="container">
            <input ref={input} type="text"/>
            <button onClick={onClickAddBtn}>add</button>
            <ul>
                {todoList.map((todo, index) => (
                    <li key={index}>
                        {todo.title}
                    </li>
                )) }
            </ul>
        </div>
    )
}


export default Home;