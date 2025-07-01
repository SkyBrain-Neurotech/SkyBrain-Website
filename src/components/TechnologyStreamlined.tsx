import React, { useState, useEffect } from 'react';
import { Brain, Zap, Activity, Target, Users, Shield, Waves, TrendingUp, Eye, Heart, MonitorSpeaker, Cpu, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const TechnologyStreamlined = () => {
  const [activeFreq, setActiveFreq] = useState(10.2);
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Comprehensive EEG Mapping Process
  const eegSteps = [
    {
      title: "Neural Signal Capture",
      description: "Medical-grade EEG sensors capture your brain's electrical activity across multiple frequency bands.",
      content: "Our advanced 32-channel EEG system records neural oscillations from 0.5-50Hz, capturing everything from deep delta waves to high-frequency gamma activity. This comprehensive data collection ensures we map your complete neural signature.",
      visual: Brain,
      color: "neural-blue"
    },
    {
      title: "Cognitive State Recognition",
      description: "AI algorithms identify distinct patterns for focus, creativity, stress, and relaxation states.",
      content: "Machine learning models trained on thousands of EEG sessions recognize your unique neural signatures for different cognitive states. We identify when you're in flow state, experiencing stress, or achieving deep focus.",
      visual: Eye,
      color: "mind-purple"
    },
    {
      title: "iAPF & Biomarker Analysis",
      description: "Extract individual Alpha Peak Frequency and other key neural biomarkers for personalization.",
      content: "Your Individual Alpha Peak Frequency (iAPF) serves as your neural baseline. We also map theta/beta ratios for attention, alpha asymmetry for emotional balance, and gamma coherence for cognitive processing speed.",
      visual: Activity,
      color: "neural-blue"
    },
    {
      title: "Performance Optimization",
      description: "Real-time neurofeedback guides you toward optimal states for specific tasks and goals.",
      content: "Based on your neural map, we provide targeted interventions: boost alpha waves for creativity, increase SMR for focus, reduce high-beta for stress relief, or enhance theta for deep meditation states.",
      visual: Target,
      color: "mind-purple"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFreq(prev => 9.8 + Math.sin(Date.now() / 2000) * 0.6);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % eegSteps.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlay, eegSteps.length]);

  const nextStep = () => {
    setActiveStep(prev => (prev + 1) % eegSteps.length);
  };

  const prevStep = () => {
    setActiveStep(prev => prev === 0 ? eegSteps.length - 1 : prev - 1);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-shadow-black to-neural-blue/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 glass-card px-8 py-4 mb-8 rounded-full border border-neural-blue/40 shadow-xl">
              <Brain className="h-6 w-6 text-neural-blue animate-pulse" />
              <span className="text-base font-bold text-neural-blue tracking-wide font-orbitron uppercase">
                Advanced Neurotechnology
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
              <span className="text-ghost-white">EEG Neural</span>{' '}
              <span className="text-neural-blue font-orbitron neural-glow text-7xl md:text-8xl block relative">
                Mapping
                <div className="absolute inset-0 bg-neural-blue/20 blur-xl rounded-2xl animate-pulse"></div>
              </span>
            </h1>
            
            <p className="text-xl text-neural-gray max-w-4xl mx-auto leading-relaxed mb-12">
              We map your complete EEG signature across all cognitive states - from focus and creativity to stress and relaxation. 
              This comprehensive neural profile enables personalized optimization for peak mental performance.
            </p>

            {/* Cognitive States Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
              {[
                { name: 'Focus', desc: 'Attention & Concentration', color: 'neural-blue' },
                { name: 'Creativity', desc: 'Innovation & Flow', color: 'mind-purple' },
                { name: 'Stress', desc: 'Pressure & Anxiety', color: 'neural-blue' },
                { name: 'Relaxation', desc: 'Calm & Recovery', color: 'mind-purple' }
              ].map((state, index) => (
                <div key={index} className="glass-card p-4 rounded-xl border border-neural-blue/30 hover:border-neural-blue/50 transition-all shadow-lg">
                  <div className={`text-2xl font-bold text-${state.color} mb-1`}>{state.name}</div>
                  <div className="text-sm text-neural-gray">{state.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive EEG Process */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-ghost-white font-orbitron">
              How EEG Technology Works
            </h2>
            <p className="text-xl text-neural-gray max-w-3xl mx-auto">
              Explore our step-by-step process of reading and understanding your brain signals
            </p>
          </div>

          {/* Interactive Process Viewer */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neural-blue/5 to-mind-purple/5"></div>
            
            <div className="relative z-10">
              {/* Controls */}
              <div className="flex justify-center items-center space-x-4 mb-8">
                <button
                  onClick={prevStep}
                  className="glass-card p-3 rounded-full hover:scale-105 transition-all duration-300"
                >
                  <ChevronLeft className="h-6 w-6 text-neural-blue" />
                </button>

                <div className="glass-card px-6 py-3 rounded-full">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setIsAutoPlay(!isAutoPlay)}
                      className="hover:scale-110 transition-transform"
                    >
                      {isAutoPlay ? (
                        <Pause className="h-5 w-5 text-neural-blue" />
                      ) : (
                        <Play className="h-5 w-5 text-neural-blue" />
                      )}
                    </button>
                    <span className="text-sm font-semibold text-neural-blue font-orbitron">
                      Step {activeStep + 1} of {eegSteps.length}
                    </span>
                  </div>
                </div>

                <button
                  onClick={nextStep}
                  className="glass-card p-3 rounded-full hover:scale-105 transition-all duration-300"
                >
                  <ChevronRight className="h-6 w-6 text-neural-blue" />
                </button>
              </div>

              {/* Current Step Display */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[400px]">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <div className={`p-4 bg-${eegSteps[activeStep].color}/20 rounded-2xl`}>
                      {React.createElement(eegSteps[activeStep].visual, {
                        className: `h-16 w-16 text-${eegSteps[activeStep].color}`
                      })}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-ghost-white mb-4 font-orbitron">
                    {eegSteps[activeStep].title}
                  </h3>
                  
                  <p className="text-lg text-neural-blue mb-6 font-semibold">
                    {eegSteps[activeStep].description}
                  </p>
                  
                  <p className="text-neural-gray leading-relaxed text-lg">
                    {eegSteps[activeStep].content}
                  </p>
                </div>

                <div className="relative">
                  <div className="glass-card p-8 rounded-2xl border border-neural-blue/30">
                    {/* Enhanced visualizations for each step */}
                    {activeStep === 0 && (
                      <div className="text-center space-y-6">
                        <div className="relative mx-auto w-32 h-32 mb-6">
                          <div className="absolute inset-0 bg-neural-blue/20 rounded-full animate-pulse"></div>
                          <Brain className="h-32 w-32 text-neural-blue" />
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          {['0.5-4Hz', '4-8Hz', '8-13Hz', '13-30Hz'].map((freq, i) => (
                            <div key={i} className="glass-card p-2 text-xs text-neural-blue border border-neural-blue/30">
                              {freq}
                            </div>
                          ))}
                        </div>
                        <p className="text-neural-gray">32-channel EEG capture</p>
                      </div>
                    )}
                    
                    {activeStep === 1 && (
                      <div className="space-y-6">
                        <div className="text-center">
                          <Eye className="h-20 w-20 text-mind-purple mx-auto mb-4" />
                          <p className="text-mind-purple font-semibold">Cognitive State Detection</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {['Focus', 'Creativity', 'Stress', 'Relaxation'].map((state, i) => (
                            <div key={i} className="glass-card p-3 text-center border border-mind-purple/30">
                              <div className="text-sm font-semibold text-mind-purple">{state}</div>
                              <div className="w-full bg-mind-purple/20 rounded-full h-2 mt-2">
                                <div 
                                  className="bg-mind-purple h-2 rounded-full animate-pulse" 
                                  style={{ width: `${60 + i * 10}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {activeStep === 2 && (
                      <div className="text-center space-y-6">
                        <Activity className="h-20 w-20 text-neural-blue mx-auto" />
                        <div className="space-y-3">
                          <div className="glass-card p-3 border border-neural-blue/30">
                            <div className="text-neural-blue font-semibold">iAPF: {activeFreq.toFixed(1)} Hz</div>
                            <div className="text-xs text-neural-gray">Individual Alpha Peak</div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="glass-card p-2 border border-neural-blue/20">
                              <div className="text-xs text-neural-blue">Theta/Beta</div>
                              <div className="text-xs text-neural-gray">Attention</div>
                            </div>
                            <div className="glass-card p-2 border border-neural-blue/20">
                              <div className="text-xs text-neural-blue">Alpha Asym</div>
                              <div className="text-xs text-neural-gray">Emotion</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeStep === 3 && (
                      <div className="text-center space-y-6">
                        <div className="relative">
                          <Target className="h-20 w-20 text-mind-purple mx-auto" />
                          <div className="absolute inset-0 bg-mind-purple/20 rounded-full blur-xl animate-pulse"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="glass-card p-3 border border-mind-purple/30">
                            <div className="text-mind-purple font-semibold text-sm">↑ Alpha</div>
                            <div className="text-xs text-neural-gray">Creativity</div>
                          </div>
                          <div className="glass-card p-3 border border-mind-purple/30">
                            <div className="text-mind-purple font-semibold text-sm">↑ SMR</div>
                            <div className="text-xs text-neural-gray">Focus</div>
                          </div>
                          <div className="glass-card p-3 border border-mind-purple/30">
                            <div className="text-mind-purple font-semibold text-sm">↓ Beta</div>
                            <div className="text-xs text-neural-gray">Stress Relief</div>
                          </div>
                          <div className="glass-card p-3 border border-mind-purple/30">
                            <div className="text-mind-purple font-semibold text-sm">↑ Theta</div>
                            <div className="text-xs text-neural-gray">Meditation</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {eegSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeStep
                        ? 'bg-neural-blue scale-125'
                        : 'bg-neural-gray/30 hover:bg-neural-blue/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brain Wave Frequencies */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-ghost-white font-orbitron">
              Brain Wave Frequencies
            </h2>
            <p className="text-xl text-neural-gray max-w-3xl mx-auto">
              Understanding the different types of brain waves and their significance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Delta', freq: '0.5-4 Hz', color: '#6B46FF', desc: 'Deep sleep & healing', use: 'Recovery optimization' },
              { name: 'Theta', freq: '4-8 Hz', color: '#8B5CF6', desc: 'Meditation & creativity', use: 'Flow state enhancement' },
              { name: 'Alpha', freq: '8-13 Hz', color: '#00D4FF', desc: 'Relaxed awareness', use: 'Stress reduction' },
              { name: 'Beta', freq: '13-30 Hz', color: '#06B6D4', desc: 'Active thinking', use: 'Cognitive performance' },
              { name: 'Gamma', freq: '30-100 Hz', color: '#10B981', desc: 'High-level cognition', use: 'Peak mental states' }
            ].map((wave, index) => (
              <div key={wave.name} className="glass-card p-6 rounded-xl border border-neural-blue/30 hover:border-neural-blue/50 transition-all shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div className="text-center md:text-left">
                    <div className="text-lg font-bold mb-1" style={{ color: wave.color }}>
                      {wave.name}
                    </div>
                    <div className="text-sm text-neural-gray">{wave.freq}</div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="h-12 bg-gradient-to-r from-deep-space/80 to-shadow-black/80 rounded-lg overflow-hidden relative border border-neural-blue/20">
                      <svg width="100%" height="100%" viewBox="0 0 200 48" style={{ color: wave.color }}>
                        <path
                          d={`M0,24 ${Array.from({length: 20}, (_, i) => 
                            `Q${i*10 + 5},${24 + Math.sin(i * (0.5 + index * 0.3)) * (8 + index * 2)} ${(i+1)*10},24`
                          ).join(' ')}`}
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          opacity="0.9"
                        />
                        <path
                          d={`M0,24 ${Array.from({length: 20}, (_, i) => 
                            `Q${i*10 + 5},${24 + Math.sin(i * (0.5 + index * 0.3)) * (8 + index * 2)} ${(i+1)*10},24`
                          ).join(' ')}`}
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          opacity="0.3"
                        />
                      </svg>
                      <div className="absolute top-1 right-2 text-xs px-2 py-1 bg-black/50 rounded" style={{ color: wave.color }}>
                        {wave.freq}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-neural-gray text-center md:text-left">
                      {wave.desc}
                    </div>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <div className="glass-card px-3 py-2 border border-neural-blue/20 inline-block">
                      <div className="text-xs font-semibold text-neural-blue mb-1">Application</div>
                      <div className="text-xs text-neural-gray">{wave.use}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How iAPF Works */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white font-orbitron drop-shadow-lg">
              How iAPF Revolutionizes Mental Wellness
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Uniquely Yours",
                desc: "Every brain has its own neural fingerprint. iAPF maps your individual patterns for truly personalized mental wellness.",
                color: "neural-blue"
              },
              {
                icon: Zap,
                title: "Real-Time Adaptation",
                desc: "Dynamic monitoring adjusts to your changing mental states, providing support exactly when you need it.",
                color: "mind-purple"
              },
              {
                icon: Shield,
                title: "Preventive Care",
                desc: "Detect early warning signs before they become problems, maintaining optimal mental health proactively.",
                color: "neural-blue"
              },
              {
                icon: Target,
                title: "Precision Training",
                desc: "Neurofeedback protocols precisely calibrated to your brain's optimal frequency for maximum effectiveness.",
                color: "mind-purple"
              },
              {
                icon: TrendingUp,
                title: "Measurable Progress",
                desc: "Track your cognitive improvements with objective neural metrics, not just subjective feelings.",
                color: "neural-blue"
              },
              {
                icon: Heart,
                title: "Holistic Wellness",
                desc: "Integrates with your lifestyle, sleep patterns, and daily rhythms for comprehensive mental health support.",
                color: "mind-purple"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="glass-card p-8 rounded-2xl border border-neural-blue/30 hover:border-neural-blue/50 transition-all duration-300 group shadow-xl">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 bg-${feature.color}/20 rounded-xl group-hover:bg-${feature.color}/30 transition-colors border border-${feature.color}/30`}>
                      <IconComponent className={`h-8 w-8 text-${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ghost-white mb-3 font-orbitron">
                        {feature.title}
                      </h3>
                      <p className="text-neural-gray leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12 relative overflow-hidden border border-neural-blue/30 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-neural-blue/5 to-mind-purple/5"></div>
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-ghost-white font-orbitron">
                  Complete Neural Optimization Process
                </h2>
              </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { 
                  icon: Eye, 
                  title: 'Scan', 
                  desc: 'Advanced EEG sensors safely read your brainwaves with medical-grade precision',
                  color: 'neural-blue'
                },
                { 
                  icon: Brain, 
                  title: 'Analyze', 
                  desc: 'AI algorithms identify your unique neural patterns and optimal frequency range',
                  color: 'mind-purple'
                },
                { 
                  icon: Target, 
                  title: 'Calibrate', 
                  desc: 'System learns your personal baseline and creates your individual neural map',
                  color: 'neural-blue'
                },
                { 
                  icon: Zap, 
                  title: 'Optimize', 
                  desc: 'Real-time neurofeedback trains your brain to maintain peak performance states',
                  color: 'mind-purple'
                }
              ].map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.title} className="text-center group">
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 glass-card border border-neural-blue/30 rounded-full flex items-center justify-center mx-auto group-hover:border-neural-blue/50 transition-all shadow-xl`}>
                        <IconComponent className={`h-10 w-10 text-${step.color}`} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-neural-blue to-mind-purple rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-ghost-white mb-4 font-orbitron">
                      {step.title}
                    </h3>
                    <p className="text-neural-gray leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyStreamlined;