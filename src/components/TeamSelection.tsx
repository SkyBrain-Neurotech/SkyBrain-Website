import React, { useState, useEffect } from 'react';
import { Brain, Users, Award, BookOpen, Shield, Stethoscope, GraduationCap, Zap, User, Crown, Star } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: string;
  avatar: string;
  bio: string;
  expertise: string[];
  status: 'founder' | 'advisor' | 'team' | 'coming-soon';
  level: number;
  specialPower?: string;
}

const TeamSelection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const teamMembers: TeamMember[] = [
    // Leadership Team (From skybrain.in - to be populated)
    {
      id: 'founder-ceo',
      name: 'Founder & CEO',
      role: 'Founder & CEO',
      category: 'Leadership',
      avatar: '/api/placeholder/200/200',
      bio: 'Visionary leader driving the future of neurotechnology and mental wellness through Brain-Computer Interface innovations.',
      expertise: ['Neurotechnology', 'Leadership', 'Strategy', 'BCI Research'],
      status: 'founder',
      level: 10,
      specialPower: 'Neural Vision'
    },
    {
      id: 'ai-advisor',
      name: 'AI Advisor',
      role: 'AI Advisor',
      category: 'Advisory',
      avatar: '/api/placeholder/200/200',
      bio: 'Leading AI expert guiding our machine learning initiatives and neural pattern recognition systems.',
      expertise: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks', 'Deep Learning'],
      status: 'advisor',
      level: 9,
      specialPower: 'Deep Learning Mastery'
    },
    {
      id: 'neurotech-advisor',
      name: 'Neurotech Advisor',
      role: 'Neurotech Advisor',
      category: 'Advisory',
      avatar: '/api/placeholder/200/200',
      bio: 'Neurotechnology pioneer with decades of BCI experience and groundbreaking research in neural interfaces.',
      expertise: ['BCI Technology', 'Neuroscience', 'Signal Processing', 'Neural Engineering'],
      status: 'advisor',
      level: 9,
      specialPower: 'Brain Interface Expert'
    },
    // Research Team
    {
      id: 'research-scientist-1',
      name: 'Senior Research Scientist',
      role: 'Senior Research Scientist',
      category: 'Research',
      avatar: '/api/placeholder/200/200',
      bio: 'Advanced research in neural signal processing and cognitive enhancement methodologies.',
      expertise: ['Neuroscience', 'Signal Processing', 'Cognitive Science', 'EEG Analysis'],
      status: 'coming-soon',
      level: 8,
      specialPower: 'Neural Analytics'
    },
    {
      id: 'research-scientist-2',
      name: 'Research Scientist',
      role: 'Research Scientist',
      category: 'Research',
      avatar: '/api/placeholder/200/200',
      bio: 'Specializing in real-time neural data analysis and pattern recognition algorithms.',
      expertise: ['Data Analysis', 'Pattern Recognition', 'Neural Networks', 'Real-time Processing'],
      status: 'coming-soon',
      level: 7,
      specialPower: 'Pattern Master'
    },
    // Technology Team
    {
      id: 'blockchain-expert',
      name: 'Blockchain Expert',
      role: 'Blockchain & Security Lead',
      category: 'Technology',
      avatar: '/api/placeholder/200/200',
      bio: 'Ensuring secure, decentralized neural data management and privacy-preserving BCI systems.',
      expertise: ['Blockchain', 'Cryptography', 'Security', 'Decentralized Systems'],
      status: 'coming-soon',
      level: 8,
      specialPower: 'Crypto Shield'
    },
    // Medical Advisors
    {
      id: 'doctor-advisor-1',
      name: 'Clinical Advisor',
      role: 'Clinical Advisor',
      category: 'Medical',
      avatar: '/api/placeholder/200/200',
      bio: 'Clinical expertise in neurology and mental health applications of BCI technology.',
      expertise: ['Neurology', 'Clinical Research', 'Mental Health', 'Medical Ethics'],
      status: 'coming-soon',
      level: 9,
      specialPower: 'Clinical Wisdom'
    },
    {
      id: 'doctor-advisor-2',
      name: 'Medical Advisor',
      role: 'Medical Advisor',
      category: 'Medical',
      avatar: '/api/placeholder/200/200',
      bio: 'Bridging neurotechnology with clinical practice and patient care applications.',
      expertise: ['Medicine', 'Neuroscience', 'Healthcare', 'Patient Care'],
      status: 'coming-soon',
      level: 8,
      specialPower: 'Health Guardian'
    },
    // Academic Researchers
    {
      id: 'academic-researcher-1',
      name: 'Principal Researcher',
      role: 'Principal Researcher',
      category: 'Academia',
      avatar: '/api/placeholder/200/200',
      bio: 'Leading academic research in brain-computer interfaces and publishing breakthrough studies.',
      expertise: ['Academic Research', 'Publications', 'BCI Theory', 'Scientific Writing'],
      status: 'coming-soon',
      level: 8,
      specialPower: 'Knowledge Seeker'
    },
    {
      id: 'academic-researcher-2',
      name: 'Research Fellow',
      role: 'Research Fellow',
      category: 'Academia',
      avatar: '/api/placeholder/200/200',
      bio: 'Advancing the theoretical foundations of neurotechnology and cognitive enhancement.',
      expertise: ['Research', 'Theory', 'Innovation', 'Cognitive Science'],
      status: 'coming-soon',
      level: 7,
      specialPower: 'Theory Crafter'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Leadership': return Crown;
      case 'Advisory': return Star;
      case 'Research': return BookOpen;
      case 'Technology': return Shield;
      case 'Medical': return Stethoscope;
      case 'Academia': return GraduationCap;
      default: return User;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'founder': return 'from-yellow-500 to-orange-500';
      case 'advisor': return 'from-neural-blue to-mind-purple';
      case 'team': return 'from-green-500 to-blue-500';
      case 'coming-soon': return 'from-neural-gray to-neural-blue';
      default: return 'from-neural-gray to-neural-blue';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'founder': return '👑 FOUNDER';
      case 'advisor': return '⭐ ADVISOR';
      case 'team': return '💎 ACTIVE';
      case 'coming-soon': return '🚀 JOINING';
      default: return 'TEAM';
    }
  };

  return (
    <section className="pt-32 pb-20 relative overflow-hidden min-h-screen">
      {/* Epic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-shadow-black to-neural-blue/5"></div>
        
        {/* Neural Network Background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="team-neural" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <circle cx="60" cy="60" r="2" fill="#00D4FF" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite" />
                </circle>
                <line x1="60" y1="0" x2="60" y2="120" stroke="#00D4FF" strokeWidth="0.5" opacity="0.2" />
                <line x1="0" y1="60" x2="120" y2="60" stroke="#00D4FF" strokeWidth="0.5" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#team-neural)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Epic Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 glass-card px-8 py-4 mb-8 rounded-full border border-neural-blue/30">
            <Users className="h-6 w-6 text-neural-blue animate-pulse" />
            <span className="text-base font-bold text-neural-blue tracking-wide font-orbitron uppercase">
              🧠 Neural Team Assembly
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
            <span className="text-ghost-white">Meet Our</span>{' '}
            <span className="neural-gradient bg-clip-text text-transparent font-orbitron">
              Neural Squad
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neural-gray max-w-4xl mx-auto leading-relaxed mb-8">
            We don't get general developers - Our team consists of specialized neural engineers, 
            AI experts, and neuroscience pioneers.
          </p>
          
          <div className="text-neural-blue font-semibold">
            Select a team member to view their neural profile
          </div>
        </div>

        {/* Team Grid - Game-like Character Selection */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
          {teamMembers.map((member, index) => {
            const IconComponent = getCategoryIcon(member.category);
            const isHovered = hoveredMember === member.id;
            
            return (
              <div
                key={member.id}
                className={`relative group cursor-pointer transition-all duration-500 transform ${
                  isHovered ? 'scale-110 z-20' : 'scale-100 hover:scale-105'
                }`}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                onClick={() => {
                  setSelectedMember(member);
                  setShowModal(true);
                }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Character Card */}
                <div className={`glass-card p-6 rounded-2xl border-2 transition-all duration-300 ${
                  isHovered 
                    ? 'border-neural-blue shadow-lg shadow-neural-blue/30' 
                    : member.status === 'coming-soon' 
                    ? 'border-neural-gray/30' 
                    : 'border-neural-blue/20 hover:border-neural-blue/50'
                } relative overflow-hidden`}>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${
                    getStatusColor(member.status)
                  } text-white`}>
                    {getStatusBadge(member.status)}
                  </div>
                  
                  {/* Level Badge */}
                  <div className="absolute top-2 left-2 w-8 h-8 bg-neural-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-neural-blue">{member.level}</span>
                  </div>
                  
                  {/* Avatar/Character */}
                  <div className="relative mb-4">
                    <div className={`w-24 h-24 mx-auto rounded-full border-4 transition-all duration-300 ${
                      member.status === 'coming-soon' 
                        ? 'border-neural-gray/50 bg-neural-gray/10' 
                        : 'border-neural-blue bg-gradient-to-br from-neural-blue/20 to-mind-purple/20'
                    } flex items-center justify-center relative overflow-hidden group-hover:shadow-lg group-hover:shadow-neural-blue/30`}>
                      
                      {/* Character Icon */}
                      <div className={`relative transition-all duration-300 ${
                        isHovered ? 'scale-125' : 'scale-100'
                      }`}>
                        <IconComponent className={`h-12 w-12 transition-all duration-300 ${
                          member.status === 'coming-soon' 
                            ? 'text-neural-gray' 
                            : 'text-neural-blue group-hover:text-white'
                        }`} />
                        
                        {/* Special Effects for Active Members */}
                        {member.status !== 'coming-soon' && isHovered && (
                          <div className="absolute inset-0 rounded-full border-2 border-neural-blue animate-ping opacity-75"></div>
                        )}
                      </div>
                      
                      {/* Coming Soon Overlay */}
                      {member.status === 'coming-soon' && (
                        <div className="absolute inset-0 bg-gradient-to-br from-neural-gray/20 to-transparent flex items-center justify-center">
                          <div className="text-xs text-neural-gray font-bold">SOON</div>
                        </div>
                      )}
                    </div>
                    
                    {/* Power Level Animation */}
                    {isHovered && member.status !== 'coming-soon' && (
                      <div className="absolute -inset-2 bg-gradient-to-r from-neural-blue/20 via-mind-purple/20 to-neural-blue/20 rounded-full blur-lg animate-pulse"></div>
                    )}
                  </div>
                  
                  {/* Character Info */}
                  <div className="text-center">
                    <h3 className={`font-bold font-orbitron mb-1 transition-all duration-300 ${
                      member.status === 'coming-soon' 
                        ? 'text-neural-gray text-sm' 
                        : isHovered 
                        ? 'text-neural-blue text-base' 
                        : 'text-ghost-white text-sm'
                    }`}>
                      {member.name}
                    </h3>
                    
                    <p className={`text-xs mb-2 ${
                      member.status === 'coming-soon' ? 'text-neural-gray/70' : 'text-neural-gray'
                    }`}>
                      {member.role}
                    </p>
                    
                    {/* Special Power */}
                    {member.specialPower && (
                      <div className={`text-xs font-semibold transition-all duration-300 ${
                        member.status === 'coming-soon' 
                          ? 'text-neural-gray/50' 
                          : isHovered 
                          ? 'text-mind-purple' 
                          : 'text-neural-blue/70'
                      }`}>
                        ⚡ {member.specialPower}
                      </div>
                    )}
                    
                    {/* Level Bar */}
                    <div className="mt-3">
                      <div className="w-full bg-neural-gray/20 rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            member.status === 'coming-soon' 
                              ? 'bg-neural-gray/50' 
                              : 'bg-gradient-to-r from-neural-blue to-mind-purple'
                          }`}
                          style={{ width: `${member.level * 10}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  {isHovered && member.status !== 'coming-soon' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-neural-blue/10 to-mind-purple/10 rounded-2xl pointer-events-none"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Active Members', value: teamMembers.filter(m => m.status !== 'coming-soon').length, icon: Users },
            { label: 'Joining Soon', value: teamMembers.filter(m => m.status === 'coming-soon').length, icon: Zap },
            { label: 'Avg Level', value: Math.round(teamMembers.reduce((acc, m) => acc + m.level, 0) / teamMembers.length), icon: Award },
            { label: 'Specializations', value: new Set(teamMembers.flatMap(m => m.expertise)).size, icon: Brain }
          ].map((stat, index) => (
            <div key={stat.label} className="glass-card p-6 rounded-xl text-center border border-neural-blue/20">
              <stat.icon className="h-8 w-8 text-neural-blue mx-auto mb-2" />
              <div className="text-2xl font-bold text-neural-blue">{stat.value}</div>
              <div className="text-sm text-neural-gray">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Character Details Modal */}
      {showModal && selectedMember && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-neural-blue/30">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-neural-gray hover:text-neural-blue transition-colors"
            >
              ✕
            </button>
            
            {/* Character Profile */}
            <div className="text-center mb-6">
              <div className={`w-32 h-32 mx-auto rounded-full border-4 border-neural-blue bg-gradient-to-br from-neural-blue/20 to-mind-purple/20 flex items-center justify-center mb-4`}>
                {React.createElement(getCategoryIcon(selectedMember.category), { 
                  className: "h-16 w-16 text-neural-blue" 
                })}
              </div>
              
              <h2 className="text-2xl font-bold text-ghost-white font-orbitron mb-2">
                {selectedMember.name}
              </h2>
              <p className="text-neural-blue font-semibold mb-2">{selectedMember.role}</p>
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${
                getStatusColor(selectedMember.status)
              } text-white mb-4`}>
                {getStatusBadge(selectedMember.status)}
              </div>
            </div>
            
            {/* Bio & Details */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-ghost-white mb-2">Bio</h3>
                <p className="text-neural-gray">{selectedMember.bio}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-ghost-white mb-2">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.expertise.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-neural-blue/20 text-neural-blue rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {selectedMember.specialPower && (
                <div>
                  <h3 className="text-lg font-bold text-ghost-white mb-2">Special Power</h3>
                  <p className="text-mind-purple font-semibold">⚡ {selectedMember.specialPower}</p>
                </div>
              )}
              
              <div>
                <h3 className="text-lg font-bold text-ghost-white mb-2">Power Level</h3>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-neural-gray/20 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full bg-gradient-to-r from-neural-blue to-mind-purple transition-all duration-1000"
                      style={{ width: `${selectedMember.level * 10}%` }}
                    ></div>
                  </div>
                  <span className="text-neural-blue font-bold">{selectedMember.level}/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSelection;