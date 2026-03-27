import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import ServicesOverview from '@/components/ServicesOverview';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';

const Home = () => {
  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      <Navbar />
      <Hero />
      <Portfolio />
      <ServicesOverview />
      <Pricing />
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Home;
