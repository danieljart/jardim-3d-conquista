
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import ServicesOverview from '@/components/ServicesOverview';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';

const Index = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add parallax effect to sections
    const handleScroll = (e: any) => {
      const scrollY = e.target.scrollTop;
      document.documentElement.style.setProperty('--parallax-y', `${scrollY * 0.1}px`);
    };
    
    // Target the scrollable container instead of window
    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="h-screen w-screen bg-black overflow-hidden flex flex-col">
      <Navbar />
      
      {/* Background neutral glows like SobrePage - Fixed position behind all content */}
      <div className="fixed top-0 left-0 w-full h-full opacity-40 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-white/5 rounded-none blur-[150px]"></div>
        <div className="absolute top-[40%] right-[-10%] w-[800px] h-[800px] bg-neutral-900/10 rounded-none blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-white/5 rounded-none blur-[120px]"></div>
      </div>
      
      {/* Main Snappable Scroll Container */}
      <div 
        ref={containerRef}
        id="main-scroll-container"
        className="flex-1 w-full overflow-y-auto scroll-smooth snap-y snap-mandatory relative z-10"
      >
        <section className="snap-start h-screen w-full flex flex-col items-stretch relative overflow-hidden">
          <Hero />
        </section>
        
        {/* Portfolio component already contains multiple snap-start sections */}
        <Portfolio containerRef={containerRef} />
        
        <ServicesOverview />
        <Pricing />
        
        <section className="snap-start w-full bg-background">
          <Footer />
        </section>
      </div>

    </div>
  );
};

export default Index;
