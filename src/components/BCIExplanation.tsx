
import React from 'react';
import { Shield, Zap, Users, Brain, Activity, Target, Waves } from 'lucide-react';

const BCIExplanation = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What is BCI Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight font-orbitron">
            <span className="text-ghost-white">Understanding</span>{' '}
            <span className="text-neural-blue neural-glow">Brain-Computer Interfaces</span>
          </h2>
          <p className="text-lg md:text-xl text-neural-gray max-w-4xl mx-auto leading-relaxed">
            Neurotechnology reads and interprets brain signals to understand your mental state. 
            Brain-Computer Interfaces (BCI) are the safe, non-invasive bridge between your mind and technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="p-4 bg-neural-blue/20 rounded-xl mx-auto w-fit mb-4">
              <Shield className="h-8 w-8 text-neural-blue group-hover:rotate-12 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-ghost-white mb-3 font-orbitron">
              Non-Invasive
            </h3>
            <p className="text-neural-gray leading-relaxed">
              Safe external sensors, no surgery or implants required
            </p>
          </div>
          
          <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="p-4 bg-mind-purple/20 rounded-xl mx-auto w-fit mb-4">
              <Zap className="h-8 w-8 text-mind-purple group-hover:rotate-12 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-ghost-white mb-3 font-orbitron">
              Real-Time
            </h3>
            <p className="text-neural-gray leading-relaxed">
              Instant mental state analysis and personalized response
            </p>
          </div>
          
          <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="p-4 bg-neural-blue/20 rounded-xl mx-auto w-fit mb-4">
              <Users className="h-8 w-8 text-neural-blue group-hover:rotate-12 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-ghost-white mb-3 font-orbitron">
              Accessible
            </h3>
            <p className="text-neural-gray leading-relaxed">
              Designed for everyday wellness and cognitive enhancement
            </p>
          </div>
          
          <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="p-4 bg-mind-purple/20 rounded-xl mx-auto w-fit mb-4">
              <Brain className="h-8 w-8 text-mind-purple group-hover:rotate-12 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-ghost-white mb-3 font-orbitron">
              Personal
            </h3>
            <p className="text-neural-gray leading-relaxed">
              Learns your unique neural patterns and preferences
            </p>
          </div>
        </div>

        {/* How SkyBrain Works - iAPF Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tight font-orbitron">
            <span className="text-ghost-white">How</span>{' '}
            <span className="text-neural-blue neural-glow">SkyBrain Neurotech Works</span>
          </h2>
          
          {/* iAPF Explanation */}
          <div className="glass-card p-8 md:p-12 mb-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl md:text-4xl font-black mb-6 font-orbitron">
                  <span className="text-neural-blue neural-glow text-3xl md:text-5xl block mb-2">
                    iAPF
                  </span>
                  <span className="text-ghost-white text-lg md:text-xl">
                    Individual Alpha Peak Frequency
                  </span>
                </h3>
                
                <div className="space-y-4 text-neural-gray leading-relaxed">
                  <p className="text-lg">
                    Your brain has a unique alpha rhythm frequency (8-13 Hz) that serves as your neural signature. 
                    This is your <strong className="text-neural-blue">Individual Alpha Peak Frequency (iAPF)</strong>.
                  </p>
                  <p>
                    When your brain operates at its optimal iAPF, you experience peak cognitive performance, 
                    enhanced focus, and mental clarity. SkyBrain Neurotech identifies and helps guide your mind back 
                    to this optimal baseline frequency.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                {/* Visual Brain Wave Animation */}
                <div className="glass-card p-6 rounded-2xl border border-neural-blue/30">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-neural-gray text-sm">Alpha Waves (8-13 Hz)</span>
                      <Activity className="h-5 w-5 text-neural-blue" />
                    </div>
                    
                    {/* Wave visualization */}
                    <div className="relative h-24 bg-gradient-to-r from-deep-space to-shadow-black rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="100%" height="100%" viewBox="0 0 400 100" className="text-neural-blue">
                          <path
                            d="M0,50 Q25,20 50,50 T100,50 T150,50 T200,50 T250,50 T300,50 T350,50 L400,50"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            opacity="0.7"
                          >
                            <animate
                              attributeName="d"
                              values="M0,50 Q25,20 50,50 T100,50 T150,50 T200,50 T250,50 T300,50 T350,50 L400,50;
                                      M0,50 Q25,80 50,50 T100,50 T150,50 T200,50 T250,50 T300,50 T350,50 L400,50;
                                      M0,50 Q25,20 50,50 T100,50 T150,50 T200,50 T250,50 T300,50 T350,50 L400,50"
                              dur="2s"
                              repeatCount="indefinite"
                            />
                          </path>
                        </svg>
                      </div>
                      <div className="absolute top-2 right-2 px-2 py-1 bg-neural-blue/20 rounded text-xs text-neural-blue font-bold">
                        iAPF: 10.5 Hz
                      </div>
                    </div>
                    
                    <div className="text-center text-sm text-neural-gray">
                      Your optimal cognitive state frequency
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="p-4 bg-neural-blue/20 rounded-xl mx-auto w-fit mb-4">
                <Target className="h-8 w-8 text-neural-blue group-hover:rotate-12 transition-transform" />
              </div>
              <h4 className="text-xl font-bold text-ghost-white mb-3 font-orbitron">
                1. Baseline Mapping
              </h4>
              <p className="text-neural-gray leading-relaxed">
                EEG sensors identify your unique iAPF pattern during initial calibration sessions
              </p>
            </div>

            <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="p-4 bg-mind-purple/20 rounded-xl mx-auto w-fit mb-4">
                <Waves className="h-8 w-8 text-mind-purple group-hover:rotate-12 transition-transform" />
              </div>
              <h4 className="text-xl font-bold text-ghost-white mb-3 font-orbitron">
                2. Real-Time Monitoring
              </h4>
              <p className="text-neural-gray leading-relaxed">
                Continuous analysis of your current brain state compared to optimal baseline
              </p>
            </div>

            <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="p-4 bg-neural-blue/20 rounded-xl mx-auto w-fit mb-4">
                <Brain className="h-8 w-8 text-neural-blue group-hover:rotate-12 transition-transform" />
              </div>
              <h4 className="text-xl font-bold text-ghost-white mb-3 font-orbitron">
                3. Guided Optimization
              </h4>
              <p className="text-neural-gray leading-relaxed">
                Personalized feedback helps guide your mind back to peak performance state
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BCIExplanation;
