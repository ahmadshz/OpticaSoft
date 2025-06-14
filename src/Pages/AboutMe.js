import React, { useState } from 'react';
import img from '../assests/Image/dev.png';
import { motion } from 'framer-motion';
import specif from '../assests/icon/specif.png';
import design from '../assests/icon/designn.png';
import deploy from '../assests/icon/deploy.png';
import dev from '../assests/icon/deve.png';
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
    const navigate = useNavigate();
    const [flippedIndex, setFlippedIndex] = useState(null);

    const goto = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/contact');
    };

    // Animation variants for the flip cards
    const cardVariants = {
        initial: { rotateY: 0 },
        flipped: { rotateY: 180 }
    };

    const contentVariants = {
        initial: { rotateY: 180, opacity: 0 },
        flipped: { rotateY: 0, opacity: 1 }
    };

    const procedures = [
        {
            icon: specif,
            title: "Specifications",
            description: "We start by clearly defining project requirements and objectives to ensure a solid foundation."
        },
        {
            icon: design,
            title: "Design",
            description: "Our passionate team creates visually stunning and user-friendly designs that match your brand and vision.",
            iconClass: "ml-3"
        },
        {
            icon: dev,
            title: "Development",
            description: "Building the project with a focus on innovation, robust functionality, and adaptability."
        },
        {
            icon: specif,
            title: "Testing",
            description: "Rigorous testing ensures that everything works seamlessly, delivering a top-notch user experience."
        },
        {
            icon: deploy,
            title: "Deployment",
            description: "Finally, we deploy the finished product, making it accessible to your audience."
        }
    ];

    const handleCardClick = (index) => {
        if (flippedIndex === index) {
            // Clicking the same card flips it back
            setFlippedIndex(null);
        } else {
            // Clicking a different card flips the previous one back and flips the new one
            setFlippedIndex(index);
        }
    };

    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-white dark:bg-[#0D2438]'>
           
        <div className='min-h-screen w-full container pb-20 pt-32 gap-10 flex flex-col'>
                {/* Introduction Section */}
                <div className='flex flex-col gap-2'>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-3xl lg:text-5xl  font-bold leading-tight text-[#1E3851] dark:text-white'
                    >
                        So you want to know about who we are.
                    </motion.h1>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='text-lg sm:text-xl lg:text-2xl font-bold leading-tight text-[#6B7280] dark:text-white'
                    >
                        We are glad you are here!
                    </motion.h2>
                </div>

                <motion.img 
                    src={img} 
                    alt='Development illustration'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                />

                {/* About Us Section */}
                <div className='flex flex-col gap-2'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl lg:text-5xl  font-bold leading-tight text-[#1E3851] dark:text-white"
                    >
                        About<span className="text-[#0D2438] dark:text-white pl-2">Us</span>
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className='text-sm sm:text-base lg:text-lg text-[#4B5563] dark:text-white'
                    >
                        At Opticasoft, we believe that technology is the cornerstone of business development and success in the digital age.
                        Our company was founded with the goal of providing innovative software solutions, website design,
                        and applications that meet clients' expectations and support their growth.
                        We specialize in designing and developing websites and applications tailored to each client's needs,
                        with a focus on quality and ease of use. Our team combines a spirit of innovation with a strong commitment to delivering the best technical solutions.
                        At Opticasoft, we strive to build long-term partnerships with our clients by offering practical and effective solutions that contribute to the success of their projects and help them achieve their goals.
                        Our vision is to be the first choice and the most trusted tech partner for anyone aiming for excellence.
                    </motion.p>
                </div>

                {/* Procedures Section */}
                <div className='mt-24'>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-3xl lg:text-5xl  font-bold leading-tight flex flex-col gap-1 text-[#1E3851] dark:text-white'
                    >
                        <span>Procedures</span>
                        <span className='-my-2'>we take.</span>
                    </motion.h1>

                    <div className="py-6 lg:py-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-12">
                            {procedures.map((procedure, index) => (
                                <motion.div 
                                    key={index}
                                    className="relative h-64 w-full cursor-pointer"
                                    initial="initial"
                                    animate={flippedIndex === index ? "flipped" : "initial"}
                                    onClick={() => handleCardClick(index)}
                                    transition={{ duration: 0.5 }}
                                    style={{ perspective: "1000px" }}
                                >
                                    {/* Front of the card */}
                                    <motion.div 
                                        variants={cardVariants}
                                        className="absolute inset-0 flex flex-col items-center justify-center bg-[#f2f3f5] dark:bg-[#102D44] px-6 py-8 shadow-lg rounded-xl"
                                        style={{ backfaceVisibility: "hidden" }}
                                    >
                                        <img 
                                            className={`h-24 w-24 ${procedure.iconClass || ''}`} 
                                            src={procedure.icon} 
                                            alt={procedure.title} 
                                        />
                                        <h2 className="text-2xl font-semibold text-[#6B7280] dark:text-white mb-4 text-center">
                                            {procedure.title}
                                        </h2>
                                    </motion.div>
                                    
                                    {/* Back of the card */}
                                    <motion.div 
                                        variants={contentVariants}
                                        className="absolute inset-0 flex flex-col items-center justify-center bg-[#f2f3f5] dark:bg-[#102D44] px-6 py-8 shadow-lg rounded-xl"
                                        style={{ backfaceVisibility: "hidden" }}
                                    >
                                        <p className="text-lg text-[#6B7280] dark:text-white p-4 text-center">
                                            {procedure.description}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact CTA Section */}
                <div className='  flex flex-col gap-2'>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-3xl lg:text-5xl  font-bold leading-tight text-[#1E3851] dark:text-white'
                    >
                        <span>Get in touch,</span>
                        <span className='text-[#AFAFAF]'> let us create your success story</span>
                    </motion.h1>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='text-xl 2xl:text-[32px] leading-tight mt-3 md:mt-8 text-[#b5b6ba] dark:text-white'
                    >
                        Let us create something you feel unique about, something that make you rise in the digital world.{' '}
                        <span 
                            onClick={goto} 
                            className='cursor-pointer text-[#1E3851] dark:text-white underline hover:text-[#0D2438] dark:hover:text-gray-300 transition-colors'
                        >
                            Contact Us
                        </span>
                    </motion.h3>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;