import React from 'react';
import { motion, useCycle } from 'framer-motion';

// Cycles through a series of visual properties.
// Can be used to toggle between or cycle through animations.
// It works similar to useState in React.
// It is provided an initial array of possible states,
// and returns an array of two arguments.

// An index value can be passed to the returned cycle function to cycle to a specific index.

const loaderVariants = {
	animationOne: {
		x: [-20, 20],
		y: [0, -30],
		transition: {
			x: {
				yoyo: Infinity,
				duration: 0.5,
			},
			y: {
				yoyo: Infinity,
				duration: 0.25,
				ease: 'easeOut',
			},
		},
	},
	animationTwo: {
		y: [0, -40],
		x: 0,
		transition: {
			y: {
				yoyo: Infinity,
				duration: 0.25,
				ease: 'easeOut',
			},
		},
	},
};

const Loader = () => {
	const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');

	return (
		<>
			<motion.div
				className='loader'
				variants={loaderVariants}
				animate={animation}
				// animate='animationOne'
			></motion.div>
			<div className='loaderCycle' onClick={() => cycleAnimation()}>Cycle Loader</div>
		</>
	);
};

export default Loader;
