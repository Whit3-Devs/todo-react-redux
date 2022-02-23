import { createStore } from "redux";
import { rootReducer } from "../reducers/reducerTodo";

const store = createStore(
    rootReducer
)

export default store;