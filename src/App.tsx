import FadeInSection from "./components/FadeInSection";
import InternshipBox from "./components/InternshipBox";
import NavBar from "./components/NavBar";
import ProjectBox from "./components/ProjectBox";
import SectionHeader from "./components/SectionHeader";
import SkillBox from "./components/SkillBox";

function App() {
	const handleClickEmail = () => {
		window.location.href = "mailto:punpunpunnawat@outlook.com";
	};

	const handleClickPhone = () => {
		if (window.confirm("Do you want to call 0923539229?")) {
			window.location.href = "tel:0923539229";
		}
	};

	const handleClickLinkedIn = () => {
		window.open(
			"https://th.linkedin.com/in/punnawat-jaroonkeeratiroje-32b5382ab",
			"_blank"
		);
	};

	const handleClickGithub = () => {
		window.open("https://github.com/punpunpunnawat", "_blank");
	};

	return (
		<>
			<NavBar />

			<div className="flex flex-col min-h-screen bg-primary text-white-100 pt-32">
				<FadeInSection>
					<section
						id="about"
						className="flex flex-col py-8 bg-primary-linear-30 h-[calc(100vh-192px)]"
					>
						<SectionHeader title="ABOUT" />
						<div className="flex flex-row gap-16 px-32">
							<div className="flex flex-1 flex-col py-16 gap-16">
								<h1 className="font-family-audrey text-5xl text-center">
									PUNNAWAT JAROONKIRATIROJE
								</h1>
								<div className="flex flex-row gap-8 items-center">
									<span>PASSION</span>
									<span className="detail">
										“ Lorem ipsum dolor sit amet,
										consectetur adipiscing elit, sed do
										eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim
										veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea
										commodo consequat. “
									</span>
								</div>
								<div className="flex flex-row gap-8 items-center">
									<span>EDUCATION</span>
									<span className="detail">
										“ Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. “
									</span>
								</div>
							</div>
							<img src="" className="w-80 h-100" />
						</div>
					</section>
				</FadeInSection>

				<section className="flex flex-col px-48 py-16 gap-16">
					<FadeInSection>
						<section
							id="skill"
							className="flex flex-col pt-8 pb-16 bg-primary-linear-20 gap-16 border-gradient-white"
						>
							<SectionHeader title="SKILL"></SectionHeader>
							<div className="flex flex-row justify-evenly">
								<div className="flex flex-col gap-4 items-center">
									<h4>FRONT-END</h4>
									<SkillBox
										iconClass="devicon-react-original colored"
										title="React"
									/>
									<SkillBox
										iconClass="devicon-html5-plain colored"
										title="HTML"
									/>
									<SkillBox
										iconClass="devicon-javascript-plain colored"
										title="JS"
									/>
									<SkillBox
										iconClass="devicon-typescript-plain colored"
										title="TS"
									/>
									<SkillBox
										iconClass="devicon-css3-plain colored"
										title="CSS"
									/>
									<SkillBox
										iconClass="devicon-tailwindcss-original colored"
										title="Tailwind"
									/>
									<SkillBox
										iconClass="devicon-figma-plain"
										title="UX/UI"
									/>
								</div>

								<div className="flex flex-col gap-8 justify-between items-center">
									<div className="flex flex-col gap-4 items-center">
										<h4>BACK-END</h4>
										<SkillBox
											iconClass="devicon-go-original-wordmark colored"
											title="Golang"
										/>
										<SkillBox
											iconClass="devicon-mysql-original colored"
											title="MySQL"
										/>
									</div>

									<div className="flex flex-col gap-4 items-center">
										<h4>LANGUAGE</h4>
										<SkillBox
											iconClass="devicon-java-plain colored"
											title="Java"
										/>
										<SkillBox
											iconClass="devicon-go-original-wordmark colored"
											title="Golang"
										/>
										<SkillBox
											iconClass="devicon-csharp-plain colored"
											title="C#"
										/>
										<SkillBox
											iconClass="devicon-python-plain colored"
											title="Python"
										/>
									</div>
								</div>

								<div className="flex flex-col gap-4 items-center">
									<h4>TOOL</h4>
									<SkillBox
										iconClass="devicon-vscode-plain colored"
										title="VS Code"
									/>
									<SkillBox
										iconClass="devicon-git-plain colored"
										title="Git"
									/>
									<SkillBox
										iconClass="devicon-github-original colored"
										title="GitHub"
									/>
									<SkillBox
										iconClass="devicon-docker-plain colored"
										title="Docker"
									/>
									<SkillBox
										iconClass="devicon-figma-plain"
										title="Figma"
									/>
								</div>
							</div>
						</section>
					</FadeInSection>

					<FadeInSection>
						<section
							id="project"
							className="flex flex-col pt-8 pb-16 bg-primary-linear-20 gap-16 border-gradient-white"
						>
							<SectionHeader title="DEVELOPMENT PROJECT" />
							<ProjectBox
								title="CLASH AND CARD"
								detail="A classic Rock-Paper-Scissors reimagined into a turn-based card game. Players choose a class, upgrade their abilities, build custom decks, and battle through a Campaign mode or face off in real-time PvP with others."
								pictures={["/pictures/ClashAndCard.png"]}
								keywords={[
									"React",
									"Golang",
									"MySQL",
									"Redux",
									"WebSocket",
									"REST API",
									"JWT",
								]}
								features={[
									"Authentication system (JWT)",
									"Campaign mode vs AI",
									"Real-time PvP matchmaking",
									"Class-based system with skill sets",
									"Level & stat progression",
									"In-game economy with gold and card shop",
								]}
							/>
							<ProjectBox
								title="TODO"
								detail="A smart and fully responsive task manager designed to boost your productivity. Easily track, organize, and recover tasks across all stages — current, completed, or deleted. Stay on top of your priorities with intuitive controls and seamless user experience. Start managing your day smarter, not harder."
								pictures={[
									"/pictures/TODO.png",
									"/pictures/TODO.png",
									"/pictures/TODO.png",
								]}
								keywords={[
									"React",
									"Golang",
									"MySQL",
									"Context",
									"REST API",
								]}
								features={[
									"Authentication system",
									"Add tasks with details (priority, date, time, and task name)",
									"Manage and track current, completed, and deleted tasks",
									"Mark tasks as done and undo",
									"Delete and recover tasks",
								]}
							/>
							<ProjectBox
								title="TTB My Home Feature"
								detail="A smart and fully responsive task manager designed to boost your productivity. Easily track, organize, and recover tasks across all stages — current, completed, or deleted. Stay on top of your priorities with intuitive controls and seamless user experience. Start managing your day smarter, not harder."
								pictures={[
									"/pictures/TODO.png",
									"/pictures/TODO.png",
									"/pictures/TODO.png",
								]}
								keywords={[
									"React",
									"Golang",
									"MySQL",
									"Context",
									"REST API",
								]}
								features={[
									"Authentication system",
									"Add tasks with details (priority, date, time, and task name)",
									"Manage and track current, completed, and deleted tasks",
									"Mark tasks as done and undo",
									"Delete and recover tasks",
								]}
							/>
						</section>
					</FadeInSection>

					<FadeInSection>
						<section className="flex flex-col pt-8 pb-16 bg-primary-linear-20 gap-16 border-gradient-white">
							<SectionHeader title="DESIGN PROJECT" />
							<ProjectBox
								title="TTB My Home Feature"
								detail="Applied the design thinking process along with full UX/UI skills to ideate, design, and propose a new feature for the 'My Home' widget in the TTB Touch app."
								keywords={[
									"UX",
									"UI",
									"Design Thinking",
									"User Testing",
									"Front-end",
								]}
								isSecret
							/>

							<ProjectBox
								title="CLASH AND CARD"
								detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
								pictures={[""]}
								keywords={["KEY1", "KEY2", "KEY3"]}
								features={["FEATURE1", "FEATURE2", "FEATURE3"]}
							/>
						</section>
					</FadeInSection>

					<FadeInSection>
						<section
							id="internship"
							className="flex flex-col pt-8 pb-16 bg-primary-linear-20 gap-16 border-gradient-white"
						>
							<SectionHeader title="INTERNSHIP" />
							<InternshipBox
								title="UX/UI Designer"
								subTitle="TTB Spark"
								detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
								picture=""
								keywords={[
									"React",
									"Golang",
									"MySQL",
									"WebSocket",
									"REST API",
									"JWT",
								]}
								features={["FEATURE1", "FEATURE2", "FEATURE3"]}
							/>
						</section>
					</FadeInSection>
				</section>

				<section
					id="contact"
					className="flex flex-col p-8 gap-8 items-center bg-primary-linear-30"
				>
					<SectionHeader title="CONTACT" />
					<div className="flex flex-col p-8 gap-2">
						<div className="flex flex-row gap-4 items-center">
							<div className="flex flex-row gap-2">
								<img src="/icons/email.svg" />
								<label className="w-24">EMAIL</label>
							</div>
							<button
								onClick={handleClickEmail}
								className="flex flex-row w-80"
							>
								<span className="detail flex-1">
									punpunpunnawat@outlook.com
								</span>
								<img src="/icons/link.svg" />
							</button>
						</div>
						<div className="flex flex-row gap-4 items-center">
							<div className="flex flex-row gap-2">
								<img src="/icons/phone.svg" />
								<label className="w-24">PHONE</label>
							</div>
							<button
								onClick={handleClickPhone}
								className="flex flex-row w-80"
							>
								<span className="detail flex-1">
									0923539229
								</span>
								<img src="/icons/link.svg" />
							</button>
						</div>
						<div className="flex flex-row gap-4 items-center">
							<div className="flex flex-row gap-2">
								<img src="/icons/linkedin.svg" />
								<label className="w-24">LINKEDIN</label>
							</div>
							<button
								onClick={handleClickLinkedIn}
								className="flex flex-row w-80"
							>
								<span className="detail flex-1">
									Punnawat Jaroonkiratiroje
								</span>
								<img src="/icons/link.svg" />
							</button>
						</div>
						<div className="flex flex-row gap-4 items-center">
							<div className="flex flex-row gap-2">
								<img src="/icons/github.svg" />
								<label className="w-24">GITHUB</label>
							</div>
							<button
								onClick={handleClickGithub}
								className="flex flex-row w-80"
							>
								<span className="detail flex-1">
									punpunpunnawat
								</span>
								<img src="/icons/link.svg" />
							</button>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default App;
