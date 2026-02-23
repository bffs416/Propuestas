'use client';

import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Objective from '@/components/landing/objective';
import Services from '@/components/landing/services';
import Investment from '@/components/landing/investment';
import Benefits from '@/components/landing/benefits';
import Footer from '@/components/landing/footer';
import { mildredProposalData } from '@/lib/proposal-data';

export default function MildredMorenoProposalPage() {
  return (
    <>
      <Header proposalData={mildredProposalData} />
      <main className="max-w-6xl mx-auto px-6 mt-16 relative">
        <Hero proposalData={mildredProposalData} />
        <Objective proposalData={mildredProposalData} />
        <div className="space-y-24">
          <Services proposalData={mildredProposalData} />
        </div>
        <Investment proposalData={mildredProposalData} />
        <Benefits proposalData={mildredProposalData} />
      </main>
      <Footer proposalData={mildredProposalData} />
    </>
  );
}
