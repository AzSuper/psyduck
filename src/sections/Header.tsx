'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();
  
  // Function to determine if a link is active
  const isActive = (path:any) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="flex justify-center items-center top-3 fixed w-full z-50">
      <nav className="flex gap-2 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link 
          href="/" 
          className={`nav-item ${isActive('/') ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
        >
          Home
        </Link>
        <Link 
          href="/projects" 
          className={`nav-item ${isActive('/projects') ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
        >
          Projects
        </Link>
        <Link 
          href="/about" 
          className={`nav-item ${isActive('/about') ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
        >
          About
        </Link>
        <Link 
          href="/contact" 
          className={`nav-item ${isActive('/contact') ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};