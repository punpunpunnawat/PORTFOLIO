import SectionHeader from "./SectionHeader";

type ProjectBoxProps = {
	title: string;
	detail: string;
	pictures?: string[];
	keywords: string[];
	features?: string[];
	isSecret?: boolean;
};

const ProjectBox = ({
	title,
	detail,
	pictures,
	keywords,
	features,
	isSecret = false,
}: ProjectBoxProps) => {
	return (
		<div className="flex flex-col x-48 py-16 gap-16 bg-primary-linear-30">
			<div className="flex flex-col gap-8 px-48 items-center">
				<h3 className="text-4xl font-family-audrey">{title}</h3>
				<span className="detail text-start">" {detail} "</span>

				<div className="flex gap-8 items-center justify-center">
					<h4>KEYWORDS</h4>
					<div className="flex flex-wrap gap-2 detail justify-center">
						{keywords.map((keyword) => (
							<div className="px-6 ring ring-white/10 rounded-sm whitespace-nowrap">
								{keyword}
							</div>
						))}
					</div>
				</div>
			</div>

			{!isSecret ? (
				<>
					<div className="flex flex-col gap-4 px-48 items-center">
						{features && (
							<>
								<SectionHeader title="FEATURE" />
								<div className="flex flex-col gap-2 w-fit">
									{features.map((feature, index) => (
										<div className="flex flex-row text-start gap-2">
											<span className="w-4">
												{index + 1}.
											</span>
											<span className="detail">
												{feature}
											</span>
										</div>
									))}
								</div>
							</>
						)}
					</div>

					<div className="flex flex-col gap-4 p-4 bg-primary-linear-20 border-gradient-white mx-16">
						{pictures && (
							<>
								{pictures.map((picture) => (
									<img
										src={picture}
										className="w-full object-cover flex-shrink-0 rounded-sm border border-white/10"
									/>
								))}
							</>
						)}
						<SectionHeader title="Example Screen" />
					</div>
				</>
			) : (
				<span className="detail text-center">
					More details can be provided upon request.
				</span>
			)}
		</div>
	);
};
export default ProjectBox;
