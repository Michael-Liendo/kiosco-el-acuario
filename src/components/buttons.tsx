export const ButtonPrimary = ({ children }: { children: React.ReactNode }) => {
	return (
		<button
			className="bg-[#FFD54F] transition-all hover:scale-105 hover:opacity-80 text-black font-bold py-2 px-4 rounded"
			type="button"
		>
			{children}
		</button>
	);
};
