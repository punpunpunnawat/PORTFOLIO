import FadeInSection from "./components/FadeInSection";
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

			<div className="flex flex-col min-h-screen pt-32 bg-primary text-white-100">
				<FadeInSection>
					<section
						id="about"
						className="flex flex-col h-[calc(100vh-192px)] py-8 bg-primary-linear-30"
					>
						<SectionHeader title="ABOUT" />
						<div className="flex flex-col h-full px-8 py-4 gap-4 items-center sm:px-16 md:px-24 xl:px-32">
							<div className="flex flex-row flex-3/5 gap-8 sm:gap-16 lg:flex-2/3">
								<div className="flex flex-col justify-evenly items-center">
									<h1 className="text-2xl font-family-audrey text-center sm:text-5xl">
										PUNNAWAT JAROONKIRATIROJE
									</h1>
									<div className="flex flex-col gap-2 items-center">
										<span>PASSION</span>
										<span className="detail text-xs sm:text-base">
											&nbsp;&nbsp;&nbsp;&nbsp;Hello you can call me "Pun" I am passionate about becoming a developer, so I enrolled in Computer Science at KMITL. Through my studies, personal projects and internship, I gained solid knowledge and understanding of front-end, and back-end development, UX/UI, aiming to be a full-stack developer.
										</span>
									</div>
								</div>
								<img
									src="/pictures/Pun.png"
									className="hidden lg:flex w-80 object-contain"
								/>
							</div>

							<div className="flex flex-col flex-2/5 justify-evenly lg:flex-1/3">
								<div className="flex flex-col gap-2 items-center justify-center sm:flex-row lg:gap-8">
									<h4 className="w-32">INTEREST ROLES</h4>
									<div className="flex flex-wrap gap-2 justify-center detail">
										<div className="px-4 text-xs ring ring-white/10 rounded-sm whitespace-nowrap sm:text-base">
											FullStack
										</div>
										<div className="px-4 text-xs ring ring-white/10 rounded-sm whitespace-nowrap sm:text-base">
											Front-end
										</div>
										<div className="px-4 text-xs opacity-50 ring ring-white/10 rounded-sm whitespace-nowrap sm:text-base">
											Back-end (Currently learning)
										</div>
									</div>
								</div>

								<div className="flex flex-row items-center gap-4 sm:gap-8">
									<span className="w-24 sm:w-32">EDUCATION</span>
									<span className="flex-1 text-xs text-center detail sm:text-base sm:text-start">
										KMITL Computer Science GPA 3.29 (2021-2024)
									</span>
								</div>
								<div className="flex flex-row items-center gap-4 sm:gap-8">
									<span className="w-24 sm:w-32">LOCATION</span>
									<span className="flex-1 text-xs text-center detail sm:text-base sm:text-start">
										Thailand, Bangkok
									</span>
								</div>
							</div>
						</div>
					</section>
				</FadeInSection>

				<section className="flex flex-col gap-16 px-4 py-16 sm:px-8 md:px-16 lg:px-32 xl:px-40 2xl:px-48">
					<FadeInSection>
						<section
							id="skill"
							className="flex flex-col pt-8 pb-16 gap-16 border-gradient-white bg-primary-linear-20"
						>
							<SectionHeader title="SKILL" />
							<div className="flex flex-col gap-8 md:flex-row md:gap-0 md:justify-evenly">
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

								<div className="flex flex-col gap-8 items-center justify-between">
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
							className="flex flex-col pt-8 pb-16 gap-8 border-gradient-white bg-primary-linear-20"
						>
							<SectionHeader title="DEVELOPMENT PROJECT" />
							<ProjectBox
								title="CLASH AND CARD"
								detail="&nbsp;&nbsp;&nbsp;&nbsp;A classic Rock-Paper-Scissors reimagined into a turn-based card game. Players choose a class, upgrade their abilities, build custom decks, and battle through a Campaign mode or face off in real-time PvP with others."
								pictures={[
									"/pictures/CNC1.png",
									"/pictures/CNC2.png",
									"/pictures/CNC3.png",
								]}
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
									"Real-time PvP",
									"Class-based system with skill sets",
									"Level & stat progression",
									"In-game economy with gold and card shop",
								]}
							/>
							<ProjectBox
								title="TODO"
								detail="&nbsp;&nbsp;&nbsp;&nbsp;A smart and fully responsive task manager designed to boost your productivity. Easily track, organize, and recover tasks across all stages — current, completed, or deleted. Stay on top of your priorities with intuitive controls and seamless user experience. Start managing your day smarter, not harder."
								pictures={[
									"/pictures/TODO1.png",
									"/pictures/TODO2.png",
									"/pictures/TODO3.png",
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
								title="TTB My Home Feature Mockup"
								detail="&nbsp;&nbsp;&nbsp;&nbsp;Developed a front-end prototype for a UX/UI project under the guidance of a senior software engineer."
								keywords={["React", "Context", "Communication"]}
								isSecret
							/>
						</section>
					</FadeInSection>

					<FadeInSection>
						<section className="flex flex-col pt-8 pb-16 gap-8 border-gradient-white bg-primary-linear-20">
							<SectionHeader title="DESIGN PROJECT" />
							<ProjectBox
								title="TTB My Home Feature"
								detail="&nbsp;&nbsp;&nbsp;&nbsp;Applied the design thinking process along with full UX/UI skills to ideate, design, and propose a new feature for the 'My Home' widget in the TTB Touch app."
								keywords={[
									"UX",
									"UI",
									"Design Thinking",
									"User Testing",
									"Front-end",
									"Communication",
								]}
								isSecret
							/>

							<ProjectBox
								title="What Thai Food"
								detail="&nbsp;&nbsp;&nbsp;&nbsp;project of ai subject at KMITL. want to know waht is this thai food? just give us the picture and do the rest!."
								pictures={["/pictures/WTF.png"]}
								keywords={["UX", "UI", "MOBILE"]}
								features={[
									"Upload or Take a photo to find thai food name by catagorie",
								]}
							/>

							<ProjectBox
								title="Pocket Book"
								detail="&nbsp;&nbsp;&nbsp;&nbsp;A project for the Software Design course at KMITL. Pocket Book is a mobile manga reader app that brings manga from around the world right to your pocket."
								pictures={["/pictures/PocketBook.png"]}
								keywords={["UX", "UI", "MOBILE"]}
								features={[
									"Authentication system",
									"System UI base on user type (Buyer, Seller)",

									"Authentication system",
									"Authentication system",
									"Authentication system",
								]}
							/>

							<ProjectBox
								title="Pubble"
								detail="&nbsp;&nbsp;&nbsp;&nbsp;A project for the Computer Game Programming course at KMITL. Pubble is a bubble shooter game with roguelike elements, featuring special bubbles and stat upgrades."
								pictures={[
									"/pictures/PubbleBattle.png",
									"/pictures/PubbleShop.png",
								]}
								keywords={["UX", "UI", "DESKTOP", "GAME"]}
								features={[
									"Bubble shooter game.",
									"Rouge-like mechanic.",
									"Upgrade stat. (from shop)",
									"Special bubble. (from shop)",
								]}
							/>

							<ProjectBox
								title="Graphic Design"
								detail="&nbsp;&nbsp;&nbsp;&nbsp;Graphic Design for KMITL Scienece website (https://www.science.kmitl.ac.th/new) and KMITL CS Bootcamp."
								pictures={[
									"/pictures/CSweb.png",
									"/pictures/CS1_1.png",
									"/pictures/CS1.png",
									"/pictures/CS2.png",
								]}
								keywords={["Graphic"]}
							/>
						</section>
					</FadeInSection>

					<FadeInSection>
						<section
							id="internship"
							className="flex flex-col pt-8 pb-16 gap-8 border-gradient-white bg-primary-linear-20"
						>
							<SectionHeader title="INTERNSHIP" />
							<ProjectBox
								title="UX/UI Designer"
								subTitle="TTB Spark"
								detail="&nbsp;&nbsp;&nbsp;&nbsp;This has been a great opportunity for me. I’ve learned a lot — from UX/UI design to frontend development — and how to work effectively in an agile team. I also improved soft skills like communication and presenting ideas. Thank you to TTB and all my mentors for the support and guidance. I’ll carry everything I’ve learned with me as I grow."
								pictures={[
									"/pictures/TTB1.png",
									"/pictures/TTB2.png",
									"/pictures/TTB3.png",
								]}
								keywords={[
									"UX",
									"UI",
									"Front-end",
									"React",
									"Agile",
									"Presentation",
									"Communication",
									"Mortgage",
								]}
								features={[
									"Created UX/UI design and updated progress regularly with UX/UI mentors",
									"Developed front-end (React) with support and guidance from senior devs",
									"Presented final outcome to interns and mentors",
									"Collaborated with cross-functional team throughout the process",
									"Learned from real-world organization and agile workflow",
								]}
							/>
						</section>
					</FadeInSection>
				</section>

				<section
					id="contact"
					className="flex flex-col items-center gap-8 p-8 bg-primary-linear-30"
				>
					<SectionHeader title="CONTACT" />
					<div className="flex flex-col gap-8 p-8 sm:gap-2">
						<div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
							<div className="flex flex-row gap-2">
								<img src="/icons/email.svg" />
								<label className="sm:w-24">EMAIL</label>
							</div>
							<button onClick={handleClickEmail} className="flex w-80 flex-row">
								<span className="detail flex-1">punpunpunnawat@outlook.com</span>
								<img src="/icons/link.svg" />
							</button>
						</div>
						<div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
							<div className="flex flex-row gap-2">
								<img src="/icons/phone.svg" />
								<label className="sm:w-24">PHONE</label>
							</div>
							<button onClick={handleClickPhone} className="flex w-80 flex-row">
								<span className="detail flex-1">0923539229</span>
								<img src="/icons/link.svg" />
							</button>
						</div>
						<div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
							<div className="flex flex-row gap-2">
								<img src="/icons/linkedin.svg" />
								<label className="sm:w-24">LINKEDIN</label>
							</div>
							<button onClick={handleClickLinkedIn} className="flex w-80 flex-row">
								<span className="detail flex-1">Punnawat Jaroonkiratiroje</span>
								<img src="/icons/link.svg" />
							</button>
						</div>
						<div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
							<div className="flex flex-row gap-2">
								<img src="/icons/github.svg" />
								<label className="sm:w-24">GITHUB</label>
							</div>
							<button onClick={handleClickGithub} className="flex w-80 flex-row">
								<span className="detail flex-1">punpunpunnawat</span>
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
