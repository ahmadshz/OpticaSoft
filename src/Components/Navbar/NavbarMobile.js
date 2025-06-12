import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavbarMobile = ({ handleShow }) => {
  
  const close = () => {
    window.scroll({top: 0, behavior: 'smooth'});
    handleShow();
  };
  return (
    <div
      className="lg:hidden fixed inset-0 flex justify-center items-center  bg-gray-400/50 backdrop-blur-md z-50"
    >
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: [-100, 40, 0, 5, 0] }}
        transition={{ duration: 0.5 }}
        className="w-3/4 p-3 h-fit m-10 rounded-lg flex flex-col gap-6 bg-[#EEF2FF] dark:bg-[#1E3851] dark:text-white py-4 max-w-lg"
      >
        <div className="relative dark:text-white">
          <IoCloseSharp
            onClick={handleShow}
            className="absolute right-4 hover:rotate-180 hover:text-blue-400 transition-all text-2xl cursor-pointer"
          />
        </div>
        <Link to={'/'} onClick={close} className="text-lg w-full pl-2 border-b-2 border-[#e2e0e0] font-semibold cursor-pointer hover:text-blue-400">
          Home
        </Link>
        <Link to={'/about'} onClick={close} className="text-lg w-full pl-2 border-b-2 border-[#e2e0e0] font-semibold cursor-pointer hover:text-blue-400">
          About Us
        </Link>
        <Link to={'/projects'} onClick={close} className="text-lg w-full pl-2 border-b-2 border-[#e2e0e0] font-semibold cursor-pointer hover:text-blue-400">
          Projects
        </Link>
       
        <Link to={'/contact'} onClick={close} className="text-lg w-full pl-2 border-b-2 border-[#e2e0e0] font-semibold cursor-pointer hover:text-blue-400">
          Contact
        </Link>
      </motion.div>
    </div>
  );
};

export default NavbarMobile;
