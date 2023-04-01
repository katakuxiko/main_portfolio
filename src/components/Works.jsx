import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, host } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	host_link
}) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{ max: 45, scale: 1, speed: 450 }}
				className="p-5 rounded-2xl sm:w-[360px] w-full bg-tertiary"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={image}
						alt={name}
						className="w-fu;; h-full object-cover rounded-2xl"
					/>
					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div
							onClick={() => window.open(source_code_link)}
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={github}
								className="w-1/2 h-1/2 object-contain"
								alt="github link"
							/>
						</div>
						<div
							onClick={() => window.open(host_link)}
							className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={host}
								className="w-1/2 h-1/2 object-contain"
								alt="github link"
							/>
						</div>
					</div>
				</div>
				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">
						{description}
					</p>
				</div>
				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							key={tag.name}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Мои работы</p>
				<h2 className={styles.sectionHeadText}>Проекты.</h2>
			</motion.div>
			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					За всё время я написал немало простых лендингов, и сайты с малой логикой, такие как сайт доставки питания, с калькулятором калорий, но их все думаю не имеет смысла добавлять, я добавил свои последние и самые крупные сайты, некоторые делал с помощью ютуба, другие на курсах, а некоторые делал полностью сам.
				</motion.p>
			</div>
			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((p, i) => (
					<ProjectCard key={i} index={i} {...p} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "works");
