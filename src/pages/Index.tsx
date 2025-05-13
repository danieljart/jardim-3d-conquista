
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import VideoSection from '@/components/VideoSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';

const Index = () => {
  useEffect(() => {
    // Add parallax effect to sections
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--parallax-y', `${scrollY * 0.1}px`);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <VideoSection />
      <Testimonials />
      <About />
      <Pricing />
      <Contact />
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
