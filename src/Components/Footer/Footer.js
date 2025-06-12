import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { TfiLinkedin, TfiWorld } from 'react-icons/tfi'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const month = new Date().toLocaleString("default", { month: "long" });

    return (
        <div className=' flex justify-center  flex-col items-center  gap-10 text-3xl'>
            <div className='h-[2px] rounded w-3/4 bg-[#6B7280] dark:bg-[#1E3851] mb-20' />
            <h1 className='text-4xl'>Follow Us</h1>
            <div className='flex justify-center items-center gap-4'>
                <a href='https://portfolio-ahmdshmeit.netlify.app' className='p-2 bg-[#eeeeee] dark:bg-[#1E3851] rounded-lg hover:text-blue-500 text-[#9CA3AF] duration-500'>
                    <TfiWorld />
                </a>
                <a href='https://github.com/ahmadshz' className='p-2 bg-[#eeeeee] dark:bg-[#1E3851] rounded-lg hover:text-blue-500 text-[#9CA3AF] duration-500'>
                    <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/ahmad-shmeit-702a10243' className='p-2 bg-[#eeeeee] dark:bg-[#1E3851] rounded-lg hover:text-blue-500 text-[#9CA3AF] duration-500'>
                    <TfiLinkedin />
                </a>
                <a href='https://wa.me/+96181281216' className='p-2 bg-[#eeeeee] dark:bg-[#1E3851] rounded-lg hover:text-blue-500 text-[#9CA3AF] duration-500'>
                    <BsWhatsapp />
                </a>
                <a href='mailto:shmeitahmad3@gmail.com' className='p-2 bg-[#eeeeee] dark:bg-[#1E3851] rounded-lg hover:text-blue-500 text-[#9CA3AF] duration-500'>
                    <MdEmail />
                </a>
            </div>
            <div className='text-xl text-center py-10'>
                &copy; {currentYear}-{month.slice(0, 3)}  Ahmad Shmeit. All rights reserved.
            </div>
        </div>
    )
}

export default Footer