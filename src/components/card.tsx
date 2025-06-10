import type { MenuItem } from "../data/menu";

export const Card = ({ title, description, image, price }: MenuItem) => {
	return (
		<div className="bg-white shadow-md rounded-lg max-w-sm mx-auto">
			<img
				src={`/menu/${image}`}
				alt={title}
				className="w-full object-[50%_70%] object-cover rounded-t-lg h-80"
			/>

			<div className="p-6">
				<h1 className="text-2xl font-bold mb-1">{title}</h1>
				<p>{description}</p>

				<div className="flex gap-2 justify-end">
					<p className="text-xl text-dark-text font-bold">
						{typeof price === "number" ? `$${price.toFixed(2)}` : price}
					</p>
				</div>
			</div>
		</div>
	);
};
