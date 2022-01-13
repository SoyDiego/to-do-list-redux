import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteAll } from "./actions";
import ToggleAndTrashIcons from "./components/ToggleAndTrashIcons";

function App() {
	const [newTask, setNewTask] = useState("");

	const { tasks } = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTask(newTask));
		e.target.reset();
	};

	return (
		<div className="tw-h-screen tw-grid tw-place-content-center tw-align-content-center tw-bg-green-900 tw-text-center">
			<h1 className="tw-text-white tw-font-extrabold tw-mx-4">
				To-Do list
			</h1>
			<h2 className="tw-text-green-600 tw-font-bold tw-mx-4">
				using ReactJS, Redux and TailwindCSS
			</h2>

			<div className="tw-w-screen tw-flex tw-flex-wrap md:tw-flex-nowrap tw-py-10 tw-px-5 md:tw-px-20">
				<div className="tw-w-full md:tw-w-6/12 tw-flex md:tw-justify-center tw-flex-wrap md:tw-mr-20">
					<form onSubmit={handleSubmit} className="tw-mx-auto">
						<div>
							<label
								className="tw-block tw-text-white tw-text-sm tw-font-bold tw-mb-2"
								htmlFor="task">
								Task name:
							</label>
							<input
								className="tw-shadow tw-appearance-none tw-border tw-rounded-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
								id="username"
								type="text"
								placeholder="Type your task..."
								onChange={(e) => setNewTask(e.target.value)}
							/>
						</div>
						<button
							type="submit"
							className="tw-mt-4 tw-mb-8 tw-rounded-full tw-p-3 tw-bg-green-600 hover:tw-bg-green-500 tw-text-white tw-text-sm sm:md:tw-text-base md:tw-my-4">
							Add new task
						</button>
					</form>
				</div>
				<div className="tw-w-full md:tw-w-8/12 tw-flex tw-flex-col tw-items-center tw-flex-wrap tw-pb-3">
					{tasks.map((task) => (
						<div
							key={task.id}
							className={`tw-w-full tw-h-12 md:tw-w-3/5 tw-p-2 tw-rounded tw-bg-green-500 tw-text-black tw-mb-4 tw-flex tw-justify-between tw-items-center tw-text-sm md:tw-text-base ${
								task.complete && "tw-line-through"
							}`}>
							{task.taskName}
							<ToggleAndTrashIcons
								dispatch={dispatch}
								task={task}
							/>
						</div>
					))}
					{tasks.length !== 0 && (
						<button
							onClick={() => dispatch(deleteAll())}
							type="button"
							className="tw-w-32 tw-mb-4 tw-rounded-full tw-p-1 tw-bg-red-600 hover:tw-bg-red-500 tw-text-white tw-text-xs">
							Delete all tasks
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
