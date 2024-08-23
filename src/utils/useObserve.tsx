import { useEffect, RefObject, useState } from "react";

export const useObserveFunction = (ref: RefObject<HTMLElement>) => {
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setIsIntersecting(entry.isIntersecting);
		});

		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref]);
	return isIntersecting;
};
