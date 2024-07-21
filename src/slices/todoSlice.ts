import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
    id: number,
    title:string,
    contents:string,
    completed:boolean,
    bookmark: boolean,
    start:string,
}

interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos:[]
}

interface AddTodoPayload {
    title: string;
    contents: string;
    bookmark:boolean;
    start:string;
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
        const newTodo = {
            id: Date.now(),
            title: action.payload.title,
            contents: action.payload.contents,
            completed: false,
            bookmark: false,
            start: action.payload.start
        };
        state.todos.push(newTodo);
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
        const todo = state.todos.find((todo) => todo.id === action.payload);
        if (todo) {
            todo.completed = !todo.completed;
        }
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        bookmarkTodo: (state, action: PayloadAction<number>) => {
            const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload)
            if(todoIndex !== -1) {
                const todo = state.todos[todoIndex];
                todo.bookmark = !todo.bookmark;
                state.todos.splice(todoIndex, 1);
                state.todos.unshift(todo);
            }
        }
    },
});

export const { addTodo, toggleTodo, deleteTodo, bookmarkTodo } = todoSlice.actions;
export default todoSlice.reducer;