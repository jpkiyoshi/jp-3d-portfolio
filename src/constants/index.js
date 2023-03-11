import {
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
	photoshop,
	styledcomponents,
	nextjs,
	sanity,
	meta,
	starbucks,
	tesla,
	shopify,
	contas,
	imoveis,
	sportsnews,
	adivinhe,
	jpconverter,
	frontendmentor,
	threejs,
} from '../assets';

export const navLinks = [
	{
		id: 'sobre',
		title: 'Sobre',
	},
	{
		id: 'projetos',
		title: 'Projetos',
	},
	{
		id: 'contato',
		title: 'Contato',
	},
];

const services = [
	{
		title: 'Desenvolvedor Web',
		icon: web,
	},
	{
		title: 'React Native Developer',
		icon: mobile,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'Content Creator',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React',
		icon: reactjs,
	},
	{
		name: 'Next.js',
		icon: nextjs,
	},
	{
		name: 'TailwindCSS',
		icon: tailwind,
	},
	{
		name: 'styled-components',
		icon: styledcomponents,
	},
	{
		name: 'Sanity.io',
		icon: sanity,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'Photoshop',
		icon: photoshop,
	},
];

const experiences = [
	{
		title: 'React.js Developer',
		company_name: 'Starbucks',
		icon: starbucks,
		iconBg: '#383E56',
		date: 'March 2020 - April 2021',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	{
		title: 'React Native Developer',
		company_name: 'Tesla',
		icon: tesla,
		iconBg: '#E6DEDD',
		date: 'Jan 2021 - Feb 2022',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	{
		title: 'Web Developer',
		company_name: 'Shopify',
		icon: shopify,
		iconBg: '#383E56',
		date: 'Jan 2022 - Jan 2023',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	{
		title: 'Full stack Developer',
		company_name: 'Meta',
		icon: meta,
		iconBg: '#E6DEDD',
		date: 'Jan 2023 - Present',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: 'Contas de Fadas',
		description:
			'E-commerce desenvolvido utilizando Next.js e Sanity.io para facilitar o upload dos produtos pelo usuário.',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'sanity',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
		],
		image: contas,
		source_code_link: 'https://github.com/jpkiyoshi/contasdefadas-nextjs',
		live_site_link: 'https://contasdefadas.vercel.app/',
	},
	{
		name: 'Venda de Imóveis',
		description:
			'Exemplo de site de venda de imóveis desenvolvido para uma empresa fictícia.',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'typescript',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
		],
		image: imoveis,
		source_code_link: 'https://github.com/jpkiyoshi/finite7-test',
		live_site_link: 'https://venda-de-imoveis-exemplo.netlify.app/',
	},
	{
		name: 'Site de Notícias',
		description:
			'Exemplo de site de notícias esportivas desenvolvido para uma empresa fictícia.',
		tags: [
			{
				name: 'html',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'green-text-gradient',
			},
			{
				name: 'javascript',
				color: 'pink-text-gradient',
			},
		],
		image: sportsnews,
		source_code_link: 'https://github.com/jpkiyoshi/newsgrid',
		live_site_link: 'https://esportesnoticias.netlify.app/',
	},
	{
		name: 'Adivinhe o Número',
		description:
			'Jogo de adivinhação desenvolvido completamento do zero, utilizando apenas HTML, CSS e JavaScript.',
		tags: [
			{
				name: 'html',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'green-text-gradient',
			},
			{
				name: 'javascript',
				color: 'pink-text-gradient',
			},
		],
		image: adivinhe,
		source_code_link: 'https://github.com/jpkiyoshi/adivinhe-o-numero',
		live_site_link: 'https://guessthenumber-jp.netlify.app/',
	},
	{
		name: 'JP Converter',
		description:
			'Ferramenta que mostra o preço do kg/litro de um produto baseado em seu preço e seu peso/volume.',
		tags: [
			{
				name: 'html',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'green-text-gradient',
			},
			{
				name: 'javascript',
				color: 'pink-text-gradient',
			},
		],
		image: jpconverter,
		source_code_link: 'https://github.com/jpkiyoshi/jp-converter',
		live_site_link: 'https://jp-converter.netlify.app/',
	},
	{
		name: 'frontendmentor.io *',
		description:
			'Minhas soluções aos desafios do frontendmentor.io (site que fornece desafios de design e desenvolvimento front-end)',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'typescript',
				color: 'green-text-gradient',
			},
			{
				name: 'react',
				color: 'pink-text-gradient',
			},
		],
		image: frontendmentor,
		source_code_link: 'https://github.com/jpkiyoshi',
		live_site_link: 'https://www.frontendmentor.io/profile/jpkiyoshi/solutions',
	},
];

export { services, technologies, experiences, testimonials, projects };
