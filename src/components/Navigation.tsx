
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Brain } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Technology', href: '/technology' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Team', href: '/team' },
    { name: 'Videos', href: '/videos' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled || isOpen ? 'glass-card border-b border-neural-blue/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="p-2 bg-gradient-to-br from-neural-blue/20 to-mind-purple/20 rounded-xl">
                <Brain className="h-8 w-8 text-neural-blue neural-pulse group-hover:rotate-12 transition-transform" />
              </div>
              <div className="absolute inset-0 bg-neural-blue/20 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
            </div>
            <span className="text-2xl font-black font-orbitron text-neural-blue neural-glow tracking-tight">
              SkyBrain Neurotech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-ghost-white/80 hover:text-neural-blue transition-all duration-300 font-semibold text-lg relative group ${
                  location.pathname === item.href ? 'text-neural-blue' : ''
                }`}
              >
                {item.name}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neural-blue to-mind-purple transition-all duration-300 ${
                  location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </Link>
            ))}
            <Button className="cyber-button text-deep-space font-bold px-8 py-3 text-lg rounded-xl">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-ghost-white p-3 hover:bg-neural-blue/10 rounded-xl"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <div className="md:hidden fixed left-0 right-0 top-20 z-40">
              <div className="glass-card border border-neural-blue/20 mx-4 rounded-2xl shadow-2xl backdrop-blur-xl">
                <div className="px-6 py-6 space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block text-ghost-white/80 hover:text-neural-blue transition-colors duration-300 font-semibold text-lg py-3 rounded-lg hover:bg-neural-blue/10 px-4 ${
                        location.pathname === item.href ? 'text-neural-blue bg-neural-blue/20' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-neural-blue/20">
                    <Button className="w-full cyber-button text-deep-space font-bold py-4 text-lg rounded-xl">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
