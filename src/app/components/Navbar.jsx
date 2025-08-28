import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#2C4E35] font-bold text-white py-4 px-6 flex justify-between items-center shadow-md z-50">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-[#FFA800] rounded-full flex items-center justify-center font-bold">B</div>
        <span className="font-semibold text-lg">Belda Putri Pramono</span>
      </div>
      
      <nav className="hidden md:flex space-x-6 text-sm">
        <a href="#home" className="hover:text-[#FFA800] transition-colors">Home</a>
        <a href="#about" className="hover:text-[#FFA800] transition-colors">About</a>
        <a href="#skills" className="hover:text-[#FFA800] transition-colors">Skills</a>
        <a href="#education" className="hover:text-[#FFA800] transition-colors">Educations</a>
        <a href="#portfolio" className="hover:text-[#FFA800] transition-colors">Portfolio</a>
        <a href="#contact" className="hover:text-[#FFA800] transition-colors">Contact</a>
      </nav>
     
      <button className="bg-[#FFA800] hover:bg-[#ffaa00c5] text-white px-4 py-2 rounded-full font-semibold transition-colors">
        Contact Me
      </button>
    </header>
  );
};

export default Navbar;