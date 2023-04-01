import {
	marvel,
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	topapp,
	dashboard,
	diplom,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Js Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Golang Developer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Web разрабочик",
		company_name: "Udemy",
		icon: meta,
		iconBg: "#383E56",
		date: "Апрель 2022 - Май 2022",
		points: [
			"Изучал основы верстки",
			"Адаптивная верстка, flexbox",
			"Гриды, веб приложения ",
			"Основы JavaScript и JQuery",
		],
	},
	{
		title: "React С Нуля до результата",
		company_name: "Udemy",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Июнь 2022 - Сентябрь 2022",
		points: [
			"Основы JavaScript, массивы, функции, работа DOM-деревом, первые слайдеры и тому подоюное.",
			"Основы React на классовых компонентах, для получения понимания как реакт работает",
			"Функциональные компоненты, первое большое приложение, работа со стейтом, эффектами и анимациями.",
			"Redux, работа с хранилищем, архитектура MVC(Model-View-Controller).",
		],
	},
	{
		title: "NextJs - Антон Ларичев",
		company_name: "Udemy",
		icon: meta,
		iconBg: "#383E56",
		date: "Октябрь 2022 - Декабрь 2022",
		points: [
			"Знакомство с тайпскрпт, основы",
			"Что такое SSR, для чего он, и что он делает.",
			"Работа с next js.",
			"Доступность сайтов.",
		],
	},
	{
		title: "Самообучение",
		company_name: "YouTube",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Январь 2023 - Настоящее время",
		points: [
			"Пишу диплом используя MobX и TypeScript.",
			"Смотрю обучающие видео на ютубе, изучаю разные библиотеки по типу SyncFusion и ThreeJs.",
			"Изучаю tailwind.css, vite, больше погружаюсь в TypeScript.",
			"Так же изучаю backend для диплома, пишу на Golang-е.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Marvel information portal",
		description:
			"Информационный сайт с героями и комиксами марвел, данные взяты с апи marvel api, работа с анимация, сервером, отображение данных.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "API",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: marvel,
		source_code_link:
			"https://github.com/katakuxiko/Marvel-app-react/tree/push/src",
		host_link: "https://avxm-marvel-app.netlify.app",
	},
	{
		name: "Top App",
		description:
			"Приложение написанное на NextJs,которое использует различные анимации, можно оставить отзыв, и ещё другой функционал, используется ServerSideRendering.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
			{
				name: "typescript",
				color: "white-text-gradient",
			},
			{
				name: "framer-motion",
				color: "blue-text-gradient",
			},
		],
		image: topapp,
		source_code_link: "https://github.com/katakuxiko/Next",
		host_link:
			"https://avxm-top-app.netlify.app/courses/financial-analytics",
	},
	{
		name: "Dashboard",
		description:
			"Это приборная панель, написанная благодоря библиотеки syncfusion, в ней есть анимации, работа с данными, графики, таблицы.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "syncfusion",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: dashboard,
		source_code_link: "https://github.com/katakuxiko/Dashboard",
		host_link: "https://dashboard-syncfysion.netlify.app",
	},
	{
		name: "Конструктор интерактивных книг",
		description:
			"Это моя дипломная работа, пишу её на react + typescript, суть заключается в том, чтобы дать пользователю создать свою книгу, в которой будет выбор во время чтения, и последующие старницы будут генерироваться в зависимости от выборов человека.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "typescript",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
			{
				name: "mob-x",
				color: "blue-text-gradient",
			},
			{
				name: "golang",
				color: "pink-text-gradient",
			},
			{
				name: "golang",
				color: "green-text-gradient",
			},
			{
				name: "rest-api",
				color: "blue-text-gradient",
			},
		],
		image: diplom,
		source_code_link: "https://github.com/katakuxiko/diplom-react",
		host_link: "https://avxm.netlify.app",
	},
];

export { services, technologies, experiences, testimonials, projects };
