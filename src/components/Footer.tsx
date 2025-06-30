
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
    <footer className="glass-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Brain className="h-8 w-8 text-neural-blue neural-pulse" />
                <div className="absolute inset-0 h-8 w-8 bg-neural-blue/20 rounded-full blur-sm"></div>
              </div>
              <span className="text-xl font-bold font-orbitron text-neural-blue neural-glow">SkyBrain Neurotech</span>
            </div>
            <p className="text-neural-gray mb-6 max-w-md">
              Revolutionary Brain-Computer Interface technology that monitors neural signals, 
              tracks cognitive performance, and helps optimize mental state in real-time.
            </p>
            <div className="space-y-2 text-sm text-neural-gray">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                contact@skybrain.in
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Bangalore, India
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-ghost-white font-semibold mb-4 font-orbitron">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-neural-gray hover:text-neural-blue transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neural-blue/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-neural-gray text-sm">
            © 2025 SkyBrain Neurotech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-neural-gray hover:text-neural-blue transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-neural-gray hover:text-neural-blue transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-neural-gray hover:text-neural-blue transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
