export enum TodoItemStatus {
    CREATED,
    PROGRESSING,
    DONE
}

export interface TodoItem {
    id: number,
    state: TodoItemStatus,
    title: string,
    content: string,
}

