import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import ServicesOverview from '@/components/ServicesOverview';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <VideoSection />
      <ServicesOverview />
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Home;
