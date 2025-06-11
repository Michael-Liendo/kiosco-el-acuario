export interface MenuItem {
	title: string;
	description: string;
	price: string | number | null;
	image: string;
}
export const menu: MenuItem[] = [
	{
		title: "Empanadas",
		description: "Cazón, Camarón, Mechada, Pollo, Molida, Salchichas, Queso",
		price: 2.5,
		image: "empanadas.jpg",
	},
	{
		title: "Bebidas",
		description: "PEPSI, nevada, Refresco 1.5L, Agua. 1.5L, Malta",
		price: "$3.5 $3.5 $1.55",
		image: "bebidas.jpg",
	},
	{
		title: "Combo de cervezas",
		description:
			"Cz, CERVEZA, ZULIA, ZULIA. 10x 10$, Cabitas 12 x 12$, Cabitas 15 x 15$, hielo y destapador",
		price: null,
		image: "cervezas.jpg",
	},
	{
		title: "Camarones ajillo",
		description:
			"Tostón, Ensalada, Queso, Salsa, Aguacate, Arepita, Papa fritas",
		price: 23,
		image: "camarones-ajillo.jpg",
	},

	{
		title: "Tostón familiar",
		description: "15 pieza de tostón, Ensalada, Salsa, Queso, Aguacate",
		price: 13,
		image: "toston-familiar.jpg",
	},
	{
		title: "Combo de roncador",
		description:
			"Tostón, Ensalada, Queso, Salsa, Aguacate, Arepita, Papa frita",
		price: 17,
		image: "combo-roncador.jpg",
	},
	{
		title: "Pargo frito",
		description:
			"Tostón, Ensalada, Queso, Salsa, Aguacate, Arepita, Papa frita",
		price: 18,
		image: "pargo-frito.jpg",
	},
	{
		title: "Fosforera",
		description:
			"Camarones, Calamar, pepitona, Pulpo, Mejillón, Jaiba, Almeja, Vaquita, Arepitas",
		price: 15,
		image: "fosforera.jpg",
	},
	{
		title: "Camarones rebosado",
		description:
			"Tostón, Ensalada, Queso, Aguacate, Arepita, Papa frita, Salsa tártara",
		price: 20,
		image: "camarones-rebosado.jpg",
	},
	{
		title: "Deditos de pescado",
		description:
			"Tostón, Ensalada, Queso, Aguacate, Arepita, Papa frita, Salsa tártara",
		price: 18,
		image: "deditos-pescado.jpg",
	},
	{
		title: "Medregal",
		description:
			"Tostón, Ensalada, Queso, Salsa, Aguacate, Arepita, Papa frita",
		price: 16,
		image: "medregal.jpg",
	},

	{
		title: "Mixto de camarón",
		description:
			"Tostón, Ensalada, Queso, Salsa, Aguacate, Arepita, Papa frita, salsa tártara, y calamar",
		price: 23,
		image: "mixto.jpg",
	},
	{
		title: "Rueda Carite",
		description:
			"Ajillo, Tostón, Ensalada, Queso, Salsa, Aguacate, Arepita, Papa frita",
		image: "rueda-carite.jpg",
		price: 16,
	},
];
