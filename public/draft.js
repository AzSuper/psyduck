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