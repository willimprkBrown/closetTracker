import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Closet from './components/Closet/Closet';
import Background from './components/Background/Background';
import Home from "./components/Home/Home";

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const handleSectionChange = (section) => {
    console.log('Section changed to:', section);
    setActiveSection(section);
  };


  return (
    <>
      {/* <Background/> */}
      <NavBar onSectionChange={handleSectionChange} />
      
      <main>
        {/* <section id="home" style={{ display: activeSection === 'home' ? 'block' : 'none' }}>
        </section>
        
        <section id="color-analysis" style={{ display: activeSection === 'color-analysis' ? 'block' : 'none' }}>
        </section>
        
        <section id="closet-tracker" style={{ display: activeSection === 'closet-tracker' ? 'block' : 'none' }}>
          <ClosetTracker />
        </section>
        
        <section id="outfit-generator" style={{ display: activeSection === 'outfit-generator' ? 'block' : 'none' }}>
        </section> */}
        <Routes>
          {/* <Route path="/home" element={<Home/>}/> */}
          <Route path="/closet" element={<Closet/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;