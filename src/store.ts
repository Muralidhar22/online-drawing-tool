import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./slice/menu";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { toolboxReducer } from "./slice/toolbox";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    toolbox: toolboxReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
