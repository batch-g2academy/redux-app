import { combineReducers } from "redux";

import todoReducer from "./todoReducer";
import movieReducer from "./movieReducer";

const reducers = combineReducers({
    todo: todoReducer,
    movies: movieReducer
})

export default reducers;