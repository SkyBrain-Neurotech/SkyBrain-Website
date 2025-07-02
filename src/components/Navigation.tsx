
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Brain } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { trackButtonClick } from '@/lib/analytics';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

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
    { name: 'Applications', href: '/applications' },
    { name: 'Blockchain', href: '/blockchain' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Team', href: '/team' },
    { name: 'Videos', href: '/videos' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full transition-all duration-500 z-50 ${
      isScrolled || isOpen ? 'glass-card border-b border-neural-blue/20' : 'bg-transparent'
    }`} style={{ touchAction: 'manipulation' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0 mr-4 md:mr-8 lg:mr-12">
            <div className="relative flex-shrink-0">
              <div className="p-2 bg-gradient-to-br from-neural-blue/20 to-mind-purple/20 rounded-xl">
                <Brain className="h-8 w-8 text-neural-blue nav-brain-sync synced-hover-rotate" />
              </div>
              <div className="absolute inset-0 bg-neural-blue/20 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-black font-orbitron text-neural-blue neural-glow tracking-tight whitespace-nowrap leading-none">
              SkyBrain Neurotech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
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
            <Link to="/beta-signup">
              <Button 
                onClick={() => trackButtonClick('Get Started', 'navigation', '/beta-signup')}
                className="cyber-button text-deep-space font-bold px-8 py-3 text-lg rounded-xl"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ghost-white p-3 hover:bg-neural-blue/10 rounded-xl transition-colors border border-transparent hover:border-neural-blue/30 bg-transparent relative z-[60] touch-manipulation"
              aria-label="Toggle mobile menu"
              type="button"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[9999] animate-in fade-in duration-200">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="absolute left-4 right-4 top-20 animate-in slide-in-from-top-4 duration-300">
            <div className="bg-deep-space/95 border-2 border-neural-blue/60 rounded-2xl shadow-2xl backdrop-blur-xl">
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
                  <Link to="/beta-signup" className="block">
                    <Button 
                      onClick={() => {
                        trackButtonClick('Get Started', 'mobile_navigation', '/beta-signup');
                        setIsOpen(false);
                      }}
                      className="w-full cyber-button text-deep-space font-bold py-4 text-lg rounded-xl"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
