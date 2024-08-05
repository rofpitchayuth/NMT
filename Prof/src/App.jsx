import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import FooterPage from './components/Footer';

import { motion } from "framer-motion";


function App () {
  return (
    <div className = "bg-slate-900" >
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;