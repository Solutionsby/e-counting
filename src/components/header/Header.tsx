import React from "react";
import { ScrollToTop } from "../../utils/scrollToTop";
import { Button } from "../button/Button";

interface HeaderProps {
	formReference: React.RefObject<HTMLDivElement>;
}

export const Header: React.FC<HeaderProps> = ({ formReference }) => {
	return (
		<div className="w-full fixed top-0 h-[10vh] shadow-md shadow-secendary flex items-center justify-around md:justify-between bg-white">
			<div
				onClick={ScrollToTop}
				style={{ backgroundImage: "url(./logo/logo-color.svg)" }}
				className="h-1/2 w-[40%] bg-contain bg-no-repeat bg-center md:w-[25%]"></div>
			<Button
				reference={formReference}
				className="flex items-center justify-center w-auto h-auto p-2 bg-primary border-secendary border-2 rounded-md text-white font-bold hover:bg-white hover:text-primary transition duration-500 md:mr-20">
				Skontaktuj się
			</Button>
		</div>
	);
};
