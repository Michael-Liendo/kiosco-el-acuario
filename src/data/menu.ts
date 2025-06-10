type Product = {
	id: number;
	title: string;
	desc: string;
	img: string | null;
	price: number;
	tags: string[];
};

const products: Product[] = [
	{
		id: 1,
		title: "Cervezas",
		desc: "Bebidas de alta calidad",
		img: "assets/beach-with-optimice/cervezas.jpg",
		price: 10.5,
		tags: ["Bebidas", "Cervezas"],
	},
];
