import React from 'react'
import Hero from '../Components/Hero/Hero'
import Projects from '../Components/Projects/Projects'
import Contact from '../Components/Contact/Contact'
import AboutMe from './AboutMe'

const Website = () => {
    return (
        <div>
            <Hero />
            <AboutMe/>
            <Projects />
            <Contact />
        </div>
    )
}

export default Website