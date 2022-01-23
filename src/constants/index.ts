import {TodoItemStatus} from "../types";

const CONSTANT = Object.freeze({
    TODO_STATUS: {
        [TodoItemStatus.CREATED]: '생성됨',
        [TodoItemStatus.PROGRESSING]: '진행중',
        [TodoItemStatus.DONE]: '완료'
    }
})

export default CONSTANT;