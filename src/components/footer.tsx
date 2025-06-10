import { Phone, Clock, Instagram } from "lucide-react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gradient-to-bl to-white from-sunset-blue shadow-lg text-dark-text py-6 px-6">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 className="text-lg font-bold mb-3">Contáctenos</h3>
					<div className="flex items-center mb-2">
						<Phone size={16} className="mr-2" />
						<a className=" underline text-coral-pink" href="tel:+584140320098">
							+58 414 032 0098
						</a>
					</div>
					<div className="flex items-center">
						<Instagram size={16} className="mr-2" />

						<a
							className="underline text-coral-pink"
							href="http://instagram.com/"
						>
							@larompe
						</a>
					</div>
				</div>

				<div>
					<h3 className="text-lg font-bold mb-3">Horario</h3>
					<div className="flex items-start mb-2">
						<Clock size={16} className="mr-2 mt-1" />
						<div>
							<p>Sábado-Domingo: 8am-6pm</p>
							<p>Feriados: 8am-6pm</p>
						</div>
					</div>
				</div>

				<div>
					<h3 className="text-lg font-bold mb-3">Ubicación</h3>
					<a
						className="underline text-coral-pink"
						href="https://maps.app.goo.gl/MM9rEoJ9fSaUWbMh7"
					>
						Naiguatá, La Guaira, Venezuela
					</a>
				</div>
			</div>

			<div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-blue-700 text-center text-sm">
				<p>© 2025 Playa La Rompe</p>
				<a href="http://michaelliendo.com" target="_blank" rel="noreferrer">
					Creado por{" "}
					<span className="text-coral-pink underline">michaelliendo.com</span>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
