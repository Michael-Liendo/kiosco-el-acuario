export interface MenuItem {
	title: string;
	description: string;
	price: string | number | null;
	image: string;
}

export const menu: MenuItem[] = [
	{
		title: "CAMARONES AJILLO",
		description:
			"Tostón, Ensalada, Queso, Salsa, Aguacate, Arepita, Papa fritas",
		price: 23,
		image: "camarones-ajillo.jpg",
	},
	{
		title: "Empanadas",
		description:
			"altin, cazón, Camaron Mechada, Pollo, Molida, salchichas, Queso",
		price: 2.5,
		image: "empanadas.jpg",
	},
	{
		title: "Combo de Cervezas",
		description:
			"Cz, CERVEZA, ZULIA, LAURIGINAL, CULEA, CERVE, ZULIA, Cabitas. 10x 10$, Cabitas 12 x 12$, Cabitas 15 x 15$, hielo y destapador",
		price: null,
		image: "cervezas.jpg",
	},
	{
		title: "Bebidas",
		description:
			"PEPSI, maltin, maltin, nevada, nevad, Refresco 1.5L, Agua. 1.5L, Malta",
		price: "$3.5 $3.5 $1.55",
		image: "bebidas.jpg",
	},
	{
		title: "Tostón Familiar",
		description: "15 pieza de toston, Ensalada, Salsa, Queso, Aguacate",
		price: 13,
		image: "toston-familiar.jpg",
	},
	{
		title: "Combo de Roncador",
		description:
			"Toston, Ensalada, Queso, Salsa, Aguacate, Arepita, Papa frita",
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
		title: "fosforera",
		description:
			"Camarones, Calamar, pepitona, Pulpo, Mejillón, Jaiba, Almeja, Vaquita, Arepitas",
		price: 15,
		image: "fosforera.jpg",
	},
	{
		title: "Camarones Reborado",
		description:
			"Toston, Ensalada, Queso, Aguacate, Arepita, Papa frita, Salsa tártara",
		price: 20,
		image: "camarones-rebosado.jpg",
	},
	{
		title: "Deditos de pescado",
		description:
			"Toston, Ensalada, Queso, Aguacate, Arepita, Papa frita, Salsa tártara",
		price: 18,
		image: "deditos-pescado.jpg",
	},
	{
		title: "MEDREGAL",
		description:
			"Tostón, Ensalada, Queso, Salsa, Aguacate, Arepita, Papa frita",
		price: 16,
		image: "medregal.jpg",
	},
	{
		title: "CAMARONES AJILLO",
		description:
			"Tostón, Ensalada, Queso, Salsa, Aguacate, Arepita, Papa fritas",
		price: 23,
		image: "camarones-ajillo.jpg",
	},
	{
		title: "Mixto de camarón",
		description:
			"Tostón, Ensalada, Queso, Salsa, Aguacate, Arepita, Papa frita, salsa tártara, y calamar",
		price: 23,
		image: "mixto.jpg",
	},
];
