import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";

const reducer = combineReducers({
	tasks: tasksReducer,
});

export default reducer;
