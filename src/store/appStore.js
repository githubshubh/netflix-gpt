import { configureStore } from "@reduxjs/toolkit";
import gptSlice from "./gptSlice";
import languageSlice from "./languageSlice";
import moviesReduceer from "./moviesSlice";
import userReducer from './userSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReduceer,
        gpt: gptSlice,
        language: languageSlice,
    }
});

export default appStore;
