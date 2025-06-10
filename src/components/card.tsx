import { ButtonPrimary } from "./buttons";

export const Card = ({
	title,
	desc,
	img,
	price,
	tags,
}: {
	title: string;
	desc: string;
	img: string;
	price: number;
	tags: string[];
}) => {
	return (
		<div className="bg-white shadow-md rounded-lg max-w-sm mx-auto">
			<img
				src={img}
				alt={title}
				className="w-full object-cover rounded-t-lg h-48"
			/>

			<div className="p-6">
				<h1 className="text-xl font-bold mb-1">{title}</h1>
				<p>{desc}</p>
				<p className="text-md text-[#BA68C8] font-bold">${price}</p>
				<div className="flex gap-2 mt-4">
					<div className="flex gap-2">
						{tags.map((tag, index) => (
							<p
								key={index}
								className="text-sm bg-[#BA68C8] text-white px-2 py-1 rounded-full"
							>
								{tag}
							</p>
						))}
					</div>
				</div>
				<div className="mt-8 flex gap-2 justify-end">
					<ButtonPrimary>Primario</ButtonPrimary>
				</div>
			</div>
		</div>
	);
};
