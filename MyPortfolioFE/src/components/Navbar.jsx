import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Architecture', path: '/#architecture' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-xl shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              KK
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                Kajal Kumari
              </span>
              <span className="text-[11px] font-mono text-cyan-400/90 tracking-wider">
                .NET BACKEND DEV
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isExternal = link.path.startsWith('/#');
              if (isExternal && location.pathname === '/') {
                return (
                  <a
                    key={link.name}
                    href={link.path.replace('/', '')}
                    className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-slate-800/40"
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                    location.pathname === link.path
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/40'
                      : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-cyan-400 border border-cyan-500/40 rounded-lg hover:bg-cyan-500/10 transition-all hover:border-cyan-400 shadow-sm shadow-cyan-500/10"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0e1424] border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 mt-2 shadow-2xl">
          {navLinks.map((link) => {
            const isExternal = link.path.startsWith('/#');
            if (isExternal && location.pathname === '/') {
              return (
                <a
                  key={link.name}
                  href={link.path.replace('/', '')}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60"
                >
                  {link.name}
                </a>
              );
            }
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60"
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-cyan-400 border border-cyan-500/40 rounded-lg bg-cyan-950/30"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
