import SectionHeader from "./SectionHeader";

type ProjectBoxProps = {
	title: string;
	detail: string;
	picture: string;
	keywords: string[];
	features: string[];
};

const ProjectBox = ({ title, detail, keywords, features }: ProjectBoxProps) => {
	return (
		<div className="flex flex-col x-48 py-8 gap-8 bg-primary-linear-30">
			<div className="flex flex-row gap-32 px-48 py-8">
				<div className="flex flex-col flex-1 gap-8 justify-center items-center">
					<h3 className="text-4xl font-family-audrey">{title}</h3>
					<span className="detail">" {detail} "</span>
					<div className="flex gap-8">
						<h4>KEYWORD</h4>
						<div className="flex gap-2 detail">
							{keywords.map((keyword) => (
								<div className="px-6 ring ring-white/10 rounded-sm">
									{keyword}
								</div>
							))}
						</div>
					</div>
				</div>
				<img src="" className="w-128 h-64" />
			</div>

			<div className="flex flex-col gap-8">
				<SectionHeader title="FEATURE" />
				<div className="flex flex-col gap-2 items-center detail">
					{features.map((feature) => (
						<div>{feature}</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default ProjectBox;
