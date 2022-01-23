import {useSelector} from "react-redux";
import {TodoItemStatus} from "types";
import {TodoList, TodoInput} from "components";
import {TodoState} from "store/Todo";
import CONSTANT from "../constants";

const Home = () => {
    const todoList = useSelector((state:TodoState) => state.todoList)

    return (
        <div className="container">
            <TodoInput length={todoList.length}/>

            <div className="todo-list-wrapper">
                <div className="todo-list">
                    <h1>{CONSTANT.TODO_STATUS[TodoItemStatus.CREATED]}</h1>
                    <TodoList todoList={todoList.filter(todo => todo.state === TodoItemStatus.CREATED)}/>
                </div>
                <div className="todo-list">
                    <h1>{CONSTANT.TODO_STATUS[TodoItemStatus.PROGRESSING]}</h1>
                    <TodoList todoList={todoList.filter(todo => todo.state === TodoItemStatus.PROGRESSING)}/>
                </div>
                <div className="todo-list">
                    <h1>{CONSTANT.TODO_STATUS[TodoItemStatus.DONE]}</h1>
                    <TodoList todoList={todoList.filter(todo => todo.state === TodoItemStatus.DONE)}/>
                </div>
            </div>
        </div>
    )
}


export default Home;