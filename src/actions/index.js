import { ADD_TASK, DELETE_ALL, REMOVE_TASK, TOGGLE_TASK } from "../types";

export const addTask = (newTask) => {
	return {
		type: ADD_TASK,
		payload: {
			id: Math.random(),
			taskName: newTask,
			complete: false,
		},
	};
};

export const deleteAll = () => {
	return {
		type: DELETE_ALL,
	};
};

export const removeTask = (id) => {
	return {
		type: REMOVE_TASK,
		payload: id,
	};
};

export const toggleTask = (id) => {
	return {
		type: TOGGLE_TASK,
		payload: id,
	};
};
