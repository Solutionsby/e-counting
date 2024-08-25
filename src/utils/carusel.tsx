import { ReactNode, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface serviceProps {
	children: ReactNode;
	reference: React.RefObject<HTMLDivElement>;
	seterItemWidth: (width: number) => void;
	setterIndex: (index: number) => void;
	itemWidth: number;
	currentIndex: number;
	numberOfElement: number;
}

export const Carusel: React.FC<serviceProps> = ({
	children,
	setterIndex,
	seterItemWidth,
	currentIndex,
	numberOfElement,
	reference,
	itemWidth,
}) => {
	useEffect(() => {
		if (reference.current) {
			const firstChild = reference.current.children[0] as HTMLElement;
			if (firstChild) {
				seterItemWidth(firstChild.offsetWidth);
			}
		}
	}, []);

	const scrollToIndex = (index: number) => {
		if (reference.current) {
			reference.current.scrollTo({
				left: index * itemWidth,
				behavior: "smooth",
			});
			setterIndex(index);
		}
	};

	const handleNext = () => {
		const newIndex = (currentIndex + 1) % numberOfElement;
		setterIndex(newIndex);
		scrollToIndex(newIndex);
	};
	const handlePrev = () => {
		const newIndex = (currentIndex - 1 + numberOfElement) % numberOfElement;
		setterIndex(newIndex);
		scrollToIndex(newIndex);
	};

	return (
		<div className="flex items-center">
			<div
				id="previous"
				className="hidden  text-5xl lg:flex justify-center items-center cursor-pointer p-2 pb-8"
				onClick={handlePrev}>
				<FontAwesomeIcon icon={"fa-solid fa-angle-left" as IconProp} />
			</div>
			<div
				ref={reference}
				className="scroll-smooth flex-1 gap-4 flex pb-5 snap-x snap-mandatory overflow-x-auto">
				{children}
			</div>
			<div
				id="next"
				className="hidden text-5xl lg:flex justify-center items-center cursor-pointer p-2 pb-8"
				onClick={handleNext}>
				<FontAwesomeIcon icon={"fa-solid fa-angle-right" as IconProp} />
			</div>
		</div>
	);
};
