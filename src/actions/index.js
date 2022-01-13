import { ADD_TASK, DELETE_ALL, REMOVE_TASK, TOGGLE_TASK } from "../types";

export const addTask = (newTask) => {
	return {
		type: ADD_TASK,
		payload: {
			id: Math.random(),
			task: newTask,
			complete: false,
		},
	};
};
