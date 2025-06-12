import React, { useState } from 'react'
import NavbarMobile from './NavbarMobile';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assests/logo/opti_2.png'
import { TbMenu3 } from 'react-icons/tb';

const Navbar = () => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }
    const top = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div>
            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='  fixed bg-gray-250/50 backdrop-blur-md shadow-md   z-10  w-full '>
                <div className='flex justify-between items-center container h-24 '>
                    <Link to='/'>
                        <img className=' w-32 lg:w-40' src={logo} alt='' />
                    </Link>
                    <div className='   hidden lg:flex justify-center items-center gap-14 text-[22px] '>
                        <NavLink to='/' onClick={top}
                            className={({ isActive }) => isActive ? 'text-blue-500' : 'cursor-pointer hover:text-blue-500 duration-500'}>Home</NavLink>
                        <NavLink to='/about' onClick={top}
                            className={({ isActive }) => isActive ? 'text-blue-500' : 'cursor-pointer hover:text-blue-500 duration-500'}>About Us</NavLink>
                        <NavLink to='/projects' onClick={top}
                            className={({ isActive }) => isActive ? 'text-blue-500' : 'cursor-pointer hover:text-blue-500 duration-500'}>Projects</NavLink>
                        <NavLink to='/contact' onClick={top}
                            className={({ isActive }) => isActive ? 'text-blue-500' : 'cursor-pointer hover:text-blue-500 duration-500'}>Contact</NavLink>
                    </div>
                       
                        <TbMenu3 onClick={handleShow} className='text-3xl lg:hidden cursor-pointer' />


                </div>

            </motion.div>
            {show ?
                <NavbarMobile handleShow={handleShow} /> : null
            }
        </div>
    )
}

export default Navbar