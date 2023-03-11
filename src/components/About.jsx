import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className='xs:w-[250px] w-full'>
			<motion.div
				variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
				className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
				>
					<img src={icon} alt={title} className='w-16 h-16 object-contain' />
					<h3 className='text-white text-[20px] font-bold text-center'>
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introdução</p>
				<h2 className={styles.sectionHeadText}>Sobre mim.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
			>
				Olá! Sou um desenvolvedor front-end apaixonado por criar experiências
				digitais incríveis. Trabalho arduamente para transformar ideias em
				realidade na tela, sempre procurando aprender e melhorar minhas
				habilidades.
				<br />
				Eu tenho uma ampla gama de habilidades na tecnologia da web, incluindo
				conhecimentos profundos em HTML, CSS, JavaScript e TypeScript. Além disso,
				eu tenho experiência em frameworks modernos como React e Next.js, bem como
				em bibliotecas de estilo como Styled-Components e TailwindCSS.
			</motion.p>
			{/* 
			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div> */}
		</>
	);
};

export default SectionWrapper(About, 'sobre');
