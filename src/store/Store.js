import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/CounterSlice";
import postReducer from "../reducer/PostSlice";

const store = configureStore({
    reducer:{
        counter: counterReducer,
        posts: postReducer
    }
})

export default store;