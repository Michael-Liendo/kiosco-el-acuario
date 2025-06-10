export const ButtonPrimary = ({ children }: { children: React.ReactNode }) => {
	return (
		<button
			className="bg-[#FFD54F] hover:bg-[#4FC3F7] text-white font-bold py-2 px-4 rounded"
			type="button"
		>
			{children}
		</button>
	);
};

export const ButtonSecondary = ({
	children,
}: { children: React.ReactNode }) => {
	return (
		<button
			className="bg-[#F06292] hover:bg-[#4FC3F7] text-white font-bold py-2 px-4 rounded"
			type="button"
		>
			{children}
		</button>
	);
};
