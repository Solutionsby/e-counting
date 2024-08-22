import { useRef } from "react";
import "./utils/fontAwsomeImport";
import "./App.css";
import { Header } from "./components/header/Header";
import { ScrollPrvider } from "./ScrollProvider";
import { Form } from "./components/form/Form";
import { HeroSection } from "./components/hero/HeroSection";
import { Services } from "./components/services/Services";

function App() {
	const formReference = useRef<HTMLDivElement>(null);
	return (
		<ScrollPrvider>
			<Header formReference={formReference} />
			<HeroSection />
			<Services formReference={formReference} />
			<Form formReference={formReference} />
		</ScrollPrvider>
	);
}

export default App;
