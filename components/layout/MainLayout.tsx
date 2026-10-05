'use client';

import React, { useState } from 'react';
import { TopNavbar } from './TopNavbar';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { TapTop } from '@/components/layout/TapTop';
// import { Cart } from '@/ui/Cart';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems] = useState([
        { id: '1', name: 'Premium Gym Coords Set', price: 89.99, quantity: 1, image: '' }
    ]);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Top Announcement Bar */}
            <TopNavbar />

            {/* Main Sticky Navbar */}
            <Navbar
                onOpenCart={() => setIsCartOpen(true)}
                cartCount={cartItems.length}
            />

            {/* Dynamic Page Content Wrapper */}
            <main className="flex-1">
                {children}
            </main>

            {/* Global Footer */}
            <Footer />
            <TapTop />
            {/* Global Cart Drawer */}

        </div>
    );
};