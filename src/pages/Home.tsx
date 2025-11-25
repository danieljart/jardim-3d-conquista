import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import VideoSection from '@/components/VideoSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesOverview />
      <VideoSection />
      <Contact />
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Home;
