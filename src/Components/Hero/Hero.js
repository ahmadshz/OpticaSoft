import React from 'react';
import LottieFiles from './LottieFiles';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className=" h-screen  container ">
            <div className=' flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 md:gap-8 lg:gap-4 h-full pt-48 md:pt-0'>
                <div className="flex items-center h-full pt-32 md:pt-0 -mt10">
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="uppercase mb-4 text-3xl lg:text-5xl text-[#1E3851]  font-bold tracking-wider"
                        >
                            Welcome to
                        </motion.h1>
                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="uppercase mb-4 text-3xl lg:text-5xl text-[#1E3851]  font-bold tracking-wider"
                        >
                            Opticasoft
                        </motion.h1>

                        <motion.h2
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg sm:text-xl lg:text-2xl text-[#6B7280]  mb-4 font-semibold tracking-wide"
                        >
                            Smart Software Solutions Company
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-sm sm:text-base lg:text-lg text-[#4B5563] dark:text-gray-300 max-w-lg"
                        >
                            We specialize in crafting innovative web development solutions tailored to your business goals.
                        </motion.p>
                    </div>
                </div>

                <LottieFiles />
            </div>
        </div>
    );
};

export default Hero;
