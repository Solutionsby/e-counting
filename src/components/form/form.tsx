import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
	imie: string;
	nazwisko: string;
	email: string;
	telefon: string;
	message: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Form = () => {
	const [formData, setFormData] = useState<FormData>({
		imie: "",
		nazwisko: "",
		email: "",
		telefon: "",
		message: "",
	});

	const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
		{}
	);
	const [touched, setTouched] = useState<
		Partial<Record<keyof FormData, boolean>>
	>({});
	const [submitted, setSubmitted] = useState(false);
	const [sended, setSended] = useState(false);

	const validateField = (name: keyof FormData, value: string): string => {
		switch (name) {
			case "email":
				if (!value) {
					return "To pole jest wymagane";
				} else if (!emailRegex.test(value)) {
					return "Niepoprawny format e-maila";
				}
				return "";
			case "imie":
			case "nazwisko":
				return value ? "" : "To pole jest wymagane";
			default:
				return "";
		}
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		if (name in formData) {
			setFormData((prev) => ({ ...prev, [name]: value }));
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	const handleBlur = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		if (name in formData) {
			setTouched((prev) => ({ ...prev, [name]: true }));
			const error = validateField(name as keyof FormData, value);
			setErrors((prev) => ({ ...prev, [name]: error }));
		}
	};

	const validateForm = (): boolean => {
		const newErrors: Partial<Record<keyof FormData, string>> = {};
		(Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
			const error = validateField(key, formData[key]);
			if (error) newErrors[key] = error;
		});

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitted(true);

		if (validateForm()) {
			console.log("Formularz wysłany:", formData);
			setFormData({
				imie: "",
				nazwisko: "",
				email: "",
				telefon: "",
				message: "",
			});
			setSended(true);
			setErrors({});
			setTouched({});
		}
	};

	const shouldShowError = (key: keyof FormData): boolean => {
		return !!errors[key] && (touched[key] || submitted);
	};
	const getInputClassName = (key: keyof FormData): string => {
		return `placeholder:uppercase  p-2 text-black border-2 ${
			errors[key] ? "border-rose-500 m-0" : "border-black m-2"
		}`;
	};

	return (
		<div className="flex flex-col w-[90vw] border-primary border-2  mx-auto rounded-2xl justify-center items-center shadow-xl shadow-secendary">
			<h1 className="text-2xl font-bold text-primary m-4">
				Skontaktuj się z nami !
			</h1>
			{!sended ? (
				<form
					onSubmit={handleSubmit}
					className="w-[100%] h-[99%] rounded-xl flex flex-col items-center justify-between">
					{Object.entries(formData).map(([key, value]) => (
						<div key={key} className="text-complWhite">
							{key === "message" ? (
								<textarea
									id={key}
									name={key}
									value={value}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder="Wiadomosc"
									className={getInputClassName(key as keyof FormData)}
								/>
							) : (
								<input
									type={
										key === "email" ? "email" : key === "phone" ? "tel" : "text"
									}
									id={key}
									name={key}
									value={value}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder={key}
									className={getInputClassName(key as keyof FormData)}
								/>
							)}
							{shouldShowError(key as keyof FormData) && (
								<p className="text-red-500 m-1 text-sm">
									{errors[key as keyof FormData]}
								</p>
							)}
						</div>
					))}
					<button
						type="submit"
						className="w-4/5 h-10 text-2xl font-bold bg-primary my-10 rounded-lg text-complWhite">
						Wyślij
					</button>
				</form>
			) : (
				<div className="w-[90%] h-[100%] bg-black text-white">
					Twoja wiadomosc zostala wyslana !
				</div>
			)}
		</div>
	);
};
