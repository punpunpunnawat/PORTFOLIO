import { useState } from "react";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = (e: React.MouseEvent, id: string) => {
		setIsOpen(false);
		e.preventDefault();
		scrollToId(id);
	};

	const scrollToId = (id: string) => {
		const el = document.getElementById(id);
		if (!el) return;
		const yOffset = -128;
		const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
		window.scrollTo({ top: y, behavior: "smooth" });
	};

	return (
		<>
			<div
				className={`hidden sm:flex flex-row px-4 sm:px-8 md:px-16 lg:px-24 2lg:px-32 justify-between items-center h-16 w-full bg-black/20 fixed backdrop-blur-3xl text-white z-50 border-gradient-whitep-bottom`}
			>
				<h4 className="font-family-audrey font-normal text-2xl">
					PORTFOIO
				</h4>
				<div className="flex flex-row gap-0 md:gap-2 lg:gap-4">
					{["about", "skill", "project", "internship", "contact"].map(
						(id) => (
							<a
								key={id}
								onClick={(e) => handleClick(e, id)}
								className="rounded-md px-2 h-full"
							>
								{id.toUpperCase()}
							</a>
						)
					)}
				</div>
			</div>

			<div
				className={`flex flex-col sm:hidden w-full fixed backdrop-blur-3xl text-white z-50 border-gradient-whitep-bottom transition-all duration-500 ${
					isOpen ? "min-h-screen" : "h-fit"
				}`}
			>
				<div
					className={`flex h-16 w-full flex-row px-12 justify-between items-center bg-black/20  ${
						isOpen && "border-b border-white/10"
					}`}
				>
					<h4 className="font-family-audrey font-normal text-2xl">
						PORTFOIO
					</h4>
					<img
						src="/icons/menu-burger.svg"
						onClick={() => setIsOpen((prev) => !prev)}
						className="cursor-pointer"
					/>
				</div>

				<div
					className={`flex flex-1 flex-col items-center h-full bg-black/20 transition-opacity duration-1000 ease-in-out ${
						isOpen
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none h-0"
					}`}
				>
					{["about", "skill", "project", "internship", "contact"].map(
						(id) => (
							<a
								key={id}
								onClick={(e) => handleClick(e, id)}
								className={`flex items-center px-4 w-full justify-center border-white/5 
											overflow-hidden
											${isOpen ? "h-16 border-b" : "h-0 border-none"}`}
							>
								{id.toUpperCase()}
							</a>
						)
					)}
				</div>
			</div>
		</>
	);
};

export default NavBar;
