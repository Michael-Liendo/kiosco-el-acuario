import Footer from "./components/footer";
import Header from "./components/header";
import "./index.css";

function App() {
	return (
		<>
			<div className="min-h-screen flex flex-col bg-gray-50">
				<Header />

				<main className="flex-grow container mx-auto px-4 py-8">
					{/* here the menu card */}
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
