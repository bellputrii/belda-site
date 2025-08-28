import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2C4E35] text-[#FFA800] mt-20 py-12 text-center">
      <h3 className="text-xl font-bold mb-2">Belda Putri Pramono</h3>
      <p className="mb-4">Frontend Developer</p>
      <nav className="space-x-4 text-sm mb-6">
        <a href="#home" className="hover:text-white transition-colors">Home</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#education" className="hover:text-white transition-colors">Educations</a>
        <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </nav>
      <p className="text-xs">©2025 – Created by Belda Putri Pramono. All rights reserved</p>
    </footer>
  );
};

export default Footer;