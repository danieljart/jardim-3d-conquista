import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import FloatingButton from '@/components/FloatingButton';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-transparent relative overflow-hidden flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16 md:pt-20 relative z-10 flex flex-col">
                <Contact />
            </main>
            <Footer />
            <FloatingButton />
        </div>
    );
};

export default ContactPage;
