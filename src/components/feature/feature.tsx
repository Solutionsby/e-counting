import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {featureServices,lawServices} from "../../db/feature.json"

interface FeatureServicesProps{
	icon:string,
	title:string,
	description:string
}

export const Feature: React.FC = () => {

	return (
		<div className="bg-complWhite text-secendary py-10 px-5 w-full">

			<h1 className="text-4xl text-center mb-10 text-primary">Usługi doradztwa prawnego</h1>

			<div className="flex flex-col lg:flex-row justify-around mb-16">
			{featureServices.map(({icon,title,description}:FeatureServicesProps,index)=>(
				<div key={index} className="flex flex-col items-center w-full lg:w-1/3 p-5" >
					<FontAwesomeIcon
						icon={icon as IconProp}
						className="text-6xl mb-4"
					/>
					<h2 className="text-2xl mb-2 text-center">
						{title}
					</h2>
					<p className="text-center">
						{description}
					</p>
				</div>
			))}
			</div>

			<h1 className="text-4xl text-primary text-center mb-10">
				Konsultacje w ramach interpretacji prawa
			</h1>

			<div className="flex flex-col lg:flex-row justify-around">
				{lawServices.map(({icon,title,description}:FeatureServicesProps,index)=>(
					<div key={index} className="flex flex-col items-center w-full lg:w-1/3 p-5" >
					<FontAwesomeIcon
						icon={icon as IconProp}
						className="text-6xl mb-4"
					/>
					<h2 className="text-2xl mb-2 text-center">
						{title}
					</h2>
					<p className="text-center">
						{description}
					</p>

					</div>
				))}
			</div>
		</div>
	);
};
