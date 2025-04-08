"use client";
import { useState, useEffect,useRef } from "react";
import { Card } from "@/components/ui/card";
import { CodeIcon, Terminal } from "lucide-react";

const AboutMe = () => {
  const [typedLines, setTypedLines] = useState([]);
  const lines = [
    { id: "title", text: "neofetch --user-profile", delay: 800 },
    { id: "os", text: "OS: Human v1.0", delay: 400 },
    { id: "shell", text: "Shell: Software Development", delay: 400 },
    { id: "packages", text: "Packages:", delay: 400 },
    { id: "uptime", text: "Uptime:", delay: 400 }
  ];

  useEffect(() => {
    let timeout;
    let lineIndex = 0;

    const typeNextLine = () => {
      if (lineIndex < lines.length) {
        const currentLine = lines[lineIndex];
        setTypedLines(prev => [...prev, currentLine.id]);
        lineIndex++;
        timeout = setTimeout(typeNextLine, currentLine.delay);
      }
    };

    timeout = setTimeout(typeNextLine, 500);
    return () => clearTimeout(timeout);
  }, []);

  const packages = [
    'React', 'Next.js', 'TailwindCSS', 'GSAP', 'ShadCN', 'Bootstrap',
    'Three.js', 'SQL', 'MongoDB', 'ReactNative', 'Figma', 'Go'
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-gray-950">
      <h1 className="font-serif text-7xl p-3 font-bold">About.</h1>
      <Card className="w-full max-w-6xl p-8 bg-black/80 border border-green-500/20 backdrop-blur-xl shadow-xl shadow-green-500/5">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Terminal Window Section */}
          <div className="flex-1 font-mono text-green-400 overflow-hidden rounded-lg border border-green-800/50 bg-gray-950 shadow-inner">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 bg-gray-900 p-2 border-b border-green-800/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center mx-auto text-xs text-gray-400">
                <Terminal size={14} className="mr-1.5" />
                <span>developer_profile.sh</span>
              </div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-4 space-y-4">
              {/* Command Input with Blinking Cursor */}
              {typedLines.includes("title") && (
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">~$</span>
                  <span className="text-2xl font-bold text-green-300">
                    {lines[0].text}
                    {typedLines.length === 1 && <span className="inline-block w-2 h-5 bg-green-400 ml-1 animate-blink"></span>}
                  </span>
                </div>
              )}
              
              {/* Profile Output */}
              <div className="mt-6 space-y-3 pl-5 border-l-2 border-l-green-800/50">
                {typedLines.includes("os") && (
                  <p className="flex items-center text-gray-300">
                    <CodeIcon size={16} className="mr-2 text-green-500" />
                    <span className="w-20 inline-block">OS:</span>
                    <span className="ml-2 text-green-200 font-semibold">Human v1.0</span>
                  </p>
                )}
                
                {typedLines.includes("shell") && (
                  <p className="flex items-center text-gray-300">
                    <CodeIcon size={16} className="mr-2 text-green-500" />
                    <span className="w-20 inline-block">Shell:</span>
                    <span className="ml-2 text-green-200 font-semibold">Software Development</span>
                  </p>
                )}
                
                {typedLines.includes("packages") && (
                  <div className="flex items-start text-gray-300">
                    <CodeIcon size={16} className="mr-2 mt-1 text-green-500" />
                    <span className="w-20 inline-block">Packages:</span>
                    <div className="ml-2 flex flex-wrap gap-2">
                      {packages.map((pkg, index) => (
                        <span 
                          key={pkg} 
                          className="px-2 py-1 bg-green-900/20 border border-green-500/30 rounded-md text-green-300 shadow-sm shadow-green-500/20 hover:bg-green-800/30 hover:scale-105 transition-all duration-300 cursor-default"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {pkg}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {typedLines.includes("uptime") && (
                  <p className="flex items-center text-gray-300">
                    <CodeIcon size={16} className="mr-2 text-green-500" />
                    <span className="w-20 inline-block">Uptime:</span>
                    <UptimeCounter />
                  </p>
                )}
              </div>
              
              {/* Next command prompt if all lines are typed */}
              {typedLines.length === lines.length && (
                <div className="flex items-center mt-4">
                  <span className="text-green-600 mr-2">~$</span>
                  <span className="inline-block w-2 h-5 bg-green-400 animate-blink"></span>
                </div>
              )}
            </div>
          </div>

          {/* Image Section with Enhanced Effects */}
          <div className="md:w-2/5 flex items-center justify-center relative">
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-cyan-500/20 rounded-xl blur-xl animate-pulse-slow opacity-40"></div>
            
            {/* Hexagonal frame */}
            <div className="relative w-64 h-72 overflow-hidden">
              {/* Hexagon shape using clip-path */}
              <div className="w-full h-full p-1 bg-gradient-to-br from-green-500 to-cyan-500 rounded-lg clip-hex rotate-animation">
                <div className="w-full h-full bg-gray-950 clip-hex flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo.png" // Replace with your image path
                    alt="Profile"
                    className="w-20 h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 transform scale-110 hover:scale-125"
                  />
                </div>
              </div>
              
              {/* Terminal-like dots decoration */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-green-500 animate-ping" style={{ animationDelay: `${i * 200}ms`, animationDuration: '1.5s' }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Add global styles for custom animations */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .rotate-animation {
          position: relative;
        }
        
        .rotate-animation::before {
          content: '';
          position: absolute;
          inset: -5px;
          background: conic-gradient(from 0deg, transparent 0%, green 20%, cyan 40%, transparent 60%, green 80%, transparent 100%);
          border-radius: 50%;
          animation: rotate-slow 4s linear infinite;
          z-index: -1;
        }
        
        .clip-hex {
          clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
        }
      `}</style>
    </section>
  );
};

const UptimeCounter = () => {
  const [uptime, setUptime] = useState("");
  
  useEffect(() => {
    const startDate = new Date("2021-10-01");
    const updateUptime = () => {
      const now = new Date();
      const diff = now - startDate;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setUptime(`${days}d ${hours}h ${mins}m in tech`);
    };
    
    updateUptime();
    const interval = setInterval(updateUptime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="ml-2 text-green-200 font-semibold flex items-center">
      <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
      {uptime}
    </span>
  );
};

// New components for the additional sections
const ProfilePage = () => {
  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen">
      {/* Terminal About Section */}
      <AboutMe />
      
      {/* My Story Section */}
      <StorySection />
      
      {/* Charity Work Section */}
      <CharitySection />
    </div>
  );
};

const StorySection = () => {
  const [activeTab, setActiveTab] = useState("who");
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Simple parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax-bg');
      
      elements.forEach((el) => {
        const element = el;
        const speed = element.getAttribute('data-speed') || 0.2;
        element.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: "who", label: "Who Am I", icon: "👤" },
    { id: "study", label: "Study Life", icon: "🎓" },
    { id: "adventure", label: "Adventure", icon: "🏔️" },
    { id: "country", label: "Country Life", icon: "🌄" }
  ];

  const tabContent = {
    who: {
      title: "The Developer Behind The Screen",
      content: "I'm a passionate software developer with a love for creating intuitive and visually appealing web experiences. My journey into tech began in October 2021, but my curiosity for understanding how things work started much earlier. I believe in the power of technology to transform lives and solve real-world problems.",
      image: "/path-to-your-image.jpg" // Replace with your image
    },
    study: {
      title: "My Learning Journey",
      content: "Self-taught and constantly curious, I've embraced a non-traditional learning path. From online courses to building personal projects, my education has been hands-on and practical. I thrive in environments where I can apply theoretical knowledge to solve real problems, learning new technologies and frameworks along the way.",
      image: "/path-to-study-image.jpg" // Replace with your image
    },
    adventure: {
      title: "Beyond The Code",
      content: "When I'm not coding, I'm exploring. Whether it's hiking in remote mountains, traveling to new cities, or simply trying new experiences, I believe adventure fuels creativity. These experiences outside the digital world provide fresh perspectives that influence my approach to problem-solving and design.",
      image: "/path-to-adventure-image.jpg" // Replace with your image
    },
    country: {
      title: "Roots & Lifestyle",
      content: "My environment shapes my work ethic and perspective. The pace and connection to nature that comes with country living provides balance to the fast-paced tech world. This contrast between digital complexity and natural simplicity informs my approach to creating clean, functional, and human-centered designs.",
      image: "/path-to-country-image.jpg" // Replace with your image
    }
  };

  return (
    <section ref={containerRef} className="min-h-screen relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-bg absolute -top-20 left-10 w-64 h-64 rounded-full bg-green-500/10 blur-3xl" data-speed="0.1"></div>
        <div className="parallax-bg absolute top-40 right-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" data-speed="0.15"></div>
        <div className="parallax-bg absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl" data-speed="0.2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-500 inline-block">My Story</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Modern Tab Navigation */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-800">
          <div className="flex bg-gray-900/50 backdrop-blur-lg rounded-full p-1 border border-gray-800">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-5 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab.id 
                    ? "bg-gradient-to-r from-green-500 to-cyan-500 text-white shadow-lg" 
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Content Area with Animation */}
        <div className="max-w-6xl mx-auto">
          {Object.keys(tabContent).map((tabId) => (
            <div 
              key={tabId}
              className={`transition-all duration-500 transform ${
                activeTab === tabId 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 absolute translate-x-8"
              }`}
              style={{ display: activeTab === tabId ? 'block' : 'none' }}
            >
              <div className="flex flex-col md:flex-row gap-10 items-center">
                {/* Image with frame */}
                <div className="md:w-1/2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="p-1 bg-gradient-to-r from-green-400 to-cyan-500 rounded-2xl">
                      <div className="bg-gray-900 p-1 rounded-2xl overflow-hidden">
                        <img 
                          src={tabContent[tabId].image || "https://via.placeholder.com/600x400"} 
                          alt={tabContent[tabId].title}
                          className="rounded-xl transform group-hover:scale-105 transition-transform duration-500 w-full"
                        />
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-4 border-b-4 border-green-500 rounded-br-xl opacity-50"></div>
                    <div className="absolute -top-3 -left-3 w-20 h-20 border-l-4 border-t-4 border-cyan-500 rounded-tl-xl opacity-50"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold mb-4 text-white">{tabContent[tabId].title}</h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-green-400 to-cyan-500 mb-6 rounded-full"></div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">{tabContent[tabId].content}</p>
                  
                  {/* Interactive elements specific to each tab */}
                  {tabId === "who" && (
                    <div className="flex flex-wrap gap-3 mt-5">
                      {["Problem Solver", "Creative Thinker", "Tech Enthusiast", "Lifelong Learner"].map((trait) => (
                        <span key={trait} className="px-4 py-2 bg-gray-800 rounded-full text-green-400 border border-green-500/20">
                          {trait}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {tabId === "study" && (
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                      <h4 className="text-green-400 font-medium mb-2">Learning Milestones</h4>
                      <ul className="space-y-2">
                        {["Frontend Mastery", "React Ecosystem", "Mobile Development", "Backend Integration"].map((milestone) => (
                          <li key={milestone} className="flex items-center">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                            {milestone}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {tabId === "adventure" && (
                    <div className="grid grid-cols-3 gap-2 mt-5">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div key={num} className="aspect-square overflow-hidden rounded-lg">
                          <div className="w-full h-full bg-gray-800/50 flex items-center justify-center">
                            <span className="text-3xl">🏔️</span>
                            {/* Replace with actual adventure thumbnail images */}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {tabId === "country" && (
                    <div className="flex items-center mt-5 bg-gray-800/30 rounded-xl p-4">
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between">
                          <span>Nature</span>
                          <span>95%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{width: "95%"}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CharitySection = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  
  const charityImages = [
    {
      id: 1,
      src: "/path-to-charity-image-1.jpg", // Replace with actual image path
      alt: "Community Garden Project",
      description: "Helped build community gardens in urban areas, providing fresh food and green spaces."
    },
    {
      id: 2,
      src: "/path-to-charity-image-2.jpg", // Replace with actual image path
      alt: "Youth Coding Workshop",
      description: "Volunteered teaching coding basics to underprivileged youth, bridging the digital divide."
    },
    {
      id: 3,
      src: "/path-to-charity-image-3.jpg", // Replace with actual image path
      alt: "Environmental Cleanup",
      description: "Participated in local cleanup initiatives to protect natural habitats and wildlife."
    },
    {
      id: 4,
      src: "/path-to-charity-image-4.jpg", // Replace with actual image path
      alt: "Charity Run Event",
      description: "Raised funds for medical research through participation in charity sporting events."
    },
    {
      id: 5,
      src: "/path-to-charity-image-5.jpg", // Replace with actual image path
      alt: "Food Bank Volunteer",
      description: "Assisted in organizing and distributing food supplies to those in need."
    }
  ];

  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 inline-block">Voluntary & Charity Work</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Giving back to the community and making a positive impact is an essential part of who I am.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Stacked photos section */}
          <div className="lg:w-1/2 relative h-96">
            {charityImages.map((image, index) => (
              <div
                key={image.id}
                className="absolute transition-all duration-500 shadow-lg"
                style={{
                  top: `${20 + index * 5}%`,
                  left: `${10 + index * 5}%`,
                  zIndex: hoveredImage === image.id ? 50 : 10 - index,
                  transform: hoveredImage === image.id 
                    ? 'rotate(0deg) scale(1.2)' 
                    : `rotate(${-5 + index * 2}deg) scale(1)`,
                  opacity: hoveredImage !== null && hoveredImage !== image.id ? 0.6 : 1
                }}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="relative">
                  <div className="p-1 bg-white rounded-lg shadow-xl">
                    <img
                      src={image.src || `https://via.placeholder.com/300x200?text=Charity+${image.id}`}
                      alt={image.alt}
                      className="w-56 h-40 object-cover rounded-md"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className={`absolute -bottom-3 -right-3 transition-all duration-300 ${
                    hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="p-1 bg-purple-500 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-4a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Paperclip decoration */}
            <div className="absolute -top-5 left-1/4 w-6 h-16 border-l-4 border-t-4 border-b-4 rounded-l-full border-gray-600 transform rotate-12"></div>
            
            {/* Push pins */}
            <div className="absolute top-10 right-20 w-3 h-3 rounded-full bg-red-500 shadow-lg"></div>
            <div className="absolute bottom-20 left-16 w-3 h-3 rounded-full bg-yellow-500 shadow-lg"></div>
          </div>
          
          {/* Description section */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold mb-6 text-white">Making a Difference</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-500 mb-8 rounded-full"></div>
            
            <div className="prose prose-lg prose-invert">
              <p>Volunteering has been a cornerstone of my personal growth. Through these experiences, I've had the opportunity to connect with diverse communities, understand different perspectives, and apply my technical skills for social good.</p>
              
              <div className="my-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h4 className="text-xl font-semibold text-purple-400 mb-3">Highlighted Charity Work</h4>
                
                {hoveredImage ? (
                  <div className="animate-fadeIn">
                    <h5 className="text-lg text-white">{charityImages.find(img => img.id === hoveredImage)?.alt}</h5>
                    <p className="text-gray-300 mt-2">{charityImages.find(img => img.id === hoveredImage)?.description}</p>
                  </div>
                ) : (
                  <p className="text-gray-400 italic">Hover over an image to learn more about each initiative.</p>
                )}
              </div>
              
              <p>These experiences have profoundly shaped my approach to software development, reinforcing the importance of creating accessible, inclusive, and impactful digital solutions.</p>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="p-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <p className="text-white font-medium">Interested in collaborating on social impact projects? Let's connect!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Style for fadeIn animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        /* Scrollbar styling */
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.7);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default ProfilePage;