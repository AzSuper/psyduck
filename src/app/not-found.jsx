'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';


export default function Custom404() {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };
  
  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-gray-900 flex flex-col items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20">
        {Array.from({ length: 144 }).map((_, i) => (
          <div 
            key={i} 
            className="border border-gray-600"
            style={{
              opacity: isLoaded ? Math.max(
                0.1,
                1 - (Math.sqrt(
                  Math.pow(mousePosition.x - (i % 12) * (containerRef.current?.offsetWidth / 12 || 0), 2) +
                  Math.pow(mousePosition.y - Math.floor(i / 12) * (containerRef.current?.offsetHeight / 12 || 0), 2)
                ) / 300)
              ) : 0
            }}
          />
        ))}
      </div>
      
      {/* TV Noise effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
          opacity: 0.05,
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* 404 Neon Text */}
      <h1 
        className="text-7xl font-bold mb-8 z-10 tracking-wider"
        style={{
          color: 'transparent',
          WebkitTextStroke: '1px #10b981',
          textShadow: '0 0 20px rgba(16, 185, 129, 0.8), 0 0 30px rgba(16, 185, 129, 0.6)',
          opacity: isLoaded ? 1 : 0.7,
          transition: 'opacity 1s ease'
        }}
      >
        404 NOT FOUND
      </h1>
      
      {/* Logo */}
      <div 
        className="relative w-64 h-64 mb-8 z-10"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: `translate(${(mousePosition.x - (containerRef.current?.offsetWidth / 2 || 0)) / 20}px, ${(mousePosition.y - (containerRef.current?.offsetHeight / 2 || 0)) / 20}px)`,
          transition: 'opacity 2s ease'
        }}
      >
        <svg
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.6))'
          }}
        >
          <path
            d="M500 74.1L163.5 269.2v461.7L500 925.9l336.5-195.1V269.2L500 74.1zm252.4 574.6L500 789.5 247.6 648.7V351.3L500 210.5l252.4 140.8v298.2z"
            fill="#10b981"
          />
        </svg>
      </div>
      
      {/* Message and Back button */}
      <p 
        className="text-gray-400 mb-8 max-w-md text-center"
        style={{
          opacity: isLoaded ? 0.8 : 0,
          transition: 'opacity 2s ease'
        }}
      >
        Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
      </p>
      
      <Link
        href="/"
        className="bg-transparent hover:bg-emerald-600 text-emerald-500 hover:text-white border border-emerald-500 hover:border-transparent rounded px-4 py-2 transition-all"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 2s ease, background-color 0.3s, color 0.3s, border-color 0.3s'
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}