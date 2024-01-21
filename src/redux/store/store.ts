import {applyMiddleware, combineReducers, createStore} from "redux";
import {charactersReducer} from "../reducers/characters-reducer/characters-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunk from "redux-thunk"
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({characters: charactersReducer})
export const store = configureStore({reducer:rootReducer})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector