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
  education?: string;
  experience?: string;
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
      avatar: '/api/placeholder/400/400',
      bio: 'Visionary leader driving the future of neurotechnology and mental wellness through Brain-Computer Interface innovations. Leading breakthrough research in neural signal processing and cognitive enhancement systems.',
      expertise: ['Neurotechnology', 'Leadership', 'Strategy', 'BCI Research', 'Neural Engineering'],
      status: 'founder',
      education: 'Ph.D. in Neuroscience, M.S. in Biomedical Engineering',
      experience: '15+ years in neurotechnology and BCI research'
    },
    {
      id: 'ai-advisor',
      name: 'AI Advisor',
      role: 'AI Advisor',
      category: 'Advisory',
      avatar: '/api/placeholder/400/400',
      bio: 'Leading AI expert guiding our machine learning initiatives and neural pattern recognition systems. Pioneer in deep learning applications for brain-computer interfaces.',
      expertise: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks', 'Deep Learning', 'Pattern Recognition'],
      status: 'advisor',
      education: 'Ph.D. in Computer Science, Specialization in AI',
      experience: '20+ years in AI research and development'
    },
    {
      id: 'neurotech-advisor',
      name: 'Neurotech Advisor',
      role: 'Neurotech Advisor',
      category: 'Advisory',
      avatar: '/api/placeholder/400/400',
      bio: 'Neurotechnology pioneer with decades of BCI experience and groundbreaking research in neural interfaces. Published author with 100+ peer-reviewed papers.',
      expertise: ['BCI Technology', 'Neuroscience', 'Signal Processing', 'Neural Engineering', 'Biomedical Devices'],
      status: 'advisor',
      education: 'Ph.D. in Biomedical Engineering, M.D.',
      experience: '25+ years in neurotechnology and medical devices'
    },
    // Research Team
    {
      id: 'research-scientist-1',
      name: 'Dr. Sarah Chen',
      role: 'Senior Research Scientist',
      category: 'Research',
      avatar: '/api/placeholder/400/400',
      bio: 'Advanced research in neural signal processing and cognitive enhancement methodologies. Leading our EEG analysis and real-time processing initiatives.',
      expertise: ['Neuroscience', 'Signal Processing', 'Cognitive Science', 'EEG Analysis', 'Data Science'],
      status: 'coming-soon',
      education: 'Ph.D. in Neuroscience, M.S. in Electrical Engineering',
      experience: '12+ years in neural signal processing'
    },
    {
      id: 'research-scientist-2',
      name: 'Dr. Michael Rodriguez',
      role: 'Research Scientist',
      category: 'Research',
      avatar: '/api/placeholder/400/400',
      bio: 'Specializing in real-time neural data analysis and pattern recognition algorithms. Expert in machine learning applications for BCI systems.',
      expertise: ['Data Analysis', 'Pattern Recognition', 'Neural Networks', 'Real-time Processing', 'Algorithm Development'],
      status: 'coming-soon',
      education: 'Ph.D. in Computer Science, M.S. in Statistics',
      experience: '10+ years in data science and neural computing'
    },
    // Technology Team
    {
      id: 'blockchain-expert',
      name: 'Dr. Alex Kumar',
      role: 'Blockchain & Security Lead',
      category: 'Technology',
      avatar: '/api/placeholder/400/400',
      bio: 'Ensuring secure, decentralized neural data management and privacy-preserving BCI systems. Expert in cryptographic protocols for healthcare data.',
      expertise: ['Blockchain', 'Cryptography', 'Security', 'Decentralized Systems', 'Data Privacy'],
      status: 'coming-soon',
      education: 'Ph.D. in Cryptography, M.S. in Computer Science',
      experience: '8+ years in blockchain and security systems'
    },
    // Medical Advisors
    {
      id: 'doctor-advisor-1',
      name: 'Dr. Emily Johnson',
      role: 'Clinical Advisor',
      category: 'Medical',
      avatar: '/api/placeholder/400/400',
      bio: 'Clinical expertise in neurology and mental health applications of BCI technology. Board-certified neurologist with extensive research background.',
      expertise: ['Neurology', 'Clinical Research', 'Mental Health', 'Medical Ethics', 'Patient Care'],
      status: 'coming-soon',
      education: 'M.D., Ph.D. in Neuroscience',
      experience: '18+ years in clinical neurology and research'
    },
    {
      id: 'doctor-advisor-2',
      name: 'Dr. James Wilson',
      role: 'Medical Advisor',
      category: 'Medical',
      avatar: '/api/placeholder/400/400',
      bio: 'Bridging neurotechnology with clinical practice and patient care applications. Specialist in neuropsychiatry and brain disorders.',
      expertise: ['Medicine', 'Neuroscience', 'Healthcare', 'Patient Care', 'Neuropsychiatry'],
      status: 'coming-soon',
      education: 'M.D., Residency in Psychiatry and Neurology',
      experience: '15+ years in medical practice and research'
    },
    // Academic Researchers
    {
      id: 'academic-researcher-1',
      name: 'Dr. Maria Gonzalez',
      role: 'Principal Researcher',
      category: 'Academia',
      avatar: '/api/placeholder/400/400',
      bio: 'Leading academic research in brain-computer interfaces and publishing breakthrough studies. Professor at leading research university.',
      expertise: ['Academic Research', 'Publications', 'BCI Theory', 'Scientific Writing', 'Grant Writing'],
      status: 'coming-soon',
      education: 'Ph.D. in Neuroscience, Postdoc in BCI Research',
      experience: '14+ years in academic research and teaching'
    },
    {
      id: 'academic-researcher-2',
      name: 'Dr. David Park',
      role: 'Research Fellow',
      category: 'Academia',
      avatar: '/api/placeholder/400/400',
      bio: 'Advancing the theoretical foundations of neurotechnology and cognitive enhancement. Rising star in computational neuroscience.',
      expertise: ['Research', 'Theory', 'Innovation', 'Cognitive Science', 'Computational Modeling'],
      status: 'coming-soon',
      education: 'Ph.D. in Computational Neuroscience',
      experience: '6+ years in theoretical neuroscience research'
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
            <Users className="h-6 w-6 text-neural-blue" />
            <span className="text-base font-bold text-neural-blue tracking-wide font-orbitron uppercase">
              Our Expert Team
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
            <span className="text-ghost-white">Meet Our</span>{' '}
            <span className="neural-gradient bg-clip-text text-transparent font-orbitron">
              Expert Team
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neural-gray max-w-4xl mx-auto leading-relaxed mb-8">
            Leading neuroscientists, AI researchers, and medical professionals pioneering the future of brain-computer interfaces.
          </p>
          
          <div className="text-neural-blue font-semibold">
            Click on any team member to learn more about their expertise
          </div>
        </div>

        {/* Team Grid - Professional Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                {/* Professional Team Card */}
                <div className={`glass-card p-8 rounded-2xl border-2 transition-all duration-300 ${
                  isHovered 
                    ? 'border-neural-blue shadow-lg shadow-neural-blue/30' 
                    : member.status === 'coming-soon' 
                    ? 'border-neural-gray/30' 
                    : 'border-neural-blue/20 hover:border-neural-blue/50'
                } relative overflow-hidden h-full`}>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${
                    getStatusColor(member.status)
                  } text-white`}>
                    {getStatusBadge(member.status)}
                  </div>
                  
                  {/* Professional Photo */}
                  <div className="relative mb-6">
                    <div className={`w-40 h-40 mx-auto rounded-2xl border-4 transition-all duration-300 ${
                      member.status === 'coming-soon' 
                        ? 'border-neural-gray/50' 
                        : 'border-neural-blue hover:border-neural-blue/80'
                    } relative overflow-hidden group-hover:shadow-lg group-hover:shadow-neural-blue/30 bg-gradient-to-br from-neural-blue/10 to-mind-purple/10`}>
                      
                      {/* Photo Container */}
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className={`w-full h-full object-cover transition-all duration-300 ${
                          isHovered ? 'scale-105' : 'scale-100'
                        } ${member.status === 'coming-soon' ? 'grayscale opacity-60' : ''}`}
                        onError={(e) => {
                          // Fallback to icon if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const iconDiv = target.nextElementSibling as HTMLElement;
                          if (iconDiv) iconDiv.style.display = 'flex';
                        }}
                      />
                      
                      {/* Fallback Icon (hidden by default) */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neural-blue/20 to-mind-purple/20 flex items-center justify-center" style={{ display: 'none' }}>
                        <IconComponent className={`h-16 w-16 transition-all duration-300 ${
                          member.status === 'coming-soon' 
                            ? 'text-neural-gray' 
                            : 'text-neural-blue'
                        }`} />
                      </div>
                      
                      {/* Coming Soon Overlay */}
                      {member.status === 'coming-soon' && (
                        <div className="absolute inset-0 bg-gradient-to-br from-shadow-black/60 to-transparent flex items-center justify-center">
                          <div className="text-sm text-ghost-white font-bold bg-neural-gray/80 px-3 py-1 rounded-full">JOINING SOON</div>
                        </div>
                      )}
                      
                      {/* Professional Glow Effect */}
                      {isHovered && member.status !== 'coming-soon' && (
                        <div className="absolute inset-0 bg-gradient-to-br from-neural-blue/20 to-mind-purple/20 pointer-events-none"></div>
                      )}
                    </div>
                  </div>
                  
                  {/* Professional Info */}
                  <div className="text-center">
                    <h3 className={`font-bold font-orbitron mb-2 transition-all duration-300 text-lg ${
                      member.status === 'coming-soon' 
                        ? 'text-neural-gray' 
                        : isHovered 
                        ? 'text-neural-blue' 
                        : 'text-ghost-white'
                    }`}>
                      {member.name}
                    </h3>
                    
                    <p className={`text-sm mb-3 font-semibold ${
                      member.status === 'coming-soon' ? 'text-neural-gray/70' : 'text-neural-blue'
                    }`}>
                      {member.role}
                    </p>
                    
                    {/* Education */}
                    {member.education && (
                      <div className={`text-xs mb-2 ${
                        member.status === 'coming-soon' 
                          ? 'text-neural-gray/50' 
                          : 'text-neural-gray'
                      }`}>
                        {member.education}
                      </div>
                    )}
                    
                    {/* Experience */}
                    {member.experience && (
                      <div className={`text-xs font-medium ${
                        member.status === 'coming-soon' 
                          ? 'text-neural-gray/50' 
                          : 'text-neural-blue/80'
                      }`}>
                        {member.experience}
                      </div>
                    )}
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
            { label: 'Ph.D. Holders', value: teamMembers.filter(m => m.education?.includes('Ph.D.')).length, icon: Award },
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
            
            {/* Professional Profile */}
            <div className="text-center mb-8">
              <div className={`w-48 h-48 mx-auto rounded-2xl border-4 border-neural-blue bg-gradient-to-br from-neural-blue/20 to-mind-purple/20 relative overflow-hidden mb-6`}>
                <img 
                  src={selectedMember.avatar} 
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const iconDiv = target.nextElementSibling as HTMLElement;
                    if (iconDiv) iconDiv.style.display = 'flex';
                  }}
                />
                {/* Fallback Icon */}
                <div className="absolute inset-0 bg-gradient-to-br from-neural-blue/20 to-mind-purple/20 flex items-center justify-center" style={{ display: 'none' }}>
                  {React.createElement(getCategoryIcon(selectedMember.category), { 
                    className: "h-20 w-20 text-neural-blue" 
                  })}
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-ghost-white font-orbitron mb-3">
                {selectedMember.name}
              </h2>
              <p className="text-neural-blue font-semibold text-lg mb-3">{selectedMember.role}</p>
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
              
              {selectedMember.education && (
                <div>
                  <h3 className="text-lg font-bold text-ghost-white mb-2">Education</h3>
                  <p className="text-neural-gray">{selectedMember.education}</p>
                </div>
              )}
              
              {selectedMember.experience && (
                <div>
                  <h3 className="text-lg font-bold text-ghost-white mb-2">Experience</h3>
                  <p className="text-neural-blue font-semibold">{selectedMember.experience}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSelection;