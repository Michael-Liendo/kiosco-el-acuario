import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./index.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex justify-center items-center gap-4">
				<a href="https://vite.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1 className="text-amber-300">Vite + React</h1>
			<div className="card">
				<button
					type="button"
					className="bg-amber-200 w-full rounded-md px-2 hover:bg-amber-300"
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
				<p>
					Edit{" "}
					<code className="bg-zinc-900 text-white px-2 rounded-sm">
						src/App.tsx
					</code>{" "}
					and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
