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
  ChevronRight
} from 'lucide-react';

interface RoadmapPhase {
  id: string;
  title: string;
  subtitle: string;
  status: 'completed' | 'in-progress' | 'planned';
  progress: number;
  timeline: string;
  icon: React.ElementType;
  color: string;
  milestones: {
    title: string;
    status: 'done' | 'active' | 'pending';
    visual: React.ElementType;
  }[];
}

const VisualRoadmap = () => {
  const [activePhase, setActivePhase] = useState<string>('foundation');
  const [hoveredMilestone, setHoveredMilestone] = useState<string | null>(null);

  const phases: RoadmapPhase[] = [
    {
      id: 'foundation',
      title: 'Foundation',
      subtitle: 'Core BCI Technology',
      status: 'in-progress',
      progress: 85,
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
      progress: 0,
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
      progress: 0,
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
      progress: 0,
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
      progress: 0,
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
      case 'completed': return 'text-green-400 border-green-400';
      case 'in-progress': return 'text-neural-blue border-neural-blue';
      default: return 'text-neural-gray border-neural-gray';
    }
  };

  const getMilestoneColor = (status: string) => {
    switch (status) {
      case 'done': return 'text-green-400 bg-green-400/20';
      case 'active': return 'text-neural-blue bg-neural-blue/20';
      default: return 'text-neural-gray bg-neural-gray/10';
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
    }, 4000);

    return () => clearInterval(interval);
  }, [phases]);

  const activePhaseData = phases.find(p => p.id === activePhase);

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Visual Elements */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 flex justify-center items-center opacity-10">
            <Brain className="h-64 w-64 text-neural-blue animate-pulse" />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-3 glass-card px-6 py-3 mb-8 rounded-full">
              <Rocket className="h-5 w-5 text-neural-blue animate-pulse" />
              <span className="text-sm font-semibold text-neural-gray tracking-wide font-orbitron uppercase">
                Live Progress • Updated December 2024
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight relative">
              <span className="text-ghost-white">Our</span>{' '}
              <span className="text-neural-blue font-orbitron neural-glow relative">
                Journey
                <div className="absolute -inset-2 bg-neural-blue/20 blur-xl animate-pulse"></div>
              </span>
            </h1>
          </div>
        </div>

        {/* Visual Progress Overview */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              const isActive = phase.id === activePhase;
              
              return (
                <div
                  key={phase.id}
                  className={`relative cursor-pointer transition-all duration-500 ${
                    isActive ? 'scale-110' : 'scale-100 hover:scale-105'
                  }`}
                  onClick={() => setActivePhase(phase.id)}
                >
                  <div className={`glass-card p-6 border-2 ${getStatusColor(phase.status)} ${
                    isActive ? 'bg-neural-blue/10' : ''
                  } transition-all duration-300`}>
                    
                    {/* Clean active phase indicator */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-lg border-2 border-neural-blue/40 animate-pulse"></div>
                    )}
                    
                    <div className="relative z-10 text-center">
                      <IconComponent className={`h-12 w-12 mx-auto mb-3 ${getStatusColor(phase.status).split(' ')[0]} ${
                        isActive ? 'animate-pulse' : ''
                      }`} />
                      <h3 className="font-bold text-ghost-white font-orbitron">{phase.title}</h3>
                      <p className="text-xs text-neural-gray mt-1">{phase.timeline}</p>
                      
                      {/* Progress ring */}
                      <div className="relative w-16 h-16 mx-auto mt-4">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            className="text-neural-gray/20"
                          />
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray={`${phase.progress * 1.76} 176`}
                            className={getStatusColor(phase.status).split(' ')[0]}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-ghost-white">
                            {phase.progress}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
          
          {/* Replace with game-like navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            {/* Previous Button */}
            <button
              onClick={() => {
                const currentIndex = phases.findIndex(p => p.id === activePhase);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : phases.length - 1;
                setActivePhase(phases[prevIndex].id);
              }}
              className="glass-card p-3 rounded-full hover:bg-neural-blue/10 transition-all duration-300 group"
            >
              <ChevronLeft className="h-5 w-5 text-neural-blue group-hover:text-ghost-white" />
            </button>

            {/* Current Phase Display */}
            <div className="glass-card rounded-full px-6 py-3 min-w-[300px] text-center">
              <div className="flex items-center justify-center space-x-3">
                {React.createElement(phases.find(p => p.id === activePhase)?.icon || phases[0].icon, { 
                  className: "h-5 w-5 text-neural-blue animate-pulse" 
                })}
                <div>
                  <div className="text-sm font-semibold text-neural-blue font-orbitron">
                    {phases.find(p => p.id === activePhase)?.title || phases[0].title}
                  </div>
                  <div className="text-xs text-neural-gray">
                    {(phases.findIndex(p => p.id === activePhase) + 1) || 1} of {phases.length} • {phases.find(p => p.id === activePhase)?.progress || 0}% Complete
                  </div>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={() => {
                const currentIndex = phases.findIndex(p => p.id === activePhase);
                const nextIndex = currentIndex < phases.length - 1 ? currentIndex + 1 : 0;
                setActivePhase(phases[nextIndex].id);
              }}
              className="glass-card p-3 rounded-full hover:bg-neural-blue/10 transition-all duration-300 group"
            >
              <ChevronRight className="h-5 w-5 text-neural-blue group-hover:text-ghost-white" />
            </button>
          </div>
          
          {/* Phase Indicator Dots */}
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {phases.map((phase, index) => (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    phase.id === activePhase
                      ? 'bg-neural-blue scale-125'
                      : 'bg-neural-gray/30 hover:bg-neural-blue/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Active Phase Details */}
        {activePhaseData && (
          <div className="glass-card rounded-3xl p-8 mb-16 border-2 border-neural-blue/30 bg-neural-blue/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Phase Info */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-neural-blue/20 rounded-2xl">
                    <activePhaseData.icon className="h-12 w-12 text-neural-blue" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-ghost-white font-orbitron">
                      {activePhaseData.title}
                    </h2>
                    <p className="text-xl text-neural-gray">{activePhaseData.subtitle}</p>
                    <p className="text-sm text-neural-blue font-semibold mt-1">
                      {activePhaseData.timeline}
                    </p>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      activePhaseData.status === 'in-progress' ? 'bg-neural-blue animate-pulse' :
                      activePhaseData.status === 'completed' ? 'bg-green-500' :
                      'bg-neural-gray/50'
                    }`}></div>
                    <span className="text-sm font-semibold text-neural-blue capitalize">
                      {activePhaseData.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Milestones */}
              <div>
                <h3 className="text-xl font-bold text-ghost-white mb-6 font-orbitron">
                  Key Milestones
                </h3>
                <div className="space-y-4">
                  {activePhaseData.milestones.map((milestone, index) => {
                    const MilestoneIcon = milestone.visual;
                    return (
                      <div
                        key={milestone.title}
                        className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                          getMilestoneColor(milestone.status)
                        } hover:scale-105 cursor-pointer`}
                        onMouseEnter={() => setHoveredMilestone(milestone.title)}
                        onMouseLeave={() => setHoveredMilestone(null)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className={`p-2 rounded-lg ${getMilestoneColor(milestone.status)}`}>
                          <MilestoneIcon className="h-6 w-6" />
                        </div>
                        <span className="font-semibold flex-1">{milestone.title}</span>
                        {milestone.status === 'done' && (
                          <CheckCircle2 className="h-5 w-5 text-green-400" />
                        )}
                        {milestone.status === 'active' && (
                          <Clock className="h-5 w-5 text-neural-blue animate-pulse" />
                        )}
                        {milestone.status === 'pending' && (
                          <Circle className="h-5 w-5 text-neural-gray" />
                        )}
                        
                        {/* Hover effect */}
                        {hoveredMilestone === milestone.title && (
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            <div className="w-2 h-2 bg-neural-blue rounded-full animate-ping"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Visual Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: CheckCircle2, value: '1', label: 'Completed', color: 'text-green-400' },
            { icon: Clock, value: '2', label: 'In Progress', color: 'text-neural-blue' },
            { icon: Circle, value: '2', label: 'Planned', color: 'text-neural-gray' },
            { icon: Target, value: '48%', label: 'Overall Progress', color: 'text-mind-purple' }
          ].map((stat, index) => (
            <div key={stat.label} className="glass-card p-6 text-center group hover:scale-105 transition-all">
              <stat.icon className={`h-12 w-12 mx-auto mb-3 ${stat.color} group-hover:animate-pulse`} />
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-sm text-neural-gray font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-neural-blue rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 4}s`
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-ghost-white mb-6 font-orbitron">
                Follow Our Live Progress
              </h2>
              <p className="text-xl text-neural-gray mb-8 max-w-3xl mx-auto">
                We update this roadmap in real-time as we hit milestones. 
                Join our community to get instant notifications!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="neural-gradient text-white font-bold px-8 py-4 text-lg rounded-xl hover:scale-105 transition-transform font-orbitron group">
                  <Users className="inline h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Join Community
                </button>
                <button className="glass-card text-neural-blue hover:bg-neural-blue/10 font-bold px-8 py-4 text-lg rounded-xl hover:scale-105 transition-transform font-orbitron">
                  Subscribe to Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualRoadmap;