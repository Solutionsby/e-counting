import React, { useState, useRef } from "react";
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
	const [currentIndex, setCurrentIndex] = useState(0);

	const [itemWidth, setItemWidth] = useState(0);

	const carouselRef = useRef<HTMLDivElement>(null);

	return (
		<div className="w-full flex flex-col  px-4 py-8 bg-primary">
			<div className="w-full flex flex-col items-center">
				<h2 className="text-3xl font-bold text-center text-secendary mb-6">
					Dlaczego warto wybrać e-counting?
				</h2>
				<p className="text-base text-center  text-secendary mb-4 max-w-2xl">
					e-counting to firma, która wyróżnia się na rynku dzięki unikalnemu
					podejściu do doradztwa prawnego i finansowego. Nasz zespół składa się
					z doświadczonych specjalistów, którzy wykorzystują nowoczesne
					technologie oraz indywidualne podejście do każdego klienta.
				</p>
				<p className="text-base text-center text-secendary mb-8 max-w-2xl">
					Nasze metody doradcze opierają się na głębokiej analizie potrzeb
					klienta oraz transparentności w działaniu. Współpracujemy z klientami
					w sposób otwarty i uczciwy, dostarczając rozwiązania skrojone na miarę
					ich potrzeb.
				</p>
				<p className="text-lg font-semibold text-center text-secendary mb-8">
					Dołącz do naszego grona ponad 150 zadowolonych klientów!
				</p>

				<Button
					reference={formReference}
					className="flex items-center justify-center w-[60%] h-auto p-4 bg-secendary border-complWhite border-2 rounded-md text-primary font-bold hover:bg-white hover:text-primary transition duration-500 m-5
				md:w-[30%] md:p-8
				">
					CHCĘ Z WAMI WSPÓŁPRACOWAĆ
				</Button>
			</div>
			<Carusel
				seterItemWidth={setItemWidth}
				setterIndex={setCurrentIndex}
				currentIndex={currentIndex}
				numberOfElement={reviews.length}
				reference={carouselRef}
				itemWidth={itemWidth}>
				{reviews.map(
					({ title, position, review, photo }: ReviewProps, index) => (
						<div key={index} className="min-w-[80%] md:min-w-[45%]">
							<div className="h-[500px] snap-center rounded-xl bg-secendary shadow-lg shadow-complWhite/40 flex flex-col items-center lg:flex-row justify-around">
								<div
									style={{ backgroundImage: `url(${photo})` }}
									className="w-28 h-28 bg-cover bg-center rounded-full mt-5 lg:h-full lg:rounded-none lg:mt-0 lg:w-2/3"></div>
								<div className="w-[95%] h-[60%] flex flex-col gap-4 bg-complWhite rounded-xl p-2 shadow-lg shadow-primary/20 justify-around mb-5 mx-2">
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
