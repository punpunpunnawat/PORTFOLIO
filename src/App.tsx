import NavBar from "./components/NavBar";
import ProjectBox from "./components/ProjectBox";
import SectionHeader from "./components/SectionHeader";
import SkillBox from "./components/SkillBox";

function App() {
	return (
		<>
			<NavBar />

			<div className="flex flex-col min-h-screen bg-primary text-white-100 pt-32">

				<div className="flex flex-col py-8 bg-primary-linear-30">
					<SectionHeader title="ABOUT" />
					<div className="flex flex-row gap-16 px-32">
						<div className="flex flex-1 flex-col py-16 gap-16">
							<h1 className="font-family-audrey text-5xl text-center">
								PUNNAWAT JAROONKIRATIROJE
							</h1>
							<div className="flex flex-row gap-8 items-center">
								<span>PASSION</span>
								<span className="detail">
									“ Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. “
								</span>
							</div>
							<div className="flex flex-row gap-8 items-center">
								<span>EDUCATION</span>
								<span className="detail">
									“ Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. “
								</span>
							</div>
						</div>
						<img src="" className="w-80 h-100" />
					</div>
				</div>

        

				<div className="flex flex-col px-48 py-16 gap-16">

          <div className="flex flex-col pt-8 pb-16 bg-primary-linear-20 gap-16 border-gradient-white">
						<SectionHeader title="SKILL"></SectionHeader>
						<div className="flex flex-row justify-evenly">
              <div className="flex flex-col gap-4 items-center">
                <h4>LANGUAGE</h4>
                <SkillBox iconClass="devicon-java-plain colored" title="Java"/>
                <SkillBox iconClass="devicon-go-original-wordmark colored" title="Golang"/>
                <SkillBox iconClass="devicon-csharp-plain colored" title="C#"/>
                <SkillBox iconClass="devicon-python-plain colored" title="Python"/>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <h4>FRONT-END</h4>
                <SkillBox iconClass="devicon-react-original colored" title="React"/>
                <SkillBox iconClass="devicon-html5-plain colored" title="HTML"/>
                <SkillBox iconClass="devicon-javascript-plain colored" title="JS"/>
                <SkillBox iconClass="devicon-typescript-plain colored" title="TS"/>
                <SkillBox iconClass="devicon-css3-plain colored" title="CSS"/>
                <SkillBox iconClass="devicon-tailwindcss-original colored" title="Tailwind"/>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <h4>BACK-END</h4>
                <SkillBox iconClass="devicon-go-original-wordmark colored" title="Golang"/>
                <SkillBox iconClass="devicon-mysql-original colored" title="MySQL"/>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <h4>UX/UI</h4>
                <SkillBox iconClass="devicon-react-original colored" title="User Research"/>
                <SkillBox iconClass="devicon-react-original colored" title="Wireframing"/>
                <SkillBox iconClass="devicon-react-original colored" title="Prototyping"/>
                <SkillBox iconClass="devicon-react-original colored" title="User Testing"/>
                <SkillBox iconClass="devicon-react-original colored" title="Visual Design"/>
                <SkillBox iconClass="devicon-react-original colored" title="Responsive Design"/>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <h4>TOOL</h4>
                <SkillBox iconClass="devicon-vscode-plain colored" title="VS Code"/>
                <SkillBox iconClass="devicon-git-plain colored" title="Git"/>
                <SkillBox iconClass="devicon-github-original colored" title="GitHub"/>
                <SkillBox iconClass="devicon-docker-plain colored" title="Docker"/>
                <SkillBox iconClass="devicon-figma-plain" title="Figma"/>
              </div>
            </div>
					</div>

					<div className="flex flex-col pt-8 pb-16 bg-primary-linear-20 gap-16 border-gradient-white">
						<SectionHeader title="PROJECT"></SectionHeader>
						<h2 className="text-4xl text-center font-family-audrey">
							DEVELOPMENT
						</h2>
						<ProjectBox
							title="CLASH AND CARD"
							detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							picture=""
							keywords={["KEY1", "KEY2", "KEY3"]}
							features={["FEATURE1", "FEATURE2", "FEATURE3"]}
						/>
						<ProjectBox
							title="CLASH AND CARD"
							detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							picture=""
							keywords={["KEY1", "KEY2", "KEY3"]}
							features={["FEATURE1", "FEATURE2", "FEATURE3"]}
						/>
					</div>

					<div className="flex flex-col pt-8 pb-16 bg-primary-linear-20 gap-16 border-gradient-white">
						<SectionHeader title="PROJECT"></SectionHeader>
						<h2 className="text-4xl text-center font-family-audrey">
							DESIGN
						</h2>
						<ProjectBox
							title="CLASH AND CARD"
							detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							picture=""
							keywords={["KEY1", "KEY2", "KEY3"]}
							features={["FEATURE1", "FEATURE2", "FEATURE3"]}
						/>
						<ProjectBox
							title="CLASH AND CARD"
							detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							picture=""
							keywords={["KEY1", "KEY2", "KEY3"]}
							features={["FEATURE1", "FEATURE2", "FEATURE3"]}
						/>
					</div>

				</div>

				<div>Contact</div>
        
			</div>
		</>
	);
}

export default App;
