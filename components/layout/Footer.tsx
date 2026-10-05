import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/ui/Button';

export const Footer: React.FC = () => {
    return (
        <footer className="footer-style-1 bg-[#212121] text-gray-300">
            {/* Main Footer Section */}
            <section className="py-16 border-b border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

                        {/* Column 1: Logo, About, and Contact Info */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Footer Logo */}
                            <div className="footer-logo">
                                <Link href="/multikart-frontend">
                                    <Image
                                        src="https://code.pixelstrap.net/multikart/storage/3950/f6.png"
                                        alt="logo"
                                        width={120}
                                        height={40}
                                        className="img-fluid"
                                    />
                                </Link>
                            </div>

                            {/* Footer About */}
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Discover the latest trends and enjoy seamless shopping with our exclusive collections.
                            </p>

                            {/* Footer Contact List */}
                            <ul className="contact-list space-y-3 text-sm text-gray-400">
                                <li className="flex items-start gap-2">
                                    <svg aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                                        <circle cx="12" cy="10" r="2.5" />
                                    </svg>
                                    <span>Multikart Demo Store, Demo Store India 345-659</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg aria-hidden="true" className="h-4 w-4 shrink-0 text-primary-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.5v3a1.5 1.5 0 0 1-1.64 1.5A18.5 18.5 0 0 1 3 5.64 1.5 1.5 0 0 1 4.5 4h3a1.5 1.5 0 0 1 1.5 1.29l.45 2.7a1.5 1.5 0 0 1-.43 1.3l-1.27 1.27a15 15 0 0 0 5.69 5.69l1.27-1.27a1.5 1.5 0 0 1 1.3-.43l2.7.45A1.5 1.5 0 0 1 21 16.5Z" />
                                    </svg>
                                    <span>Call Us: 123-456-7898</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg aria-hidden="true" className="h-4 w-4 shrink-0 text-primary-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                        <rect x="3" y="5" width="18" height="14" rx="2" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
                                    </svg>
                                    <span>Email Us: Support@Multikart.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: Categories */}
                        <div className="space-y-4">
                            <div className="footer-title">
                                <h4 className="text-white font-bold text-base tracking-wide">Categories</h4>
                            </div>
                            <ul className="space-y-2.5 text-sm">
                                <li><Link href="/multikart-frontend/collections?category=baby-essentials" className="text-gray-400 hover:text-primary-500 transition-colors">Baby Essentials</Link></li>
                                <li><Link href="/multikart-frontend/collections?category=bag-emporium" className="text-gray-400 hover:text-primary-500 transition-colors">Bag Emporium</Link></li>
                                <li><Link href="/multikart-frontend/collections?category=books" className="text-gray-400 hover:text-primary-500 transition-colors">Books</Link></li>
                                <li><Link href="/multikart-frontend/collections?category=christmas" className="text-gray-400 hover:text-primary-500 transition-colors">Christmas</Link></li>
                                <li><Link href="/multikart-frontend/collections?category=classic-furnishings" className="text-gray-400 hover:text-primary-500 transition-colors">Classic Furnishings</Link></li>
                                <li><Link href="/multikart-frontend/collections?category=crystal-clarity-optics" className="text-gray-400 hover:text-primary-500 transition-colors">Crystal Clarity Optics</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Useful Links */}
                        <div className="space-y-4">
                            <div className="footer-title">
                                <h4 className="text-white font-bold text-base tracking-wide">Useful Links</h4>
                            </div>
                            <ul className="space-y-2.5 text-sm">
                                <li><Link href="/multikart-frontend/" className="text-gray-400 hover:text-primary-500 transition-colors">Home</Link></li>
                                <li><Link href="/multikart-frontend/collections" className="text-gray-400 hover:text-primary-500 transition-colors">Collections</Link></li>
                                <li><Link href="/multikart-frontend/about-us" className="text-gray-400 hover:text-primary-500 transition-colors">About Us</Link></li>
                                <li><Link href="/multikart-frontend/blogs" className="text-gray-400 hover:text-primary-500 transition-colors">Blogs</Link></li>
                                <li><Link href="/multikart-frontend/offers" className="text-gray-400 hover:text-primary-500 transition-colors">Offers</Link></li>
                                <li><Link href="/multikart-frontend/search" className="text-gray-400 hover:text-primary-500 transition-colors">Search</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Help Center */}
                        <div className="space-y-4">
                            <div className="footer-title">
                                <h4 className="text-white font-bold text-base tracking-wide">Help Center</h4>
                            </div>
                            <ul className="space-y-2.5 text-sm">
                                <li><Link href="/multikart-frontend/account/dashboard" className="text-gray-400 hover:text-primary-500 transition-colors">My Account</Link></li>
                                <li><Link href="/multikart-frontend/account/order" className="text-gray-400 hover:text-primary-500 transition-colors">My Orders</Link></li>
                                <li><Link href="/multikart-frontend/wishlist" className="text-gray-400 hover:text-primary-500 transition-colors">Wishlist</Link></li>
                                <li><Link href="/multikart-frontend/faq" className="text-gray-400 hover:text-primary-500 transition-colors">Faq's</Link></li>
                                <li><Link href="/multikart-frontend/contact-us" className="text-gray-400 hover:text-primary-500 transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Column 5: Follow Us & Newsletter */}
                        <div className="lg:col-span-1 space-y-4">
                            <div className="footer-title">
                                <h4 className="text-white font-bold text-base tracking-wide">Follow Us</h4>
                            </div>
                            <p className="text-sm text-gray-400">
                                Never Miss Anything From Store By Signing Up To Our Newsletter.
                            </p>

                            {/* Newsletter Form */}
                            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                                <div className="form-group">
                                    <input
                                        type="email"
                                        placeholder="Enter Email Address"
                                        className="w-full bg-amber-50 px-4 py-2.5  text-gray-900  focus:outline-none   transition-colors"
                                    />
                                </div>
                                <Button variant="primary" size="md" className="w-full">
                                    Subscribe
                                </Button>
                            </form>

                            {/* Social Links */}
                            <div className="footer-social pt-2">
                                <ul className="flex items-center gap-3">
                                    <li>
                                        <a target="_blank" rel="noreferrer" href="https://facebook.com/" aria-label="Facebook" className="w-7 h-7 bg-[#1a1a1a] hover:text-primary-500 flex items-center justify-center text-gray-300   transition-colors">
                                            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H7.4v3h2.7v8h3.4Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noreferrer" href="https://twitter.com/" aria-label="Twitter" className="w-7 h-7 bg-[#1a1a1a] hover:text-primary-500 flex items-center justify-center text-gray-300   transition-colors">
                                            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M22 5.9a8 8 0 0 1-2.36.65 4.1 4.1 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6.99 4.08 4.08 0 0 0-6.95 3.72A11.58 11.58 0 0 1 3.48 4.73a4.08 4.08 0 0 0 1.26 5.45 4 4 0 0 1-1.85-.51v.05a4.08 4.08 0 0 0 3.27 4 4.1 4.1 0 0 1-1.84.07 4.09 4.09 0 0 0 3.81 2.83A8.2 8.2 0 0 1 2 18.32a11.55 11.55 0 0 0 6.26 1.84c7.51 0 11.62-6.22 11.62-11.62l-.01-.53A8.3 8.3 0 0 0 22 5.9Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noreferrer" href="https://instagram.com/" aria-label="Instagram" className="w-7 h-7 bg-[#1a1a1a] hover:text-primary-500 flex items-center justify-center text-gray-300   transition-colors">
                                            <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                                <rect x="3" y="3" width="18" height="18" rx="5" />
                                                <circle cx="12" cy="12" r="4" />
                                                <circle cx="18" cy="6" r=".8" fill="currentColor" stroke="none" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noreferrer" href="https://pinterest.com/" aria-label="Pinterest" className="w-7 h-7 bg-[#1a1a1a] hover:text-primary-500 flex items-center justify-center text-gray-300   transition-colors">
                                            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2a10 10 0 0 0-3.64 19.31c-.09-.83-.17-2.1.04-3l1.3-5.5s-.33-.66-.33-1.63c0-1.53.89-2.67 2-2.67.94 0 1.39.7 1.39 1.54 0 .94-.6 2.35-.9 3.66-.25 1.1.55 1.99 1.63 1.99 1.95 0 3.45-2.06 3.45-5.04 0-2.64-1.9-4.48-4.6-4.48-3.13 0-4.97 2.35-4.97 4.78 0 .95.36 1.98.8 2.54a.32.32 0 0 1 .07.3l-.3 1.22c-.05.2-.16.24-.37.15-1.37-.64-2.23-2.64-2.23-4.25 0-3.46 2.51-6.64 7.25-6.64 3.81 0 6.77 2.72 6.77 6.36 0 3.8-2.4 6.85-5.73 6.85-1.12 0-2.18-.58-2.55-1.27l-.69 2.62c-.25.96-.93 2.16-1.38 2.89A10 10 0 1 0 12 2Z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Sub Footer / Copyright & Payment Options */}
            <div className="py-6 border-t border-gray-800/60 bg-[#1a1a1a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">

                    {/* Copyright text */}
                    <div className="footer-end text-xs text-gray-400">
                        <p className="flex items-center gap-1">
                            <span>©</span> {new Date().getFullYear()} themeforest powered by pixelstrap
                        </p>
                    </div>

                    {/* Payment Card Options */}
                    <div className="payment-card-bottom">
                        <Image
                            src="https://code.pixelstrap.net/multikart/storage/3835/payments.png"
                            alt="payment options"
                            width={250}
                            height={24}
                            className="img-fluid"
                        />
                    </div>

                </div>
            </div>
        </footer>
    );
};