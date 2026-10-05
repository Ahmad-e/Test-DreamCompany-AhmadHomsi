
'use client';

import React, { useState, useEffect } from 'react';

export function TapTop() {
    const [isVisible, setIsVisible] = useState(false);

    // مراقبة حركة التمرير (Scroll) لإظهار أو إخفاء الزر
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // دالة الصعود بسلاسة إلى أعلى الصفحة
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) {
        return null; // لا يتم عرض الزر إذا كان المستخدم في أعلى الصفحة
    }

    return (
        <button
            type="button"
            aria-label="Scroll to top"
            className="tap-top bg-primary-500 fixed bottom-6 right-6   shadow-lg"
            onClick={scrollToTop}
            style={{
                zIndex: 999,
            }}
        >
            <div className="flex items-center justify-center w-full h-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-chevron-double-up"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                >
                    <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z" />
                    <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                </svg>
            </div>
        </button>
    );
}