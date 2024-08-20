import { useRef } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { ScrollPrvider } from "./ScrollProvider";
import { Form } from "./components/form/Form";

function App() {
	const formReference = useRef<HTMLDivElement>(null);
	return (
		<ScrollPrvider>
			<Header formReference={formReference} />
			<Form formReference={formReference} />
		</ScrollPrvider>
	);
}

export default App;
