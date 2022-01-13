import { useDispatch, useSelector } from "react-redux";
import ToggleAndTrashIcons from "./components/ToggleAndTrashIcons";

function App() {
	const {tasks} = useSelector((state) => state);


	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("asdfg");
	};

	return (
			<div className="tw-h-screen tw-grid tw-place-content-center tw-align-content-center tw-bg-green-900 tw-text-center">
				<h1 className="tw-text-white tw-font-extrabold">To-Do list</h1>
				<h2 className="tw-text-green-600 tw-font-bold">
					using ReactJS, Redux and TailwindCSS
				</h2>

				<div className="tw-w-screen tw-flex tw-flex-wrap md:tw-flex-nowrap tw-py-10 tw-px-20">
					<div className="tw-w-full md:tw-w-6/12 tw-flex md:tw-justify-center tw-flex-wrap md:tw-mr-20">
						<form onSubmit={handleSubmit} className="tw-mx-auto">
							<div>
								<label
									class="tw-block tw-text-white tw-text-sm tw-font-bold tw-mb-2"
									htmlFor="task">
									Task name:
								</label>
								<input
									className="tw-shadow tw-appearance-none tw-border tw-rounded-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
									id="username"
									type="text"
									placeholder="Type your task..."
								/>
							</div>
							<button
								type="submit"
								className="tw-my-4 tw-rounded-full tw-p-3 tw-bg-green-600 hover:tw-bg-green-500 tw-text-white">
								Add new task
							</button>
						</form>
					</div>
					<div className="tw-w-full md:tw-w-8/12 tw-flex md:tw-justify-center tw-flex-wrap  tw-py-3">
						{tasks.map((e) => (
							<div
								key={e.id}
								className={`tw-w-full tw-h-12 md:tw-w-3/5 tw-p-2 tw-rounded tw-bg-green-500 tw-text-black tw-mb-4 tw-flex tw-justify-between tw-items-center ${
									e.complete && "tw-line-through"
								}`}>
								{e.task}
								<ToggleAndTrashIcons />
							</div>
						))}
					</div>
				</div>
			</div>
	);
}

export default App;
