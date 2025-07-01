const NavBar = () => {
	const handleClick = (e: React.MouseEvent, id: string) => {
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
		<div className="flex flex-row px-32 justify-between items-center h-16 w-full bg-black/20 fixed backdrop-blur-3xl text-white z-50 border-gradient-whitep-bottom">
			<h4 className="font-family-audrey font-normal text-2xl">
				PORTFOIO
			</h4>
			<div className="flex flex-row gap-8">
				<a href="#about" onClick={(e) => handleClick(e, "about")}>
					ABOUT
				</a>
                <a href="#skill" onClick={(e) => handleClick(e, "skill")}>
					SKILL
				</a>
				<a href="#project" onClick={(e) => handleClick(e, "project")}>
					PROJECT
				</a>
				<a
					href="#internship"
					onClick={(e) => handleClick(e, "internship")}
				>
					INTERNSHIP
				</a>
				<a href="#contact" onClick={(e) => handleClick(e, "contact")}>
					CONTACT
				</a>
			</div>
		</div>
	);
};

export default NavBar;
