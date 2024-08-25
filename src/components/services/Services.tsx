import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Button } from "../button/Button";
import { services } from "../../db/services.json";

interface ServProps {
	icon: string;
	title: string;
	description: string;
}
interface ServicesProps {
	formReference: React.RefObject<HTMLDivElement>;
}

export const Services: React.FC<ServicesProps> = ({ formReference }) => {
	return (
		<div className=" bg-primary text-complWhite h-auto w-full flex flex-col">
			<div className="flex flex-col items-center">
				<h1 className="text-4xl m-2 text-center">Dla każdego przedsiębiorcy</h1>
				<p className="text-xl text-center ">
					Nasza oferta jest idealna dla każdego, kto prowadzi działalność
					gospodarczą. Oferujemy wsparcie dla:
				</p>
			</div>
			<div className="flex flex-col items-center md:flex-row md:justify-around">
				{services.map(({ icon, title, description }: ServProps, index) => (
					<div
						key={index}
						className="w-[85%] flex  flex-col items-center justify-around p-2 border-2 rounded-md mt-5 mb-5 gap-2 bg-secendary md:w-[25%] md:h-[350px] ">
						<FontAwesomeIcon icon={icon as IconProp} className="text-5xl" />
						<h1 className="text-2xl text-center">{title}</h1>
						<p className="w-[70%] text-center">{description}</p>
					</div>
				))}
			</div>
			<Button
				reference={formReference}
				className="flex items-center justify-center w-[60%] mx-auto h-auto p-3 m-5 bg-secendary border-complWhite border-2 rounded-md text-primary font-bold hover:bg-white hover:text-primary transition duration-500 md:w-[25%] md:p-10">
				CHCĘ SKORZYSTAĆ Z WASZEJ WIEDZY
			</Button>
		</div>
	);
};
