import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const Feature: React.FC = () => {

	return (
		<div className="bg-complWhite text-secendary py-10 px-5 w-full">
			<h1 className="text-4xl text-center mb-10">Usługi doradztwa prawnego</h1>

			<div className="flex flex-col lg:flex-row justify-around mb-16">
				<div className="flex flex-col items-center w-full lg:w-1/3 p-5">
					<FontAwesomeIcon
						icon={"fa-solid fa-gavel" as IconProp}
						className="text-6xl mb-4"
					/>
					<h2 className="text-2xl mb-2 text-center">
						Sporządzanie opinii prawniczej
					</h2>
					<p className="text-center">
						Zajmujemy się przygotowaniem kompleksowych opinii prawnych
						dostosowanych do potrzeb Twojej firmy.
					</p>
				</div>
				<div className="flex flex-col items-center w-full lg:w-1/3 p-5">
					<FontAwesomeIcon
						icon={"fa-solid fa-file-contract" as IconProp}
						className="text-6xl mb-4"
					/>
					<h2 className="text-2xl mb-2 text-center">
						Sporządzanie dokumentacji prawnej
					</h2>
					<p className="text-center">
						Tworzymy dokumentację prawną zgodną z obowiązującymi przepisami
						prawa, aby chronić Twoje interesy.
					</p>
				</div>
				<div className="flex flex-col items-center w-full lg:w-1/3 p-5">
					<FontAwesomeIcon
						icon={"fa-solid fa-user-tie" as IconProp}
						className="text-6xl mb-4"
					/>
					<h2 className="text-2xl mb-2 text-center">
						Indywidualne usługi doradztwa prawnego
					</h2>
					<p className="text-center">
						Oferujemy doradztwo prawne dostosowane do specyfiki działalności
						Twojej firmy.
					</p>
				</div>
			</div>

			<h2 className="text-3xl text-center mb-10">
				Konsultacje w ramach interpretacji prawa
			</h2>
			<div className="flex flex-col lg:flex-row justify-around">
				<div className="flex flex-col items-center w-full lg:w-1/3 p-5">
					<FontAwesomeIcon
						icon={"fa-solid fa-book" as IconProp}
						className="text-6xl mb-4"
					/>
					<h3 className="text-2xl mb-2 text-center">
						Interpretacja przepisów prawnych
					</h3>
					<p className="text-center">
						Pomagamy zrozumieć i stosować obowiązujące przepisy prawa w Twojej
						działalności.
					</p>
				</div>
				<div className="flex flex-col items-center w-full lg:w-1/3 p-5">
					<FontAwesomeIcon
						icon={"fa-solid fa-scale-balanced" as IconProp}
						className="text-6xl mb-4"
					/>
					<h3 className="text-2xl mb-2 text-center">
						Interpretacja prawa pracy
					</h3>
					<p className="text-center">
						Oferujemy wsparcie w zakresie interpretacji prawa pracy, abyś mógł
						prowadzić działalność zgodnie z przepisami.
					</p>
				</div>
				<div className="flex flex-col items-center w-full lg:w-1/3 p-5">
					<FontAwesomeIcon
						icon={"fa-solid fa-building" as IconProp}
						className="text-6xl mb-4"
					/>
					<h3 className="text-2xl mb-2 text-center">
						Interpretacja prawa gospodarczego
					</h3>
					<p className="text-center">
						Zapewniamy doradztwo w zakresie prawa gospodarczego, aby wspierać
						rozwój Twojego biznesu.
					</p>
				</div>
			</div>
		</div>
	);
};
