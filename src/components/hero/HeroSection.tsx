export const HeroSection = () => {
	return (
		<div
			className="w-full h-[85vh] bg-cover bg-no-repeat bg-center mt-[10vh]"
			style={{ backgroundImage: "url(./photos/Team.jpg)" }}>
			<div className="w-full h-full bg-secendary/50 flex flex-col justify-center items-center font-bold ">
				<h1 className="text-white text-center text-2xl">
					Twój biznes,{" "}
					<span className="text-2xl text-primary ">nasze wsparcie</span>- razem
					wzmacniajmy jego potencjał!
				</h1>
				<p className="mt-10 text-white text-center w-11/12 ">
					Z nami możesz być pewny, że Twoja firma rozwija się na solidnych,
					prawnych fundamentach. Jesteśmy tu, aby zapewnić Ci bezpieczeństwo i
					spokój, umożliwiając osiąganie kolejnych sukcesów bez obaw o
					formalności.
				</p>
			</div>
		</div>
	);
};
