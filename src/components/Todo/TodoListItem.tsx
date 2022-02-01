import styled from "styled-components";
import normalize from "styled-normalize";
import {TodoItem, TodoItemStatus} from "types";
import CONSTANT from "../../constants";
import {useDispatch} from "react-redux";
import {ChangeEvent, useRef, useState} from "react";
import {changeTodoStatus, editTodo, removeTodo} from "store/TodoReduxToolkit";

const TodoListItemLi = styled.li`
  ${normalize}
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, .2);

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bdbdbd;
    box-sizing: border-box;

    .title {
      font-size: 25px;
    }

    span {
      border-radius: 5px;
      font-size: 13px;
      padding: 5px;
      color: #fff;

      &.CREATED {
        background-color: #c97171;
      }

      &.PROGRESSING {
        background-color: #4b885f;
      }

      &.DONE {
        background-color: #4857a1;
      }
    }
  }

  .content {
    min-height: 100px;
    margin-bottom: 10px;
    white-space: pre-wrap;
  }
  
  input {
    width: calc(100% - 60px);
  }
  
  textarea{
    width: 100%;
    min-height: 100px;
    margin-bottom: 10px;
    box-sizing: border-box;
    resize: none;
  }

  select.todo-state-select {
    width: 100%;
    margin-bottom: 5px;
  }

  button {
    width: 100%;
    
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`

const TodoListItem = ({todo}: { todo: TodoItem }) => {
    const [isEdit, setIsEdit] = useState(false);
    const titleInput = useRef<HTMLInputElement>(null);
    const contentTextArea = useRef<HTMLTextAreaElement>(null);
    const dispatch = useDispatch();

    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>, id: number) => {
        if (e.target.value) {
            const status = Number(e.target.value) as TodoItemStatus
            dispatch(changeTodoStatus({id, status}));
        }

        e.target.value = ''
    }

    const onClickRemoveTodo = () => {
        dispatch(removeTodo({id:todo.id}))
    }

    const onClickIsEditBtn = () => {
        if (isEdit && titleInput.current && contentTextArea.current) {
            const {value: title} = titleInput.current
            const {value: content} = contentTextArea.current

            if (!title && !content) {
                return false;
            }

            dispatch(editTodo( {id:todo.id, title: title || '', content: content || ''}))
        }

        setIsEdit(!isEdit);
    }

    return (
        <TodoListItemLi>
            <div className="header">
                {
                    isEdit ? <input defaultValue={todo.title} ref={titleInput} placeholder="제목을 입력하세요." maxLength={10} type="text"/> : <p className="title">{todo.title}</p>
                }
                <span className={`${TodoItemStatus[todo.state]}`}>{CONSTANT.TODO_STATUS[todo.state]}</span>
            </div>
            {
                isEdit ? <textarea defaultValue={todo.content} ref={contentTextArea} placeholder="내용을 입력하세요." /> : <p className="content">{todo.content}</p>
            }
            <select className="todo-state-select" onChange={(e) => onChangeSelect(e, todo.id)}>
                <option value="">상태선택</option>
                {Object.values(CONSTANT.TODO_STATUS).map((status, index) => (
                    <option key={status} value={index}>{status}</option>
                ))}
            </select>
            <button onClick={onClickIsEditBtn}>{isEdit ? '완료' : '수정'}</button>
            <button onClick={onClickRemoveTodo}>제거</button>
        </TodoListItemLi>
    )
}

export default TodoListItem