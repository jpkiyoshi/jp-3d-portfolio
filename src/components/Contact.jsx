import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);

	const handleChange = e => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				'service_e5dy8ed',
				'template_2i11hhg',
				{
					from_name: form.name,
					to_name: 'João Paulo',
					from_email: form.email,
					to_email: 'kiyoshi33@gmail.com',
					message: form.message,
				},
				'DHDxiMgsOi_STPx8-'
			)
			.then(
				() => {
					setLoading(false);
					alert('Obrigado! Retornarei seu contato o mais rápido possível.');

					setForm({
						name: '',
						email: '',
						message: '',
					});
				},
				error => {
					setLoading(false);

					console.log(error);

					alert('Algo deu errado.');
				}
			);
	};

	return (
		<div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
			>
				<p className={styles.sectionSUb}>Conecte-se comigo</p>
				<h3 className={styles.sectionHeadText}>Contato.</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className='mt-12 flex flex-col gap-8'
				>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4 '>Seu nome</span>
						<input
							type='text'
							name='name'
							value={form.name}
							onChange={handleChange}
							placeholder='Qual é o seu nome?'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4 '>Seu Email</span>
						<input
							type='email'
							name='email'
							value={form.email}
							onChange={handleChange}
							placeholder='Queal é o seu email?'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4 '>Sua Mensagem</span>
						<textarea
							rows='7'
							name='message'
							value={form.message}
							onChange={handleChange}
							placeholder='Como posso te ajudar?'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium'
						/>
					</label>

					<button
						type='submit'
						className='bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
					>
						{loading ? 'Enviando...' : 'Enviar'}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, 'contato');
