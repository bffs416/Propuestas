'use client';

import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Objective from '@/components/landing/objective';
import Services from '@/components/landing/services';
import Investment from '@/components/landing/investment';
import Benefits from '@/components/landing/benefits';
import Footer from '@/components/landing/footer';
import { saraProposalData } from '@/lib/proposal-data';

export default function SaraSanchezProposalPage() {
  return (
    <>
      <Header proposalData={saraProposalData} />
      <main className="max-w-6xl mx-auto px-6 mt-16 relative">
        <Hero proposalData={saraProposalData} />
        <Objective proposalData={saraProposalData} />
        <div className="space-y-24">
          <Services proposalData={saraProposalData} />
        </div>
        <Investment proposalData={saraProposalData} />
        <Benefits proposalData={saraProposalData} />
      </main>
      <Footer proposalData={saraProposalData} />
    </>
  );
}
