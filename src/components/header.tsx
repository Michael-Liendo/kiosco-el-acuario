import Logo from "../assets/logo.png";

const Header: React.FC = () => {
	return (
		<header className="bg-gradient-to-tl to-0%-white from-sunset-blue text-white shadow-lg">
			<div className="flex flex-col items-center  gap-4 my-3">
				<div>
					<img src={Logo} alt="Logo" className="h-36 rounded-full" />
				</div>
				<div>
					<h1 className="text-2xl font-extrabold text-black">
						Sabores frescos junto al mar
					</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;
