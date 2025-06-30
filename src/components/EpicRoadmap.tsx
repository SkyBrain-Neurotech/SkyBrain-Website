import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Zap, 
  Brain, 
  Users, 
  Shield, 
  Rocket,
  Lightbulb,
  Target,
  Cpu,
  Heart,
  Award,
  Globe,
  ChevronLeft,
  ChevronRight,
  Bell
} from 'lucide-react';

interface RoadmapPhase {
  id: string;
  title: string;
  subtitle: string;
  status: 'completed' | 'in-progress' | 'pending' | 'planned';
  timeline: string;
  icon: React.ElementType;
  color: string;
  milestones: {
    title: string;
    status: 'done' | 'active' | 'pending';
    visual: React.ElementType;
  }[];
}

const EpicRoadmap = () => {
  const [activePhase, setActivePhase] = useState<string>('foundation');
  const [hoveredMilestone, setHoveredMilestone] = useState<string | null>(null);

  const phases: RoadmapPhase[] = [
    {
      id: 'foundation',
      title: 'Foundation',
      subtitle: 'Core BCI Technology',
      status: 'in-progress',
      timeline: 'Q1-Q2 2025',
      icon: Brain,
      color: 'blue',
      milestones: [
        { title: 'EEG Signal Processing', status: 'done', visual: Zap },
        { title: 'Hardware Integration', status: 'done', visual: Cpu },
        { title: 'Pattern Recognition', status: 'active', visual: Target }
      ],
    },
    {
      id: 'privacy',
      title: 'Privacy',
      subtitle: 'Data Security & Protection',
      status: 'pending',
      timeline: 'Q3 2025',
      icon: Shield,
      color: 'purple',
      milestones: [
        { title: 'End-to-End Encryption', status: 'pending', visual: Shield },
        { title: 'Privacy by Design', status: 'pending', visual: Users },
        { title: 'Data Anonymization', status: 'pending', visual: Target }
      ],
    },
    {
      id: 'intelligence',
      title: 'Intelligence',
      subtitle: 'iAPF AI Framework',
      status: 'pending',
      timeline: 'Q4 2025 - Q1 2026',
      icon: Lightbulb,
      color: 'purple',
      milestones: [
        { title: 'AI Model Architecture', status: 'pending', visual: Brain },
        { title: 'Personal Learning Engine', status: 'pending', visual: Users },
        { title: 'Adaptive Responses', status: 'pending', visual: Zap },
        { title: 'Real-time Optimization', status: 'pending', visual: Target }
      ],
    },
    {
      id: 'validation',
      title: 'Validation',
      subtitle: 'Clinical Trials & Testing',
      status: 'planned',
      timeline: 'Q2-Q3 2026',
      icon: Users,
      color: 'orange',
      milestones: [
        { title: 'IRB Approval', status: 'pending', visual: Award },
        { title: 'Trial Design', status: 'pending', visual: Target },
        { title: 'Participant Recruitment', status: 'pending', visual: Users },
        { title: 'Data Collection', status: 'pending', visual: Brain }
      ],
    },
    {
      id: 'launch',
      title: 'Launch',
      subtitle: 'Consumer Product Release',
      status: 'planned',
      timeline: 'Q4 2026',
      icon: Rocket,
      color: 'cyan',
      milestones: [
        { title: 'Product Design', status: 'pending', visual: Lightbulb },
        { title: 'Manufacturing', status: 'pending', visual: Cpu },
        { title: 'Regulatory Approval', status: 'pending', visual: Award },
        { title: 'Global Release', status: 'pending', visual: Globe }
      ],
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-500 border-green-500';
      case 'in-progress': return 'text-neural-blue border-neural-blue';
      case 'pending': return 'text-neural-gray border-neural-gray';
      default: return 'text-neural-gray border-neural-gray';
    }
  };

  // Auto-cycle through phases
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase(prev => {
        const currentIndex = phases.findIndex(p => p.id === prev);
        const nextIndex = (currentIndex + 1) % phases.length;
        return phases[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [phases]);

  const activePhaseData = phases.find(p => p.id === activePhase);

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Epic Background with Animated Elements */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-shadow-black to-neural-blue/10"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="roadmap-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#00D4FF" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                <line x1="50" y1="0" x2="50" y2="100" stroke="#00D4FF" strokeWidth="0.5" opacity="0.1" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="#00D4FF" strokeWidth="0.5" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#roadmap-grid)" />
          </svg>
        </div>
        
        {/* Floating Neural Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-neural-blue/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Epic Header */}
        <div className="text-center mb-24 relative">
          {/* Central Brain Visualization */}
          <div className="absolute inset-0 flex justify-center items-center opacity-10">
            <div className="relative">
              <Brain className="h-80 w-80 text-neural-blue animate-pulse" />
              {/* Orbiting Elements */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-neural-blue/60 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 45}deg) translateX(200px) translateY(-50%)`,
                    animation: `spin ${8 + i}s linear infinite`
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="relative z-10">
            {/* Live Status Badge */}
            <div className="inline-flex items-center space-x-3 glass-card px-8 py-4 mb-12 rounded-full border border-neural-blue/30 shadow-lg shadow-neural-blue/20">
              <div className="relative">
                <Rocket className="h-6 w-6 text-neural-blue animate-pulse" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-base font-bold text-neural-blue tracking-wide font-orbitron uppercase">
                🚀 Live Progress • Active Development
              </span>
              <div className="w-3 h-3 bg-neural-blue rounded-full animate-ping"></div>
            </div>

            {/* Epic Main Title */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight relative">
              <span className="text-ghost-white">Our</span>{' '}
              <span className="neural-gradient bg-clip-text text-transparent font-orbitron relative">
                Journey
                {/* Multiple Glow Layers */}
                <div className="absolute -inset-4 bg-gradient-to-r from-neural-blue/30 via-mind-purple/30 to-neural-blue/30 blur-3xl animate-pulse"></div>
                <div className="absolute -inset-2 bg-neural-blue/20 blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </span>
            </h1>
            
            {/* Inspiring Subtitle */}
            <div className="text-2xl md:text-3xl text-neural-gray max-w-4xl mx-auto leading-relaxed mb-12">
              <div className="mb-4 text-ghost-white font-semibold">
                Building the Future of Mental Wellness
              </div>
              <div className="text-lg text-neural-blue font-semibold">
                From breakthrough research to life-changing technology
              </div>
            </div>
            
            {/* Timeline Badge */}
            <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full border border-mind-purple/30">
              <Clock className="h-5 w-5 text-mind-purple" />
              <span className="text-mind-purple font-bold font-orbitron">2025 - 2026 Roadmap</span>
            </div>
          </div>
        </div>

        {/* Epic Timeline Visualization */}
        <div className="mb-16">
          {/* Timeline Path */}
          <div className="relative flex justify-center items-center mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-4xl h-1 bg-gradient-to-r from-neural-blue/20 via-neural-blue/50 to-neural-blue/20 rounded-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neural-blue to-mind-purple rounded-full animate-pulse opacity-60"></div>
              </div>
            </div>
            
            {/* Phase Nodes */}
            <div className="relative flex justify-between items-center w-full max-w-4xl">
              {phases.map((phase, index) => {
                const isActive = phase.id === activePhase;
                const isPast = phases.findIndex(p => p.id === activePhase) > index;
                const IconComponent = phase.icon;
                
                return (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(phase.id)}
                    className={`relative group transition-all duration-500 ${
                      isActive ? 'scale-125 z-20' : 'scale-100 hover:scale-110 z-10'
                    }`}
                  >
                    {/* Node Circle */}
                    <div className={`w-20 h-20 rounded-full border-4 transition-all duration-300 ${
                      isActive 
                        ? 'bg-neural-blue border-neural-blue shadow-lg shadow-neural-blue/50' 
                        : isPast 
                        ? 'bg-green-500 border-green-500' 
                        : 'bg-neural-gray/20 border-neural-gray/30 group-hover:border-neural-blue/50'
                    } flex items-center justify-center relative overflow-hidden`}>
                      
                      {/* Icon */}
                      <IconComponent className={`h-8 w-8 transition-all duration-300 ${
                        isActive 
                          ? 'text-white animate-pulse' 
                          : isPast 
                          ? 'text-white' 
                          : 'text-neural-gray group-hover:text-neural-blue'
                      }`} />
                      
                      {/* Active Pulse Ring */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full border-4 border-neural-blue animate-ping opacity-75"></div>
                      )}
                      
                      {/* Completion Check */}
                      {isPast && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                    
                    {/* Phase Label */}
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center min-w-max">
                      <div className={`font-bold font-orbitron transition-all duration-300 ${
                        isActive 
                          ? 'text-neural-blue text-lg' 
                          : isPast 
                          ? 'text-green-400 text-base' 
                          : 'text-neural-gray text-base group-hover:text-ghost-white'
                      }`}>
                        {phase.title}
                      </div>
                      <div className="text-xs text-neural-gray mt-1">
                        {phase.timeline}
                      </div>
                    </div>
                    
                    {/* Connection Line to Next */}
                    {index < phases.length - 1 && (
                      <div className={`absolute top-1/2 left-full w-20 h-1 -ml-2 transition-all duration-300 ${
                        isPast || isActive 
                          ? 'bg-gradient-to-r from-green-500 to-neural-blue' 
                          : 'bg-neural-gray/20'
                      } transform -translate-y-1/2 z-0`}>
                        {/* Animated Flow */}
                        {(isPast || isActive) && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Phase Navigation & Milestones - Combined Clean Design */}
        <div className="mt-12 mb-16 max-w-6xl mx-auto space-y-6">
          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-6">
            <button
              onClick={() => {
                const currentIndex = phases.findIndex(p => p.id === activePhase);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : phases.length - 1;
                setActivePhase(phases[prevIndex].id);
              }}
              className="glass-card p-3 rounded-full hover:bg-neural-blue/10 transition-all duration-300 group border border-neural-blue/30 hover:border-neural-blue"
            >
              <ChevronLeft className="h-5 w-5 text-neural-blue group-hover:text-ghost-white" />
            </button>

            <div className="glass-card rounded-xl px-6 py-3 text-center border border-neural-blue/30 min-w-[280px]">
              <div className="flex items-center justify-center space-x-3">
                {activePhaseData && React.createElement(activePhaseData.icon, { 
                  className: "h-6 w-6 text-neural-blue" 
                })}
                <div>
                  <div className="text-lg font-bold text-neural-blue font-orbitron">
                    {activePhaseData?.title}
                  </div>
                  <div className="text-xs text-neural-gray">
                    Phase {(phases.findIndex(p => p.id === activePhase) + 1)} of {phases.length} • {activePhaseData?.timeline}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                const currentIndex = phases.findIndex(p => p.id === activePhase);
                const nextIndex = currentIndex < phases.length - 1 ? currentIndex + 1 : 0;
                setActivePhase(phases[nextIndex].id);
              }}
              className="glass-card p-3 rounded-full hover:bg-neural-blue/10 transition-all duration-300 group border border-neural-blue/30 hover:border-neural-blue"
            >
              <ChevronRight className="h-5 w-5 text-neural-blue group-hover:text-ghost-white" />
            </button>
          </div>

          {/* Milestones Only */}
          {activePhaseData && (
            <div className="flex flex-wrap justify-center gap-3">
              {activePhaseData.milestones.map((milestone, idx) => (
                <div
                  key={milestone.title}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                    ${milestone.status === 'done' ? 'bg-green-500/20 text-green-500 border border-green-500/30' : 
                      milestone.status === 'active' ? 'bg-neural-blue/20 text-neural-blue border border-neural-blue/30' : 
                      'bg-neural-gray/20 text-neural-gray border border-neural-gray/30'}
                  `}
                >
                  <milestone.visual className={`h-4 w-4 ${
                    milestone.status === 'active' ? 'animate-pulse' : ''
                  }`} />
                  <span className="font-medium text-sm">{milestone.title}</span>
                  {milestone.status === 'done' && <span className="text-xs">✓</span>}
                  {milestone.status === 'active' && <span className="text-xs">⏳</span>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action - Compact Design */}
        <div className="glass-card rounded-2xl p-8 text-center border border-neural-blue/30 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-ghost-white mb-4 font-orbitron">
            Follow Our Live Progress
          </h2>
          <p className="text-lg text-neural-gray mb-6 max-w-xl mx-auto leading-relaxed">
            Real-time updates as we hit milestones. Join our community for instant notifications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <button className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-neural-blue to-mind-purple text-white font-bold rounded-xl group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-neural-blue/30">
              <Users className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Join Community
            </button>
            
            <button className="flex items-center justify-center w-full sm:w-auto px-6 py-3 glass-card border border-neural-blue/40 text-neural-blue hover:bg-neural-blue/10 font-bold rounded-xl group hover:scale-105 transition-all duration-300">
              <Bell className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EpicRoadmap;