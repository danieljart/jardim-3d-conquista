import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import { BeamsBackground } from '@/components/ui/beams-background';

const Home = () => {
  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      <Navbar />
      <Hero />
      <ServicesOverview />
      <Pricing />
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Home;
