import {useRef} from "react";
import {useDispatch} from "react-redux";
import {TodoItem, TodoItemStatus} from "types";
import {addTodo} from "store/TodoReduxToolkit";
import styled from "styled-components";
import normalize from "styled-normalize";

const TodoInputSection = styled.section`
  ${normalize}

  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
  }
  
  textarea {
    resize: none;
    margin-bottom: 10px;
  }
`;


const TodoInput = ({length}:{length:number}) => {
    const input = useRef<HTMLInputElement>(null)
    const textarea = useRef<HTMLTextAreaElement>(null)
    const dispatch = useDispatch()

    const onClickAddBtn = () => {
        if (input.current?.value || textarea.current?.value) {
            const newTodo: TodoItem = {
                id: length + 1,
                state: TodoItemStatus.CREATED,
                title: input.current?.value || '',
                content: textarea.current?.value || ''
            }

            dispatch(addTodo(newTodo))

            if (input.current) {
                input.current.value = ''
            }

            if (textarea.current) {
                textarea.current.value = ''
            }
        }
    }

    return (
        <TodoInputSection>
            <input ref={input} type="text" placeholder="제목을 입력하세요." maxLength={10}  />
            <textarea ref={textarea} name="" id="" cols={30} rows={10} placeholder="내용을 입력하세요."/>
            <button onClick={onClickAddBtn}>생성</button>
        </TodoInputSection>
    )
}

export default TodoInput;