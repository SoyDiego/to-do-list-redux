function App() {
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

			<div className="tw-w-full tw-flex tw-py-10 tw-px-20">
				<div className="tw-w-4/12 tw-flex tw-flex-wrap md:tw-mr-20">
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
							className="tw-my-2 tw-rounded-full tw-p-3 tw-bg-green-600 hover:tw-bg-green-500 tw-text-white">
							Add new task
						</button>
					</form>
				</div>
				<div className="tw-w-8/12 tw-flex tw-flex-wrap">
					<div className="tw-w-full tw-p-2 tw-rounded  tw-bg-green-500 tw-text-black tw-mb-4 tw-flex tw-justify-between">
						Task 1
						<div className="tw-flex">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="tw-h-5 tw-w-5 tw-mr-3"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
								<path
									fillRule="evenodd"
									d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
									clipRule="evenodd"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="tw-h-5 tw-w-5"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fillRule="evenodd"
									d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
					</div>
					<div className="tw-w-full tw-p-2 tw-rounded tw-bg-green-500 tw-text-black tw-mb-4 tw-flex tw-justify-between">
						Task 2
						<div className="tw-flex">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="tw-h-5 tw-w-5 tw-mr-3"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
								<path
									fillRule="evenodd"
									d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
									clipRule="evenodd"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="tw-h-5 tw-w-5"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fillRule="evenodd"
									d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
					</div>
					<div className="tw-w-full tw-p-2 tw-rounded  tw-bg-green-500 tw-text-black tw-mb-4 tw-flex tw-justify-between">
						Task 3
						<div className="tw-flex">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="tw-h-5 tw-w-5 tw-mr-3"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
								<path
									fillRule="evenodd"
									d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
									clipRule="evenodd"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="tw-h-5 tw-w-5"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fillRule="evenodd"
									d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
