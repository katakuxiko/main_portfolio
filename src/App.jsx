import { BrowserRouter } from "react-router-dom";

import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from "./components";
import { useEffect, useState } from 'react';

const App = () => {
	const [load, setLoad] = useState(false);
	useEffect(() => {
		setLoad(true);
	}, 4000);
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				{/* <StarsCanvas /> */}

				{/* <Feedbacks/> */}
				<div className="relative z-0">
					{load?<StarsCanvas />:''}
					<Contact />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
