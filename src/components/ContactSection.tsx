
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  Brain,
  Linkedin,
  Github,
  Microscope,
  Building2,
  Users,
  Code,
  Heart,
  Zap
} from 'lucide-react';

const ContactSection = () => {
  const involvementOptions = [
    {
      icon: Microscope,
      title: "Research Collaboration",
      description: "Join our research initiatives in non-invasive BCI technology",
      action: "Partner with Us",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building2,
      title: "Enterprise Integration",
      description: "Integrate BCI technology into your applications and products",
      action: "Business Partnership",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Developer Community",
      description: "Build with our BCI APIs and contribute to open-source projects",
      action: "Join Developers",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Heart,
      title: "Clinical Applications",
      description: "Explore BCI applications in healthcare and mental wellness",
      action: "Healthcare Partners",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Community Advocacy",
      description: "Help promote ethical neurotechnology and mental health awareness",
      action: "Become an Advocate",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Innovation Lab",
      description: "Explore cutting-edge applications of BCI in your field",
      action: "Innovation Partnership",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 neural-network-bg"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass-card rounded-full px-6 py-3 mb-8">
            <Brain className="h-5 w-5 text-neural-blue animate-pulse" />
            <span className="text-sm font-semibold text-neural-blue tracking-wide uppercase">Get Involved</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="text-ghost-white">Shape the Future of</span>{' '}
            <span className="text-neural-blue font-orbitron">
              Neurotechnology
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-neural-gray max-w-4xl mx-auto leading-relaxed">
            Whether you're a researcher, developer, healthcare provider, or innovator - 
            there are many ways to contribute to the BCI revolution.
          </p>
        </div>

        {/* Ways to Get Involved */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-ghost-white font-orbitron">
            Ways to Get Involved
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {involvementOptions.map((option, index) => (
              <Card key={option.title} className="glass-card border-neural-blue/20 hover:border-neural-blue/40 transition-all group hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className={`p-4 bg-gradient-to-r ${option.color} bg-opacity-20 rounded-xl mx-auto w-fit mb-4`}>
                    <option.icon className="h-8 w-8 text-neural-blue group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-xl font-bold text-ghost-white mb-3 group-hover:text-neural-blue transition-colors font-orbitron">
                    {option.title}
                  </h4>
                  <p className="text-neural-gray mb-4 leading-relaxed">
                    {option.description}
                  </p>
                  <Button className="cyber-button w-full">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <Card className="glass-card border-neural-blue/20 holographic">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold mb-8 text-ghost-white font-orbitron">Send us a Message</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-neural-gray mb-3 uppercase tracking-wide">
                      First Name
                    </label>
                    <Input 
                      placeholder="First Name" 
                      className="glass-card border-neural-blue/30 focus:border-neural-blue text-lg py-6 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neural-gray mb-3 uppercase tracking-wide">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Last Name" 
                      className="glass-card border-neural-blue/30 focus:border-neural-blue text-lg py-6 rounded-xl"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-neural-gray mb-3 uppercase tracking-wide">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="glass-card border-neural-blue/30 focus:border-neural-blue text-lg py-6 rounded-xl"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-neural-gray mb-3 uppercase tracking-wide">
                    Interest Area
                  </label>
                  <Input 
                    placeholder="Research, Enterprise, Development, Healthcare..." 
                    className="glass-card border-neural-blue/30 focus:border-neural-blue text-lg py-6 rounded-xl"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-neural-gray mb-3 uppercase tracking-wide">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Your message..."
                    rows={6}
                    className="glass-card border-neural-blue/30 focus:border-neural-blue resize-none text-lg p-6 rounded-xl"
                  />
                </div>
                
                <Button className="w-full cyber-button text-primary-foreground font-bold py-6 text-xl rounded-xl group">
                  <Send className="mr-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <Card className="glass-card border-neural-blue/20 holographic">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-ghost-white font-orbitron">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, text: "info@skybrain.in", gradient: "from-blue-500 to-cyan-500" },
                    { icon: Phone, text: "+91 93807 17022", gradient: "from-green-500 to-emerald-500" },
                    { icon: MapPin, text: "Bangalore, India", gradient: "from-purple-500 to-pink-500" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group">
                      <div className={`p-3 bg-gradient-to-r ${item.gradient} bg-opacity-20 rounded-xl mr-4`}>
                        <item.icon className="h-6 w-6 text-neural-blue group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-neural-gray text-lg font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-neural-blue/20 holographic">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-ghost-white font-orbitron">Follow Our Research</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="lg" className="glass-card border-neural-blue/30 text-neural-blue p-4 rounded-xl">
                    <Linkedin className="h-6 w-6" />
                  </Button>
                  <Button variant="outline" size="lg" className="glass-card border-neural-blue/30 text-neural-blue p-4 rounded-xl">
                    <Github className="h-6 w-6" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-neural-blue/40 bg-gradient-to-br from-neural-blue/10 to-mind-purple/10 holographic">
              <CardContent className="p-10 text-center">
                <div className="relative mb-6">
                  <Brain className="h-16 w-16 text-neural-blue mx-auto animate-pulse floating" />
                  <div className="absolute inset-0 h-16 w-16 bg-neural-blue/20 rounded-full blur-xl mx-auto"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-ghost-white font-orbitron">
                  Ready to Explore BCI?
                </h3>
                <p className="text-neural-gray text-lg mb-6">
                  Schedule a demo and experience the future of neurotechnology.
                </p>
                <Button className="cyber-button text-primary-foreground font-bold px-8 py-4 text-lg rounded-xl">
                  Schedule Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
