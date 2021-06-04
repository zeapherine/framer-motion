import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* Variants
		1) it allows us to extract the object in outside object and reference to it.
		2) it allows us to propagate variant changes through the dom
			resulting in cleaner code.
		3) it allows us to create timing relationship between children motion
			and parent motion using TRANSITION Orchestration properties.

*/

const containerVariants = {
	hidden: {
		opacity: 0,
		x: '100vw',
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			delay: 0.5,
		},
	},
};

const nextVariants = {
	hidden: {
		x: '-100vw',
	},
	visible: {
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 120,
		},
	},
};

const buttonVariants = {
	hover: {
		scale: 1.1,
		textShadow: '0px 0px 8px rgb(255, 255, 255)',
		boxShadow: '0px 0px 8px rgb(255, 255, 255)',
		transition: {
			duration: 0.3,
			yoyo: Infinity,
			// yoyo: 10, // key frames to scale 1 to 1.1 for 10 times
		},
	},
};

const Base = ({ addBase, pizza }) => {
	const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

	return (
		<motion.div
			className='base container'
			// initial={{ x: '100vw' }}
			// animate={{ x: 0 }}
			// transition={{ type: 'spring', delay: 0.5 }} //Replaced with variants object.
			variants={containerVariants}
			initial='hidden' //this two lines can be inherited by children, eg: down below, div with class='next'
			animate='visible' //this two lines can be inherited by children, eg: down below, div with class='next'
		>
			<h3>Step 1: Choose Your Base</h3>
			<ul>
				{bases.map((base) => {
					let spanClass = pizza.base === base ? 'active' : '';
					return (
						<motion.li
							key={base}
							onClick={() => addBase(base)}
							whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
							transition={{ type: 'spring', stiffness: 300 }}
						>
							<span className={spanClass}>{base}</span>
						</motion.li>
					);
				})}
			</ul>

			{pizza.base && (
				<motion.div
					className='next'
					variants={nextVariants}
					// initial='hidden'			/* we don't need to include this two lines, it is getting these properties from parent.
					// animate='visible'
				>
					<Link to='/toppings'>
						<motion.button
							variants={buttonVariants}
							whileHover='hover'
						>
							Next
						</motion.button>
					</Link>
				</motion.div>
			)}
		</motion.div>
	);
};

export default Base;
