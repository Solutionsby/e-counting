import React, { createContext } from "react";

type ScrollToSectionType = (ref: React.RefObject<HTMLDivElement>) => void;

export const ScrollContext = createContext<ScrollToSectionType | null>(null);

interface ScrollProviderProps {
	children: React.ReactNode;
}

export const ScrollPrvider: React.FC<ScrollProviderProps> = ({ children }) => {
	const scrollToSection: ScrollToSectionType = (ref) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<ScrollContext.Provider value={scrollToSection}>
			{children}
		</ScrollContext.Provider>
	);
};
