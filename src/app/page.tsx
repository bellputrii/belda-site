"use client";
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'education', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Update scroll state for navbar
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home" 
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-12 pt-24"
      >
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#FFA800]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-[#2C4E35]/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-[#FFA800]/10 rounded-full animate-ping"></div>

        {/* Text */}
        <div className="md:w-1/2 max-w-xl z-10">
          <p className="text-gray-600 mb-3 text-lg animate-fade-in">Hello There! 👋</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-6 animate-slide-in-left">
            I'm <span className="text-[#FFA800]">Belda Putri Pramono,</span>
            <br />
            Frontend Developer
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-8 animate-fade-in">
            I create modern and responsive websites, specializing in turning designs
            into interactive, user-friendly experiences as a frontend developer.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#FFA800] hover:bg-[#e59400] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulse animate-infinite"
          >
            Let's Work Together
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          {/* Background Shape */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[400px] h-[410px] bg-[#FFA800] rounded-xl blur-3xl opacity-25 animate-pulse"></div>
          </div>

          {/* Foto */}
          <img
            src="/profile.png"
            alt="Belda Putri Pramono"
            className="relative w-full max-w-[400px] md:max-w-[500px] h-auto md:h-[520px] object-contain drop-shadow-xl z-10 hover:scale-105 transition-transform duration-500 animate-float"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRkZBODAwIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8Y2lyY2xlIGN4PSIyNTAiIGN5PSIyMDAiIHI9IjgwIiBmaWxsPSIjRkZBODAwIiBmaWxsLW9wYWNpdHk9IjAuNyIvPgo8cmVjdCB4PSIxNTAiIHk9IjMwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNGQUE4MDAiIGZpbGwtb3BhY2l0eT0iMC43Ii8+Cjwvc3ZnPg==";
            }}
          />
        </div>
      </section>

      {/* About Section */}
      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-[#2C4E35] mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 bg-gradient-to-r from-[#2C4E35]/10 to-[#FFA800]/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Photo Container */}
          <div className="relative flex-shrink-0">
            {/* Frame */}
            <div className="w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-[#FFA800] to-orange-300 rounded-full p-2 shadow-xl">
              {/* Photo */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                <img
                  src="/profile-about-me.png" // Ganti dengan path foto Anda
                  alt="Belda Putri Pramono"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkZBODAwIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iNDAiIGZpbGw9IiNGQUE4MDAiIGZpbGwtb3BhY2l0eT0iMC43Ii8+CjxyZWN0IHg9IjYwIiB5PSIxMjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI0ZBQTgwMCIgZmlsbC1vcGFjaXR5PSIwLjciLz4KPC9zdmc+";
                  }}
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2C4E35] rounded-full animate-pulse opacity-80"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#FFA800] rounded-full animate-bounce opacity-80"></div>
            
            {/* Floating Icon */}
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg animate-bounce-slow">
              👩‍💻
            </div>
          </div>
          
          {/* Text Content */}
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-[#2C4E35]">Who is Belda Putri Pramono?</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A passionate Frontend Developer with hands-on experience in building responsive, modern, and user-friendly web interfaces across various projects and industries. I love creating digital experiences that are both beautiful and functional.
            </p>
            
            {/* Skills Highlights */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#2C4E35] text-white px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-[#FFA800] text-white px-3 py-1 rounded-full text-sm">Next.js</span>
              <span className="bg-[#2C4E35] text-white px-3 py-1 rounded-full text-sm">Responsive Design</span>
              <span className="bg-[#FFA800] text-white px-3 py-1 rounded-full text-sm">UI/UX</span>
            </div>
            
            <button className="bg-gradient-to-r from-[#2C4E35] to-[#3a6b47] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group">
              Download CV
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-[#2C4E35] mb-12 text-center">Education</h2>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#FFA800] transform -translate-x-1/2"></div>
          
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row mb-16 relative">
            <div className="md:w-1/2 md:pr-10 md:text-right mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-[#2C4E35]">SMA NEGERI 1 WIDODAREN</h3>
              <p className="text-gray-600">2020 - 2023</p>
            </div>
            <div className="absolute left-4 md:left-1/2 -ml-3 md:-ml-4 top-2 w-6 h-6 bg-[#FFA800] rounded-full border-4 border-white shadow-lg"></div>
            <div className="md:w-1/2 md:pl-10 md:mt-0 mt-4">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <p className="text-gray-700">Completed high school education with focus on science and technology.</p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row mb-16 relative">
            <div className="md:w-1/2 md:pr-10 md:text-right mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-[#2C4E35]">
                D4 Teknologi Rekayasa Perangkat Lunak
              </h3>
              <p className="text-gray-600">2023 - Now</p>
            </div>
            <div className="absolute left-4 md:left-1/2 -ml-3 md:-ml-4 top-2 w-6 h-6 bg-[#FFA800] rounded-full border-4 border-white shadow-lg"></div>
            <div className="md:w-1/2 md:pl-10 md:mt-0 mt-4">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <p className="text-gray-700">Sekolah Vokasi, Universitas Gadjah Mada. Currently studying software engineering with focus on frontend development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-[#2C4E35] mb-6 text-center">My Skills</h2>
        <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Here are the technologies and tools I work with to create amazing digital experiences.
        </p>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: 'React', color: 'blue', icon: '⚛️' },
              { name: 'Next.js', color: 'gray', icon: '🔄' },
              { name: 'HTML', color: 'orange', icon: '🌐' },
              { name: 'CSS', color: 'blue', icon: '🎨' },
              { name: 'Tailwind', color: 'cyan', icon: '💨' },
              { name: 'JavaScript', color: 'yellow', icon: '📜' },
              { name: 'CodeIgniter', color: 'red', icon: '🔥' },
              { name: 'WordPress', color: 'blue', icon: '📝' },
              { name: 'Laravel', color: 'red', icon: '🪄' },
              { name: 'REST API', color: 'green', icon: '🔌' },
            ].map((skill, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 mb-4 bg-${skill.color}-100 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-gray-800">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-[#2C4E35] mb-4 text-center">Portfolio</h2>
        <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Website Portfolio Landing Page",
              desc: "Landing page pribadi dengan desain modern dan clean.",
              image: "/portfolio/landing.png",
              demo: "#",
              preview: "#",
            },
            {
              title: "Website Pelaut Hebat",
              desc: "Platform edukasi untuk para pelaut dengan fitur interaktif.",
              image: "/portfolio/pelauthebat.png",
              demo: "#",
              preview: "#",
            },
            {
              title: "Website Growish LabGizi",
              desc: "Website untuk layanan laboratorium gizi Growish.",
              image: "/portfolio/growish.png",
              demo: "#",
              preview: "#",
            },
            {
              title: "Website FinTrack",
              desc: "Sistem manajemen keuangan berbasis web untuk lembaga pendidikan.",
              image: "/portfolio/fintrack.png",
              demo: "#",
              preview: "#",
            },
            {
              title: "Website Desa Karangtengah",
              desc: "Sistem informasi desa dengan fitur pengunjung.",
              image: "/portfolio/karangtengah.png",
              demo: "https://visitor.asetdesakarangtengah.my.id/",
              preview: "#",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#2C4E35] to-[#FFA800] flex items-center justify-center text-white text-5xl">
                  {item.title.charAt(0)}
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a href={item.demo} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#2C4E35] hover:bg-[#FFA800] transition-colors">
                      ↗
                    </a>
                    <a href={item.preview} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#2C4E35] hover:bg-[#FFA800] transition-colors">
                      👁️
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#2C4E35] group-hover:text-[#FFA800] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                <div className="flex gap-3 mt-4">
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#2C4E35] text-white px-4 py-2 rounded-lg hover:bg-[#FFA800] transition-colors"
                  >
                    Demo
                  </a>
                  <a
                    href={item.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-[#2C4E35] text-[#2C4E35] px-4 py-2 rounded-lg hover:bg-[#2C4E35] hover:text-white transition-colors"
                  >
                    Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-[#2C4E35] mb-4 text-center">Feel Free To Contact Me</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          I am always open to discussing product design, collaborating work, or partnerships. Just contact me with the media below.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow p-6 text-left hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                💬
              </div>
              <h3 className="font-semibold text-lg">WhatsApp</h3>
            </div>
            <p className="text-gray-700 mb-2">+62 89673384911</p>
            <a href="https://wa.me/6289673384911" className="text-[#FFA800] font-semibold hover:underline flex items-center">
              Send Message <span className="ml-1">→</span>
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-left hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl">
                ✉️
              </div>
              <h3 className="font-semibold text-lg">Gmail</h3>
            </div>
            <p className="text-gray-700 mb-2">beldapramono823@gmail.com</p>
            <a href="mailto:beldapramono823@gmail.com" className="text-[#FFA800] font-semibold hover:underline flex items-center">
              Send Email <span className="ml-1">→</span>
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-left hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                📨
              </div>
              <h3 className="font-semibold text-lg">Telegram</h3>
            </div>
            <p className="text-gray-700 mb-2">+62 89673384911</p>
            <a href="https://t.me/6289673384911" className="text-[#FFA800] font-semibold hover:underline flex items-center">
              Send Message <span className="ml-1">→</span>
            </a>
          </div>
        </div>

        <p className="text-gray-500 mb-8 text-center text-lg">Or send me a message directly</p>

        {/* Contact Form */}
        <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left bg-gray-50 p-8 rounded-2xl shadow-md">
          <div className="md:col-span-2 text-center mb-4">
            <h3 className="text-xl font-semibold text-[#2C4E35]">Send Me a Message</h3>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Your First Name *</label>
            <input type="text" placeholder="Your First Name" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#FFA800] focus:border-transparent focus:outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Your Last Name *</label>
            <input type="text" placeholder="Your Last Name" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#FFA800] focus:border-transparent focus:outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Your Email *</label>
            <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#FFA800] focus:border-transparent focus:outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Your Subject *</label>
            <input type="text" placeholder="Your Subject" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#FFA800] focus:border-transparent focus:outline-none transition" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Your Message *</label>
            <textarea rows={4} placeholder="Your Message" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#FFA800] focus:border-transparent focus:outline-none transition"></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button className="bg-gradient-to-r from-[#2C4E35] to-[#FFA800] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Submit Message
            </button>
          </div>
        </form>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;