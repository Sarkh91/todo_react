import {TodoItem, TodoItemStatus} from "types";
import styled from "styled-components";
import normalize from "styled-normalize";
import CONSTANT from "../../constants";
import {useDispatch} from "react-redux";
import {ChangeEvent} from "react";
import {changeTodoStatus} from "../../store/Todo";
import TodoListItem from "./TodoListItem";

const TodoListUl = styled.ul`
  ${normalize}
  min-height: 50vh;
  width: 100%;
`

const TodoList = ({todoList}: { todoList: TodoItem[] }) => {


    return (
        <TodoListUl>
            {todoList.map((todo, index) => (
                <TodoListItem todo={todo} key={index} />
            ))}
        </TodoListUl>
    )
}

export default TodoList;