'use client';

import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Objective from '@/components/landing/objective';
import Services from '@/components/landing/services';
import Investment from '@/components/landing/investment';
import Benefits from '@/components/landing/benefits';
import Footer from '@/components/landing/footer';
import { mercyProposalData } from '@/lib/proposal-data';

export default function MercyQuezadaProposalPage() {
  return (
    <>
      <Header proposalData={mercyProposalData} />
      <main className="max-w-6xl mx-auto px-6 mt-16 relative">
        <Hero proposalData={mercyProposalData} />
        <Objective proposalData={mercyProposalData} />
        <div className="space-y-24">
          <Services proposalData={mercyProposalData} />
        </div>
        <Investment proposalData={mercyProposalData} />
        <Benefits proposalData={mercyProposalData} />
      </main>
      <Footer proposalData={mercyProposalData} />
    </>
  );
}
