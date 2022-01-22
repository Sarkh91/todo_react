export enum TodoItemStatus {
    CREATED,
    PROGRESSING,
    DONE
}

export interface TodoItem {
    state: TodoItemStatus,
    title: string,
    content: string,
}

