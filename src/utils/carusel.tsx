import { ReactNode } from "react";

interface serviceProps {
	children: ReactNode;
}

export const Carusel: React.FC<serviceProps> = ({ children }) => {
	return (
		<div className="mt-4 flex w-full gap-4 snap-x overflow-x-auto">
			{children}
		</div>
	);
};
