import { useInView } from "../hooks/useInView";
import { type ReactNode } from "react";

const FadeInSection = ({ children }: { children: ReactNode }) => {
	const { ref, isInView } = useInView();

	return (
		<section
			ref={ref}
			className={`transition-opacity duration-1000 ${
				isInView ? "opacity-100" : "opacity-0"
			}`}
		>
			{children}
		</section>
	);
};

export default FadeInSection;
