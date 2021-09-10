import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice"

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        }),
})
