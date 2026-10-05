import React from 'react';

export default function ProductLoading() {
    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 animate-pulse">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="aspect-square bg-gray-200 rounded-2xl" />
                <div className="space-y-6 py-6">
                    <div className="h-6 bg-gray-200 rounded w-1/4" />
                    <div className="h-10 bg-gray-200 rounded w-3/4" />
                    <div className="h-6 bg-gray-200 rounded w-1/3" />
                    <div className="h-24 bg-gray-200 rounded w-full" />
                    <div className="h-12 bg-gray-200 rounded w-full" />
                </div>
            </div>
        </div>
    );
}