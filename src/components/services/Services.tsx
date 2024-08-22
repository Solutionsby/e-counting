import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { services } from "../../db/services.json";
import { Button } from "../button/Button";

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
			<div className="flex flex-col items-center">
				{services.map(({ icon, title, description }: ServProps, index) => (
					<div
						key={index}
						className="w-[85%] flex  flex-col items-center p-2 border-2 rounded-md mt-5 mb-5 gap-2 bg-secendary">
						<FontAwesomeIcon icon={icon as IconProp} className="text-5xl" />
						<h1 className="text-2xl">{title}</h1>
						<p className="w-[70%] text-center">{description}</p>
					</div>
				))}
			</div>
			<Button
				reference={formReference}
				className="flex items-center justify-center w-[80%] mx-auto h-auto p-2 m-5 bg-primary border-secendary border-2 rounded-md text-white font-bold hover:bg-white hover:text-primary transition duration-500">
				CHCĘ SKORZYSTAĆ Z WASZEJ WIEDZY
			</Button>
		</div>
	);
};
