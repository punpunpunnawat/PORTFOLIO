import SectionHeader from "./SectionHeader";

type InternshipBoxProps = {
	title: string;
	subTitle?: string;
	detail: string;
	pictures?: string[];
	keywords: string[];
	experience: string[];
};

const InternshipBox = ({
	title,
	subTitle,
	detail,
	keywords,
	pictures,
	experience,
}: InternshipBoxProps) => {
	return (
		<div className="flex flex-col x-48 py-16 gap-16 bg-primary-linear-30">
			<div className="flex flex-col gap-8 px-48 items-center">
				<div className="flex flex-col">
					<h3 className="text-4xl font-family-audrey">{title}</h3>
					<span className="detail text-center">{subTitle}</span>
				</div>
				<span className="detail text-start">" {detail} "</span>
				<div className="flex gap-8 items-center justify-center">
					<h4>KEYWORDS</h4>
					<div className="flex flex-wrap gap-2 detail justify-center">
						{keywords.map((keyword) => (
							<div className="px-4 ring ring-white/10 rounded-sm whitespace-nowrap">
								{keyword}
							</div>
						))}
					</div>
				</div>
			</div>

			{experience && (
				<div className="flex flex-col gap-4 px-48 items-center">
					<SectionHeader title="FEATURE" />
					<div className="flex flex-col gap-2 w-fit">
						{experience.map((feature, index) => (
							<div className="flex flex-row text-start gap-2">
								<span className="w-4">{index + 1}.</span>
								<span className="detail">{feature}</span>
							</div>
						))}
					</div>
				</div>
			)}

			<div className="flex flex-col gap-4 p-4 bg-primary-linear-20 border-gradient-white mx-16">
				<SectionHeader title="Example Screen" />
				{pictures && (
					<>
						{pictures.map((picture) => (
							<img
								src={picture}
								className="w-full object-cover flex-shrink-0 rounded-sm"
							/>
						))}
					</>
				)}
			</div>
		</div>
	);
};
export default InternshipBox;
