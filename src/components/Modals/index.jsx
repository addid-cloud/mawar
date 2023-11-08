import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modals = ({ isOpen, onClose, children }) => {
return (
<AnimatePresence>
    {isOpen && (
    <motion.div initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '100%' }}
        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <button onClick={onClose} className=" text-red-400 hover:text-red-700">
                Close
            </button>
            {children}
        </div>
    </motion.div>
    )}
</AnimatePresence>
);
};

export default Modals;