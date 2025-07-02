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
							<img
								src="/pictures/Pun.jpg"
								className="w-80 h-100 border-gradient-white"
							/>
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
								pictures={["/pictures/CNC1.png", "/pictures/CNC2.png", "/pictures/CNC3.png"]}
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
								detail="A smart and fully responsive task manager designed to boost your productivity. Easily track, organize, and recover tasks across all stages — current, completed, or deleted. Stay on top of your priorities with intuitive controls and seamless user experience. Start managing your day smarter, not harder."
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
								detail="Developed a front-end prototype for a UX/UI project under the guidance of a senior software engineer."
								keywords={["React", "Context", "Communication"]}
								isSecret
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
									"Communication",
								]}
								isSecret
							/>

							<ProjectBox
								title="What Thai Food"
								detail="project of ai subject at KMITL. want to know waht is this thai food? just give us the picture and do the rest!."
								pictures={["/pictures/WTF.png"]}
								keywords={["UX", "UI", "MOBILE"]}
								features={[
									"Upload or Take a photo to find thai food name by catagorie",
								]}
							/>

							<ProjectBox
								title="Pocket Book"
								detail="A project for the Software Design course at KMITL. Pocket Book is a mobile manga reader app that brings manga from around the world right to your pocket."
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
								detail="A project for the Computer Game Programming course at KMITL. Pubble is a bubble shooter game with roguelike elements, featuring special bubbles and stat upgrades."
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
								detail="Graphic Design for KMITL Scienece website (https://www.science.kmitl.ac.th/new) and KMITL CS Bootcamp."
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
							className="flex flex-col pt-8 pb-16 bg-primary-linear-20 gap-16 border-gradient-white"
						>
							<SectionHeader title="INTERNSHIP" />
							<ProjectBox
								title="UX/UI Designer"
								subTitle="TTB Spark"
								detail="This has been a great opportunity for me. I’ve learned a lot — from UX/UI design to frontend development — and how to work effectively in an agile team. I also improved soft skills like communication and presenting ideas. Thank you to TTB and all my mentors for the support and guidance. I’ll carry everything I’ve learned with me as I grow."
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
