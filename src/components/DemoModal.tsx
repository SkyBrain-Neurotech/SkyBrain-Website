import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, ExternalLink, Play, BarChart3, Brain, Zap, ArrowRight, Smartphone, Download, Upload, Calendar } from 'lucide-react';
import DemoForm from './DemoForm';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [demoStep, setDemoStep] = useState<'intro' | 'loading' | 'redirect' | 'form'>('intro');

  useEffect(() => {
    if (isOpen) {
      setDemoStep('intro');
      // Track demo modal open
      if (typeof gtag !== 'undefined') {
        gtag('event', 'demo_modal_open', {
          'event_category': 'engagement',
          'event_label': 'demo_modal'
        });
      }
    }
  }, [isOpen]);

  const handleStartDemo = () => {
    setDemoStep('loading');
    
    // Track demo start
    if (typeof gtag !== 'undefined') {
      gtag('event', 'demo_start', {
        'event_category': 'engagement',
        'event_label': 'external_demo'
      });
    }

    setTimeout(() => {
      setDemoStep('redirect');
      // Open demo in new tab
      window.open('https://demo.skybrain.in/', '_blank');
      
      setTimeout(() => {
        onClose();
      }, 1000);
    }, 2000);
  };

  const handleDirectDemo = () => {
    // Track direct demo access
    if (typeof gtag !== 'undefined') {
      gtag('event', 'demo_direct_access', {
        'event_category': 'engagement',
        'event_label': 'external_demo'
      });
    }
    
    window.open('https://demo.skybrain.in/', '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="glass-card max-w-2xl w-full rounded-3xl border border-neural-blue/20 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 neural-grid opacity-10"></div>
        <div className="absolute inset-0 neural-network-bg opacity-20"></div>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neural-gray hover:text-neural-blue transition-colors z-10"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative z-10 p-8">
          {demoStep === 'intro' && (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-neural-blue/30 to-mind-purple/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-12 w-12 text-neural-blue demo-brain-sync" />
                </div>
                
                <h2 className="text-3xl font-bold text-ghost-white mb-4 font-orbitron">
                  Try SkyBrain Analysis
                </h2>
                
                <p className="text-lg text-neural-gray leading-relaxed">
                  Experience our EEG analysis platform. Use your own device or try our sample data to see how we generate comprehensive neural wellness reports.
                </p>
              </div>

              {/* Two Demo Paths */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Path 1: Own Device */}
                <div className="p-6 rounded-xl bg-neural-blue/5 border border-neural-blue/10">
                  <div className="flex items-center mb-4">
                    <Smartphone className="h-6 w-6 text-neural-blue mr-3" />
                    <h3 className="font-semibold text-ghost-white">Have an EEG Device?</h3>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-neural-gray">
                      <strong>Supported Devices:</strong>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-neural-gray">
                      <div>• SkyBrain</div>
                      <div>• Muse</div>
                      <div>• OpenBCI</div>
                      <div>• PiEEG</div>
                    </div>
                  </div>
                  <p className="text-sm text-neural-gray mb-4">
                    Use our data collection app to record your EEG and upload to get personalized analysis reports.
                  </p>
                </div>

                {/* Path 2: Sample Data */}
                <div className="p-6 rounded-xl bg-neural-blue/5 border border-neural-blue/10">
                  <div className="flex items-center mb-4">
                    <Download className="h-6 w-6 text-neural-blue mr-3" />
                    <h3 className="font-semibold text-ghost-white">No Device? Try Sample Data</h3>
                  </div>
                  <p className="text-sm text-neural-gray mb-4">
                    Download our sample EEG datasets and upload them to experience our analysis platform.
                  </p>
                  <div className="space-y-2 text-xs text-neural-gray">
                    <div>• Pre-recorded meditation sessions</div>
                    <div>• Focus training sessions</div>
                    <div>• Stress response patterns</div>
                    <div>• Sleep state analysis</div>
                  </div>
                </div>
              </div>

              {/* Demo Instructions */}
              <div className="bg-neural-blue/5 rounded-xl p-6 mb-8 border border-neural-blue/10">
                <h3 className="font-semibold text-ghost-white mb-4 flex items-center">
                  <Upload className="h-5 w-5 text-neural-blue mr-2" />
                  How it works:
                </h3>
                <ul className="space-y-2 text-neural-gray">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-neural-blue rounded-full"></div>
                    <span>Upload your EEG data or use our sample data files</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-neural-blue rounded-full"></div>
                    <span>Our AI processes the neural signals for wellness insights</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-neural-blue rounded-full"></div>
                    <span>Generate comprehensive reports on cognitive patterns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-neural-blue rounded-full"></div>
                    <span>Download detailed analysis into cognitive states and asymmetry </span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleStartDemo}
                  className="cyber-button text-deep-space font-bold py-4 px-8 text-lg group"
                >
                  <Upload className="mr-2 h-5 w-5" />
                  Try Analysis Platform
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
                
                <Button
                  onClick={() => setDemoStep('form')}
                  variant="outline"
                  className="glass-card border-neural-blue/40 text-neural-blue hover:bg-neural-blue/10 font-bold py-4 px-8 text-lg group"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Live Demo
                </Button>
              </div>

              <p className="text-xs text-neural-gray/70 text-center mt-4">
                Platform opens in new tab • Upload your data or use our samples • Download detailed reports
              </p>
            </>
          )}

          {demoStep === 'loading' && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-br from-neural-blue/30 to-mind-purple/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Brain className="h-12 w-12 text-neural-blue neural-pulse" />
              </div>
              
              <h3 className="text-2xl font-bold text-ghost-white mb-4 font-orbitron">
                Launching Analysis Platform...
              </h3>
              
              <div className="flex justify-center mb-6">
                <div className="flex space-x-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-neural-blue rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>
              </div>
              
              <p className="text-neural-gray mb-6">
                Opening SkyBrain analysis platform in a new tab...
              </p>
              
              {/* Cancel/Close Button */}
              <Button
                onClick={onClose}
                variant="outline"
                className="glass-card border-neural-gray/40 text-neural-gray hover:bg-neural-gray/10 font-bold px-6 py-2"
              >
                Cancel
              </Button>
            </div>
          )}

          {demoStep === 'redirect' && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500/30 to-neural-blue/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <ExternalLink className="h-12 w-12 text-neural-blue" />
              </div>
              
              <h3 className="text-2xl font-bold text-ghost-white mb-4 font-orbitron">
                Platform Launched Successfully!
              </h3>
              
              <p className="text-neural-gray mb-6">
                The analysis platform has opened in a new tab. Upload your EEG data or use our sample files to generate your first wellness report.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open('https://demo.skybrain.in/', '_blank')}
                  className="cyber-button text-deep-space font-bold px-8 py-3"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Open Platform Again
                </Button>
                
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="glass-card border-neural-blue/40 text-neural-blue hover:bg-neural-blue/10 font-bold px-8 py-3"
                >
                  Close & Continue
                </Button>
              </div>
            </div>
          )}

          {demoStep === 'form' && (
            <div>
              <div className="text-center mb-6">
                <Button
                  onClick={() => setDemoStep('intro')}
                  variant="ghost"
                  className="text-neural-gray hover:text-neural-blue mb-4"
                >
                  ← Back to Demo Options
                </Button>
              </div>
              
              <DemoForm 
                onSuccess={() => {
                  // Handle successful form submission
                  setTimeout(() => {
                    onClose();
                  }, 3000);
                }}
                className="border-0 bg-transparent p-0"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoModal;