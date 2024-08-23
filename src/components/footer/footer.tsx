import React from "react";

export const Footer: React.FC = () => {
	return (
		<footer className="bg-primary text-complWhite py-6">
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center md:flex-row md:justify-between">
					<div className="text-center md:text-left">
						<p className="mb-2">
							<span className="font-semibold">Telefon:</span>{" "}
							<a
								href="tel:+48538132853"
								className="text-secendary hover:underline">
								+48 538 132 853
							</a>
						</p>
						<p className="mb-2">
							<span className="font-semibold">Email:</span>{" "}
							<a
								href="mailto:biuro@e-counting.pl"
								className="text-secendary hover:underline">
								biuro@e-counting.pl
							</a>
						</p>
						<p className="mb-2">
							<span className="font-semibold">Adres:</span> ul. Langiewicza
							2/10, 61-502 Poznań
						</p>
					</div>
					<div className="mt-6 md:mt-0 text-center">
						<p>
							&copy; {new Date().getFullYear()} e-counting. Wszystkie prawa
							zastrzeżone.
						</p>
						<p className="mt-2 text-sm">
							<a
								href="/privacy-policy"
								className="text-secendary hover:underline">
								Polityka prywatności
							</a>{" "}
							|{" "}
							<a
								href="/terms-of-service"
								className="text-secendary hover:underline">
								Warunki korzystania
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
