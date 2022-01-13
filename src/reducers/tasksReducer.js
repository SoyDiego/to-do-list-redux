import { ADD_TASK, DELETE_ALL, REMOVE_TASK, TOGGLE_TASK } from "../types";

const initialState = [
	{
		id: Math.random(),
		taskName: "Add more tasks to test! :)",
		complete: false,
	},
];

const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			return [...state, action.payload];
		case DELETE_ALL:
            console.log("DELETE_ALL");
			return [];
		case REMOVE_TASK:
			return state.filter((task) => task.id !== action.payload);
		case TOGGLE_TASK:
			return state.map((task) =>
				task.id === action.payload
					? { ...task, complete: !task.complete }
					: task
			);
		default:
			return state;
	}
};

export default tasksReducer;
