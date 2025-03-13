import { configureStore } from "@reduxjs/toolkit";
import moviesReduceer from "./moviesSlice";
import userReducer from './userSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReduceer,
    }
});

export default appStore;
