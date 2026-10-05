'use client';

import React, { useState } from 'react';
import { Dropdown, DropdownOption } from '@/ui/Dropdown';

export const TopNavbar: React.FC = () => {
    const [currency, setCurrency] = useState('INR');
    const [language, setLanguage] = useState('en');

    // Currency options list
    const currencyOptions: DropdownOption[] = [
        { label: 'USD', value: 'USD' },
        { label: 'INR', value: 'INR' },
        { label: 'GBP', value: 'GBP' },
        { label: 'EUR', value: 'EUR' },
    ];

    // Language options with SVG icons
    const languageOptions: DropdownOption[] = [
        {
            label: 'English',
            value: 'en',
            icon: (
                <svg aria-hidden="true" className="w-5 h-4 rounded-sm object-cover" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#bd3d44" d="M0 0h640v480H0z" />
                    <path stroke="#fff" strokeWidth="37" d="M0 55h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" />
                    <path fill="#192f5d" d="M0 0h256v259H0z" />
                </svg>
            ),
        },
        {
            label: 'Français',
            value: 'fr',
            icon: (
                <svg aria-hidden="true" className="w-5 h-4 rounded-sm object-cover" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ED2939" d="M0 0h900v600H0z" />
                    <path fill="#fff" d="M0 0h600v600H0z" />
                    <path fill="#002395" d="M0 0h300v600H0z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="top-navbar text-gray-200 text-xs py-2.5 border-b border-gray-800 bg-gray-900">
            {/* Container wrapper with professional horizontal padding */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Grid layout for structured alignment on sides */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">

                    {/* Left Column: Contact / Info */}
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
                        <span className="text-primary-500 p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="bi bi-telephone-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                        </span>
                        <span className="font-medium">Call Us: 123 - 456 - 7890</span>
                    </div>

                    {/* Right Column: Currency & Language Dropdowns */}
                    <div className="flex items-center justify-center md:justify-end gap-3">
                        {/* Currency Dropdown List Item */}
                        <li className="list-none right-nav-list">
                            <div className="dropdown theme-form-select select-arrow">
                                <Dropdown
                                    options={currencyOptions}
                                    selectedValue={currency}
                                    onSelect={(option) => setCurrency(option.value)}
                                />
                            </div>
                        </li>

                        {/* Language Dropdown List Item */}
                        <li className="list-none right-nav-list">
                            <div className="dropdown theme-form-select select-arrow">
                                <Dropdown
                                    options={languageOptions}
                                    selectedValue={language}
                                    onSelect={(option) => setLanguage(option.value)}
                                />
                            </div>
                        </li>
                    </div>

                </div>
            </div>
        </div>
    );
};