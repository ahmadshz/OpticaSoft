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
            className='w-full lg:w-1/2 order-1 lg:order-2 pt-8'
        >
            <h1 className='text-3xl font-semibold text-[#1E3851] mb-8'>Contact Details</h1>

            <div className='space-y-8'>
                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm ">
                    <div className='p-2  rounded-full'>
                        <MdOutlineEmail size={22} className='text-[#1E3851]' />
                    </div>
                    <div>
                        <h3 className='text-sm font-medium text-gray-500'>Email</h3>
                        <p className='text-lg text-[#1E3851]'>opticasoft@gmail.com</p>
                    </div>
                </div>

                {/* Ahmad Shmeit */}
                <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm ">
                    <div className='flex items-start gap-4'>
                        <div className='p-2  rounded-full'>
                            <FiPhone size={22} className='text-[#1E3851]' />
                        </div>
                        <div>
                            <h3 className='text-sm font-medium text-gray-500'>Phone (Lebanon)</h3>
                            <p className='text-lg text-[#1E3851]'>+961 81 281 216</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4'>
                        <div className='p-2  rounded-full'>
                            <SlLocationPin size={22} className='text-[#1E3851]' />
                        </div>
                        <div>
                            <h3 className='text-sm font-medium text-gray-500'>Location</h3>
                            <p className='text-lg text-[#1E3851]'>Tripoli, North Lebanon</p>
                        </div>
                    </div>
                </div>

                {/* Opticasoft */}
                <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm ">
                    <div className='flex items-start gap-4'>
                        <div className='p-2  rounded-full'>
                            <FiPhone size={22} className='text-[#1E3851]' />
                        </div>
                        <div>
                            <h3 className='text-sm font-medium text-gray-500'>Phone (Turkey)</h3>
                            <p className='text-lg text-[#1E3851]'>+90 553 099 90 00</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4'>
                        <div className='p-2  rounded-full'>
                            <SlLocationPin size={22} className='text-[#1E3851]' />
                        </div>
                        <div>
                            <h3 className='text-sm font-medium text-gray-500'>Location</h3>
                            <p className='text-lg text-[#1E3851]'>Turkey</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactDetails