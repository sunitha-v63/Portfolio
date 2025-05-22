import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages.jsx/Home'
import About from './Pages.jsx/About';
import Contact from './Pages.jsx/Contact';
import Footer from './Components/Footer';
import Skills from './Pages.jsx/Skills';
import Project from './Pages.jsx/Project';
import NotFound from './Pages.jsx/NotFound';
import Visionary from './Pages.jsx/Visionary';
import Education from './Pages.jsx/Education';
import Project1 from './Components/Project1';
import Project2 from './Components/Project2';
import Project3 from './Components/Project3';
import Project4 from './Components/Project4';
import Project5 from './Components/Project5';

function App() {
  const name = "SUNITHA";
  const role = "DEVELOPER";
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home name={name} role={role} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/project5" element={<Project5 />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/visionary" element={<Visionary />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App