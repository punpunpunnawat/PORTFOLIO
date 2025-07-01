import { useEffect, useState, useRef } from "react";

export const useInView = () => {
	const ref = useRef<HTMLElement>(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
				}
			},
			{
				threshold: 0,
				rootMargin: "0px 0px -20% 0px",
			}
		);

		if (ref.current) observer.observe(ref.current);

		return () => {
			if (ref.current) observer.unobserve(ref.current);
		};
	}, []);

	return { ref, isInView };
};
