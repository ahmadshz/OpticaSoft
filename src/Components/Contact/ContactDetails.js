import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'
import { SlLocationPin } from 'react-icons/sl'
import { motion } from 'framer-motion'

const ContactDetails = () => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='w-full lg:w-1/2   order-1 lg:order-2 pt-8'>
            <h1 className='text-2xl text-[#1E3851]'>Contact Details</h1>
            <div className='flex items-center gap-4 mt-4 text-[#99a0ae]'>
                <SlLocationPin size={28} />
                <span className='text-lg'>Tripoli, North Lebanon</span>
            </div>
            <div className='flex items-center gap-4 mt-4 text-[#99a0ae]'>
                <MdOutlineEmail size={28} />
                <span className='text-lg'>shmeitahmad3@gmail.com</span>
            </div>
            <div className='flex items-center gap-4 mt-4 text-[#99a0ae]'>
                <FiPhone size={28} />
                <span className='text-lg'>+961 81 281 216</span>
            </div>
        </motion.div>)
}

export default ContactDetails