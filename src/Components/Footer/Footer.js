import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import {  TfiWorld } from 'react-icons/tfi'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const month = new Date().toLocaleString("default", { month: "short" }); // "Jun" مثلاً

    return (
        <div className='flex justify-center flex-col items-center gap-10 text-3xl'>
            <div className='h-[2px] rounded w-3/4 bg-[#6B7280] dark:bg-[#1E3851] mb-20' />
            <h1 className='text-4xl'>Follow Us</h1>

            <div className='flex justify-center items-center gap-4'>
                <a href='https://opticasoft.vercel.app' className='p-2 bg-[#eeeeee] dark:bg-[#1E3851] rounded-lg hover:text-blue-500 text-[#9CA3AF] duration-500'>
                    <TfiWorld />
                </a>

                <a href='https://www.instagram.com/opticasoft' className='p-2 bg-[#eeeeee] dark:bg-[#1E3851] rounded-lg hover:text-blue-500 text-[#9CA3AF] duration-500'>
                    <BsInstagram />
                </a>
                <a href='https://www.tiktok.com/@opticasoft' className='p-2 bg-[#eeeeee] dark:bg-[#1E3851] rounded-lg hover:text-blue-500 text-[#9CA3AF] duration-500'>
                    <FaTiktok />
                </a>
                <a
                    href='https://mail.google.com/mail/?view=cm&fs=1&to=opticasoft5@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 bg-[#eeeeee] dark:bg-[#1E3851] rounded-lg hover:text-blue-500 text-[#9CA3AF] duration-500'
                >
                    <MdEmail />
                </a>

            </div>

            <div className='text-xl text-center py-10'>
                &copy; {currentYear} - {month} OpticaSoft. All rights reserved.
            </div>
        </div>
    )
}

export default Footer
