import SectionHeader from "./SectionHeader";

type InternshipBoxProps = {
	title: string;
	subTitle?: string;
	detail: string;
	picture: string;
	keywords: string[];
	features: string[];
};

const InternshipBox = ({
	title,
	subTitle,
	detail,
	keywords,
	features,
}: InternshipBoxProps) => {
	return (
		<div className="flex flex-col x-48 py-8 gap-8 bg-primary-linear-30">
			<div className="flex flex-row gap-32 px-48 py-8">
				<div className="flex flex-col flex-1 gap-8 justify-center items-center">
					<div className="flex flex-col items-center">
						<h3 className="text-4xl font-family-audrey">{title}</h3>
						{subTitle && <span className="detail">{subTitle}</span>}
					</div>

					<span className="detail text-center">" {detail} "</span>
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
				<img src="" className="w-96 h-64" />
			</div>

			<div className="flex flex-col gap-8">
				<SectionHeader title="EXPERIENCE" />
				<div className="flex flex-col gap-2 items-center detail">
					{features.map((feature) => (
						<div>{feature}</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default InternshipBox;
