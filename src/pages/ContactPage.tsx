import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import FloatingButton from '@/components/FloatingButton';

const ContactPage = () => {
    return (
        <div className="h-screen w-screen bg-black overflow-hidden flex flex-col selection:bg-primary/30 font-sans">
            <Navbar />
            <main className="flex-1 w-full overflow-y-auto scroll-smooth snap-y snap-mandatory relative z-10 no-scrollbar">
                <Contact />
            </main>
            <FloatingButton />
        </div>
    );
};

export default ContactPage;
