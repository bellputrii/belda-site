import React from 'react';

const Footer = () => {
  // Social media links data
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: '#',
      color: 'text-blue-600'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      url: '#',
      color: 'text-pink-600'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.49"/>
        </svg>
      ),
      url: 'https://wa.me/6289673384911',
      color: 'text-green-600'
    }
  ];

  return (
    <footer className="bg-[#2C4E35] text-white mt-20 py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand section */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#FFA800]">Belda Putri Pramono</h3>
            <p className="mb-3 md:mb-4 text-base md:text-lg">Frontend Developer</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm order-1 md:order-2 mb-4 md:mb-0">
            <a href="#home" className="hover:text-[#FFA800] transition-colors duration-300 py-1">Home</a>
            <a href="#about" className="hover:text-[#FFA800] transition-colors duration-300 py-1">About</a>
            <a href="#skills" className="hover:text-[#FFA800] transition-colors duration-300 py-1">Skills</a>
            <a href="#education" className="hover:text-[#FFA800] transition-colors duration-300 py-1">Education</a>
            <a href="#portfolio" className="hover:text-[#FFA800] transition-colors duration-300 py-1">Portfolio</a>
            <a href="#contact" className="hover:text-[#FFA800] transition-colors duration-300 py-1">Contact</a>
          </nav>

          {/* Social links */}
          <div className="flex flex-col items-center md:items-end order-3">
            <p className="mb-3 md:mb-4 font-medium text-sm md:text-base text-[#FFA800]">Connect with me</p>
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white p-2 md:p-3 rounded-full transition-all duration-300 ${link.color} hover:scale-110 shadow-md`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#FFA800] border-opacity-30 my-6 md:my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs md:text-sm text-center">
          <p>© 2025 – Created by Belda Putri Pramono. All rights reserved</p>
          <div className="flex items-center gap-2 text-[#FFA800]">
            <span className="opacity-75">Website Version: 1.0.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;