import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import home from "./Houses/houseReducer";

const reducers = combineReducers(
    { home: home }
)

const store = createStore(reducers, applyMiddleware(thunk))

export default store;

