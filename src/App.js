import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Website from './Pages/Website';
import AboutMe from './Pages/AboutMe';
import Projects from './Components/Projects/Projects';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import { TbArrowBigUpLines } from 'react-icons/tb';

function App() {
  const [showArrow, setShowArrow] = useState(false);

  const handlegoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowArrow(true)
      }
      else {
        setShowArrow(false)
      }
    }
     window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="dark:bg-[#0D2438] dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/About" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
      <div
        className={`fixed bottom-4 right-4 bg-[#102D44] p-2 md:p-4 rounded-full text-white transition-opacity duration-300 ${showArrow ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <TbArrowBigUpLines size={35} onClick={handlegoToTop} />
      </div>
    </div>
  );
}

export default App;
