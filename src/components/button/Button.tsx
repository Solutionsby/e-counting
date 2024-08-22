import React from "react";
import { useScrollToSection } from "../../utils/ScrollToSection";

interface ButtonProps {
	reference: React.RefObject<HTMLDivElement>;
	className: string;
	children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
	reference,
	children,
	className,
}) => {
	const scrollToSection = useScrollToSection();

	const handleScrollToSection = () => {
		scrollToSection(reference);
	};

	return (
		<button className={className} onClick={handleScrollToSection}>
			{children}
		</button>
	);
};
