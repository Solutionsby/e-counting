import { useRef } from "react";
import "./utils/fontAwsomeImport";
import "./App.css";
import { Header } from "./components/header/Header";
import { ScrollPrvider } from "./ScrollProvider";
import { Form } from "./components/form/form";
import { HeroSection } from "./components/hero/HeroSection";
import { Services } from "./components/services/Services";
import { Feature } from "./components/feature/feature";
import { UniqueFeatures } from "./components/uniqueFeatures/uniqueFeatures";
import { Footer } from "./components/footer/footer";

function App() {
	const formReference = useRef<HTMLDivElement>(null);
	return (
		<ScrollPrvider>
			<Header formReference={formReference} />
			<HeroSection />
			<Services formReference={formReference} />
			<Feature />
			<UniqueFeatures formReference={formReference} />
			<Form formReference={formReference} />
			<Footer />
		</ScrollPrvider>
	);
}

export default App;
