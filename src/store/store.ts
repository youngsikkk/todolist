import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice"
export const store = configureStore({
    reducer: {
      todos: todoReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// configureStore: 여러 개의 인자 대신에 이름이 지정된 하나의 object를 받는다.
// slice를 만들어서 action, reducer을 동시에 써준다
// 정의한 state를 반환해서 사용할 수 있다.