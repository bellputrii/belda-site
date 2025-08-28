import React from 'react';

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-[#2C4E35] font-bold  text-white py-4 px-6 flex justify-between items-center shadow-md z-50">
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
       
        <button className="bg-[#FFA800] hover:bg-[#ffaa00c5] text-white px-4 py-2 rounded-full font-semibold transition-colors">Contact Me</button>
      </header>

      {/* Hero Section */}
      <section
        id="home" 
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-12"
      >
        {/* Text */}
        <div className="md:w-1/2 max-w-xl">
          <p className="text-gray-600 mb-3 text-lg">Hello There!</p>
          <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-6">
            I'm <span className="text-orange-500">Belda Putri Pramono,</span>
            <br />
            Frontend Developer
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-8">
            I create modern and responsive websites, specializing in turning designs
            into interactive, user-friendly experiences as a frontend developer.
          </p>
          <button className="bg-[#FFA800] hover:bg-[#ffaa00c5] text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg">
            Let's Work Together
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          {/* Background Shape */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[400px] h-[410px] bg-[#FFA800] rounded-xl blur-3xl opacity-25"></div>
          </div>

          {/* Foto */}
          <img
            src="/profile.png"
            alt="Belda Putri Pramono"
            className="relative w-full max-w-[630px] h-auto md:h-[620px] object-contain drop-shadow-xl z-10 hover:scale-105 hover:rotate-6 
            hover:-translate-y-2
            transition-transform duration-500"
          />
        </div>

      </section>


      {/* About Section */}
      <section id="about" className="text-center mt-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-green-900 mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 bg-white p-8 rounded-xl shadow-md">
          <div className="w-40 h-40 bg-orange-300 rounded-lg flex items-center justify-center text-5xl">👩‍💻</div>
          <div className="md:w-1/2 text-left">
            <h3 className="text-lg font-semibold mb-2">Who is Belda Putri Pramono?</h3>
            <p className="text-gray-700 mb-4">
              A passionate Frontend Developer with hands-on experience in building responsive, modern, and user-friendly web interfaces across various projects and industries.
            </p>
            <button className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-[#2C4E35] transition-colors">Download CV</button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mt-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-green-900 mb-10 text-center">Education</h2>
        
        <div className="relative border-l-4 border-[#FFA800] pl-6 space-y-10">
          {/* Item 1 */}
          <div className="relative">
            <div className="absolute -left-[23px] top-1 w-6 h-6 bg-[#FFA800] rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-semibold text-[#2C4E35]">SMA NEGERI 1 WIDODAREN</h3>
            <p className="text-gray-600">2020 - 2023</p>
          </div>

          {/* Item 2 */}
          <div className="relative">
            <div className="absolute -left-[23px] top-1 w-6 h-6 bg-[#FFA800] rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-semibold text-[#2C4E35]">
              D4 Teknologi Rekayasa Perangkat Lunak, Sekolah Vokasi, Universitas Gadjah Mada
            </h3>
            <p className="text-gray-600">2023 - Now</p>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="mt-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">My Skills</h2>
        <div className="bg-white rounded-xl shadow p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* React */}
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 18.5c0 .9-.2 1.8-.5 2.5-.3-.7-.5-1.6-.5-2.5s.2-1.8.5-2.5c.3.7.5 1.6.5 2.5zm-5.5-2.5c-.3.7-.5 1.6-.5 2.5s.2 1.8.5 2.5c-.7-.3-1.3-.8-1.8-1.4-.4-.6-.7-1.3-.7-2.1 0-.8.3-1.5.7-2.1.5-.6 1.1-1.1 1.8-1.4zm11 0c.3.7.5 1.6.5 2.5s-.2 1.8-.5 2.5c.7-.3 1.3-.8 1.8-1.4.4-.6.7-1.3.7-2.1 0-.8-.3-1.5-.7-2.1-.5-.6-1.1-1.1-1.8-1.4zm-10.4-1.2l-1.5-2.6c1.2-.7 2.6-1.1 4-1.3l.8 3.9h-3.3zm7.8 0l-3.3-.1.8-3.9c1.4.2 2.8.6 4 1.3l-1.5 2.7zm-8.2-4.8l-2.6-1.5c.7-1.2 1.6-2.2 2.7-3l1.4 3.1-1.5 1.4zm7.6 0l-1.5-1.4 1.4-3.1c1.1.8 2 1.8 2.7 3l-2.6 1.5zm-5.2-5.2l-.1-3.3 3.9.8c-.2 1.4-.6 2.8-1.3 4l-2.5-1.5zm2.8 0l-2.5 1.5c-.7-1.2-1.1-2.6-1.3-4l3.9-.8-.1 3.3z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">React</span>
            </div>
            
            {/* Next.js */}
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-gray-800">Next.js</span>
              </div>
              <span className="text-sm font-medium">Next.js</span>
            </div>
            
            {/* HTML */}
            <div className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mb-3 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302l-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58h-2.248l.247 3.123 4.107 1.191 4.148-1.191.537-6.101h-7.293z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">HTML</span>
            </div>
            
            {/* CSS */}
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.192 3.143h15.616l-1.431 16.125-6.385 1.813-6.343-1.813-1.457-16.125zm2.338 2.891l-.094 1.092h1.62l.062.7h-1.62l.094 1.095h1.62l.095 1.123-.007.053h-4.955l.229-2.645h6.686l.062.682h-5.771zm9.045 4.055l-.366 4.076-.017.19-3.642 1.011-3.619-1.011-.225-2.532h1.649l.117 1.323 1.967.53.002-.014 1.969-.531.204-2.281h-6.666l.362-4.076h9.282z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">CSS</span>
            </div>
            
            {/* Tailwind */}
            <div className="flex flex-col items-center p-4 bg-cyan-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mb-3 bg-cyan-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345.683.683 1.476 1.476 3.194 1.476 2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.683-.683-1.476-1.476-3.194-1.476zm-5 6.928c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.683.683 1.476 1.476 3.194 1.476 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345-.683-.683-1.476-1.476-3.194-1.476z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">Tailwind</span>
            </div>
            
            {/* JavaScript */}
            <div className="flex flex-col items-center p-4 bg-yellow-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mb-3 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM12 9.5h3v5H12v-5zm-2 3H7v-2h3v2zm7-1h-3v2h3v-2zm-5-2H9v1h3v-1z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">JavaScript</span>
            </div>
            
            {/* CodeIgniter */}
            <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mb-3 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-red-600">CI</span>
              </div>
              <span className="text-sm font-medium">CodeIgniter</span>
            </div>
            
            {/* WordPress */}
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325-3.207 1.87-7.1 1.872-10.307-.002C3.903 19.456 1.75 15.978 1.75 12c0-1.875.478-3.638 1.318-5.175L12 12l9.469-5.175zm-18.938-3.9C4.93 1.487 8.208 0 12 0c3.792 0 7.07 1.487 9.469 3.925C23.868 6.362 25.25 9.093 25.25 12c0 2.907-1.382 5.638-3.781 8.075-2.399 2.438-5.677 3.925-9.469 3.925-3.792 0-7.07-1.487-9.469-3.925C1.382 17.638 0 14.907 0 12c0-2.907 1.382-5.638 3.781-8.075l-.25-.15zm10.718 9.075l-8.468-4.625C4.93 7.513 4.208 9.637 4.208 12c0 2.363.722 4.487 1.843 6.275l6.938-3.8v-7.7z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">WordPress</span>
            </div>
            
            {/* Laravel */}
            <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mb-3 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm6 7h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V7h8v2z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">Laravel</span>
            </div>
            
            {/* REST API */}
            <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mb-3 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm6 7h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V7h8v2z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">REST API</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="mt-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-green-900 mb-12 text-center">
          Portfolio
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-48">
                <div>
                  <h3 className="text-lg font-semibold text-[#2C4E35] group-hover:text-green-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">{item.desc}</p>
                </div>
                <div className="flex gap-3 mt-4">
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-green-800 text-white px-4 py-2 rounded-xl hover:bg-[#2C4E35] transition-colors"
                  >
                    Demo
                  </a>
                  <a
                    href={item.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-green-800 text-green-800 px-4 py-2 rounded-xl hover:bg-green-800 hover:text-white transition-colors"
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
      <section id="contact" className="mt-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">Feel Free To Contact Me</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-center">
          I am always open to discussing product design, collaborating work, or partnerships. Just contact me with the media below.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 text-left hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600">📱</span>
              </div>
              <h3 className="font-semibold">WhatsApp</h3>
            </div>
            <p className="text-gray-700 mb-2">+62 89673384911</p>
            <a href="https://wa.me/6289673384911" className="text-green-700 font-semibold hover:underline">Send Me A Message</a>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-left hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600">✉️</span>
              </div>
              <h3 className="font-semibold">Gmail</h3>
            </div>
            <p className="text-gray-700 mb-2">beldapramono823@gmail.com</p>
            <a href="mailto:beldapramono823@gmail.com" className="text-green-700 font-semibold hover:underline">Send Me A Message</a>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-left hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600">📨</span>
              </div>
              <h3 className="font-semibold">Telegram</h3>
            </div>
            <p className="text-gray-700 mb-2">+62 89673384911</p>
            <a href="https://t.me/6289673384911" className="text-green-700 font-semibold hover:underline">Send Me A Message</a>
          </div>
        </div>

        <p className="text-gray-500 mb-4 text-center">Or</p>

        {/* Contact Form */}
        <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left bg-white p-8 rounded-xl shadow-md">
          <div>
            <label className="block text-sm font-medium mb-1">Your First Name *</label>
            <input type="text" placeholder="Your First Name" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Your Last Name *</label>
            <input type="text" placeholder="Your Last Name" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Your Email *</label>
            <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Your Subject *</label>
            <input type="text" placeholder="Your Subject" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none transition" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Your Message *</label>
            <textarea rows={4} placeholder="Your Message" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none transition"></textarea>
          </div>
          <div className="md:col-span-2 text-right">
            <button className="bg-[#FFA800] hover:bg-[#ffaa00c5] text-white px-6 py-3 rounded-full font-semibold transition-colors">Submit</button>
          </div>
        </form>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default LandingPage;