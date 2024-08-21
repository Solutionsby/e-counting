import { useContext } from "react";
import { ScrollContext } from "../ScrollProvider";

export const useScrollToSection = () => {
	const scrollToSection = useContext(ScrollContext);

	const scroll = (ref: React.RefObject<HTMLDivElement>) => {
		if (scrollToSection && ref.current) {
			scrollToSection(ref);
		}
	};

	return scroll;
};
