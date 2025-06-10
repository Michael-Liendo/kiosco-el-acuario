export default function Button({ children }: { children: React.ReactNode }) {
	return (
		<button
			className="bg-sand-yellow transition-all hover:scale-105 hover:opacity-80 text-dark-text font-bold py-2 px-4 rounded"
			type="button"
		>
			{children}
		</button>
	);
}
