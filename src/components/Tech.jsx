import { useEffect, useState } from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";

const Tech = () => {
	const [load, setLoad] = useState(false);
	useEffect(() => {
		setLoad(true);
	}, 4000);
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{load
				? technologies.map((technology, i) => (
						<div className="w-28 h-28" key={technology.name}>
							<BallCanvas icon={technology.icon} />
						</div>
				  ))
				: ""}
		</div>
	);
};

export default SectionWrapper(Tech, "");
