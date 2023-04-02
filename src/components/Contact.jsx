import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const Contact = () => {
	const [load, setLoad] = useState(false);
	useEffect(() => {
		setLoad(true);
	}, 4000);
	const formRef = useRef();
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.send(
				import.meta.env.PROD.VITE_SERVICE,
				import.meta.env.PROD.VITE_TEMPLATE,
				{
					from_name: form.name,
					to_name: "Alexey",
					from_email: form.email,
					to_email: "avxmvd@gmail.com",
					message: `${form.message} От ${form.email}`,
				},
				import.meta.env.PROD.VITE_PUBLIC
			)
			.then(
				() => {
					setLoading(false),
						alert("Спасибо, отвечу в ближайшее время");
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.log(error);
					alert("Что-то пошло не так");
				}
			);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Ваше имя
						</span>
						<input
							type="text"
							onChange={handleChange}
							name="name"
							value={form.name}
							placeholder="Напишите ваше имя"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Ваша почта
						</span>
						<input
							type="email"
							onChange={handleChange}
							name="email"
							value={form.email}
							placeholder="Напишите вашу почту"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Ваше сообщение
						</span>
						<textarea
							rows="7"
							type="text"
							onChange={handleChange}
							name="message"
							value={form.message}
							placeholder="Напишите ваше сообщение"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outlined-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>
			{load?
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>:''}
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
