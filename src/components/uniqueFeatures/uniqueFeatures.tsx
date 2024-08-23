import React from "react";
import { Carusel } from "../../utils/carusel";
import { Button } from "../button/Button";
import { reviews } from "../../db/reviews.json";

interface ReviewProps {
	title: string;
	position: string;
	review: string;
	photo: string;
}

interface UniqueFeaturesProps {
	formReference: React.RefObject<HTMLDivElement>;
}

export const UniqueFeatures: React.FC<UniqueFeaturesProps> = ({
	formReference,
}) => {
	return (
		<div className="w-full flex flex-col items-center px-4 py-8 bg-primary">
			<h2 className="text-3xl font-bold text-center text-secendary mb-6">
				Dlaczego warto wybrać e-counting?
			</h2>
			<p className="text-base text-center  text-secendary mb-4 max-w-2xl">
				e-counting to firma, która wyróżnia się na rynku dzięki unikalnemu
				podejściu do doradztwa prawnego i finansowego. Nasz zespół składa się z
				doświadczonych specjalistów, którzy wykorzystują nowoczesne technologie
				oraz indywidualne podejście do każdego klienta.
			</p>
			<p className="text-base text-center text-secendary mb-8 max-w-2xl">
				Nasze metody doradcze opierają się na głębokiej analizie potrzeb klienta
				oraz transparentności w działaniu. Współpracujemy z klientami w sposób
				otwarty i uczciwy, dostarczając rozwiązania skrojone na miarę ich
				potrzeb.
			</p>
			<p className="text-lg font-semibold text-center text-secendary mb-8">
				Dołącz do naszego grona ponad 150 zadowolonych klientów!
			</p>

			<Button
				reference={formReference}
				className="flex items-center justify-center w-[80%] md:w-[40%] h-auto p-2 bg-primary border-secendary border-2 rounded-md text-white font-bold hover:bg-white hover:text-primary transition duration-500 m-5">
				CHCĘ Z WAMI WSPÓŁPRACOWAĆ
			</Button>
			<Carusel>
				{reviews.map(
					({ title, position, review, photo }: ReviewProps, index) => (
						<div key={index} className="min-w-[80%] md:min-w-[40%]">
							<div className="h-[50vh] w-full snap-center rounded-xl bg-secendary shadow-lg shadow-complWhite/40 flex flex-col items-center gap-2">
								<div
									style={{ backgroundImage: `url(${photo})` }}
									className="w-28 h-28 bg-cover bg-center rounded-full mt-5"></div>
								<div className="w-[95%] h-[60%] flex flex-col gap-4 bg-complWhite rounded-xl p-2 shadow-lg shadow-primary/20 justify-around">
									<p className="p-1 w-full text-[13px]">{review}</p>
									<div>
										<h1 className="text-secendary">{title}</h1>
										<h1 className="text-primary">{position}</h1>
									</div>
								</div>
							</div>
						</div>
					)
				)}
			</Carusel>
		</div>
	);
};
