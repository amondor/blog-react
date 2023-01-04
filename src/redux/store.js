import { configureStore, applyMiddleware, combineReducers, MiddlewareArray } from "@reduxjs/toolkit";
import articleReducer from "./articles/articleReducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    articleReducer
})

const store = configureStore({
    reducer: rootReducers,
    middleware: [thunk]
})

export default store;