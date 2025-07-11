
import React from 'react';
import { Brain, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Technology: ['Neural Processing', 'Signal Analysis', 'AI Models', 'Privacy & Security'],
    Applications: ['Workplace', 'Education', 'Healthcare', 'Gaming'],
    Research: ['Publications', 'Partnerships', 'Clinical Studies', 'Open Source'],
    Company: ['About Us', 'Careers', 'News', 'Contact']
  };

  return (
    <footer className="glass-nav border-t border-white/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Logo and Description */}
          <div className="lg:col-span-2 mb-8 lg:mb-0">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative flex-shrink-0">
                <div className="glass-badge p-2">
                  <Brain className="h-8 w-8 text-neural-blue footer-brain-sync" />
                </div>
              </div>
              <span className="text-lg sm:text-xl font-bold font-orbitron text-neural-blue neural-glow whitespace-nowrap leading-none">SkyBrain Neurotech</span>
            </div>
            <p className="text-neural-gray mb-6 max-w-md leading-relaxed">
              Revolutionary Brain-Computer Interface technology that monitors neural signals, 
              tracks cognitive performance, and helps optimize mental state in real-time.
            </p>
            <div className="space-y-3 text-sm text-neural-gray">
              <div className="flex items-center glass-container p-3 hover:bg-white/10 transition-all rounded-lg">
                <Mail className="h-4 w-4 mr-3 text-neural-blue flex-shrink-0" />
                <span className="text-left">info@skybrain.in</span>
              </div>
              <div className="flex items-center glass-container p-3 hover:bg-white/10 transition-all rounded-lg">
                <MapPin className="h-4 w-4 mr-3 text-neural-blue flex-shrink-0" />
                <span className="text-left">Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links - Better aligned */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="">
              <h3 className="text-ghost-white font-semibold mb-4 font-orbitron text-lg">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-neural-gray hover:text-neural-blue transition-colors text-sm hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar - Better responsive alignment */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="glass-container p-6 rounded-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-neural-gray text-sm text-center md:text-left">
                © 2025 SkyBrain Neurotech. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
                <a href="#" className="text-neural-gray hover:text-neural-blue transition-colors text-sm hover:translate-x-1 transition-all duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-neural-gray hover:text-neural-blue transition-colors text-sm hover:translate-x-1 transition-all duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-neural-gray hover:text-neural-blue transition-colors text-sm hover:translate-x-1 transition-all duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
