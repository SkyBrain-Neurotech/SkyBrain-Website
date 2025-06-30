import React from 'react';
import { Brain } from 'lucide-react';

const VisualiAPF = () => {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          {/* Background Brain */}
          <div className="absolute inset-0 flex justify-center items-center opacity-5">
            <Brain className="h-96 w-96 text-neural-blue" />
          </div>
          
          <div className="relative z-10">

            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
              <span className="text-ghost-white">Meet</span>{' '}
              <span className="text-neural-blue font-orbitron neural-glow text-8xl md:text-9xl block">
                iAPF
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-neural-gray mb-8 space-y-2">
              <div><strong className="text-neural-blue">i</strong>ndividual</div>
              <div><strong className="text-neural-blue">A</strong>lpha</div>
              <div><strong className="text-neural-blue">P</strong>eak</div>
              <div><strong className="text-neural-blue">F</strong>requency</div>
            </div>
            <p className="text-lg text-neural-gray mb-8 max-w-2xl mx-auto">
              Your brain's unique alpha rhythm (8-13 Hz) - the key to personalized neurofeedback
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualiAPF;