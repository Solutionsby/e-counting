import React from "react";
import { useScrollToSection } from "../../utils/ScrollToSection";
import { ScrollToTop } from "../../utils/scrollToTop";

interface HeaderProps {
	formReference: React.RefObject<HTMLDivElement>;
}

export const Header: React.FC<HeaderProps> = ({ formReference }) => {
	const scrollToSection = useScrollToSection();

	const handleScrollToSection = () => {
		scrollToSection(formReference);
	};

	return (
		<div className="w-full fixed top-0 h-[10vh] shadow-md shadow-secendary flex items-center justify-around ">
			<div
				onClick={ScrollToTop}
				style={{ backgroundImage: "url(./logo/logo-color.svg)" }}
				className="h-1/2 w-[40%] bg-contain bg-no-repeat bg-center"></div>
			<button
				className="flex items-center justify-center w-auto h-auto p-2 bg-primary border-secendary border-2 rounded-md text-white font-bold hover:bg-white hover:text-primary transition duration-500"
				onClick={handleScrollToSection}>
				Skontaktuj się
			</button>
		</div>
	);
};
