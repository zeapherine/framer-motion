import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
	visible: {
		opacity: 1,
	},
	hidden: {
		opacity: 0,
	},
};

const Modal = ({ showModal, setShowModal }) => {
	return (
		<AnimatePresence exitBeforeEnter>
			{showModal && (
				<motion.div
					className='backdrop'
					variants={backdropVariants}
					initial='hidden'
					animate='visible'
				></motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
