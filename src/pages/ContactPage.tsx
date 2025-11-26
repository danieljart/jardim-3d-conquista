import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import FloatingButton from '@/components/FloatingButton';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-[#121212]">
            <Navbar />
            <main className="pt-24">
                <Contact />
            </main>
            <Footer />
            <FloatingButton />
        </div>
    );
};

export default ContactPage;
