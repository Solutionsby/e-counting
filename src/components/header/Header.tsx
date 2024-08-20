export const Header = () => {
	return (
		<>
			<div className="w-full h-[10vh] shadow-md mb-5 shadow-secendary flex items-center justify-around">
				<div
					style={{ backgroundImage: "url(./logo/logo-color.svg)" }}
					className="h-1/2 w-[40%] bg-contain bg-no-repeat bg-center "></div>
				<button className=" flex items-center justify-center w-auto h-auto p-2 bg-primary border-secendary border-2 rounded-md text-white font-bold hover:bg-white hover:text-primary transition duration-500 ">
					Skontaktuj się 
				</button>
			</div>
		</>
	);
};
