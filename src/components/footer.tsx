import { Clock, Instagram, Phone } from "lucide-react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-blue-800 text-white py-6 px-6">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 className="text-lg font-bold mb-3">Contáctenos</h3>
					<div className="flex items-center mb-2">
						<Phone size={16} className="mr-2" />
						<span>+58 424 123 4567</span>
					</div>
					<div className="flex items-center">
						<Instagram size={16} className="mr-2" />
						<span>@larompe</span>
					</div>
				</div>

				<div>
					<h3 className="text-lg font-bold mb-3">Horario</h3>
					<div className="flex items-start mb-2">
						<Clock size={16} className="mr-2 mt-1" />
						<div>
							<p>Saturday-Sunday: 9am-9pm", "Sábado-Domingo: 9am-9pm</p>
						</div>
					</div>
				</div>

				<div>
					<h3 className="text-lg font-bold mb-3">Ubicación</h3>
					<p>Vargas, Venezuela</p>
				</div>
			</div>

			<div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-blue-700 text-center text-blue-200 text-sm">
				<p>© 2025 Playa La Rompe</p>
			</div>
		</footer>
	);
};

export default Footer;
