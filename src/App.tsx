import Footer from "./components/footer";
import Header from "./components/header";
import "./index.css";
import { Card } from "./components/card";

function App() {
	return (
		<>
			<div className="min-h-screen flex flex-col bg-gray-50">
				<Header />

				<main className="flex-grow container mx-auto px-4 py-8">
					{/* <FeaturedSection items={featuredItems} /> */}
					{/* <CategoryMenu categories={categories} items={menuItems} /> */}

					<Card
						title="Lorem ipsum dolor sit amet"
						desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
						price={10.99}
						img="https://i.pinimg.com/736x/1c/39/01/1c39013280b0864ee8dd95eb46c044e8.jpg" // I had problem writing the url to real image.
						tags={["Bebidas", "Comidas"]} // Change as appropriate.
					/>
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
