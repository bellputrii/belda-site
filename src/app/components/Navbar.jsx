"use client";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menutup mobile menu ketika link diklik
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full bg-[#2C4E35] font-bold text-white py-3 px-6 flex justify-between items-center shadow-md z-50 transition-all duration-300 ${
          isScrolled ? '' : 'md:top-2 md:rounded-b-4xl md:rounded-t-4xl'
        }`}
      >
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-md">
            <img 
              src="/logo.png" 
              alt="Belda Putri Pramono Logo" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkZBODAwIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyMCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzJDNEUzNSI+QjwvdGV4dD4KPC9zdmc+";
              }}
            />
          </div>
          <span className="font-semibold text-lg">Belda Putri Pramono</span>
        </div>
        
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#home" className="hover:text-[#FFA800] transition-colors duration-300 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA800] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-[#FFA800] transition-colors duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA800] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#skills" className="hover:text-[#FFA800] transition-colors duration-300 relative group">
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA800] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#education" className="hover:text-[#FFA800] transition-colors duration-300 relative group">
            Educations
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA800] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#portfolio" className="hover:text-[#FFA800] transition-colors duration-300 relative group">
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA800] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-[#FFA800] transition-colors duration-300 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA800] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
       
        <button className="hidden md:block bg-[#FFA800] hover:bg-[#e59400] text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          Contact Me
        </button>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}></div>

      {/* Mobile menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#2C4E35] text-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-md">
              <img 
                src="/logo.png" 
                alt="Belda Putri Pramono Logo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkZBODAwIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyMCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzJDNEUzNSI+QjwvdGV4dD4KPC9zdmc+";
                }}
              />
            </div>
            <button 
              className="p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <span className="block w-6 h-0.5 bg-white transform rotate-45 translate-y-0.5"></span>
              <span className="block w-6 h-0.5 bg-white transform -rotate-45 -translate-y-0.5"></span>
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 text-lg">
            <a href="#home" className="hover:text-[#FFA800] transition-colors duration-300 py-2 border-b border-gray-600" onClick={handleNavClick}>
              Home
            </a>
            <a href="#about" className="hover:text-[#FFA800] transition-colors duration-300 py-2 border-b border-gray-600" onClick={handleNavClick}>
              About
            </a>
            <a href="#skills" className="hover:text-[#FFA800] transition-colors duration-300 py-2 border-b border-gray-600" onClick={handleNavClick}>
              Skills
            </a>
            <a href="#education" className="hover:text-[#FFA800] transition-colors duration-300 py-2 border-b border-gray-600" onClick={handleNavClick}>
              Educations
            </a>
            <a href="#portfolio" className="hover:text-[#FFA800] transition-colors duration-300 py-2 border-b border-gray-600" onClick={handleNavClick}>
              Portfolio
            </a>
            <a href="#contact" className="hover:text-[#FFA800] transition-colors duration-300 py-2 border-b border-gray-600" onClick={handleNavClick}>
              Contact
            </a>
          </nav>
          
          <button className="mt-8 bg-[#FFA800] hover:bg-[#e59400] text-white px-5 py-3 rounded-full font-semibold transition-all duration-300 shadow-md">
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;