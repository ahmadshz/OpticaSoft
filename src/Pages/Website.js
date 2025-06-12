import React from 'react'
import Hero from '../Components/Hero/Hero'
import Projects from '../Components/Projects/Projects'
import Contact from '../Components/Contact/Contact'
import AboutMe from './AboutMe'

const Website = () => {
    return (
        <div className='flex flex-col gap-4'>
            <Hero />
            <AboutMe/>
            <Projects />
            <Contact />
        </div>
    )
}

export default Website