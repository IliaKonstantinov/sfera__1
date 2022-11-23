import { combineReducers, createStore } from "redux";
import mainReducer from "./main-reducer";

let reducers = combineReducers({
  mainPage: mainReducer,
});

let store = createStore(reducers);

console.log(store.getState());

export default store;
