import "./App.css";
import "./index.css";
import { Footer, Blog, Possibility, WhatGPT3, Header } from "./containers";
import { CTA, Brand, Navbar, Feature } from "./components";

function App() {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGPT3 />
			<Feature />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
}

export default App;
