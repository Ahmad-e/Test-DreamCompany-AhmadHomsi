import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
    title: string;
    desc?: string;
    breadcrumbItems?: Array<{
        label: string;
        href?: string;
    }>;
}

export const BreadcrumbHeader: React.FC<BreadcrumbProps> = ({
    title,
    desc,
    breadcrumbItems = [
        { label: 'Home', href: '/multikart-frontend/' },
        { label: 'Product' },
        { label: title }
    ]
}) => {
    return (
        <div className="breadcrumb-section bg-gray-50 py-8 border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center   justify-center gap-2">

                    {/* Page Main Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
                        {title}
                    </h2>

                    {/* Optional Description */}
                    {desc && (
                        <p className="text-sm text-gray-500 max-w-xl text-center md:text-left">
                            {desc}
                        </p>
                    )}

                    {/* Breadcrumb Navigation */}
                    <nav aria-label="breadcrumb" className="theme-breadcrumb mt-1">
                        <ol className="breadcrumb flex items-center flex-wrap gap-2 text-sm text-gray-500">
                            {breadcrumbItems.map((item, index) => {
                                const isLast = index === breadcrumbItems.length - 1;

                                return (
                                    <React.Fragment key={index}>
                                        {index > 0 && <span className="text-gray-400">/</span>}
                                        <li className={`breadcrumb-item ${isLast ? 'active font-medium text-gray-800' : 'hover:text-primary-500 transition-colors'}`}>
                                            {item.href && !isLast ? (
                                                <Link href={item.href}>
                                                    {item.label}
                                                </Link>
                                            ) : (
                                                <span>{item.label}</span>
                                            )}
                                        </li>
                                    </React.Fragment>
                                );
                            })}
                        </ol>
                    </nav>

                </div>
            </div>
        </div>
    );
};