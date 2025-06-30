
import React from 'react';
import PageLayout from '@/components/PageLayout';
import VisionHero from '@/components/VisionHero';
import BCIExplanation from '@/components/BCIExplanation';
import ProblemStatement from '@/components/ProblemStatement';

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <VisionHero />

      {/* Core Content - Essential Sections */}
      <div className="space-y-0">
        {/* BCI Explanation - What is BCI */}
        <section className="relative">
          <BCIExplanation />
        </section>

        {/* Problem Statement - Why it matters */}
        <section className="relative">
          <ProblemStatement />
        </section>
      </div>
    </PageLayout>
  );
};

export default Index;
