import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Toppings = ({ addTopping, pizza }) => {
	let toppings = [
		'mushrooms',
		'peppers',
		'onions',
		'olives',
		'extra cheese',
		'tomatoes',
	];

	return (
		<div className='toppings container'>
			<h3>Step 2: Choose Toppings</h3>
			<ul>
				{toppings.map((topping) => {
					let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
					return (
						<li key={topping} onClick={() => addTopping(topping)}>
							<span className={spanClass}>{topping}</span>
						</li>
					);
				})}
			</ul>

			<Link to='/order'>
				<motion.button
					whileHover={{
						scale: 1.1,
						textShadow: '0px 0px 8px rgb(255, 255, 255)',
						boxShadow: '0px 0px 8px rgb(255, 255, 255)',
					}}
				>
					Order
				</motion.button>
			</Link>
		</div>
	);
};

export default Toppings;
