import { ScrollToTop } from "../../utils/scrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useRef } from "react";
import { useObserveFunction } from "../../utils/useObserve";



export const HeroSection = () => {

	const goToTop = useRef<HTMLDivElement>(null);
	const showTheButton = useObserveFunction(goToTop);

	return (
		<div				
			ref={goToTop}
			className="w-full h-[85vh] bg-cover bg-no-repeat bg-center mt-[10vh]"
			style={{ backgroundImage: "url(./photos/Team.jpg)" }}>
			<div className="w-full h-full bg-secendary/50 flex flex-col justify-center items-center font-bold ">
				<h1 className="text-white text-center text-2xl">
					Twój biznes,{" "}
					<span className="text-2xl text-primary ">nasze wsparcie</span> - razem
					wzmacniajmy potencjał Twojej firmy!
				</h1>
				<p className="mt-10 text-white text-center w-11/12 ">
					Z nami możesz być pewny, że Twoja firma rozwija się na solidnych,
					prawnych fundamentach. Jesteśmy tu, aby zapewnić Ci bezpieczeństwo i
					spokój, umożliwiając osiąganie kolejnych sukcesów bez obaw o
					formalności.
				</p>
			</div>
			<div
				className={` flex text-primary font-bold text-xl opacity-0 animate-bounce h-12 w-12 rounded-full bg-secendary fixed bottom-2 right-2 ${
					showTheButton ? "translate-x-10" : "opacity-100 translate-x"
				} duration-500 text-black  justify-center items-center border-2 border-primary z-20`}
				onClick={ScrollToTop}>
				<FontAwesomeIcon icon={"fa-solid fa-arrow-up" as IconProp} />
			</div>
		</div>
	);
};
