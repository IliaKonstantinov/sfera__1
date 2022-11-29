import { combineReducers, createStore } from "redux";
import mainReducer from "./main-reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    mainPage: mainReducer,
  },
});

export default store;
