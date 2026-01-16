"use client";
import React, { useState, useEffect, useRef } from 'react';
import LayoutNavbar from './components/LayoutNavbar';

// Import React Icons
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaLaravel, 
  FaWordpress,
  FaGitAlt,
  FaFigma,
  FaGithub,
  FaCode
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiCodeigniter, 
  SiPostman, 
  SiVercel,
  SiCanva
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

// Types
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface Skill {
  name: string;
  color: string;
  icon: React.ReactNode;
  category: 'programming' | 'tools';
}

interface PortfolioItem {
  title: string;
  desc: string;
  image: string;
  demo: string;
  preview: string;
  techStack: string[];
  category: string;
  status: 'completed' | 'in-progress' | 'maintenance';
}

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState<number>(0);
  const [showAllPortfolio, setShowAllPortfolio] = useState<boolean>(false);
  const [activePortfolioFilter, setActivePortfolioFilter] = useState<string>('all');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const skillsCarouselRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  // Header scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Section detection
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

      // Header show/hide logic
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(window.scrollY);

      // Scrolled state for styling
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Fungsi untuk menangani alert portfolio localhost
  const handlePortfolioClick = (demoUrl: string, title: string) => {
    if (demoUrl === 'localhost') {
      alert(`Website ${title} harus diakses secara localhost, karena keterbatasan akses backend yang sudah tidak aktif sistem hostingnya`);
      return false;
    }
    return true;
  };

  // Fungsi untuk menangani perubahan form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Fungsi untuk mengirim form ke Gmail - FIXED
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { firstName, lastName, email, subject, message } = formData;
    const fullName = `${firstName} ${lastName}`;
    
    // Membuat link mailto dengan data form
    const mailtoLink = `mailto:beldapramono823@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Nama: ${fullName}\nEmail: ${email}\n\nPesan:\n${message}`
    )}`;
    
    // Membuka client email default pengguna
    window.location.href = mailtoLink;
    
    // Reset form setelah submit
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Skills data dengan React Icons
  const programmingSkills: Skill[] = [
    { 
      name: 'React', 
      color: 'bg-blue-50 border-blue-200', 
      icon: <FaReact className="text-blue-500 text-2xl" />,
      category: 'programming'
    },
    { 
      name: 'Next.js', 
      color: 'bg-gray-50 border-gray-200', 
      icon: <SiNextdotjs className="text-gray-800 text-2xl" />,
      category: 'programming'
    },
    { 
      name: 'HTML5', 
      color: 'bg-orange-50 border-orange-200', 
      icon: <FaHtml5 className="text-orange-500 text-2xl" />,
      category: 'programming'
    },
    { 
      name: 'CSS3', 
      color: 'bg-blue-50 border-blue-200', 
      icon: <FaCss3Alt className="text-blue-500 text-2xl" />,
      category: 'programming'
    },
    { 
      name: 'Tailwind', 
      color: 'bg-cyan-50 border-cyan-200', 
      icon: <SiTailwindcss className="text-cyan-500 text-2xl" />,
      category: 'programming'
    },
    { 
      name: 'JavaScript', 
      color: 'bg-yellow-50 border-yellow-200', 
      icon: <FaJs className="text-yellow-500 text-2xl" />,
      category: 'programming'
    },
    { 
      name: 'CodeIgniter', 
      color: 'bg-red-50 border-red-200', 
      icon: <SiCodeigniter className="text-red-500 text-2xl" />,
      category: 'programming'
    },
    { 
      name: 'WordPress', 
      color: 'bg-blue-50 border-blue-200', 
      icon: <FaWordpress className="text-blue-600 text-2xl" />,
      category: 'programming'
    },
    { 
      name: 'Laravel', 
      color: 'bg-red-50 border-red-200', 
      icon: <FaLaravel className="text-red-500 text-2xl" />,
      category: 'programming'
    },
    { 
      name: 'REST API', 
      color: 'bg-green-50 border-green-200', 
      icon: <TbApi className="text-green-500 text-2xl" />,
      category: 'programming'
    },
  ];

  const toolsSkills: Skill[] = [
    { 
      name: 'VS Code', 
      color: 'bg-blue-50 border-blue-200', 
      icon: <FaCode className="text-blue-500 text-2xl" />,
      category: 'tools'
    },
    { 
      name: 'Postman', 
      color: 'bg-orange-50 border-orange-200', 
      icon: <SiPostman className="text-orange-500 text-2xl" />,
      category: 'tools'
    },
    { 
      name: 'Figma', 
      color: 'bg-purple-50 border-purple-200', 
      icon: <FaFigma className="text-purple-500 text-2xl" />,
      category: 'tools'
    },
    { 
      name: 'Canva', 
      color: 'bg-blue-50 border-blue-200', 
      icon: <SiCanva className="text-blue-500 text-2xl" />,
      category: 'tools'
    },
    { 
      name: 'GitHub', 
      color: 'bg-gray-50 border-gray-200', 
      icon: <FaGithub className="text-gray-800 text-2xl" />,
      category: 'tools'
    },
    { 
      name: 'Git', 
      color: 'bg-orange-50 border-orange-200', 
      icon: <FaGitAlt className="text-orange-500 text-2xl" />,
      category: 'tools'
    },
    { 
      name: 'Vercel', 
      color: 'bg-black border-gray-700', 
      icon: <SiVercel className="text-white text-2xl" />,
      category: 'tools'
    },
  ];

  // Auto-scroll carousel untuk skills
  useEffect(() => {
    const carousel = skillsCarouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    const scrollInterval = setInterval(() => {
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
      } else {
        scrollAmount += scrollSpeed;
      }
      carousel.scrollLeft = scrollAmount;
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [activeSkillCategory]);

  // Portfolio data dengan kategori dan status
  const portfolioData: PortfolioItem[] = [
    {
      title: "Website Portfolio",
      desc: "Modern personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Features responsive design, smooth animations, and optimized performance.",
      image: "/belda-site.png",
      demo: "https://belda-site.vercel.app/",
      preview: "https://github.com/bellputrii/belda-site.git",
      techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      category: "frontend",
      status: "completed"
    },
    {
      title: "Pelaut Hebat",
      desc: "Maritime safety platform with AI-powered recommendations. Built with modern React patterns, custom hooks, and responsive UI components.",
      image: "/pelaut-hebat.png",
      demo: "https://pelauthebat.vercel.app/",
      preview: "https://github.com/bellputrii/fe_pelautHebat.git",
      techStack: ["Next.js", "React Query", "Chart.js", "Tailwind", "AI Integration"],
      category: "frontend",
      status: "completed"
    },
    {
      title: "Growish LabGizi",
      desc: "Nutrition management system with complex form handling and data visualization. Features custom form validation and real-time updates.",
      image: "LabGizi.png",
      demo: "localhost",
      preview: "https://github.com/bellputrii/LabGizi-Growish.git",
      techStack: ["Next.js", "React Hook Form", "Zod Validation", "Chart.js", "UI Components"],
      category: "frontend",
      status: "completed"
    },
    {
      title: "FinTrack",
      desc: "Financial management dashboard with data visualization, reporting features, and responsive design for educational institution.",
      image: "FinTrack.png",
      demo: "localhost",
      preview: "https://github.com/bellputrii/fe_fintrack_pad2.git",
      techStack: ["Next.js", "Recharts", "React Table", "Tailwind", "Component Library"],
      category: "frontend",
      status: "completed"
    },
    {
      title: "SIMA Desa Karangtengah",
      desc: "Village asset management system with admin and visitor interfaces. Features CRUD operations and role-based access control.",
      image: "visitor-asetDesa.png",
      demo: "https://visitor.asetdesakarangtengah.my.id/",
      preview: "#",
      techStack: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap", "REST API"],
      category: "fullstack",
      status: "maintenance"
    },
    {
      title: "Wayang Kita",
      desc: "Cultural heritage website with WordPress customization, responsive design, and content management system integration.",
      image: "wayang-kita.jpg",
      demo: "https://wayangkita.sv.ugm.ac.id/",
      preview: "#",
      techStack: ["WordPress", "PHP", "Custom Theme", "Responsive Design", "CMS"],
      category: "frontend",
      status: "completed"
    },
    {
      title: "Ambil Prestasi",
      desc: "E-learning platform with three integrated systems. Built with Next.js 14 App Router, TypeScript, and advanced state management.",
      image: "ambil-prestasi.jpg",
      demo: "https://ambilprestasi.vercel.app/",
      preview: "https://github.com/bellputrii/fe-ambil-prestasi.git",
      techStack: ["Next.js 14", "TypeScript", "App Router", "Zustand", "Tailwind"],
      category: "frontend",
      status: "completed"
    },
    {
      title: "Elok Printing",
      desc: "E-commerce and company profile with WordPress customization, payment integration, and responsive product catalog.",
      image: "elok-printing.jpg",
      demo: "https://www.elokprinting.com/",
      preview: "#",
      techStack: ["WordPress", "WooCommerce", "Payment Gateway", "Custom CSS", "SEO"],
      category: "frontend",
      status: "completed"
    },
    {
      title: "AssetsFlow System",
      desc: "Web-based asset management system with centralized admin dashboard to manage assets, borrowings, and maintenance workflows.",
      image: "assets-flow.jfif",
      demo: "https://assetsflow-hazel.vercel.app/",
      preview: "#",
      techStack: ["Laravel", "Next.js", "REST API", "MySQL", "Authentication"],
      category: "fullstack",
      status: "maintenance"
    },
    {
      title: "PadiCheck AI",
      desc: "AI-powered web application for rice leaf disease detection with image upload, prediction results, and detection history.",
      image: "padi-check-ai.jfif",
      demo: "http://padicheckai.vercel.app/",
      preview: "#",
      techStack: ["Next.js 15", "TypeScript", "Tailwind", "REST API", "Data Visualization"],
      category: "frontend",
      status: "completed"
    }

  ];

  // Education data
  const educationData = [
    {
      institution: "SMA NEGERI 1 WIDODAREN",
      period: "2020 - 2023",
      description: "Completed high school education with focus on science and technology.",
      icon: "🏫"
    },
    {
      institution: "D4 Software Engineering",
      period: "2023 - Now",
      description: "Sekolah Vokasi, Universitas Gadjah Mada. Currently studying software engineering with focus on frontend development.",
      icon: "🎓"
    }
  ];

  // Portfolio filter
  const portfolioFilters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Fullstack' }
  ];

  const filteredPortfolio = activePortfolioFilter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activePortfolioFilter);

  const displayedPortfolio = showAllPortfolio ? filteredPortfolio : filteredPortfolio.slice(0, 6);

  // Status badge colors
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'maintenance': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Live';
      case 'in-progress': return 'In Development';
      case 'maintenance': return 'Maintenance';
      default: return status;
    }
  };

  return (
    <LayoutNavbar>
      <div className="font-sans text-gray-900 bg-gray-50">
        {/* Enhanced Hero Section */}
        <section
          id="home" 
          className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-20 py-16 md:py-20 gap-8 md:gap-12 pt-20 md:pt-24 overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute top-4 md:top-10 left-4 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-[#FFA800] rounded-full animate-pulse opacity-20"></div>
          <div className="absolute bottom-10 md:bottom-20 right-4 md:right-20 w-10 h-10 md:w-16 md:h-16 bg-[#2C4E35] rounded-full animate-bounce opacity-20"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-[#FFA800] rounded-full animate-ping opacity-10"></div>

          {/* Floating Tech Icons */}
          <div className="absolute top-20 right-20 opacity-10 animate-float">
            <FaReact className="text-6xl text-blue-500" />
          </div>
          <div className="absolute bottom-40 left-20 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
            <SiNextdotjs className="text-6xl text-gray-800" />
          </div>
          <div className="absolute top-40 left-40 opacity-10 animate-float" style={{ animationDelay: '4s' }}>
            <FaJs className="text-6xl text-yellow-500" />
          </div>

          {/* Text Content dengan Animasi */}
          <div className="md:w-1/2 max-w-xl z-10 order-2 md:order-1">
            <div className="space-y-2 mb-4">
              <p className="text-gray-700 text-base md:text-lg font-medium animate-fade-in">Hello There! 👋</p>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-snug animate-slide-up">
                I'm <span className="text-[#FFA800]">Belda Putri Pramono</span>
              </h1>
              <div className="h-1 w-20 bg-[#FFA800] rounded-full animate-grow-width"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl text-[#2C4E35] font-semibold mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Frontend Developer
            </h2>
            
            <p className="text-gray-800 text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              I specialise in developing modern, responsive web applications using the latest front-end technologies. 
              I am passionate about creating exceptional user experiences with clean, maintainable code and pixel-perfect designs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#FFA800] hover:bg-[#e59400] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>Let's Work Together</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
              
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="border-2 border-[#2C4E35] text-[#2C4E35] hover:bg-[#2C4E35] hover:text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>View My Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-6 mt-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2C4E35]">8+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2C4E35]">2+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2C4E35]">15+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
            </div>
          </div>

          {/* Profile Image dengan Enhanced Design */}
          <div className="md:w-1/2 flex justify-center relative order-1 md:order-2">
            {/* Background Shape */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            </div>

            {/* Main Image Container */}
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-4 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Image Frame */}
              <div className="relative p-2 transform transition-transform duration-500">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <img
                    src="/profile.png"
                    alt="Belda Putri Pramono - Frontend Developer"
                    className="w-full h-full object-cover scale-140 animate-tilt transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhelaWdodD0iNTAwIiBmaWxsPSIjRkZBODAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8Y2lyY2xlIGN4PSIyNTAiIGN5PSIyMDAiIHI9IjgwIiBmaWxsPSIjRkZBODAwIiBmaWxsLW9wYWNpdHk9IjAuNyIvPgo8cmVjdCB4PSIxNTAiIHk9IjMwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI4MCIgZmlsbD0iI0ZBQTgwMCIgZmlsbC1vcGFjaXR5PSIwLjciLz4KPC9zdmc+";
                    }}
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2C4E35] rounded-full animate-bounce flex items-center justify-center">
                <FaReact className="text-white text-sm" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#FFA800] rounded-full animate-bounce flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <SiNextdotjs className="text-white text-sm" />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-600">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced About Me Section */}
        <section id="about" className="py-16 md:py-20 px-4 md:px-8 lg:px-20 bg-white" ref={aboutRef}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C4E35] mb-6 md:mb-8 text-center">About Me</h2>
            
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12">
              {/* Photo Container dengan Enhanced Design */}
              <div className="relative flex-shrink-0 group">
                {/* Background Pattern */}
                <div className="absolute -inset-4 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Main Image Container */}
                <div className="relative">
                  {/* Outer Ring dengan animasi bounce */}
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-2 shadow-2xl transform transition-transform duration-500 animate-bounce-slow">
                    {/* Image Container */}
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                      <img
                        src="/profile-about-me.png"
                        alt="Belda Putri Pramono - Frontend Developer"
                        className="w-full h-full object-cover scale-110 transition-transform duration-700"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkZBODAwIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iNDAiIGZpbGw9IiNGQUE4MDAiIGZpbGwtb3BhY2l0eT0iMC43Ii8+CjxyZWN0IHg9IjYwIiB5PSIxMjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI0ZBQTgwMCIgZmlsbC1vcGFjaXR5PSIwLjciLz4KPC9zdmc+";
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center animate-float">
                    <FaReact className="text-blue-500 text-lg" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                    <SiNextdotjs className="text-gray-800 text-lg" />
                  </div>
                  <div className="absolute top-4 -left-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '4s' }}>
                    <FaJs className="text-yellow-500 text-sm" />
                  </div>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#2C4E35]">
                  Frontend Specialist & UI Enthusiast
                </h3>
                
                <div className="space-y-4 mb-6">
                  <p className="text-gray-800 leading-relaxed">
                    As a passionate front-end developer, I specialise in modern JavaScript frameworks, responsive design and performance optimisation. My focus is on creating scalable, maintainable and user-centric web applications.
                  </p>
                  
                  <p className="text-gray-800 leading-relaxed">
                    My approach combines technical excellence with meticulous attention to detail. 
                    Every project delivers exceptional user experiences while maintaining clean and efficient code architecture. 
                    efficient code architecture.
                  </p>
                </div>
                
                {/* Skills Highlights */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                  <span className="bg-[#2C4E35] text-white px-3 py-1 rounded-full text-sm font-medium">React & Next.js</span>
                  <span className="bg-[#FFA800] text-white px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
                  <span className="bg-[#2C4E35] text-white px-3 py-1 rounded-full text-sm font-medium">Performance</span>
                  <span className="bg-[#FFA800] text-white px-3 py-1 rounded-full text-sm font-medium">UI/UX</span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/CV_Belda_Putri_Pramono.pdf';
                      link.download = 'CV_Belda_Putri_Pramono.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="bg-[#2C4E35] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group justify-center hover:bg-[#3a6b47]"
                  >
                    Download CV
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                  </button>
                  
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="border-2 border-[#2C4E35] text-[#2C4E35] hover:bg-[#2C4E35] hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group justify-center"
                  >
                    Get In Touch
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-20 px-4 md:px-8 lg:px-20 bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C4E35] mb-8 md:mb-12 text-center">Education</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-8 border-l-4 border-[#FFA800]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFA800] rounded-full flex items-center justify-center text-white text-xl">
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#2C4E35] mb-2">{edu.institution}</h3>
                    <p className="text-[#FFA800] font-medium text-sm md:text-base">{edu.period}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{edu.description}</p>
                
                {/* Decorative element */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-xs text-gray-500">
                  <span className="flex-1">🎯 Focus on Excellence</span>
                  <span>⭐</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Skills Section dengan React Icons */}
        <section id="skills" className="py-16 md:py-20 px-4 md:px-8 lg:px-20 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C4E35] mb-4 md:mb-6 text-center">Technical Skills</h2>
          <p className="text-gray-700 mb-8 md:mb-12 text-center max-w-2xl mx-auto text-sm md:text-base">
            Technologies and tools I use to build modern, scalable web applications
          </p>
          
          {/* Skills Category Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-1 flex border border-gray-200">
              <button
                onClick={() => setActiveSkillCategory(0)}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeSkillCategory === 0 
                    ? 'bg-[#2C4E35] text-white shadow-md' 
                    : 'text-gray-700 hover:text-[#2C4E35] hover:bg-white'
                }`}
              >
                Programming
              </button>
              <button
                onClick={() => setActiveSkillCategory(1)}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeSkillCategory === 1 
                    ? 'bg-[#2C4E35] text-white shadow-md' 
                    : 'text-gray-700 hover:text-[#2C4E35] hover:bg-white'
                }`}
              >
                Tools
              </button>
            </div>
          </div>
          
          {/* Skills Carousel */}
          <div className="max-w-6xl mx-auto relative">
            {/* Carousel Container */}
            <div 
              ref={skillsCarouselRef}
              className="flex overflow-x-auto scrollbar-hide gap-4 md:gap-6 pb-4 snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {(activeSkillCategory === 0 ? programmingSkills : toolsSkills).map((skill, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-32 md:w-40 snap-center group"
                >
                  <div className={`flex flex-col items-center p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 ${skill.color} group-hover:border-[#FFA800] h-full`}>
                    <div className={`w-16 h-16 md:w-20 md:h-20 mb-3 md:mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="text-sm md:text-base font-medium text-gray-900 text-center">{skill.name}</span>
                  </div>
                </div>
              ))}
              
              {/* Duplicate items for seamless loop */}
              {(activeSkillCategory === 0 ? programmingSkills : toolsSkills).map((skill, index) => (
                <div 
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 w-32 md:w-40 snap-center group"
                >
                  <div className={`flex flex-col items-center p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 ${skill.color} group-hover:border-[#FFA800] h-full`}>
                    <div className={`w-16 h-16 md:w-20 md:h-20 mb-3 md:mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="text-sm md:text-base font-medium text-gray-900 text-center">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation Hints */}
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#2C4E35] opacity-50 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFA800] opacity-70 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#2C4E35] opacity-50 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            
            <p className="text-center text-gray-500 text-xs mt-4">Scroll horizontally to see more skills →</p>
          </div>
        </section>

        {/* Portfolio Section - Enhanced */}
        <section id="portfolio" className="py-16 md:py-20 px-4 md:px-8 lg:px-20 bg-gray-50" ref={portfolioRef}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C4E35] mb-3 md:mb-4 text-center">Technical Projects</h2>
            <p className="text-gray-700 mb-8 md:mb-12 text-center max-w-2xl mx-auto text-sm md:text-base">
              Showcasing my expertise in modern frontend development, performance optimization, and user experience design
            </p>

            {/* Portfolio Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12">
              {portfolioFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActivePortfolioFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    activePortfolioFilter === filter.id
                      ? 'bg-[#2C4E35] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {displayedPortfolio.map((item, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full border border-gray-100 hover:border-[#FFA800]/30"
                >
                  {/* Image Container with Overlay */}
                  <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
                    {/* Project Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.opacity = '0';
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                        {getStatusLabel(item.status)}
                      </span>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-[#2C4E35] text-white rounded-full text-xs font-medium capitalize">
                        {item.category}
                      </span>
                    </div>

                    {/* Hover Overlay with Tech Stack Preview */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-white font-semibold mb-2 text-sm">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.techStack.slice(0, 3).map((tech, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-white/20 text-white text-xs rounded border border-white/30"
                            >
                              {tech}
                            </span>
                          ))}
                          {item.techStack.length > 3 && (
                            <span className="px-2 py-1 bg-white/20 text-white text-xs rounded border border-white/30">
                              +{item.techStack.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-[#2C4E35] group-hover:text-[#FFA800] transition-colors mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {item.techStack.slice(0, 4).map((tech, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border border-gray-200 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {item.techStack.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md border border-gray-200">
                            +{item.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <a
                        href={item.demo !== 'localhost' ? item.demo : '#'}
                        onClick={(e) => {
                          if (item.demo === 'localhost') {
                            e.preventDefault();
                            handlePortfolioClick(item.demo, item.title);
                          }
                        }}
                        target={item.demo !== 'localhost' ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-[#2C4E35] text-white px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-[#FFA800] transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <span>Live Demo</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </a>
                      <a
                        href={item.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border border-[#2C4E35] text-[#2C4E35] px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2C4E35] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <span>Code</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More/Less Button */}
            {filteredPortfolio.length > 6 && (
              <div className="text-center mt-10 md:mt-12">
                <button
                  onClick={() => setShowAllPortfolio(!showAllPortfolio)}
                  className="bg-[#2C4E35] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3a6b47] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {showAllPortfolio ? 'Show Less Projects' : `Show More Projects (${filteredPortfolio.length - 6})`}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section - Enhanced */}
        <section id="contact" className="py-16 md:py-20 px-4 md:px-8 lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C4E35] mb-3 md:mb-4 text-center">Let's Build Something Amazing</h2>
            <p className="text-gray-700 mb-8 md:mb-12 max-w-2xl mx-auto text-center text-sm md:text-base">
              Ready to bring your ideas to life with modern frontend technologies and exceptional user experiences
            </p>

            {/* Contact Cards - Enhanced */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 md:p-8 text-left border border-gray-100 hover:border-[#FFA800]/30 group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    💬
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">WhatsApp</h3>
                    <p className="text-green-600 font-semibold text-sm">Fast Response</p>
                  </div>
                </div>
                <p className="text-gray-800 mb-3 text-base font-medium">+62 87892192777</p>
                <p className="text-gray-600 text-sm mb-4">Perfect for quick discussions and instant communication</p>
                <a 
                  href="https://wa.me/6287892192777" 
                  className="inline-flex items-center gap-2 text-[#FFA800] font-semibold hover:text-[#e59400] transition-colors group-hover:gap-3 duration-300 text-sm"
                >
                  Start Conversation
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 md:p-8 text-left border border-gray-100 hover:border-[#FFA800]/30 group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Email</h3>
                    <p className="text-red-600 font-semibold text-sm">Detailed Projects</p>
                  </div>
                </div>
                <p className="text-gray-800 mb-3 text-base font-medium">beldapramono823@gmail.com</p>
                <p className="text-gray-600 text-sm mb-4">Ideal for detailed project discussions and formal proposals</p>
                <a 
                  href="mailto:beldapramono823@gmail.com" 
                  className="inline-flex items-center gap-2 text-[#FFA800] font-semibold hover:text-[#e59400] transition-colors group-hover:gap-3 duration-300 text-sm"
                >
                  Send Detailed Email
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 md:p-8 text-left border border-gray-100 hover:border-[#FFA800]/30 group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    📨
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Telegram</h3>
                    <p className="text-blue-600 font-semibold text-sm">Flexible Communication</p>
                  </div>
                </div>
                <p className="text-gray-800 mb-3 text-base font-medium">+62 87892192777</p>
                <p className="text-gray-600 text-sm mb-4">Great for ongoing collaboration and file sharing</p>
                <a 
                  href="https://t.me/6287892192777" 
                  className="inline-flex items-center gap-2 text-[#FFA800] font-semibold hover:text-[#e59400] transition-colors group-hover:gap-3 duration-300 text-sm"
                >
                  Connect on Telegram
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-4 text-gray-600">
                <div className="w-8 h-px bg-gray-300"></div>
                <span className="text-sm font-medium">OR SEND A DIRECT MESSAGE</span>
                <div className="w-8 h-px bg-gray-300"></div>
              </div>
            </div>

            {/* Contact Form - Enhanced */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-[#2C4E35] text-white p-6 md:p-8 text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Project Inquiry</h3>
                  <p className="text-green-100 opacity-90">Let's discuss your next frontend development project</p>
                </div>
                
                <form 
                  onSubmit={handleSubmit}
                  className="p-6 md:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                >
                  <div className="md:col-span-2 text-center mb-2">
                    <h4 className="text-lg font-semibold text-[#2C4E35]">Tell me about your project</h4>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your First Name" 
                      className="w-full border border-gray-300 rounded-xl p-3 md:p-4 focus:ring-2 focus:ring-[#FFA800] focus:border-[#FFA800] focus:outline-none transition text-sm md:text-base text-gray-900 bg-white shadow-sm" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your Last Name" 
                      className="w-full border border-gray-300 rounded-xl p-3 md:p-4 focus:ring-2 focus:ring-[#FFA800] focus:border-[#FFA800] focus:outline-none transition text-sm md:text-base text-gray-900 bg-white shadow-sm" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com" 
                      className="w-full border border-gray-300 rounded-xl p-3 md:p-4 focus:ring-2 focus:ring-[#FFA800] focus:border-[#FFA800] focus:outline-none transition text-sm md:text-base text-gray-900 bg-white shadow-sm" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">Project Type *</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g., Web App, Landing Page, E-commerce" 
                      className="w-full border border-gray-300 rounded-xl p-3 md:p-4 focus:ring-2 focus:ring-[#FFA800] focus:border-[#FFA800] focus:outline-none transition text-sm md:text-base text-gray-900 bg-white shadow-sm" 
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">Project Details *</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your project requirements, timeline, and any specific technologies you're interested in..." 
                      className="w-full border border-gray-300 rounded-xl p-3 md:p-4 focus:ring-2 focus:ring-[#FFA800] focus:border-[#FFA800] focus:outline-none transition text-sm md:text-base text-gray-900 bg-white shadow-sm resize-vertical"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="md:col-span-2 text-center pt-4">
                    <button 
                      type="submit"
                      className="bg-[#2C4E35] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-[#FFA800] hover:shadow-2xl transform hover:-translate-y-1 w-full md:w-auto min-w-[200px]"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Send Project Brief
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                      </span>
                    </button>
                    <p className="text-gray-500 text-xs mt-3">
                      I typically respond within 2-4 hours during business days
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutNavbar>
  );
};

export default LandingPage;