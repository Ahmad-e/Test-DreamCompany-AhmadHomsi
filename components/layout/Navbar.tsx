'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
interface NavbarProps {
    onOpenCart?: () => void;
    onOpenSearch?: () => void;
    cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, onOpenSearch, cartCount = 3 }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (!isMobileMenuOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsMobileMenuOpen(false);
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMobileMenuOpen]);

    return (
        <header className="metro bg-white   sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Left Section: Mobile Toggle & Brand Logo */}
                    <div className="menu-left flex items-center gap-4">
                        {/* Toggle Sidebar Navigation for Mobile/Tablet */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="toggle-nav lg:hidden text-gray-700 hover:text-primary-500 focus:outline-none"
                            aria-label="Toggle Navigation Menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-navigation-drawer"
                        >
                            <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Brand Logo */}
                        <div className="brand-logo">
                            <Link href="/multikart-frontend">
                                <div className="relative w-32 h-10">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Site Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Middle Section: Desktop Menu */}
                    <div className="menu-right hidden lg:flex items-center">
                        <nav className="main-navbar">
                            <ul className="navbar-nav flex items-center gap-8">

                                {/* Home Link */}
                                <li className="nav-item">
                                    <Link href="/" className="dropdown-item text-gray-800 hover:text-primary-500 font-medium text-sm transition-colors cursor-pointer">
                                        Home
                                    </Link>
                                </li>

                                {/* Collection Mega Menu */}
                                <li className="nav-item dropdown dropdown-mega relative group">
                                    <span className="nav-link dropdown-toggle text-gray-800 hover:text-primary-500 font-medium text-sm transition-colors cursor-pointer flex items-center gap-1">
                                        Collection
                                    </span>
                                </li>

                                {/* Product Mega Menu */}
                                <li className="nav-item dropdown dropdown-mega relative group">
                                    <span className="nav-link dropdown-toggle text-gray-800 hover:text-primary-500 font-medium text-sm transition-colors cursor-pointer flex items-center gap-1">
                                        Product
                                    </span>
                                </li>

                                {/* Mega Menu Link */}
                                <li className="nav-item dropdown dropdown-mega relative group">
                                    <span className="nav-link dropdown-toggle text-gray-800 hover:text-primary-500 font-medium text-sm transition-colors cursor-pointer flex items-center gap-1">
                                        Mega Menu
                                    </span>
                                </li>

                                {/* Blogs Link */}
                                <li className="nav-item dropdown dropdown-mega relative group">
                                    <span className="nav-link dropdown-toggle text-gray-800 hover:text-primary-500 font-medium text-sm transition-colors cursor-pointer flex items-center gap-1">
                                        Blogs
                                    </span>
                                </li>

                                {/* Pages Dropdown */}
                                <li className="nav-item dropdown relative group">
                                    <span className="nav-link dropdown-toggle text-gray-800 hover:text-primary-500 font-medium text-sm transition-colors cursor-pointer flex items-center gap-1">
                                        Pages
                                    </span>
                                </li>

                            </ul>
                        </nav>
                        <div className="icon-nav mx-3">
                            <ul className="flex items-center gap-4 text-gray-700">

                                {/* Search Icon Trigger */}
                                <li className="onhover-div cursor-pointer  transition-colors">
                                    <button onClick={onOpenSearch} aria-label="Search" className="focus:outline-none">
                                        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <circle cx="11" cy="11" r="7" />
                                            <path strokeLinecap="round" d="m20 20-4-4" />
                                        </svg>
                                    </button>
                                </li>

                                {/* Wishlist Icon */}
                                <li className="onhover-div cursor-pointer  transition-colors">
                                    <Link href="/multikart-frontend/wishlist" aria-label="Wishlist">
                                        <svg
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                            />
                                        </svg>
                                    </Link>
                                </li>

                                {/* Cart Icon & Side Trigger */}
                                <li className="onhover-div relative cursor-pointer  transition-colors">
                                    <button onClick={onOpenCart} aria-label="Shopping Cart" className="focus:outline-none flex items-center">
                                        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6" />
                                            <circle cx="10" cy="21" r="1" />
                                            <circle cx="19" cy="21" r="1" />
                                        </svg>
                                        {cartCount > 0 && (
                                            <span className="cart_qty_cls absolute -top-2 -right-2 bg-primary-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                                {cartCount}
                                            </span>
                                        )}
                                    </button>
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* Right Section: Icons Navigation (Search, Wishlist, Cart) */}


                </div>
            </div>

            {/* Mobile Navigation Drawer / Menu */}
            {isMobileMenuOpen && (
                <div className="mobile-menu-overlay fixed inset-0 z-[60] lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
                    <button
                        type="button"
                        className="mobile-menu-backdrop absolute inset-0 bg-black/40"
                        aria-label="Close navigation menu"
                    />
                    <aside
                        id="mobile-navigation-drawer"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile navigation"
                        className="mobile-menu-drawer absolute inset-y-0 left-0 flex w-[min(85vw,360px)] flex-col bg-white shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5">
                            <span className="text-base font-semibold text-gray-900">Menu</span>
                            <button
                                type="button"
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Close navigation menu"
                                className="grid h-9 w-9 place-items-center rounded text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                            >
                                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
                                </svg>
                            </button>
                        </div>
                        <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile navigation links">
                            <ul className="space-y-1">
                                <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block rounded px-3 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 hover:text-primary-600">Home</Link></li>
                                <li><Link href="/multikart-frontend/collections" onClick={() => setIsMobileMenuOpen(false)} className="block rounded px-3 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 hover:text-primary-600">Collection</Link></li>
                                <li><Link href="/multikart-frontend/products" onClick={() => setIsMobileMenuOpen(false)} className="block rounded px-3 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 hover:text-primary-600">Product</Link></li>
                                <li><Link href="/multikart-frontend/blogs" onClick={() => setIsMobileMenuOpen(false)} className="block rounded px-3 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 hover:text-primary-600">Blogs</Link></li>
                                <li><Link href="/multikart-frontend/pages" onClick={() => setIsMobileMenuOpen(false)} className="block rounded px-3 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 hover:text-primary-600">Pages</Link></li>
                            </ul>
                        </nav>
                    </aside>
                </div>
            )}
        </header>
    );
};