'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
    productUrl?: string;
    images?: string[];
    title: string;
    brandName?: string;
    brandUrl?: string;
    price: number | string;
    originalPrice?: number | string;
    discount?: string;
    rating?: number | string;
    ribbonText?: string;
    offers?: string[];
    onAddToCart?: () => void;
    onAddToWishlist?: () => void;
    onQuickView?: () => void;
    onCompare?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    productUrl = '/multikart-frontend/product/grey-sport-set',
    images = [
        'https://code.pixelstrap.net/multikart/storage/1069/Sport_32.jpg',
        'https://code.pixelstrap.net/multikart/storage/1070/Sport_33.jpg' // مثال لصورة ثانية في حال توفر مجموعة صور
    ],
    title = 'Grey Sport Set',
    brandName = 'EnduraFit',
    brandUrl = '/multikart-frontend/brand/endurafit',
    price = '₹1,045.80',
    originalPrice = '₹1,162.00',
    discount = '10% Off',
    rating = '0',
    ribbonText = 'Trending',
    offers = [
        'Limited Time Offer: 10% off',
        'Limited Time Offer: 10% off',
        'Limited Time Offer: 10% off'
    ],
    onAddToCart,
    onAddToWishlist,
    onQuickView,
    onCompare
}) => {
    // State to handle multiple images preview if needed
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const currentImage = images[currentImageIndex] ?? images[0];

    return (
        <div className="basic-product theme-product-1 bg-white border border-gray-100 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-md">
            <div className="overflow-hidden relative">

                {/* Ribbon Tag (e.g., Trending, Sale) */}
                {ribbonText && (
                    <div className="basic-product-top">
                        <span className="basic-product-top-text">
                            {ribbonText}
                        </span>
                    </div>
                )}

                {/* Image Wrapper */}
                <div className="img-wrapper relative aspect-square bg-gray-50 overflow-hidden">
                    <Link href={productUrl} className="block w-full h-full">
                        {currentImage && (
                            <Image
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="img-fluid bg-img object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                src={currentImage}
                                alt={title}
                            />
                        )}
                    </Link>
                </div>

                {/* Rating Label */}
                <div className="rating-label">
                    <svg aria-hidden="true" className="h-3.5 w-3.5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5Z" />
                    </svg>
                    <span>{rating}</span>
                </div>

                {/* Cart & Hover Action Icons Info */}
                <div className="cart-info absolute right-3 bottom-3 top-3 flex flex-col gap-2 z-20">

                    {/* Wishlist Button */}
                    <button
                        onClick={onAddToWishlist}
                        title="Add to Wishlist"
                        className="wishlist-icon w-7 h-7 bg-white text-gray-700 hover:bg-primary-500 hover:text-white rounded-full flex items-center justify-center shadow-md transition-colors"
                        aria-label="Add to Wishlist"
                    >
                        <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1 7.8 7.5 7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
                        </svg>
                    </button>

                    {/* Hover Actions List */}
                    <ul className="hover-action product-card-actions flex flex-col gap-2">

                        {/* Add to Cart */}
                        <li>
                            <button
                                onClick={onAddToCart}
                                id="add-to-cart-btn"
                                type="submit"
                                className="w-7 h-7 bg-white text-gray-700 hover:bg-primary-500 hover:text-white rounded-full flex items-center justify-center shadow-md transition-colors focus:outline-none"
                                aria-label="Add to Cart"
                            >
                                <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6" />
                                    <circle cx="10" cy="21" r="1" />
                                    <circle cx="19" cy="21" r="1" />
                                </svg>
                            </button>
                        </li>

                        {/* Quick View */}
                        <li>
                            <button
                                onClick={onQuickView}
                                title="Quick View"
                                className="w-7 h-7 bg-white text-gray-700 hover:bg-primary-500 hover:text-white rounded-full flex items-center justify-center shadow-md transition-colors"
                                aria-label="Quick View"
                            >
                                <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <circle cx="11" cy="11" r="7" />
                                    <path strokeLinecap="round" d="m20 20-4-4" />
                                </svg>
                            </button>
                        </li>

                        {/* Compare */}
                        <li>
                            <button
                                onClick={onCompare}
                                title="Compare"
                                className="w-7 h-7 bg-white text-gray-700 hover:bg-primary-500 hover:text-white rounded-full flex items-center justify-center shadow-md transition-colors"
                                aria-label="Compare"
                            >
                                <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m17 2 4 4-4 4M3 12V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4m14-2v3a3 3 0 0 1-3 3H3" />
                                </svg>
                            </button>
                        </li>

                    </ul>
                </div>

            </div>

            {/* Product Detail Section */}
            <div className="product-detail p-4 space-y-3">
                <div>

                    {/* Brand & Color Panel Header */}
                    <div className="brand-w-color flex items-center justify-between text-xs text-gray-500 mb-1">
                        {brandName && (
                            <Link href={brandUrl} className="product-title hover:text-primary-500 transition-colors font-medium">
                                {brandName}
                            </Link>
                        )}
                        <div className="color-panel">
                            {images.length > 1 && (
                                <ul className="image-swatch image flex items-center gap-[6px]">
                                    {images.map((image, index) => (
                                        <li key={`${image}-${index}`} className="list-none">
                                            <button
                                                type="button"
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`relative block h-9 w-9 overflow-hidden rounded bg-gray-100 ring-offset-1 transition ${currentImageIndex === index
                                                    ? 'ring-2 ring-primary-500'
                                                    : 'ring-1 ring-gray-200 hover:ring-gray-400'
                                                    }`}
                                                aria-label={`Show ${title} image ${index + 1}`}
                                                aria-pressed={currentImageIndex === index}
                                            >
                                                <Image
                                                    fill
                                                    sizes="36px"
                                                    src={image}
                                                    alt=""
                                                    className="object-cover"
                                                />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Product Title */}
                    <Link href={productUrl}>
                        <h6 className="font-semibold text-gray-800 text-sm hover:text-primary-500 transition-colors line-clamp-1">
                            {title}
                        </h6>
                    </Link>

                    {/* Price & Discount Section */}
                    <h4 className="price font-bold text-gray-900 text-base mt-2 flex items-center gap-2 flex-wrap">
                        <span>{price}</span>
                        {originalPrice && (
                            <del className="text-gray-400 text-xs font-normal">
                                {originalPrice}
                            </del>
                        )}

                    </h4>
                    {discount && (
                        <div className="offer-tag">
                            {discount}
                        </div>
                    )}
                </div>

                {/* Offer Panel (Dynamic list of offers if available) */}
                {offers && offers.length > 0 && (
                    <div className="offer-panel border-t border-gray-100 pt-2">
                        <div className="offer-track">
                            {[false, true].map((isDuplicate) => (
                                <ul
                                    key={isDuplicate ? 'duplicate' : 'original'}
                                    className="offer-group"
                                    aria-hidden={isDuplicate || undefined}
                                >
                                    {offers.map((offer, index) => (
                                        <li key={`${index}-${offer}`}>
                                            <span className="offer-icon">
                                                <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1 0-2.8l7.2-7.2a2 2 0 0 1 1.4-.6H19a2 2 0 0 1 2 2v7a2 2 0 0 1-.4 1.6Z" />
                                                    <circle cx="16.5" cy="7.5" r="1" />
                                                    <path strokeLinecap="round" d="m9 15 6-6" />
                                                </svg>
                                            </span>
                                            <span>{offer}</span>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};