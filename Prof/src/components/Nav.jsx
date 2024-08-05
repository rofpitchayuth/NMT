import React ,{ useState } from 'react';


function Nav() {
  
const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  
  return (
    <nav>
      <div className="bg-dark-900 p-4">
        <div className="flex items-center justify-between">
          <div className= "text-white text-2xl font-bold">
              Prof Tutor
          </div>
          {/* Toggle Menu */}
          <div className="md:hidden">
              <button id="menu-toggle" className="text-white" onClick={toggleMenu}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox ="0 0 24 24" className="w-6 h-6">
                      <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
              </button>
          </div>
          <ul className ="hidden md:flex space-x-4">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/service" className="text-white">Service</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>

          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      
      {isMenuOpen ? (
        <ul className="flex-col md:hidden">
          <li className ="px-3 py-3" ><a  href="/" className="text-white">Home</a></li>
          <li className ="px-3 py-3" ><a  href="/about" className="text-white">About</a></li>
          <li className ="px-3 py-3" ><a  href="/service" className="text-white">Services</a></li>
          <li className ="px-3 py-3" ><a  href="/contact" className="text-white">Contact</a></li>
          
        </ul>
      ) : null}
    </nav>
  );
}

export default Nav;