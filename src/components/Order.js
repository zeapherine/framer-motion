import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
			mass: 0.4, // higher the mass, slower movement.
			damping: 8, // higher the strength of the opposing force, lesser oscillation.
			when: 'beforeChildren',
			staggerChildren: 0.4, //  if staggerChildren is 0.01, the first child will be delayed by 0 seconds, the second by 0.01, the third by 0.02 and so on.
		},
	},
	exit: {
		x: '-100vw',
		transition: {
			ease: 'easeInOut',
		},
	},
};

const childVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

const Order = ({ pizza, setShowModal }) => {
	useEffect(() => {
		setTimeout(() => {
			setShowModal(true);
		}, 5000);
	}, [setShowModal]);
	
	return (
		<motion.div
			className='container order'
			variants={containerVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			<h2>Thank you for your order :)</h2>

			<motion.p variants={childVariants}>
				You ordered a {pizza.base} pizza with:
			</motion.p>
			<motion.div variants={childVariants}>
				{pizza.toppings.map((topping) => (
					<div key={topping}>{topping}</div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Order;
