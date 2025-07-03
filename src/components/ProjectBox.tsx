import SectionHeader from "./SectionHeader";
import { useState } from "react";

type ProjectBoxProps = {
	title: string;
	subTitle?: string;
	detail: string;
	pictures?: string[];
	keywords: string[];
	features?: string[];
	isSecret?: boolean;
	isInternship?: boolean;
};

const ProjectBox = ({
	title,
	subTitle,
	detail,
	pictures,
	keywords,
	features,
	isSecret = false,
	isInternship = false,
}: ProjectBoxProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<div className="flex flex-col w-full py-16 gap-16 bg-primary-linear-30">
			<div className="flex flex-col px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-48 gap-16 items-center">
				<div className="flex flex-col gap-8 w-full">
					<div className="flex flex-col">
						<h3 className="text-4xl font-family-audrey text-center">
							{title}
						</h3>
						{subTitle && (
							<span className="detail text-center">
								{subTitle}
							</span>
						)}
					</div>
					<span className="detail text-start">" {detail} "</span>

					<div className="flex flex-col lg:flex-row gap-2 lg:gap-8 items-center justify-center">
						<h4>KEYWORDS</h4>
						<div className="flex flex-wrap gap-2 detail justify-center">
							{keywords.map((keyword, idx) => (
								<div
									key={idx}
									className="px-4 ring ring-white/10 rounded-sm whitespace-nowrap"
								>
									{keyword}
								</div>
							))}
						</div>
					</div>
				</div>

				{!isSecret ? (
					features && (
						<div className="flex flex-col gap-4 items-center w-full">
							<SectionHeader
								title={isInternship ? "EXPERIENCE" : "FEATURE"}
							/>
							<div className="flex flex-col gap-2 w-fit">
								{features.map((feature, index) => (
									<div
										key={index}
										className="flex flex-row text-start gap-2"
									>
										<span className="w-4">
											{index + 1}.
										</span>
										<span className="detail">
											{feature}
										</span>
									</div>
								))}
							</div>
						</div>
					)
				) : (
					<span className="detail text-center">
						More details can be provided upon request.
					</span>
				)}
			</div>

			{pictures && pictures.length > 0 && (
				<div className="flex flex-col gap-4 p-2 sm:p-4 bg-primary-linear-20 border-gradient-white mx-2 sm:mx-4 lg:mx-16">
					<SectionHeader
						title={
							isInternship ? "INTERN PICTURES" : "EXAMPLE SCREEN"
						}
					/>
					<div className="relative w-full flex flex-col items-center">
						<div
							className="relative w-full"
							style={{ paddingTop: "56.25%" }}
						>
							{pictures.map((picture, i) => (
								<img
									key={i}
									src={picture}
									alt={`slide-${i}`}
									className={`absolute top-0 left-0 w-full h-full object-contain border border-white/10 rounded-sm transition-opacity duration-700 ease-in-out ${
										i === currentIndex
											? "opacity-100 z-10 pointer-events-auto"
											: "opacity-0 z-0 pointer-events-none"
									}`}
								/>
							))}
						</div>

						{pictures.length > 1 && (
							<>
								<button
									onClick={() =>
										setCurrentIndex((prev) =>
											prev === 0
												? pictures.length - 1
												: prev - 1
										)
									}
									className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 z-20"
								>
									&lt;
								</button>

								<button
									onClick={() =>
										setCurrentIndex((prev) =>
											prev === pictures.length - 1
												? 0
												: prev + 1
										)
									}
									className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 z-20"
								>
									&gt;
								</button>

								<div className="flex gap-2 mt-4">
									{pictures.map((_, i) => (
										<div
											key={i}
											className={`w-2 h-2 rounded-full transition-opacity duration-700 ease-in-out cursor-pointer ${
												i === currentIndex
													? "bg-white opacity-100"
													: "bg-white/30 opacity-50"
											}`}
											onClick={() => setCurrentIndex(i)}
										/>
									))}
								</div>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};
export default ProjectBox;
