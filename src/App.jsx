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
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App