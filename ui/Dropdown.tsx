'use client';

import React, { useState, useRef, useEffect } from 'react';

export interface DropdownOption {
    label: string;
    value: string;
    icon?: React.ReactNode;
}

interface DropdownProps {
    options: DropdownOption[];
    selectedValue: string;
    onSelect: (option: DropdownOption) => void;
    className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
    options,
    selectedValue,
    onSelect,
    className = '',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find((opt) => opt.value === selectedValue) || options[0];

    return (
        <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
            {/* Dropdown Toggle Button */}
            <div>
                <button
                    type="button"
                    id="open_dropdown_standard_btn"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-between p-0  font-medium focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all shadow-sm"
                    aria-expanded={isOpen}
                >
                    <div className="flex items-center gap-2">
                        {selectedOption?.icon}
                        <span>{selectedOption?.label}</span>
                    </div>
                    {/* Arrow Icon */}
                    <svg
                        className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {/* Dropdown Menu Items */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-36 origin-top-right bg-white ring-1  ring-opacity-5 focus:outline-none z-50 animate-in fade-in zoom-in-95 duration-150">
                    <ul className="py-1">
                        {options.map((option) => {
                            const isActive = option.value === selectedValue;
                            return (
                                <li key={option.value}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            onSelect(option);
                                            setIsOpen(false);
                                        }}
                                        className={`flex w-full items-center gap-2 text-left px-4 py-2 text-sm transition-colors ${isActive
                                            ? 'bg-primary-600 text-primary-50 font-semibold active'
                                            : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        {option.icon}
                                        {option.label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};