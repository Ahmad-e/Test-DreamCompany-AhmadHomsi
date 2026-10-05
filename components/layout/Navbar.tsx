'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
interface NavbarProps {
    onOpenCart?: () => void;
    onOpenSearch?: () => void;
    cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, onOpenSearch, cartCount = 3 }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                <div className="lg:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-3 shadow-lg">
                    <div className="container mx-auto space-y-3">
                        <Link href="/" className="block text-gray-800 font-medium py-1 hover:text-primary-500">Home</Link>
                        <Link href="/multikart-frontend/collections" className="block text-gray-800 font-medium py-1 hover:text-primary-500">Collection</Link>
                        <Link href="/multikart-frontend/products" className="block text-gray-800 font-medium py-1 hover:text-primary-500">Product</Link>
                        <Link href="/multikart-frontend/blogs" className="block text-gray-800 font-medium py-1 hover:text-primary-500">Blogs</Link>
                        <Link href="/multikart-frontend/pages" className="block text-gray-800 font-medium py-1 hover:text-primary-500">Pages</Link>
                    </div>
                </div>
            )}
        </header>
    );
};