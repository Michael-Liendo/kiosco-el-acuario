import Header from "./components/header";
import Footer from "./components/footer";
import "./index.css";

function App() {
	return (
		<>
			<div className="min-h-screen flex flex-col bg-gray-50">
				<Header />

				<main className="flex-grow container mx-auto px-4 py-8">
					{/* <FeaturedSection items={featuredItems} /> */}
					{/* <CategoryMenu categories={categories} items={menuItems} /> */}
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
