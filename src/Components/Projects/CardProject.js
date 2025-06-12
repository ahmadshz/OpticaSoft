import React from 'react';
import { BiSolidShow } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CardProject = ({ name, desc, imgPath, link, github, animationKey }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: animationKey * 0.2 }} 
      className="bg-[#f2f3f5]  shadow-lg w-[305px] h-[450px] hover:scale-105 duration-500"
    >
      <img
        className="w-full h-[40%] mx-auto rounded-t-md "
        src={imgPath}
        alt="Project"
      />
      <div className="mt-6 m-2 text-slate-600 dark:text-white">
        <h5 className="text-2xl my-3 text-center">{name}</h5>
        <p className="overflow-y-auto h-32 p-3 scrollbar-thin scrollbar-thumb-gray-500">
          {desc}
        </p>
      </div>
      <div className="flex justify-between items-center text-2xl mt-10 mx-4 text-gray-500">
        <a
          className="hover:text-black duration-500"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {github ? <FaGithub size={25} /> : <div />}
        </a>
        <a
          className="hover:text-blue-500 duration-500"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiSolidShow size={25} />
        </a>
      </div>
    </motion.div>
  );
};

export default CardProject;
